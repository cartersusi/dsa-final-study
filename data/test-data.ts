export const testData = [
  {
    chapter: 1,
    chapter_name: "General Overview",
    quiz: [
      {
        question: "Which of the following STL containers provides fast access to elements by index?",
        code: null,
        choices: ["list", "vector", "deque", "set"],
        answer: "vector",
      },
      {
        question: "Which of the following is an advantage of using a hash table for data storage?",
        code: null,
        choices: [
          "It allows for sorted data storage",
          "It provides O(1) average time complexity for lookups",
          "It uses more memory than binary trees",
          "It automatically resizes based on input size",
        ],
        answer: "It provides O(1) average time complexity for lookups",
      },
      {
        question: "Why does a recursive function in C++ need a base case?",
        code: null,
        choices: [
          "To ensure the recursion will return a value",
          "To optimize memory usage",
          "To prevent infinite recursion and stack overflow",
          "To improve the function's performance",
        ],
        answer: "To prevent infinite recursion and stack overflow",
      },
      {
        question: "Which of the following sorting algorithms is not comparison-based?",
        code: null,
        choices: ["Quick Sort", "Merge Sort", "Heap Sort", "Radix Sort"],
        answer: "Radix Sort",
      },
      {
        question: "Which of the following is the time complexity of binary search?",
        code: null,
        choices: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
        answer: "O(log n)",
      },
    ],
  },
  {
    chapter: 3,
    chapter_name: "Recursion",
    quiz: [
      {
        question: "Why is recursion sometimes preferred over iteration in C++?",
        code: null,
        choices: [
          "Recursion uses less memory",
          "Recursion simplifies code for problems like tree traversal",
          "Recursion avoids function calls",
          "Recursion always executes faster than loops"
        ],
        answer: "Recursion simplifies code for problems like tree traversal"
      },
      {
        question: "Which of the following is the correct recursive function to calculate the factorial of a number in C++?",
        code: null,
        choices: [
          "int factorial(int n) { return n * factorial(n-1); }",
          "int factorial(int n) { if (n == 1) return 1; else return n * factorial(n-1); }",
          "int factorial(int n) { return 1 * factorial(n-1); }",
          "int factorial(int n) { if (n == 0) return 1; else return n * factorial(n); }"
        ],
        answer: "int factorial(int n) { if (n == 1) return 1; else return n * factorial(n-1); }"
      },
      {
        question: "Which of the following is a disadvantage of recursion in C++?",
        code: null,
        choices: [
          "Recursion always leads to faster execution",
          "Recursion requires more memory due to function calls",
          "Recursion works only with arrays",
          "Recursion eliminates the need for loops"
        ],
        answer: "Recursion requires more memory due to function calls"
      },
      {
        question: "Which output does the following recursive function produce?",
        code: `void func(int n) {
  if (n > 0) {
      func(n - 1);
      cout << n << " ";
  }
}

int main() {
    func(3);
    return 0;
}`,
        choices: [
          "1 2 3",
          "3 2 1",
          "1 2 3 4",
          "4 3 2 1"
        ],
        answer: "1 2 3"
      },
      {
        question: "Why does the following code lead to an infinite loop?",
        code: `void func(int n) {
    if (n == 0) return;

    func(n);
}

int main() {
    func(3);

    return 0;
}`,
        choices: [
          "Missing base case",
          "Incorrect recursion step",
          "Function has no return value",
          "Recursion has no stopping condition"
        ],
        answer: "Incorrect recursion step"
      }
    ]
  },
  {
    chapter: 4,
    chapter_name: "Algorithms",
    quiz: [
        {
            question: "Which of the following defines an algorithm?",
            code: null,
            choices: [
                "A sequence of steps to solve a problem",
                "A function to evaluate mathematical expressions",
                "A way to sort data in an array",
                "A method to divide data into smaller parts"
            ],
            answer: "A sequence of steps to solve a problem"
        },
        {
            question: "Why is the correctness of an algorithm important?",
            code: null,
            choices: [
                "It determines the time efficiency of the algorithm",
                "It ensures the algorithm produces the desired output",
                "It optimizes the memory usage",
                "It simplifies the algorithm's structure"
            ],
            answer: "It ensures the algorithm produces the desired output"
        },
        {
            question: "Which of the following is a characteristic of an efficient algorithm?",
            code: null,
            choices: [
                "It has a clear set of instructions",
                "It requires minimal memory usage",
                "It performs better in terms of time and space",
                "It always guarantees the best solution"
            ],
            answer: "It performs better in terms of time and space"
        },
        {
            question: "Why is Big O notation important in algorithm analysis?",
            code: null,
            choices: [
                "It expresses the worst-case performance of an algorithm",
                "It defines the exact execution time in milliseconds",
                "It measures the space required by an algorithm",
                "It provides the number of iterations required"
            ],
            answer: "It expresses the worst-case performance of an algorithm"
        },
        {
            question: "What is the significance of average-case time complexity?",
            code: null,
            choices: [
                "It represents the input that minimizes execution time",
                "It assumes an algorithm performs at a constant rate",
                "It reflects the expected running time for typical inputs",
                "It always matches the worst-case scenario in practice"
            ],
            answer: "It reflects the expected running time for typical inputs"
        }
    ]
  },
  {
    chapter: 5,
    chapter_name: "Queue Data Structure",
    quiz: [
        {
            question: "What does a queue data structure follow?",
            code: null,
            choices: [
                "First In, Last Out (FILO)",
                "First In, First Out (FIFO)",
                "Random access to elements",
                "Last In, First Out (LIFO)"
            ],
            answer: "First In, First Out (FIFO)"
        },
        {
            question: "Which data structure uses the Last In, First Out (LIFO) principle?",
            code: null,
            choices: [
                "Stack",
                "Queue",
                "List",
                "Tree"
            ],
            answer: "Stack"
        },
        {
            question: "Why is a queue used in scheduling tasks?",
            code: null,
            choices: [
                "It uses FIFO for task execution",
                "It has constant time for each operation",
                "It operates by storing items in order",
                "It supports only sequential access of elements"
            ],
            answer: "It uses FIFO for task execution"
        },
        {
            question: "Which of the following is true for a queue implemented using an array?",
            code: null,
            choices: [
                "Both enqueue and dequeue operations take O(1) time",
                "Array-based queues require dynamic resizing during usage",
                "Dequeuing takes O(n) time in an array implementation",
                "Array-based queues do not support random access"
            ],
            answer: "Array-based queues require dynamic resizing during usage"
        },
        {
            question: "Which is a characteristic of a linked list?",
            code: null,
            choices: [
                "Static size and continuous memory allocation",
                "Dynamic size with elements linked together",
                "Requires no pointer references for access",
                "Stores data in fixed positions"
            ],
            answer: "Dynamic size with elements linked together"
        }
    ]
  },
  {
    chapter: 6,
    chapter_name: "Trees and Binary Search Trees",
    quiz: [
        {
            question: "What is the height of an AVL tree with only one node?",
            code: null,
            choices: [
                "0",
                "1",
                "2",
                "Undefined"
            ],
            answer: "0"
        },
        {
            question: "Which of the following properties holds true for a Binary Tree?",
            code: null,
            choices: [
                "Each node can have at most two children.",
                "Every node must have exactly two children.",
                "Binary trees are used only for searching.",
                "Binary trees cannot be traversed in post-order."
            ],
            answer: "Each node can have at most two children."
        },
        {
            question: "What is the time complexity for inserting an element in a Binary Search Tree (BST) in the worst case?",
            code: null,
            choices: [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n log n)"
            ],
            answer: "O(n)"
        },
        {
            question: "Which of the following is true about a Binary Search Tree (BST)?",
            code: null,
            choices: [
                "The left subtree of each node contains values greater than the node.",
                "The right subtree of each node contains values smaller than the node.",
                "Every node's left subtree has values smaller than the node.",
                "A node in a BST can have at most two children."
            ],
            answer: "Every node's left subtree has values smaller than the node."
        },
        {
            question: "Which of the following traversal methods is used for searching in a Binary Search Tree?",
            code: null,
            choices: [
                "Level-order traversal",
                "In-order traversal",
                "Pre-order traversal",
                "Post-order traversal"
            ],
            answer: "In-order traversal"
        }
    ]
  },
  {
    chapter: 7,
    chapter_name: "Hash Tables",
    quiz: [
      {
        question: "Which of the following methods is used to reduce collisions in a hash table?",
        code: null,
        choices: [
          "Increasing the table size",
          "Decreasing the load factor",
          "Using a more complex hash function",
          "All of the above"
        ],
        answer: "All of the above"
      },
      {
        question: "What is the primary purpose of a hash function?",
        code: null,
        choices: [
          "To encrypt the data for security",
          "To map data of arbitrary size to fixed-size values",
          "To sort the data",
          "To compress the data"
        ],
        answer: "To map data of arbitrary size to fixed-size values"
      },
      {
        question: "In a perfect hash function, how often should collisions occur?",
        code: null,
        choices: [
          "Never",
          "Rarely",
          "Frequently",
          "It depends on the data size"
        ],
        answer: "Never"
      },
      {
        question: "What is a major disadvantage of using a hash table with open addressing?",
        code: null,
        choices: [
          "Memory inefficiency",
          "Difficulty in deleting elements",
          "High time complexity for all operations",
          "All of the above"
        ],
        answer: "Difficulty in deleting elements"
      },
      {
        question: "What is the time complexity for searching an element in a hash table using open addressing in the worst case?",
        code: null,
        choices: [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n*2)"
        ],
        answer: "O(n)"
      }
    ]
  },
  {
    chapter: 8,
    chapter_name: "Priority Queues",
    quiz: [
        {
            question: "What is the time complexity for inserting an element into a priority queue implemented by a binary heap?",
            code: null,
            choices: [
                "O(1)",
                "O(log n)",
                "O(n)",
                "O(n log n)"
            ],
            answer: "O(log n)"
        },
        {
            question: "Which of the following statements about priority queues is correct?",
            code: null,
            choices: [
                "Priority queues are always implemented using arrays",
                "A priority queue always removes the largest element",
                "Priority queues maintain elements in a sorted order",
                "Priority queues allow elements to be accessed in arbitrary order"
            ],
            answer: "Priority queues maintain elements in a sorted order"
        },
        {
            question: "Which of the following is a disadvantage of a priority queue?",
            code: null,
            choices: [
                "It is slower than a normal queue",
                "It uses a lot of memory",
                "It doesn't allow for duplicates",
                "It cannot efficiently find the minimum element"
            ],
            answer: "It is slower than a normal queue"
        },
        {
            question: "What is the primary operation supported by a priority queue?",
            code: null,
            choices: [
                "Insertion",
                "Deletion",
                "Find the minimum/maximum",
                "All of the above"
            ],
            answer: "All of the above"
        },
        {
            question: "Which of the following data structures is typically used to implement a priority queue?",
            code: null,
            choices: [
                "Linked list",
                "Array",
                "Heap",
                "Binary Search Tree"
            ],
            answer: "Heap"
        }
    ]
  },
  {
    chapter: 9,
    chapter_name: "Sorting",
    quiz: [
      {
        question: "Which of the following is the primary advantage of Linear Time Sorting algorithms like Counting Sort?",
        code: null,
        choices: [
          "O(n log n) time complexity",
          "Works only on numerical data",
          "Linear time complexity",
          "Always stable"
        ],
        answer: "Linear time complexity"
      },
      {
        question: "What is the best-case time complexity for Bubble Sort?",
        code: null,
        choices: [
          "O(n log n)",
          "O(n^2)",
          "O(n)",
          "O(log n)"
        ],
        answer: "O(n)"
      },
      {
        question: "Which sorting algorithm typically has better performance in the average case: QuickSort or Merge Sort?",
        code: null,
        choices: [
          "Merge Sort",
          "Bubble Sort",
          "QuickSort",
          "Heap Sort"
        ],
        answer: "QuickSort"
      },
      {
        question: "Which of the following is a characteristic of a Linear Time Sort like Radix Sort?",
        code: null,
        choices: [
          "It works by comparing elements",
          "It requires O(n log n) time",
          "It can only be used with integer values",
          "It operates in linear time under certain conditions"
        ],
        answer: "It operates in linear time under certain conditions"
      },
      {
        question: "Which sorting algorithm has the best performance in the worst-case scenario?",
        code: null,
        choices: [
          "Merge Sort",
          "Bubble Sort",
          "QuickSort",
          "Heap Sort"
        ],
        answer: "Merge Sort"
      }
    ]
  },
  {
    chapter: 9,
    chapter_name: "Linear Time Sort",
    quiz: [
      {
        question: "Which of the following sorting algorithms can run in linear time under certain conditions?",
        code: null,
        choices: [
          "Merge Sort",
          "Counting Sort",
          "Quick Sort",
          "Bubble Sort"
        ],
        answer: "Counting Sort"
      },
      {
        question: "Which scenario is ideal for Radix Sort to perform well?",
        code: null,
        choices: [
          "Data is uniformly distributed",
          "The data has many repeating elements",
          "The number of digits in the data is small",
          "The range of values is extremely large"
        ],
        answer: "The number of digits in the data is small"
      },
      {
        question: "Which of the following sorting algorithms is NOT a linear time algorithm?",
        code: null,
        choices: [
          "Counting Sort",
          "Radix Sort",
          "Bucket Sort",
          "Merge Sort"
        ],
        answer: "Merge Sort"
      },
      {
        question: "What is the time complexity of Counting Sort for sorting an array of size n with the range of elements being k?",
        code: null,
        choices: [
          "O(n log n/k)",
          "O(nk)",
          "O(n + k)",
          "O(k)"
        ],
        answer: "O(n + k)"
      },
      {
        question: "Which of the following is a limitation of Counting Sort?",
        code: null,
        choices: [
          "It cannot handle floating-point numbers",
          "It requires O(n log n) space",
          "It can only sort integers",
          "It is not a stable sort"
        ],
        answer: "It cannot handle floating-point numbers"
      }
    ]
  },
  {
    chapter: 10,
    chapter_name: "Graph Algorithms",
    quiz: [
      {
        question: "What is the minimum number of edges in a connected graph with 5 vertices?",
        code: null,
        choices: [
          "4",
          "5",
          "6",
          "10"
        ],
        answer: "4"
      },
      {
        question: "Which type of graph is used in topological sorting?",
        code: null,
        choices: [
          "Directed Acyclic Graph (DAG)",
          "Directed Graph",
          "Undirected Graph",
          "Weighted Graph"
        ],
        answer: "Directed Acyclic Graph (DAG)"
      },
      {
        question: "Which algorithm is used for finding the minimum spanning tree of a graph?",
        code: null,
        choices: [
          "Dijkstra's Algorithm",
          "Kruskal's Algorithm",
          "Bellman-Ford Algorithm",
          "Floyd-Warshall Algorithm"
        ],
        answer: "Kruskal's Algorithm"
      },
      {
        question: "Which of the following algorithms is used to find the shortest path in a graph with negative weights?",
        code: null,
        choices: [
          "Bellman-Ford Algorithm",
          "Dijkstra's Algorithm",
          "Floyd-Warshall Algorithm",
          "Kruskal's Algorithm"
        ],
        answer: "Bellman-Ford Algorithm"
      },
      {
        question: "In Dijkstra's algorithm, the shortest path is determined by choosing the vertex with the _____ distance from the source.",
        code: null,
        choices: [
          "Maximum",
          "Minimum",
          "Average",
          "Random"
        ],
        answer: "Minimum"
      }
    ]
  }
]