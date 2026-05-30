"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { 
  SiJavascript, 
  SiPython, 
  SiCplusplus, 
  SiRust 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiBookOpen, FiX, FiMenu } from "react-icons/fi";

// ─── Types ──────────────────────────────────────────────────────────────

interface Program {
  id: number;
  title: string;
  description: string;
  code: string;
  difficulty: "Easy" | "Intermediate" | "Advanced";
}

interface Language {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  syntax: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  link: string;
}

// ─── Books Data ─────────────────────────────────────────────────────────

const booksData: Book[] = [
  {
    id: 1,
    title: "200+ Python Programs for Beginners",
    author: "Hernando Abella",
    image: "/python-programs.jpg",
    link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CVLHT1VP"
  },
  {
    id: 2,
    title: "200+ C Programs for Beginners",
    author: "Hernando Abella",
    image: "/c-programs.jpg",
    link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0DNDB7K59"
  },
  {
    id: 3,
    title: "200+ C++ Programs for Beginners",
    author: "Hernando Abella",
    image: "/cpp-programs.png",
    link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0FWHC6B5S"
  },
  {
    id: 4,
    title: "200+ Java Programs for Beginners",
    author: "Hernando Abella",
    image: "/java-programs.jpg",
    link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0DM4HMBG8"
  },
  {
    id: 5,
    title: "200+ Rust Programs for Beginners",
    author: "Erich Gamma",
    image: "/rust-programs.jpg",
    link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0DHT9R764"
  },
  {
    id: 6,
    title: "200+ JavaScript Programs for Beginners",
    author: "Hernando Abella",
    image: "/javascript-programs.jpg",
    link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CQ4FBQ8H"
  }
];

// ─── Data: Programs by Language ─────────────────────────────────────────

