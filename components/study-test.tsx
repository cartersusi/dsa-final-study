"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle } from "lucide-react"
import { testData } from "@/data/test-data"

// Define types for our data structure
type Choice = string
type Question = {
  question: string
  code: string | null
  choices: Choice[]
  answer: string
  chapterNumber: number
  chapterName: string
  randomizedChoices?: {choice: string, isAnswer: boolean}[]
}

type Chapter = {
  chapter: number
  chapter_name: string
  quiz: Question[]
}

// Fisher-Yates (Knuth) shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function StudyTest() {
  // State for randomized questions
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  // Initialize with randomized questions and choices
  useEffect(() => {
    // Flatten all questions from all chapters into a single array
    const allQuestions = testData.flatMap((chapter) =>
      chapter.quiz.map((question) => ({
        ...question,
        chapterNumber: chapter.chapter,
        chapterName: chapter.chapter_name,
      }))
    )
    
    // Randomize the questions
    const shuffledQuestions = shuffleArray(allQuestions)
    
    // Randomize the choices for each question
    const questionsWithRandomizedChoices = shuffledQuestions.map(question => {
      // Create array of choice objects with answer flag
      const choiceObjects = question.choices.map(choice => ({
        choice,
        isAnswer: choice === question.answer
      }))
      
      // Shuffle the choices
      const randomizedChoices = shuffleArray(choiceObjects)
      
      return {
        ...question,
        randomizedChoices
      }
    })
    
    setRandomizedQuestions(questionsWithRandomizedChoices)
  }, [])

  const handleRestart = () => {
    // Re-randomize questions and choices on restart
    const allQuestions = testData.flatMap((chapter) =>
      chapter.quiz.map((question) => ({
        ...question,
        chapterNumber: chapter.chapter,
        chapterName: chapter.chapter_name,
      }))
    )
    
    const shuffledQuestions = shuffleArray(allQuestions)
    
    const questionsWithRandomizedChoices = shuffledQuestions.map(question => {
      const choiceObjects = question.choices.map(choice => ({
        choice,
        isAnswer: choice === question.answer
      }))
      
      const randomizedChoices = shuffleArray(choiceObjects)
      
      return {
        ...question,
        randomizedChoices
      }
    })
    
    setRandomizedQuestions(questionsWithRandomizedChoices)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
    setIsCompleted(false)
  }

  // Handle case when questions aren't loaded yet
  if (randomizedQuestions.length === 0) {
    return <div className="flex justify-center items-center h-64">Loading questions...</div>
  }

  const currentQuestion = randomizedQuestions[currentQuestionIndex]
  const totalQuestions = randomizedQuestions.length
  const progress = ((currentQuestionIndex + (isAnswered && !isCompleted ? 1 : 0)) / totalQuestions) * 100

  const handleAnswerSelect = (choice: string, isAnswer: boolean) => {
    if (isAnswered) return

    setSelectedAnswer(choice)
    setIsAnswered(true)

    if (isAnswer) {
      setScore((prevScore) => prevScore + 1)
    }

    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
        setSelectedAnswer(null)
        setIsAnswered(false)
      } else {
        setIsCompleted(true)
      }
    }, 1500)
  }

  return (
    <div className="max-w-3xl mx-auto">
      {!isCompleted ? (
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
              <span className="text-sm font-medium">
                Score: {score}/{isAnswered ? currentQuestionIndex + 1 : currentQuestionIndex}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="mt-3 mb-2 text-sm text-muted-foreground">
              <span className="font-medium">Chapter {currentQuestion.chapterNumber}:</span>{" "}
              {currentQuestion.chapterName}
            </div>
            <CardTitle className="mt-4 text-xl">{currentQuestion.question}</CardTitle>
            {currentQuestion.code && (
              <pre className="mt-4 text-m p-4 bg-muted rounded-md overflow-x-auto">{currentQuestion.code}</pre>
            )}
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedAnswer || ""} className="space-y-3">
              {currentQuestion.randomizedChoices?.map((choiceObj, index) => {
                const isCorrect = choiceObj.isAnswer
                const isSelected = choiceObj.choice === selectedAnswer

                let className = "flex items-center space-x-2 rounded-md border p-4 cursor-pointer"

                if (isAnswered) {
                  if (isCorrect) {
                    className += " border-green-500 bg-green-50 dark:bg-green-950/20"
                  } else if (isSelected) {
                    className += " border-red-500 bg-red-50 dark:bg-red-950/20"
                  }
                } else {
                  className += " hover:bg-muted"
                }

                return (
                  <div 
                    key={index} 
                    className={className} 
                    onClick={() => handleAnswerSelect(choiceObj.choice, choiceObj.isAnswer)}
                  >
                    <RadioGroupItem 
                      value={choiceObj.choice} 
                      id={`choice-${index}`} 
                      disabled={isAnswered} 
                      className="sr-only" 
                    />
                    <Label htmlFor={`choice-${index}`} className="flex-1 cursor-pointer font-normal">
                      {choiceObj.choice}
                    </Label>
                    {isAnswered &&
                      (isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : isSelected ? (
                        <XCircle className="h-5 w-5 text-red-500" />
                      ) : null)}
                  </div>
                )
              })}
            </RadioGroup>
          </CardContent>
          <CardFooter>
            <Button onClick={handleRestart} variant="outline" className="w-full">
              Restart Test
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Test Completed!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-5xl font-bold mb-4">
              {score}/{totalQuestions}
            </div>
            <p className="text-xl mb-2">Your Score: {((score / totalQuestions) * 100).toFixed(1)}%</p>
            <p className="text-muted-foreground">
              {score === totalQuestions
                ? "Perfect score! Excellent work!"
                : score >= totalQuestions * 0.8
                  ? "Great job! You're well prepared."
                  : score >= totalQuestions * 0.6
                    ? "Good effort! Keep studying the topics you missed."
                    : "Keep practicing! Review the material and try again."}
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={handleRestart} className="w-full">
              Restart Test
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}