const programsData: Record<string, Program[]> = {
  javascript: [
    {
      id: 1,
      title: "Hello World",
      description: "The classic beginner program. Displays a welcome message.",
      code: `// Hello World in JavaScript
console.log("Hello, World!");
alert("Welcome to JavaScript!");`,
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Simple Calculator",
      description: "Performs basic arithmetic operations.",
      code: `// Simple Calculator
function calculator(a, b, operation) {
  switch(operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : "Error";
    default: return "Invalid operation";
  }
}
console.log(calculator(10, 5, '+')); // 15`,
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Even or Odd",
      description: "Determines if a number is even or odd.",
      code: `// Check if a number is even or odd
function isEvenOrOdd(number) {
  return number % 2 === 0 ? \`\${number} is even\` : \`\${number} is odd\`;
}
console.log(isEvenOrOdd(7));  // 7 is odd
console.log(isEvenOrOdd(42)); // 42 is even`,
      difficulty: "Easy"
    },
    {
      id: 4,
      title: "Factorial",
      description: "Calculates the factorial of a number.",
      code: `// Calculate factorial
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
console.log(factorial(5)); // 120`,
      difficulty: "Easy"
    },
    {
      id: 5,
      title: "Palindrome Checker",
      description: "Checks if a string reads the same forwards and backwards.",
      code: `// Check if a string is a palindrome
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}
console.log(isPalindrome("racecar")); // true`,
      difficulty: "Intermediate"
    }
  ],
  python: [
    {
      id: 1,
      title: "Hello World",
      description: "Prints a greeting to the console.",
      code: `# Hello World in Python
print("Hello, World!")`,
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Simple Calculator",
      description: "Performs basic arithmetic operations.",
      code: `# Simple Calculator
def calculator(a, b, operation):
    if operation == '+': return a + b
    elif operation == '-': return a - b
    elif operation == '*': return a * b
    elif operation == '/': return a / b if b != 0 else "Error"
print(calculator(10, 5, '+'))  # 15`,
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Even or Odd",
      description: "Determines whether a number is even or odd.",
      code: `# Check if a number is even or odd
def is_even_or_odd(n):
    return f"{n} is even" if n % 2 == 0 else f"{n} is odd"
print(is_even_or_odd(7))   # 7 is odd
print(is_even_or_odd(42))  # 42 is even`,
      difficulty: "Easy"
    },
    {
      id: 4,
      title: "Factorial",
      description: "Calculates factorial using iteration.",
      code: `# Factorial
def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result
print(factorial(5))  # 120`,
      difficulty: "Easy"
    },
    {
      id: 5,
      title: "Palindrome Checker",
      description: "Checks if a string is a palindrome.",
      code: `# Palindrome checker
def is_palindrome(text):
    clean = ''.join(c.lower() for c in text if c.isalnum())
    return clean == clean[::-1]
print(is_palindrome("racecar"))  # True`,
      difficulty: "Intermediate"
    }
  ],
  java: [
    {
      id: 1,
      title: "Hello World",
      description: "Prints a message to the console.",
      code: `// Hello World in Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Simple Calculator",
      description: "Performs basic arithmetic operations.",
      code: `// Simple Calculator in Java
public class Calculator {
    public static double calculate(double a, double b, char op) {
        switch(op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b != 0 ? a / b : 0;
            default: return 0;
        }
    }
    public static void main(String[] args) {
        System.out.println(calculate(10, 5, '+')); // 15.0
    }
}`,
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Even or Odd",
      description: "Determines if a number is even or odd.",
      code: `// Even or Odd in Java
public class EvenOdd {
    public static String check(int n) {
        return n % 2 == 0 ? n + " is even" : n + " is odd";
    }
    public static void main(String[] args) {
        System.out.println(check(7));  // 7 is odd
    }
}`,
      difficulty: "Easy"
    },
    {
      id: 4,
      title: "Factorial",
      description: "Calculates factorial using iteration.",
      code: `// Factorial in Java
public class Factorial {
    public static long factorial(int n) {
        long result = 1;
        for (int i = 2; i <= n; i++) result *= i;
        return result;
    }
    public static void main(String[] args) {
        System.out.println(factorial(5)); // 120
    }
}`,
      difficulty: "Easy"
    },
    {
      id: 5,
      title: "Palindrome Checker",
      description: "Checks if a string is a palindrome.",
      code: `// Palindrome Checker in Java
public class Palindrome {
    public static boolean isPalindrome(String str) {
        String clean = str.toLowerCase().replaceAll("[^a-z0-9]", "");
        String reversed = new StringBuilder(clean).reverse().toString();
        return clean.equals(reversed);
    }
    public static void main(String[] args) {
        System.out.println(isPalindrome("racecar")); // true
    }
}`,
      difficulty: "Intermediate"
    }
  ],
  cpp: [
    {
      id: 1,
      title: "Hello World",
      description: "Prints a greeting to the console.",
      code: `// Hello World in C++
#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Simple Calculator",
      description: "Performs basic arithmetic operations.",
      code: `// Simple Calculator in C++
#include <iostream>
using namespace std;
double calculate(double a, double b, char op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b != 0 ? a / b : 0;
        default: return 0;
    }
}
int main() {
    cout << calculate(10, 5, '+') << endl; // 15
    return 0;
}`,
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Even or Odd",
      description: "Determines if a number is even or odd.",
      code: `// Even or Odd in C++
#include <iostream>
using namespace std;
string check(int n) {
    return (n % 2 == 0) ? to_string(n) + " is even" : to_string(n) + " is odd";
}
int main() {
    cout << check(7) << endl;  // 7 is odd
    return 0;
}`,
      difficulty: "Easy"
    },
    {
      id: 4,
      title: "Factorial",
      description: "Calculates factorial of a number.",
      code: `// Factorial in C++
#include <iostream>
using namespace std;
long long factorial(int n) {
    long long result = 1;
    for (int i = 2; i <= n; i++) result *= i;
    return result;
}
int main() {
    cout << factorial(5) << endl; // 120
    return 0;
}`,
      difficulty: "Easy"
    },
    {
      id: 5,
      title: "Palindrome Checker",
      description: "Checks if a string is a palindrome.",
      code: `// Palindrome Checker in C++
#include <iostream>
#include <algorithm>
#include <cctype>
using namespace std;
bool isPalindrome(string str) {
    string clean;
    for (char c : str) if (isalnum(c)) clean += tolower(c);
    string rev = clean;
    reverse(rev.begin(), rev.end());
    return clean == rev;
}
int main() {
    cout << isPalindrome("racecar") << endl; // 1 (true)
    return 0;
}`,
      difficulty: "Intermediate"
    }
  ],
  rust: [
    {
      id: 1,
      title: "Hello World",
      description: "Prints a greeting using println! macro.",
      code: `// Hello World in Rust
fn main() {
    println!("Hello, World!");
}`,
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Simple Calculator",
      description: "Performs basic arithmetic using match.",
      code: `// Simple Calculator in Rust
fn calculate(a: f64, b: f64, op: char) -> f64 {
    match op {
        '+' => a + b,
        '-' => a - b,
        '*' => a * b,
        '/' => if b != 0.0 { a / b } else { f64::NAN },
        _ => f64::NAN,
    }
}
fn main() {
    println!("{}", calculate(10.0, 5.0, '+')); // 15
}`,
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Even or Odd",
      description: "Determines if a number is even or odd.",
      code: `// Even or Odd in Rust
fn check(n: i32) -> String {
    if n % 2 == 0 { format!("{} is even", n) } 
    else { format!("{} is odd", n) }
}
fn main() {
    println!("{}", check(7));  // 7 is odd
}`,
      difficulty: "Easy"
    },
    {
      id: 4,
      title: "Factorial",
      description: "Calculates factorial using product.",
      code: `// Factorial in Rust
fn factorial(n: u64) -> u64 {
    (1..=n).product()
}
fn main() {
    println!("{}", factorial(5)); // 120
}`,
      difficulty: "Easy"
    },
    {
      id: 5,
      title: "Palindrome Checker",
      description: "Checks if a string is a palindrome.",
      code: `// Palindrome Checker in Rust
fn is_palindrome(s: &str) -> bool {
    let clean: String = s.chars()
        .filter(|c| c.is_ascii_alphanumeric())
        .map(|c| c.to_ascii_lowercase())
        .collect();
    clean == clean.chars().rev().collect::<String>()
}
fn main() {
    println!("{}", is_palindrome("racecar")); // true
}`,
      difficulty: "Intermediate"
    }
  ]
};

// Languages with icons
const languages: Language[] = [
  { id: "javascript", name: "JavaScript", icon: <SiJavascript size={18} />, color: "#F7DF1E", syntax: "javascript" },
  { id: "python", name: "Python", icon: <SiPython size={18} />, color: "#3776AB", syntax: "python" },
  { id: "java", name: "Java", icon: <FaJava size={18} />, color: "#ED8B00", syntax: "java" },
  { id: "cpp", name: "C++", icon: <SiCplusplus size={18} />, color: "#00599C", syntax: "cpp" },
  { id: "rust", name: "Rust", icon: <SiRust size={18} />, color: "#CE422B", syntax: "rust" }
];

// ─── Components ─────────────────────────────────────────────────────────

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1 text-xs rounded bg-gray-200 hover:bg-gray-300 text-gray-700 transition font-medium"
    >
      {copied ? "✅ Copied!" : "📋 Copy"}
    </button>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors = {
    Easy: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700"
  };
  
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[difficulty as keyof typeof colors]}`}>
      {difficulty}
    </span>
  );
}

function ProgramCard({ program, syntax }: { program: Program; syntax: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <div 
        className="p-4 cursor-pointer hover:bg-gray-50 transition"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900">
              {program.id}. {program.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{program.description}</p>
          </div>
          <DifficultyBadge difficulty={program.difficulty} />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-400">
            {expanded ? "▼ Click to hide" : "▶ Click to view code"}
          </span>
        </div>
      </div>
      
      {expanded && (
        <div className="border-t border-gray-200">
          <div className="relative">
            <SyntaxHighlighter
              language={syntax}
              style={oneLight}
              customStyle={{
                margin: 0,
                padding: "1rem",
                fontSize: "13px",
                borderRadius: 0
              }}
            >
              {program.code}
            </SyntaxHighlighter>
            <div className="absolute top-2 right-2">
              <CopyButton code={program.code} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BooksSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <FiBookOpen className="text-blue-600" />
            <h2 className="font-semibold text-gray-900">Recommended Books</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <FiX size={20} />
          </button>
        </div>
        
        {/* Books List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {booksData.map((book) => (
            <div key={book.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition group">
              {/* Book Image - Full size */}
              <div className="w-full">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-48 flex items-center justify-center bg-gray-100';
                      fallback.innerHTML = '<svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              
              {/* Book Info */}
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{book.author}</p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block w-full text-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition"
                >
                  Buy on Amazon →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            📚 6 programming books recommended for you
          </p>
        </div>
      </div>
    </>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentPrograms = programsData[selectedLanguage] || [];
  
  const filteredPrograms = currentPrograms.filter(program =>
    program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    program.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentLanguage = languages.find(l => l.id === selectedLanguage)!;

  return (
    <>
      <BooksSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header with Sidebar Toggle */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-center flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">💻 Programs</h1>
              <p className="text-gray-600 text-sm">
                An endless buffet of programs
              </p>
            </div>
            
            {/* Sidebar Toggle Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition text-sm text-gray-700 shadow-sm"
            >
              <FiMenu size={18} />
              <span className="hidden sm:inline">Books</span>
            </button>
          </div>

          {/* Language Selector */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {languages.map(lang => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition border ${
                  selectedLanguage === lang.id
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span className="text-base">{lang.icon}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder={`Search ${currentLanguage.name} programs...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Results Count */}
          <div className="mb-4 text-xs text-gray-500">
            {filteredPrograms.length} program(s) found
          </div>

          {/* Programs */}
          <div className="space-y-3">
            {filteredPrograms.map(program => (
              <ProgramCard
                key={program.id}
                program={program}
                syntax={currentLanguage.syntax}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredPrograms.length === 0 && (
            <div className="text-center py-12 text-gray-500 text-sm">
              <p>No programs found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}