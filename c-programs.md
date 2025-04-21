![7](https://github.com/user-attachments/assets/8cc6be10-0da3-4b9c-97e1-9b41364b4507)

1. Print Hello World
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}

// Hello, World!



 
2. Add Two Numbers
#include <stdio.h>
#include <stdlib.h>

int main() {
    double num1, num2;

    // Read two numbers from the user
    printf("Enter the first number: ");
    scanf("%lf", &num1);
    printf("Enter the second number: ");
    scanf("%lf", &num2);

    // Output the sum
    printf("The sum of %.2f and %.2f is: %.2f\n", num1, num2, num1 + num2);

    return 0;
}

// Enter the first number: 12
// Enter the second number: 8
// The sum of 12.00 and 8.00 is: 20.00



 
3. Find the Square Root
#include <stdio.h>
#include <math.h>

int main() {
    double input_number;

    // Read a non-negative number from the user
    printf("Enter a non-negative number: ");
    scanf("%lf", &input_number);

    // Check if the number is non-negative and calculate the square root
    if (input_number >= 0.0) {
        printf("The square root of %.2f is: %.5f\n", input_number, sqrt(input_number));
    } else {
        printf("Please enter a valid non-negative number.\n");
    }

    return 0;
}

// Enter a non-negative number: 3
// The square root of 3.00 is: 1.73205



 
4. Calculate the Area of a Triangle
#include <stdio.h>

int main() {
    double base, height;

    // Read base and height from the user
    printf("Enter the base of the triangle: ");
    scanf("%lf", &base);
    printf("Enter the height of the triangle: ");
    scanf("%lf", &height);

    // Calculate the area of the triangle
    double area = 0.5 * base * height;
    printf("The area of the triangle with base %.2f and height %.2f is: %.2f\n", base, height, area);

    return 0;
}

// Enter the base of the triangle: 3
// Enter the height of the triangle: 4
// The area of the triangle with base 3.00 and height 4.00 is: 6.00



 
5. Swap Two Variables
#include <stdio.h>
#include <string.h>

int main() {
    char variable1[100], variable2[100], temp[100];

    // Read variables from the user
    printf("Enter the first variable: ");
    fgets(variable1, sizeof(variable1), stdin);
    variable1[strcspn(variable1, "\n")] = 0;  // Remove newline character

    printf("Enter the second variable: ");
    fgets(variable2, sizeof(variable2), stdin);
    variable2[strcspn(variable2, "\n")] = 0;  // Remove newline character

    // Display before swapping
    printf("Before swapping: Variable1 = %s, Variable2 = %s\n", variable1, variable2);

    // Swapping the variables using a temporary variable
    strcpy(temp, variable1);
    strcpy(variable1, variable2);
    strcpy(variable2, temp);

    // Display after swapping
    printf("After swapping: Variable1 = %s, Variable2 = %s\n", variable1, variable2);

    return 0;
}

// Enter the first variable: a
// Enter the second variable: b
// Before swapping: Variable1 = a, Variable2 = b
// After swapping: Variable1 = b, Variable2 = a

6. Solve Quadratic Equation
#include <stdio.h>
#include <math.h>

int main() {
    double a, b, c;

    // Read coefficients from the user
    printf("Enter the coefficient a: ");
    scanf("%lf", &a);
    if (a == 0.0) {
        printf("Coefficient 'a' cannot be zero.\n");
        return 1;
    }
    printf("Enter the coefficient b: ");
    scanf("%lf", &b);
    printf("Enter the coefficient c: ");
    scanf("%lf", &c);

    // Calculate discriminant
    double discriminant = b * b - 4 * a * c;

    // Determine roots based on discriminant
    if (discriminant > 0) {
        double root1 = (-b + sqrt(discriminant)) / (2 * a);
        double root2 = (-b - sqrt(discriminant)) / (2 * a);
        printf("The roots are: %.2f and %.2f\n", root1, root2);
    } else if (discriminant == 0) {
        double root = -b / (2 * a);
        printf("The root is: %.2f\n", root);
    } else {
        printf("The equation has complex roots.\n");
    }

    return 0;
}

// Enter the coefficient a: 1
// Enter the coefficient b: -3
// Enter the coefficient c: 2
// The roots are: 2.00 and 1.00
 
7. Convert Kilometers to Miles
#include <stdio.h>

int main() {
    double kilometers;

    // Read distance in kilometers from user
    printf("Enter the distance in kilometers: ");
    scanf("%lf", &kilometers);

    // Convert kilometers to miles
    double miles = kilometers * 0.621371;
    printf("%.2f kilometers is approximately %.6f miles.\n", kilometers, miles);

    return 0;
}

// Enter the distance in kilometers: 2
// 2.00 kilometers is approximately 1.242742 miles.

 
8. Convert Celsius to Fahrenheit
#include <stdio.h>

int main() {
    double celsius;

    // Read temperature in Celsius from user
    printf("Enter the temperature in Celsius: ");
    scanf("%lf", &celsius);

    // Convert Celsius to Fahrenheit
    double fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
    printf("%.2f degrees Celsius is equal to %.1f degrees Fahrenheit.\n", celsius, fahrenheit);

    return 0;
}

// Enter the temperature in Celsius: 33
// 33.00 degrees Celsius is equal to 91.4 degrees Fahrenheit.



 
9. Generate a Random Number
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    double min_range, max_range;

    // Prompt user for the range
    printf("Enter the minimum value of the range: ");
    scanf("%lf", &min_range);
    printf("Enter the maximum value of the range: ");
    scanf("%lf", &max_range);

    // Check if input is valid
    if (min_range < max_range) {
        // Seed the random number generator
        srand(time(NULL));

        // Generate a random number within the specified range
        double random_number = ((double)rand() / RAND_MAX) * (max_range - min_range) + min_range;
        printf("A random number between %.2f and %.2f is: %.10f\n", min_range, max_range, random_number);
    } else {
        printf("Please enter valid numbers, ensuring that the minimum value is less than the maximum value.\n");
    }

    return 0;
}

// Enter the minimum value of the range: 3
// Enter the maximum value of the range: 4
// A random number between 3.00 and 4.00 is: 3.9904595578

 
10. Check if a number is Positive, Negative, or Zero
#include <stdio.h>

int main() {
    double number;

    // Prompt user for a number
    printf("Enter a number: ");
    if (scanf("%lf", &number) != 1) {
        printf("Please enter a valid number.\n");
        return 1; // Exit if input is invalid
    }

    // Check if the number is positive, negative, or zero
    if (number > 0.0) {
        printf("%.2f is a positive number.\n", number);
    } else if (number < 0.0) {
        printf("%.2f is a negative number.\n", number);
    } else {
        printf("The entered number is zero.\n");
    }

    return 0;
}

// Enter a number: 3
// 3.00 is a positive number.


 
11. Check if a Number is Odd or Even
#include <stdio.h>

int main() {
    int number;

    // Prompt user for a number
    printf("Enter a number: ");
    if (scanf("%d", &number) != 1) {
        printf("Please enter a valid integer.\n");
        return 1; // Exit if input is invalid
    }

    // Check if the number is odd or even
    if (number % 2 == 0) {
        printf("%d is an even number.\n", number);
    } else {
        printf("%d is an odd number.\n", number);
    }

    return 0;
}

// Enter a number: 3
// 3 is an odd number.

 
12. Find the Largest Among Three Numbers
#include <stdio.h>

double read_number(const char *prompt) {
    double number;
    printf("%s", prompt);
    while (scanf("%lf", &number) != 1) {
        printf("Please enter a valid number.\n");
        while (getchar() != '\n'); // Clear invalid input
        printf("%s", prompt);
    }
    return number;
}

int main() {
    double num1 = read_number("Enter the first number: ");
    double num2 = read_number("Enter the second number: ");
    double num3 = read_number("Enter the third number: ");

    double largest_number = num1;
    if (num2 > largest_number) largest_number = num2;
    if (num3 > largest_number) largest_number = num3;

    printf("The largest number among %.2f, %.2f, and %.2f is: %.2f\n", num1, num2, num3, largest_number);
    return 0;
}

// Enter the first number: 3
// Enter the second number: 4
// Enter the third number: 3
// The largest number among 3.00, 4.00, and 3.00 is: 4.00


 
13. Check Prime Number
#include <stdio.h>
#include <math.h>

int main() {
    int number;
    printf("Enter a number: ");
    
    // Read the input
    if (scanf("%d", &number) != 1 || number <= 1) {
        printf("Please enter a valid integer greater than 1.\n");
        return 1;
    }

    // Check if the number is prime
    int is_prime = 1; // Assume it is prime initially
    for (int i = 2; i <= sqrt(number); i++) {
        if (number % i == 0) {
            is_prime = 0; // Not prime
            break;
        }
    }

    // Output the result
    if (is_prime) {
        printf("%d is a prime number.\n", number);
    } else {
        printf("%d is not a prime number.\n", number);
    }

    return 0;
}

// Enter a number: 4
// 4 is not a prime number.



14. Print All Prime Numbers in an Interval
#include <stdio.h>
#include <math.h>

int is_prime(int n) {
    if (n < 2) return 0; // Numbers less than 2 are not prime
    for (int i = 2; i * i <= n; i++) // Check up to the square root of n
        if (n % i == 0) return 0; // Not prime
    return 1; // Prime
}

int main() {
    int start, end;
    printf("Enter the starting number: ");
    scanf("%d", &start);
    printf("Enter the ending number: ");
    scanf("%d", &end);

    if (start > 1 && start < end) {
        printf("Prime numbers in [%d - %d]:\n", start, end);
        for (int n = start; n <= end; n++)
            if (is_prime(n)) printf("%d\n", n);
    } else {
        printf("Invalid range. Start should be > 1 and < end.\n");
    }

    return 0;
}
// Enter the starting number: 
// 33
// Enter the ending number: 
// 44
// Prime numbers in [33 - 44]:
// 37
// 41
// 43





 
15. Find the Factorial of a Number
#include <stdio.h>

unsigned long long factorial(int n) {
    unsigned long long result = 1; // Use unsigned long long to handle larger results
    for (int i = 2; i <= n; i++) {
        result *= i; // Calculate factorial
    }
    return result;
}

int main() {
    int number;
    printf("Enter a non-negative integer: ");
    
    // Read user input
    if (scanf("%d", &number) == 1 && number >= 0) {
        printf("The factorial of %d is: %llu\n", number, factorial(number));
    } else {
        printf("Please enter a valid non-negative integer.\n");
    }

    return 0;
}

// Enter a non-negative integer: 3
// The factorial of 3 is: 6


 
16. Display the Multiplication Table
#include <stdio.h>

int main() {
    int number;
    printf("Enter a number for the multiplication table: ");
    
    // Read user input
    if (scanf("%d", &number) == 1) {
        printf("Multiplication table for %d:\n", number);
        
        // Display the multiplication table
        for (int i = 1; i <= 10; i++) {
            printf("%d x %d = %d\n", number, i, number * i);
        }
    } else {
        printf("Please enter a valid integer.\n");
    }

    return 0;
}

// Enter a number for the multiplication table: 
// 2
// Multiplication table for 2:
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20
 
17. Print the Fibonacci Sequence
#include <stdio.h>

int main() {
    int num_terms;
    printf("Enter the number of terms in the Fibonacci sequence: ");
    
    // Read user input
    if (scanf("%d", &num_terms) == 1) {
        if (num_terms <= 0) {
            printf("Please enter a positive integer.\n");
            return 1;
        }

        unsigned long long fib[num_terms];
        fib[0] = 0;
        if (num_terms > 1) {
            fib[1] = 1;
        }

        for (int i = 2; i < num_terms; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        // Print the Fibonacci sequence
        for (int i = 0; i < num_terms; i++) {
            printf("%llu", fib[i]);
            if (i < num_terms - 1) {
                printf(", ");
            }
        }
        printf("\n");
    } else {
        printf("Please enter a valid positive integer.\n");
    }

    return 0;
} // 0, 1, 1, 2, 3
18. Check Armstrong Number
#include <stdio.h>
#include <math.h>

int main() {
    unsigned int number, temp, remainder, digits = 0, sum = 0;
    printf("Enter a number: ");
    
    // Read user input
    if (scanf("%u", &number) == 1) {
        temp = number;

        // Calculate the number of digits
        while (temp != 0) {
            digits++;
            temp /= 10;
        }

        temp = number;

        // Calculate the sum of the digits raised to the power of the number of digits
        while (temp != 0) {
            remainder = temp % 10;
            sum += pow(remainder, digits);
            temp /= 10;
        }

        // Check if the sum equals the original number
        if (sum == number) {
            printf("%u is an Armstrong number.\n", number);
        } else {
            printf("%u is not an Armstrong number.\n", number);
        }
    } else {
        printf("Please enter a valid positive integer.\n");
    }

    return 0;
}



 
19. Find Armstrong Number in an Interval
#include <stdio.h>
#include <math.h>

int is_armstrong(unsigned int num) {
    unsigned int temp = num, digits = 0, sum = 0;
    
    // Count the number of digits
    while (temp != 0) {
        digits++;
        temp /= 10;
    }
    
    temp = num;

    // Calculate the sum of each digit raised to the power of the number of digits
    while (temp != 0) {
        unsigned int remainder = temp % 10;
        sum += pow(remainder, digits);
        temp /= 10;
    }

    return sum == num;
}

int main() {
    unsigned int start, end;

    printf("Enter the starting number: ");
    scanf("%u", &start);
    printf("Enter the ending number: ");
    scanf("%u", &end);

    if (start > 0 && start < end) {
        printf("Armstrong numbers in the interval [%u, %u]:\n", start, end);
        for (unsigned int i = start; i <= end; i++) {
            if (is_armstrong(i)) {
                printf("%u\n", i);
            }
        }
    } else {
        printf("Please enter valid positive integers with the starting number less than the ending number.\n");
    }

    return 0;
}


 
20. Make a Simple Calculator
#include <stdio.h>

double read_number(const char* prompt) {
    double number;
    printf("%s", prompt);
    scanf("%lf", &number);
    return number;
}

char read_operation() {
    char op;
    printf("Enter an operation (+, -, *, /): ");
    scanf(" %c", &op); // Note the space before %c to consume any newline character
    return op;
}

int main() {
    double num1 = read_number("Enter the first number: ");
    double num2 = read_number("Enter the second number: ");
    char op = read_operation();

    double result;
    switch (op) {
        case '+': 
            result = num1 + num2; 
            break;
        case '-': 
            result = num1 - num2; 
            break;
        case '*': 
            result = num1 * num2; 
            break;
        case '/': 
            if (num2 == 0.0) {
                printf("Cannot divide by zero.\n");
                return 1;
            }
            result = num1 / num2; 
            break;
        default: 
            printf("Invalid operation.\n");
            return 1;
    }

    printf("Result: %.2f %c %.2f = %.2f\n", num1, op, num2, result);
    return 0;
}


 
21. Find the Sum of Natural Numbers
#include <stdio.h>

int main() {
    unsigned long long n;
    printf("Enter a positive integer: ");
    
    // Read input and check if it's a valid positive integer
    if (scanf("%llu", &n) != 1 || n == 0) {
        printf("Please enter a valid positive integer.\n");
        return 1;
    }

    // Calculate the sum of natural numbers
    unsigned long long sum_of_natural_numbers = (n * (n + 1)) / 2;
    printf("The sum of natural numbers from 1 to %llu is: %llu\n", n, sum_of_natural_numbers);

    return 0;
}

// Enter a positive integer: 3
// The sum of natural numbers from 1 to 3 is: 6




 
22. Check if the Numbers Have the Same Last Digit
#include <stdio.h>
#include <stdlib.h>

long long read_number(const char *prompt) {
    long long num;
    printf("%s", prompt);
    while (scanf("%lld", &num) != 1) {
        printf("Please enter a valid integer: ");
        // Clear the input buffer
        while (getchar() != '\n');
    }
    return num;
}

int main() {
    long long num1 = read_number("Enter the first number: ");
    long long num2 = read_number("Enter the second number: ");

    if (abs(num1) % 10 == abs(num2) % 10) {
        printf("The last digit of %lld is the same as the last digit of %lld.\n", num1, num2);
    } else {
        printf("The last digit of %lld is different from the last digit of %lld.\n", num1, num2);
    }

    return 0;
}
// Enter the first number: 3
// Enter the second number: 4
// The last digit of 3 is different from the last digit of 4.


23. Find HCF or GCD
#include <stdio.h>
#include <stdlib.h>

unsigned long long read_positive_number(const char *prompt) {
    unsigned long long num;
    printf("%s", prompt);
    while (scanf("%llu", &num) != 1 || num == 0) {
        printf("Please enter a valid positive integer: ");
        // Clear the input buffer
        while (getchar() != '\n');
    }
    return num;
}

unsigned long long gcd(unsigned long long a, unsigned long long b) {
    while (b != 0) {
        unsigned long long temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    unsigned long long num1 = read_positive_number("Enter the first positive integer: ");
    unsigned long long num2 = read_positive_number("Enter the second positive integer: ");

    printf("The HCF (GCD) of %llu and %llu is: %llu\n", num1, num2, gcd(num1, num2));

    return 0;
}
// Enter the first positive integer: 3
// Enter the second positive integer: 4
// The HCF (GCD) of 3 and 4 is: 1



 
24. Find LCM
#include <stdio.h>
#include <stdlib.h>

unsigned long long read_positive_number(const char *prompt) {
    unsigned long long num;
    printf("%s", prompt);
    while (scanf("%llu", &num) != 1 || num == 0) {
        printf("Please enter a valid positive integer: ");
        // Clear the input buffer
        while (getchar() != '\n');
    }
    return num;
}

unsigned long long gcd(unsigned long long a, unsigned long long b) {
    while (b != 0) {
        unsigned long long temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    unsigned long long num1 = read_positive_number("Enter the first positive integer: ");
    unsigned long long num2 = read_positive_number("Enter the second positive integer: ");
    
    unsigned long long lcm = (num1 * num2) / gcd(num1, num2);
    printf("The LCM of %llu and %llu is: %llu\n", num1, num2, lcm);

    return 0;
}
25. Find the Factors of a Number
#include <stdio.h>
#include <stdlib.h>

unsigned long long read_positive_number(const char *prompt) {
    unsigned long long num;
    printf("%s", prompt);
    while (scanf("%llu", &num) != 1 || num == 0) {
        printf("Please enter a valid positive integer: ");
        // Clear the input buffer
        while (getchar() != '\n');
    }
    return num;
}

int main() {
    unsigned long long number = read_positive_number("Enter a positive integer: ");
    printf("Factors of %llu:\n", number);

    // Find and display the factors
    for (unsigned long long i = 1; i <= number; i++) {
        if (number % i == 0) {
            printf("%llu\n", i);
        }
    }

    return 0;
}

// Enter a positive integer: 3
// Factors of 3:
// 1
// 3
 
26. Find Sum of Natural Numbers Using Recursion
#include <stdio.h>
#include <stdlib.h>

// Recursive function to calculate the sum of natural numbers
unsigned long long sum_of_natural_numbers(unsigned long long n) {
    if (n == 0) {
        return 0;
    }
    return n + sum_of_natural_numbers(n - 1);
}

unsigned long long read_positive_number(const char *prompt) {
    unsigned long long num;
    printf("%s", prompt);
    while (scanf("%llu", &num) != 1 || num == 0) {
        printf("Please enter a valid positive integer: ");
        // Clear the input buffer
        while (getchar() != '\n');
    }
    return num;
}

int main() {
    // Prompt user for a positive integer
    unsigned long long number = read_positive_number("Enter a positive integer: ");

    // Display the sum using recursion
    printf("The sum of natural numbers up to %llu is: %llu\n", number, sum_of_natural_numbers(number));

    return 0;
}

27. Guess a Random Number
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

unsigned int get_guess() {
    unsigned int guess;
    printf("Guess the random number (1-100): ");
    if (scanf("%u", &guess) != 1) {
        while (getchar() != '\n'); // Clear invalid input
        return 0; // Return 0 for invalid input
    }
    return guess;
}

int main() {
    srand(time(NULL)); // Seed random number generator
    unsigned int random_number = rand() % 100 + 1; // Random number between 1 and 100
    unsigned int attempts = 0;

    while (1) {
        unsigned int guess = get_guess();
        if (guess == 0) {
            printf("Please enter a valid number.\n");
            continue; // Prompt for valid guess
        }

        attempts++;
        if (guess < random_number) {
            printf("Too low!\n");
        } else if (guess > random_number) {
            printf("Too high!\n");
        } else {
            printf("Congratulations! You guessed %u in %u attempts.\n", random_number, attempts);
            break; // Exit the loop
        }
    }
    return 0;
}








 
28. Shuffle Deck of Cards
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define DECK_SIZE 52

// Structure for a card
typedef struct {
    char rank[3];   // Rank (2-10, Jack, Queen, King, Ace)
    char suit[10];  // Suit (Hearts, Diamonds, Clubs, Spades)
} Card;

// Function to create a deck of cards
void create_deck(Card deck[]) {
    const char *ranks[] = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"};
    const char *suits[] = {"Hearts", "Diamonds", "Clubs", "Spades"};
    
    int index = 0;
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 13; j++) {
            strcpy(deck[index].rank, ranks[j]);
            strcpy(deck[index].suit, suits[i]);
            index++;
        }
    }
}

// Function to shuffle the deck of cards
void shuffle_deck(Card deck[]) {
    for (int i = DECK_SIZE - 1; i > 0; i--) {
        int j = rand() % (i + 1); // Random index
        Card temp = deck[i];      // Swap cards
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

// Function to print the deck of cards
void print_deck(Card deck[]) {
    for (int i = 0; i < DECK_SIZE; i++) {
        printf("%s of %s\n", deck[i].rank, deck[i].suit);
    }
}

int main() {
    srand(time(NULL)); // Seed the random number generator
    
    Card deck[DECK_SIZE];
    create_deck(deck); // Create the deck
    
    printf("Initial Deck:\n");
    print_deck(deck);  // Print the initial deck
    
    shuffle_deck(deck); // Shuffle the deck
    
    printf("\nShuffled Deck:\n");
    print_deck(deck);   // Print the shuffled deck
    
    return 0;
}




 
29. Display Fibonacci Sequence Using Recursion
#include <stdio.h>

// Recursive function to calculate Fibonacci number
unsigned int fibonacci(unsigned int n) {
    if (n <= 1) return n; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

int main() {
    unsigned int num_terms;

    // Prompt user for the number of terms
    printf("Enter the number of terms in the Fibonacci sequence: ");
    if (scanf("%u", &num_terms) != 1 || num_terms < 0) {
        printf("Please enter a valid non-negative integer.\n");
        return 1;
    }

    // Display the Fibonacci sequence
    printf("Fibonacci sequence of %u terms:\n", num_terms);
    for (unsigned int i = 0; i < num_terms; i++) {
        printf("%u\n", fibonacci(i));
    }

    return 0;
}



 
30. Find Factorial of Number Using Recursion
#include <stdio.h>

// Recursive function to calculate factorial
unsigned long long factorial(int n) {
    if (n == 0 || n == 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}

int main() {
    int number;

    // Prompt user for a non-negative integer
    printf("Enter a non-negative integer: ");
    if (scanf("%d", &number) != 1 || number < 0) {
        printf("Please enter a valid non-negative integer.\n");
        return 1;
    }

    // Calculate and display the factorial
    printf("The factorial of %d is: %llu\n", number, factorial(number));
    
    return 0;
}






 
31. Convert Decimal to Binary
#include <stdio.h>

// Function to convert decimal to binary
void decimal_to_binary(unsigned int num) {
    if (num == 0) {
        printf("0");
        return;
    }

    unsigned int binary[32]; // Array to store binary digits
    int index = 0;

    // Convert decimal to binary
    while (num > 0) {
        binary[index++] = num % 2; // Store remainder (binary digit)
        num /= 2; // Divide by 2
    }

    // Print binary in reverse order
    printf("The binary equivalent is: ");
    for (int i = index - 1; i >= 0; i--) {
        printf("%u", binary[i]);
    }
    printf("\n");
}

int main() {
    unsigned int decimal_number;

    // Prompt user for a decimal number
    printf("Enter a decimal number: ");
    if (scanf("%u", &decimal_number) != 1) {
        printf("Please enter a valid non-negative integer.\n");
        return 1;
    }

    // Call the function to convert and display the binary equivalent
    decimal_to_binary(decimal_number);
    
    return 0;
}


 
32. Find ASCII Value of Character
#include <stdio.h>

int main() {
    char character;

    // Prompt user for a character
    printf("Enter a character: ");
    scanf(" %c", &character);  // Space before %c to skip any whitespace

    // Print the ASCII value of the character
    printf("The ASCII value of '%c' is: %d\n", character, (int)character);

    return 0;
}

/*
Enter a character: a
The ASCII value of 'a' is: 97

Enter a character: Z
The ASCII value of 'Z' is: 90
*/

 
33. Check Whether a String is Palindrome or Not
#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX_LENGTH 100

// Function to check if a string is a palindrome
int is_palindrome(const char *str) {
    int left = 0;
    int right = strlen(str) - 1;

    while (left < right) {
        if (str[left] != str[right]) {
            return 0; // Not a palindrome
        }
        left++;
        right--;
    }
    return 1; // Is a palindrome
}

// Function to clean the input string
void clean_string(const char *input, char *cleaned) {
    int j = 0;
    for (int i = 0; input[i] != '\0'; i++) {
        if (isalnum(input[i])) {
            cleaned[j++] = tolower(input[i]);
        }
    }
    cleaned[j] = '\0'; // Null-terminate the cleaned string
}

int main() {
    char input[MAX_LENGTH];
    char cleaned[MAX_LENGTH];

    // Prompt user for a string
    printf("Enter a string: ");
    fgets(input, sizeof(input), stdin);

    // Clean the string
    clean_string(input, cleaned);

    // Check if the cleaned string is a palindrome
    if (is_palindrome(cleaned)) {
        printf("\"%s\" is a palindrome.\n", input);
    } else {
        printf("\"%s\" is not a palindrome.\n", input);
    }

    return 0;
}

/*

Enter a string: A man, a plan, a canal, Panama
"A man, a plan, a canal, Panama
" is a palindrome.

Enter a string: asasd
"asasd
" is not a palindrome.
*/




 
34. Sort Words in Alphabetical Order
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_WORDS 100
#define MAX_WORD_LENGTH 50

// Function to compare two strings for qsort
int compare(const void *a, const void *b) {
    return strcmp(*(const char **)a, *(const char **)b);
}

int main() {
    char input[500];  // Buffer to store the input sentence
    char *words[MAX_WORDS];  // Array to store pointers to words
    int count = 0;  // Count of words

    // Prompt user for a sentence or a list of words
    printf("Enter a sentence or a list of words: ");
    fgets(input, sizeof(input), stdin);
    
    // Split the input into words
    char *token = strtok(input, " \n");
    while (token != NULL && count < MAX_WORDS) {
        words[count++] = token;  // Store the pointer to the word
        token = strtok(NULL, " \n");
    }

    // Sort the words in alphabetical order
    qsort(words, count, sizeof(char *), compare);

    // Display the sorted words
    printf("Sorted Words:\n");
    for (int i = 0; i < count; i++) {
        printf("%s", words[i]);
        if (i < count - 1) {
            printf(", ");
        }
    }
    printf("\n");

    return 0;
}

/*
Example Output:
Enter a sentence or a list of words: ad d dwqdwq qw qwd sadasd wqdwq
Sorted Words:
ad, d, dwqdwq, qw, qwd, sadasd, wqdwq
*/



 
35. Replace Characters of a String
#include <stdio.h>
#include <string.h>

void replace_characters(char *str, char target, char replacement) {
    for (int i = 0; str[i] != '\0'; i++) {
        if (str[i] == target) {
            str[i] = replacement;
        }
    }
}

int main() {
    char input_string[100];
    char target_char, replacement_char;

    // Prompt user for a string
    printf("Enter a string: ");
    fgets(input_string, sizeof(input_string), stdin);
    input_string[strcspn(input_string, "\n")] = 0; // Remove newline character

    if (strlen(input_string) == 0) {
        printf("Please enter a valid string.\n");
        return 1;
    }

    // Prompt user for target and replacement characters
    printf("Enter the target character: ");
    scanf(" %c", &target_char); // Leading space to consume any newline

    printf("Enter the replacement character: ");
    scanf(" %c", &replacement_char);

    // Replace characters in the input string
    replace_characters(input_string, target_char, replacement_char);
    
    // Display the modified string
    printf("Modified String: %s\n", input_string);

    return 0;
}

/*
Enter a string: Hello World!
Enter the target character: o
Enter the replacement character: O
Modified String: HellO WOrld!
*/




 
36. Reverse a String
#include <stdio.h>
#include <string.h>

void reverse_string(char *str) {
    int length = strlen(str);
    char temp;

    // Reverse the string in place
    for (int i = 0; i < length / 2; i++) {
        temp = str[i];
        str[i] = str[length - i - 1];
        str[length - i - 1] = temp;
    }
}

int main() {
    char input_string[100];

    // Prompt user for a string
    printf("Enter a string: ");
    fgets(input_string, sizeof(input_string), stdin);
    input_string[strcspn(input_string, "\n")] = 0; // Remove newline character

    // Check if input is a valid string
    if (strlen(input_string) > 0) {
        // Reverse the string
        reverse_string(input_string);

        // Display the reversed string
        printf("Reversed String: %s\n", input_string);
    } else {
        printf("Please enter a valid string.\n");
    }

    return 0;
}

/*
Enter a string: Hello World!
Reversed String: !dlroW olleH
*/





 
37. Check the Number of Occurrences of a Character in the String
#include <stdio.h>
#include <string.h>

int main() {
    char input_string[100];  // Array to hold the input string
    char target_char;        // Variable to hold the character to count
    int count = 0;          // Counter for occurrences

    // Prompt user for a string
    printf("Enter a string: ");
    fgets(input_string, sizeof(input_string), stdin);
    input_string[strcspn(input_string, "\n")] = 0; // Remove trailing newline

    // Prompt user for a character to count
    printf("Enter the character to count: ");
    scanf(" %c", &target_char); // Read a single character

    // Check if the input string is valid
    if (strlen(input_string) > 0) {
        // Count occurrences of the target character
        for (int i = 0; i < strlen(input_string); i++) {
            if (input_string[i] == target_char) {
                count++;
            }
        }

        // Display the result
        printf("Number of occurrences of '%c' in '%s': %d\n", target_char, input_string, count);
    } else {
        printf("Please enter a valid string.\n");
    }

    return 0;
}

/*

Enter a string: Hello World!
Enter the character to count: l
Number of occurrences of 'l' in 'Hello World!': 3
*/

 
38. Convert the First Letter of a String into UpperCase
#include <stdio.h>
#include <string.h>
#include <ctype.h>

void capitalize_first_letter(char *str) {
    // Capitalize the first letter if the string is not empty
    if (str[0] != '\0') {
        str[0] = toupper(str[0]);
    }
}

int main() {
    char input_string[100]; // Declare a string buffer with a maximum length

    // Prompt user for a string
    printf("Enter a string: ");
    fgets(input_string, sizeof(input_string), stdin); // Read a line of input
    input_string[strcspn(input_string, "\n")] = 0; // Remove trailing newline

    // Check if input is a valid string
    if (strlen(input_string) > 0) {
        // Capitalize the first letter
        capitalize_first_letter(input_string);

        // Display the result
        printf("Original String: %s\n", input_string);
        printf("String with First Letter Uppercase: %s\n", input_string);
    } else {
        printf("Please enter a valid string.\n");
    }

    return 0;
}

/*
Enter a string: asd
Original String: Asd
String with First Letter Uppercase: Asd
*/


 
39. Count the Number of Vowels in a String
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Function to count vowels in a string
int count_vowels(const char *str) {
    int count = 0;
    const char *vowels = "aeiouAEIOU"; // Vowels to check against

    // Iterate through each character in the string
    while (*str) {
        // Check if the character is a vowel
        if (strchr(vowels, *str)) {
            count++;
        }
        str++;
    }

    return count;
}

int main() {
    char input_string[100]; // Declare a string buffer with a maximum length

    // Prompt user for a string
    printf("Enter a string: ");
    fgets(input_string, sizeof(input_string), stdin); // Read a line of input
    input_string[strcspn(input_string, "\n")] = 0; // Remove trailing newline

    // Check if input is a valid string
    if (strlen(input_string) > 0) {
        // Call the function and display the result
        int number_of_vowels = count_vowels(input_string);
        printf("Number of vowels in '%s': %d\n", input_string, number_of_vowels);
    } else {
        printf("Please enter a valid string.\n");
    }

    return 0;
}

/*
Example Output:
Enter a string: asd
Number of vowels in 'asd': 1
*/




 
40. Check Whether a String Starts and Ends with Certain Characters
#include <stdio.h>
#include <string.h>

// Function to prompt the user for input
void prompt_user(const char *message, char *input, size_t size) {
    printf("%s", message);
    fgets(input, size, stdin);
    input[strcspn(input, "\n")] = 0; // Remove trailing newline
}

int main() {
    char input_string[100]; // Buffer for the main string
    char start_char[10];    // Buffer for starting characters
    char end_char[10];      // Buffer for ending characters

    // Prompt user for a string
    printf("Enter a string: ");
    fgets(input_string, sizeof(input_string), stdin);
    input_string[strcspn(input_string, "\n")] = 0; // Remove trailing newline

    // Check if the input string is valid
    if (strlen(input_string) == 0) {
        printf("Please enter a valid string.\n");
        return 1;
    }

    // Prompt user for starting and ending characters
    prompt_user("Enter the starting characters: ", start_char, sizeof(start_char));
    prompt_user("Enter the ending characters: ", end_char, sizeof(end_char));

    // Check if the string starts with the specified characters
    int starts_with = strncmp(input_string, start_char, strlen(start_char)) == 0;
    // Check if the string ends with the specified characters
    int ends_with = strlen(end_char) == 0 || strcmp(input_string + strlen(input_string) - strlen(end_char), end_char) == 0;

    // Display the result
    if (starts_with && ends_with) {
        printf("The string '%s' starts with '%s' and ends with '%s'.\n", input_string, start_char, end_char);
    } else {
        printf("The string '%s' does not start with '%s' or end with '%s'.\n", input_string, start_char, end_char);
    }

    return 0;
}

/*
Example Output:
Enter a string: asd
Enter the starting characters: a
Enter the ending characters: d
The string 'asd' starts with 'a' and ends with 'd'.
*/


 
41. Replace All Occurrences of a String
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void replace_all_occurrences(const char *original, const char *search, const char *replacement, char *result) {
    const char *pos = original;
    size_t search_len = strlen(search);
    size_t replacement_len = strlen(replacement);
    size_t result_index = 0;

    // Iterate through the original string
    while ((pos = strstr(pos, search)) != NULL) {
        // Copy the part of the original string before the search string
        size_t length = pos - original;
        strncpy(result + result_index, original, length);
        result_index += length;

        // Copy the replacement string into the result
        strncpy(result + result_index, replacement, replacement_len);
        result_index += replacement_len;

        // Move past the found occurrence
        pos += search_len;
        original = pos;
    }

    // Copy any remaining part of the original string
    strcpy(result + result_index, original);
}

int main() {
    // Example string
    const char *original_string = "Hello world, world!";
    // String to replace
    const char *search_string = "world";
    // Replacement string
    const char *replacement_string = "universe";

    // Create a buffer to hold the modified string
    char modified_string[256]; // Make sure this is large enough to hold the result

    // Replace all occurrences of search_string with replacement_string
    replace_all_occurrences(original_string, search_string, replacement_string, modified_string);

    // Display the result
    printf("Original String: %s\n", original_string);
    printf("Modified String: %s\n", modified_string);

    return 0;
}

/*
Example Output:
Original String: Hello world, world!
Modified String: Hello universe, universe!
*/



 
42. Create Multiline Strings
#include <stdio.h>

int main() {
    // Multiline string using escape sequences for new lines
    const char *multiline_string = 
        "This is a multiline string.\n"
        "It spans multiple lines.\n"
        "You can include line breaks and indentation easily.\n";

    // Print the multiline string
    printf("%s", multiline_string);

    return 0;
}

/*
Example Output:
This is a multiline string.
It spans multiple lines.
You can include line breaks and indentation easily.
*/





 
43. Format Numbers as Currency Strings
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function to format the number as a currency string
void format_currency(double amount, char *result) {
    // Split the number into integer and fractional parts
    long long integer_part = (long long)amount; // Get the integer part
    long long fractional_part = (long long)((amount - integer_part) * 100 + 0.5); // Get the fractional part, rounded

    // Manually format the integer part with thousand separators
    char formatted_integer[50]; // Buffer to hold the formatted integer part
    int pos = 0;

    // Handle the sign for negative amounts
    if (integer_part < 0) {
        formatted_integer[pos++] = '-';
        integer_part = -integer_part; // Work with the absolute value
    }

    // Add thousand separators
    char buffer[20];
    snprintf(buffer, sizeof(buffer), "%lld", integer_part); // Convert integer to string

    int len = strlen(buffer);
    int count = 0;

    for (int i = len - 1; i >= 0; i--) {
        if (count > 0 && count % 3 == 0) {
            formatted_integer[pos++] = ','; // Add comma as thousand separator
        }
        formatted_integer[pos++] = buffer[i]; // Copy character from the buffer
        count++;
    }

    // Reverse the formatted integer part
    for (int i = 0; i < pos / 2; i++) {
        char temp = formatted_integer[i];
        formatted_integer[i] = formatted_integer[pos - 1 - i];
        formatted_integer[pos - 1 - i] = temp;
    }
    formatted_integer[pos] = '\0'; // Null-terminate the string

    // Format the final currency string
    sprintf(result, "$%s.%02lld", formatted_integer, fractional_part);
}

int main() {
    double amount = 1234567.89; // Example number
    char formatted_amount[100]; // Buffer to hold the formatted currency string

    // Format the amount as a currency string
    format_currency(amount, formatted_amount);

    // Display the formatted currency string
    printf("Formatted Amount: %s\n", formatted_amount);

    return 0;
}

/*
Example Output:
Formatted Amount: $1,234,567.89
*/

44. Generate Random String
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define STRING_LENGTH 8

// Function to generate a random string of a given length
void generate_random_string(char *random_string, size_t length) {
    const char characters[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    size_t num_characters = sizeof(characters) - 1; // Exclude the null terminator

    // Seed the random number generator
    srand(time(NULL));

    for (size_t i = 0; i < length; i++) {
        int index = rand() % num_characters; // Get a random index
        random_string[i] = characters[index]; // Assign a random character
    }

    random_string[length] = '\0'; // Null-terminate the string
}

int main() {
    char random_string[STRING_LENGTH + 1]; // +1 for null terminator

    // Generate a random string of length 8
    generate_random_string(random_string, STRING_LENGTH);

    // Display the random string
    printf("Random String: %s\n", random_string);

    return 0;
}

/*
Example Output:
Random String: jQmNYWWC
*/


 
45. Check if a String Starts with Another String
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int main() {
    // Example strings
    const char *main_string = "Hello, World!";
    const char *search_string = "Hello";

    // Check if main_string starts with search_string
    bool starts_with = strncmp(main_string, search_string, strlen(search_string)) == 0;

    // Display the result
    printf("Does the string start with '%s'? %s\n", search_string, starts_with ? "true" : "false");

    return 0;
}

/*
Example Output:
Does the string start with 'Hello'? true
*/



 
46. Trim a String
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Function to trim leading and trailing whitespace
void trim_whitespace(char *str) {
    // Trim leading whitespace
    while (isspace((unsigned char)*str)) str++;

    // Trim trailing whitespace
    char *end = str + strlen(str) - 1;
    while (end > str && isspace((unsigned char)*end)) end--;

    // Null-terminate the trimmed string
    *(end + 1) = '\0';
}

int main() {
    // Example string with leading and trailing whitespaces
    char string_with_spaces[] = "   Hello, World!   ";

    // Trim the string
    trim_whitespace(string_with_spaces);

    // Display the result
    printf("Original String: '   Hello, World!   '\n");
    printf("Trimmed String: '%s'\n", string_with_spaces);

    return 0;
}

/*
Example Output:
Original String: '   Hello, World!   '
Trimmed String: 'Hello, World!'
*/

47. Check Whether a String Contains a Substring
#include <stdio.h>
#include <string.h>

int main() {
    // Example string
    const char *main_string = "Hello, World!";
    const char *substring_to_check = "World";

    // Check if main_string contains substring_to_check
    const char *result = strstr(main_string, substring_to_check);

    // Display the result
    if (result) {
        printf("Does the string contain '%s'? true\n", substring_to_check);
    } else {
        printf("Does the string contain '%s'? false\n", substring_to_check);
    }

    return 0;
}

/*
Example Output:
Does the string contain 'World'? true
*/




 
48. Compare Two Strings
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Function to perform case-insensitive comparison
int case_insensitive_compare(const char *str1, const char *str2) {
    while (*str1 && *str2) {
        if (tolower((unsigned char)*str1) != tolower((unsigned char)*str2)) {
            return 0; // Not equal
        }
        str1++;
        str2++;
    }
    return *str1 == *str2; // Check if both strings ended
}

int main() {
    // Example strings
    const char *string1 = "Hello";
    const char *string2 = "hello";

    // Case-sensitive comparison
    int case_sensitive_comparison = strcmp(string1, string2) == 0;

    // Case-insensitive comparison
    int case_insensitive_comparison = case_insensitive_compare(string1, string2);

    // Display the results
    printf("Case-sensitive comparison: %s\n", case_sensitive_comparison ? "true" : "false");
    printf("Case-insensitive comparison: %s\n", case_insensitive_comparison ? "true" : "false");

    return 0;
}

/*
Example Output:
Case-sensitive comparison: false
Case-insensitive comparison: true
*/








 
49. Encode a String to Base64
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Base64 encoding table
const char base64_table[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

// Function to encode a string to Base64
char* base64_encode(const char* input) {
    size_t input_length = strlen(input);
    size_t output_length = 4 * ((input_length + 2) / 3); // Calculate the output length
    char* encoded = (char*)malloc(output_length + 1); // +1 for the null terminator

    if (encoded == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(1);
    }

    size_t i, j;
    for (i = 0, j = 0; i < input_length;) {
        uint32_t octet_a = i < input_length ? (unsigned char)input[i++] : 0;
        uint32_t octet_b = i < input_length ? (unsigned char)input[i++] : 0;
        uint32_t octet_c = i < input_length ? (unsigned char)input[i++] : 0;

        uint32_t triple = (octet_a << 16) | (octet_b << 8) | octet_c;

        encoded[j++] = base64_table[(triple >> 18) & 0x3F];
        encoded[j++] = base64_table[(triple >> 12) & 0x3F];
        encoded[j++] = (i > input_length + 1) ? '=' : base64_table[(triple >> 6) & 0x3F];
        encoded[j++] = (i > input_length) ? '=' : base64_table[triple & 0x3F];
    }

    encoded[output_length] = '\0'; // Null-terminate the output string
    return encoded;
}

int main() {
    // Original string
    const char* original_string = "Hello, 你好!";

    // Encode the string to Base64
    char* base64_encoded_string = base64_encode(original_string);

    // Display the result
    printf("Original String: %s\n", original_string);
    printf("Base64 Encoded String: %s\n", base64_encoded_string);

    // Free allocated memory
    free(base64_encoded_string);

    return 0;
}

/*
Example Output:
Original String: Hello, 你好!
Base64 Encoded String: SGVsbG8sIOS9oOWlvSE8h
*/





 
50. Replace all Instances of a Character in a String
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function to replace all instances of a character in a string
char* replace_char(const char* str, char char_to_replace, char replacement_char) {
    // Create a new string with the same length as the original
    char* modified_string = (char*)malloc(strlen(str) + 1); // +1 for null terminator
    if (modified_string == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(1);
    }

    // Replace characters
    for (size_t i = 0; i < strlen(str); i++) {
        modified_string[i] = (str[i] == char_to_replace) ? replacement_char : str[i];
    }
    modified_string[strlen(str)] = '\0'; // Null-terminate the modified string

    return modified_string;
}

int main() {
    // Example string
    const char* original_string = "Hello, World!";

    // Character to replace
    char char_to_replace = 'l';

    // Replacement character
    char replacement_char = 'x';

    // Replace all instances of char_to_replace with replacement_char
    char* modified_string = replace_char(original_string, char_to_replace, replacement_char);

    // Display the result
    printf("Original String: %s\n", original_string);
    printf("Modified String: %s\n", modified_string);

    // Free allocated memory
    free(modified_string);

    return 0;
}

/*
Example Output:
Original String: Hello, World!
Modified String: Hexxo, Worxd!
*/



 
51. Replace All Line Breaks with
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function to replace all line breaks in a string
char* replace_line_breaks(const char* str, const char* replacement) {
    // Calculate the size for the new string
    size_t str_len = strlen(str);
    size_t replacement_len = strlen(replacement);
    
    // Allocate enough space for the modified string
    // Worst case: every character is a line break, so we need extra space
    char* modified_string = (char*)malloc(str_len * replacement_len + 1); 
    if (modified_string == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(1);
    }

    size_t j = 0; // Index for modified string
    for (size_t i = 0; i < str_len; i++) {
        if (str[i] == '\n') {
            // Replace line break with the replacement string
            for (size_t k = 0; k < replacement_len; k++) {
                modified_string[j++] = replacement[k];
            }
        } else {
            modified_string[j++] = str[i];
        }
    }
    modified_string[j] = '\0'; // Null-terminate the modified string

    return modified_string;
}

int main() {
    // Example string with line breaks
    const char* string_with_line_breaks = "Hello,\nWorld!\nThis is a new line.";

    // Replacement string
    const char* replacement_string = "-";

    // Replace all line breaks with the replacement string
    char* string_without_line_breaks = replace_line_breaks(string_with_line_breaks, replacement_string);

    // Display the result
    printf("Original String:\n%s\n", string_with_line_breaks);
    printf("\nString without Line Breaks:\n%s\n", string_without_line_breaks);

    // Free allocated memory
    free(string_without_line_breaks);

    return 0;
}

/*
Example Output:
Original String:
Hello,
World!
This is a new line.

String without Line Breaks:
Hello,-World!-This is a new line.
*/




52. Check Leap Year
#include <stdio.h>
#include <stdbool.h>

// Function to check if a year is a leap year
bool is_leap_year(int year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

int main() {
    // Example year to check
    int year_to_check = 2024;

    // Check if the year is a leap year
    if (is_leap_year(year_to_check)) {
        printf("%d is a leap year.\n", year_to_check);
    } else {
        printf("%d is not a leap year.\n", year_to_check);
    }

    return 0;
}

/*
Output:
2024 is a leap year.
*/


 
53. Format the Date
#include <stdio.h>
#include <time.h>

int main() {
    // Get the current time
    time_t now = time(NULL);
    
    // Convert to local time
    struct tm *local_time = localtime(&now);

    // Format the date
    char formatted_date[100];
    strftime(formatted_date, sizeof(formatted_date), "%A, %B %d, %Y", local_time);

    // Display the result
    printf("Formatted Date: %s\n", formatted_date);

    return 0;
}

/*
Output (example):
Formatted Date: Friday, September 20, 2024
*/



 
54. Display Current Date
#include <stdio.h>
#include <time.h>

int main() {
    // Get the current time
    time_t now = time(NULL);
    
    // Convert to local time
    struct tm *local_time = localtime(&now);

    // Format the current date as MM/DD/YYYY
    char formatted_date[11]; // MM/DD/YYYY + null terminator
    strftime(formatted_date, sizeof(formatted_date), "%m/%d/%Y", local_time);

    // Display the result
    printf("Current Date: %s\n", formatted_date);

    return 0;
}

/*
Output (example):
Current Date: 09/20/2024
*/


 
55. Compare The Value of Two Dates
#include <stdio.h>
#include <time.h>

int main() {
    // Define two example dates
    struct tm date1 = {0};
    struct tm date2 = {0};

    // Initialize date1 to January 1, 2022
    date1.tm_year = 2022 - 1900; // tm_year is years since 1900
    date1.tm_mon = 0;            // January (0-based)
    date1.tm_mday = 1;           // 1st day

    // Initialize date2 to January 1, 2023
    date2.tm_year = 2023 - 1900; // tm_year is years since 1900
    date2.tm_mon = 0;            // January (0-based)
    date2.tm_mday = 1;           // 1st day

    // Convert struct tm to time_t for comparison
    time_t timestamp1 = mktime(&date1);
    time_t timestamp2 = mktime(&date2);

    // Compare the two timestamps
    if (timestamp1 < timestamp2) {
        printf("Date1 (%04d-%02d-%02d) is earlier than Date2 (%04d-%02d-%02d)\n",
               date1.tm_year + 1900, date1.tm_mon + 1, date1.tm_mday,
               date2.tm_year + 1900, date2.tm_mon + 1, date2.tm_mday);
    } else if (timestamp1 > timestamp2) {
        printf("Date1 (%04d-%02d-%02d) is later than Date2 (%04d-%02d-%02d)\n",
               date1.tm_year + 1900, date1.tm_mon + 1, date1.tm_mday,
               date2.tm_year + 1900, date2.tm_mon + 1, date2.tm_mday);
    } else {
        printf("Date1 (%04d-%02d-%02d) is equal to Date2 (%04d-%02d-%02d)\n",
               date1.tm_year + 1900, date1.tm_mon + 1, date1.tm_mday,
               date2.tm_year + 1900, date2.tm_mon + 1, date2.tm_mday);
    }

    return 0;
}

/*
Output (example):
Date1 (2022-01-01) is earlier than Date2 (2023-01-01)
*/




 
56. Create Countdown Timer
#include <stdio.h>
#include <time.h>
#include <unistd.h>

int main() {
    // Set the target time to 1 minute from now
    time_t target_time = time(NULL) + 60; // 60 seconds from now

    while (1) {
        // Calculate the remaining time
        time_t current_time = time(NULL);
        time_t time_diff = target_time - current_time;

        // Break if the countdown has expired
        if (time_diff <= 0) {
            printf("Countdown expired!\n");
            break;
        }

        // Calculate days, hours, minutes, and seconds
        int days = time_diff / 86400;
        int hours = (time_diff % 86400) / 3600;
        int minutes = (time_diff % 3600) / 60;
        int seconds = time_diff % 60;

        // Display the countdown
        printf("Countdown: %dd %dh %dm %ds\r", days, hours, minutes, seconds);
        fflush(stdout); // Flush the output buffer

        // Sleep for 1 second
        sleep(1);
    }

    return 0;
}

/*
Output (example):
Countdown: 0d 0h 0m 56s
Countdown expired!
*/




 
57. Remove Specific Item from an Array
#include <stdio.h>

void remove_item(int arr[], int *size, int item_to_remove) {
    int i, j;
    
    // Loop through the array to find the item to remove
    for (i = 0; i < *size; i++) {
        if (arr[i] == item_to_remove) {
            // Item found; shift elements to the left
            for (j = i; j < *size - 1; j++) {
                arr[j] = arr[j + 1];
            }
            (*size)--; // Decrease the size of the array
            i--; // Adjust the index to check the new value at the current position
        }
    }
}

int main() {
    int original_list[] = {1, 2, 3, 4, 5};
    int size = sizeof(original_list) / sizeof(original_list[0]);
    int item_to_remove = 3;

    // Remove the specified item
    remove_item(original_list, &size, item_to_remove);

    // Display the updated list
    printf("Updated List: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", original_list[i]);
    }
    printf("\n");

    return 0;
}
58. Check if an Array Contains a Specified Value
#include <stdio.h>
#include <stdbool.h>

bool contains_value(int arr[], int size, int value_to_check) {
    // Loop through the array to check for the value
    for (int i = 0; i < size; i++) {
        if (arr[i] == value_to_check) {
            return true; // Value found
        }
    }
    return false; // Value not found
}

int main() {
    int my_list[] = {1, 2, 3, 4, 5};
    int size = sizeof(my_list) / sizeof(my_list[0]);
    int value_to_check = 3;

    // Check if the array contains the specified value
    bool contains_value_result = contains_value(my_list, size, value_to_check);

    // Display the result
    printf("Does the list include %d? %s\n", value_to_check, contains_value_result ? "true" : "false");

    return 0;
}

// Output:
// Does the list include 3? true




59. Insert Item in an Array
#include <stdio.h>

void insert_item(int arr[], int *size, int item_to_insert) {
    // Insert the item at the end of the array
    arr[*size] = item_to_insert;
    (*size)++; // Increase the size of the array
}

int main() {
    int my_list[6] = {1, 2, 3, 4, 5}; // Initial size is 5
    int size = 5; // Current size of the array
    int item_to_insert = 6;

    // Insert the item into the array
    insert_item(my_list, &size, item_to_insert);

    // Display the result
    printf("List after inserting: [");
    for (int i = 0; i < size; i++) {
        printf("%d", my_list[i]);
        if (i < size - 1) {
            printf(", ");
        }
    }
    printf("]\n");

    return 0;
}

// Output:
// List after inserting: [1, 2, 3, 4, 5, 6]



 
60. Get Random Item from an Array
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    // Example array
    int my_list[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = sizeof(my_list) / sizeof(my_list[0]);

    // Seed the random number generator
    srand(time(NULL));

    // Get a random index
    int random_index = rand() % size;

    // Get the random item
    int random_item = my_list[random_index];

    // Display the result
    printf("Random Item: %d\n", random_item);

    return 0;
}

// Output:
// Random Item: 8







 
61. Perform Intersection Between Two Arrays
#include <stdio.h>

int main() {
    // Example arrays
    int list1[] = {1, 2, 3, 4, 5};
    int list2[] = {3, 4, 5, 6, 7};
    int size1 = sizeof(list1) / sizeof(list1[0]);
    int size2 = sizeof(list2) / sizeof(list2[0]);

    // Array to store the intersection
    int intersection[size1 < size2 ? size1 : size2]; // Maximum size for intersection
    int intersection_size = 0;

    // Find the intersection of the two arrays
    for (int i = 0; i < size1; i++) {
        for (int j = 0; j < size2; j++) {
            if (list1[i] == list2[j]) {
                // Check if the element is already in the intersection array
                int already_exists = 0;
                for (int k = 0; k < intersection_size; k++) {
                    if (intersection[k] == list1[i]) {
                        already_exists = 1;
                        break;
                    }
                }
                if (!already_exists) {
                    intersection[intersection_size] = list1[i];
                    intersection_size++;
                }
            }
        }
    }

    // Display the result
    printf("Intersection: {");
    for (int i = 0; i < intersection_size; i++) {
        printf("%d", intersection[i]);
        if (i < intersection_size - 1) {
            printf(", ");
        }
    }
    printf("}\n");

    return 0;
}

// Output:
// Intersection: {3, 4, 5}



 
62. Split Array into Smaller Chunks
#include <stdio.h>
#include <stdlib.h>

void chunk_array(int *array, int size, int chunk_size) {
    int chunks = (size + chunk_size - 1) / chunk_size; // Calculate number of chunks

    // Display the original array
    printf("Original Array: {");
    for (int i = 0; i < size; i++) {
        printf("%d", array[i]);
        if (i < size - 1) {
            printf(", ");
        }
    }
    printf("}\n");

    // Display the chunks
    printf("Chunks:\n");
    for (int i = 0; i < chunks; i++) {
        printf("{");
        for (int j = 0; j < chunk_size && (i * chunk_size + j) < size; j++) {
            printf("%d", array[i * chunk_size + j]);
            if (j < chunk_size - 1 && (i * chunk_size + j + 1) < size) {
                printf(", ");
            }
        }
        printf("}\n");
    }
}

int main() {
    // Example array
    int my_array[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = sizeof(my_array) / sizeof(my_array[0]);

    // Split the array into chunks of size 3
    chunk_array(my_array, size, 3);

    return 0;
}

// Output:
// Original Array: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
// Chunks:
// {1, 2, 3}
// {4, 5, 6}
// {7, 8, 9}
// {10}



 
63. Get File Extension
#include <stdio.h>
#include <string.h>

const char* get_file_extension(const char* file_name) {
    // Find the last occurrence of the dot character
    const char* dot = strrchr(file_name, '.');
    
    // Return the extension if found, otherwise return NULL
    if (dot && dot != file_name) {
        return dot + 1; // Return the string after the dot
    }
    return NULL; // No extension found
}

int main() {
    // Example file name
    const char* file_name = "example.txt";

    // Get the file extension
    const char* extension = get_file_extension(file_name);
    
    // Display the result
    if (extension) {
        printf("File Extension: %s\n", extension);
    } else {
        printf("No file extension found.\n");
    }

    return 0;
}

// Output:
// File Extension: txt



 
64. Check If a Variable Is undefined or null
#include <stdio.h>

int main() {
    // Define a variable as a pointer to an integer (initially NULL)
    int *variable = NULL;

    // Check if the variable is NULL
    if (variable != NULL) {
        printf("Variable has a value\n");
    } else {
        printf("Variable is NULL\n");
    }

    return 0;
}

/*
Expected output:
Variable is NULL
*/




 
65. Generate a Random Number Between Two Numbers
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Function to generate a random number between min_val and max_val (inclusive)
int get_random_number(int min_val, int max_val) {
    return rand() % (max_val - min_val + 1) + min_val;
}

int main() {
    // Seed the random number generator with the current time
    srand(time(NULL));
    
    // Generate a random number between 1 and 100
    int random_num = get_random_number(1, 100);
    
    // Print the random number
    printf("Random Number: %d\n", random_num);

    return 0;
}

/*
Expected output (will vary each time):
Random Number: 48
*/




 
66. Longest Daily Streak
#include <stdio.h>

// Function to calculate the longest daily login streak
int daily_streak(int logins[], int size) {
    int max_streak = 0;
    int current_streak = 0;

    for (int i = 0; i < size; i++) {
        if (logins[i] == 1) {  // Check if logged in (true is represented by 1)
            current_streak++;  // Increase current streak
            if (current_streak > max_streak) {
                max_streak = current_streak;  // Update max streak if needed
            }
        } else {
            current_streak = 0;  // Reset current streak if not logged in
        }
    }

    return max_streak;  // Return the longest streak found
}

int main() {
    // Test cases
    int logins1[] = {1, 1, 0, 1};
    int logins2[] = {0, 0, 0};
    int logins3[] = {1, 1, 1, 0, 1, 1};

    printf("%d\n", daily_streak(logins1, 4));  // Outputs: 2
    printf("%d\n", daily_streak(logins2, 3));  // Outputs: 0
    printf("%d\n", daily_streak(logins3, 6));  // Outputs: 3

    return 0;
}

/*
Expected output:
2
0
3
*/


 
67. Validate an Email Address
#include <stdio.h>
#include <regex.h>

// Function to validate an email address using regular expression
int validate_email(const char *email) {
    regex_t regex;
    int result;

    // Define the regular expression pattern for basic email validation
    const char *pattern = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";

    // Compile the regular expression
    result = regcomp(&regex, pattern, REG_EXTENDED);
    if (result) {
        printf("Could not compile regex\n");
        return 0;
    }

    // Execute the regular expression to match the email
    result = regexec(&regex, email, 0, NULL, 0);
    regfree(&regex);  // Free the memory allocated to the regex

    // Return 1 if the email matches the regex, otherwise return 0
    return !result;
}

int main() {
    // Example usage
    const char *email_to_validate = "example@email.com";

    if (validate_email(email_to_validate)) {
        printf("Email is valid\n");
    } else {
        printf("Email is not valid\n");
    }

    return 0;
}

/*
Expected output:
Email is valid
*/



 
68. Record Temperatures
#include <stdio.h>

// Function to update the record temperatures
void record_temps(int record[][2], int current[][2], int size) {
    for (int i = 0; i < size; i++) {
        // Update record low if the current daily low is lower
        if (current[i][0] < record[i][0]) {
            record[i][0] = current[i][0];
        }
        // Update record high if the current daily high is higher
        if (current[i][1] > record[i][1]) {
            record[i][1] = current[i][1];
        }
    }
}

int main() {
    // Initial record temperatures
    int records[7][2] = {
        {34, 82}, {24, 82}, {20, 89}, {5, 88}, {9, 88}, {26, 89}, {27, 83}
    };
    
    // Current week's temperatures
    int current_week_temps[7][2] = {
        {44, 72}, {19, 70}, {40, 69}, {39, 68}, {33, 64}, {36, 70}, {38, 69}
    };
    
    // Update the records with the current week's temperatures
    record_temps(records, current_week_temps, 7);
    
    // Print the updated record temperatures
    printf("Updated Record Temperatures:\n");
    for (int i = 0; i < 7; i++) {
        printf("[%d, %d]\n", records[i][0], records[i][1]);
    }

    return 0;
}

/*
Expected Output:
Updated Record Temperatures:
[34, 82]
[19, 82]
[20, 89]
[5, 88]
[9, 88]
[26, 89]
[27, 83]
*/






 
69. Kaprekar Numbers
#include <stdio.h>
#include <stdbool.h>
#include <math.h>
#include <string.h>

// Function to check if a number is a Kaprekar number
bool is_kaprekar(unsigned long n) {
    if (n == 0 || n == 1) {
        return true; // 0 and 1 are Kaprekar numbers
    }

    // Calculate the square of n
    unsigned long square = n * n;

    // Convert the square to a string to split into left and right parts
    char square_str[21]; // Buffer to hold the string of the squared number
    sprintf(square_str, "%lu", square); // Convert square to string

    int len = strlen(square_str); // Get the length of the string

    // Split the squared number into left and right parts
    char left_str[11] = "";  // To hold the left part
    char right_str[11] = ""; // To hold the right part

    if (len == 1) {
        strcpy(right_str, square_str); // Only right part if length is 1
    } else {
        int split_index = len / 2;
        strncpy(left_str, square_str, len - split_index);  // Left part
        strcpy(right_str, square_str + len - split_index); // Right part
    }

    // Convert left and right parts to numbers
    unsigned long left = (left_str[0] != '\0') ? strtoul(left_str, NULL, 10) : 0;
    unsigned long right = (right_str[0] != '\0') ? strtoul(right_str, NULL, 10) : 0;

    // Check if the sum of left and right equals n
    return (left + right == n);
}

int main() {
    // Test cases
    printf("is_kaprekar(3) ➞ %s\n", is_kaprekar(3) ? "true" : "false");      // false
    printf("is_kaprekar(5) ➞ %s\n", is_kaprekar(5) ? "true" : "false");      // false
    printf("is_kaprekar(297) ➞ %s\n", is_kaprekar(297) ? "true" : "false");  // true

    return 0;
}

/*
Expected Output:
is_kaprekar(3) ➞ false
is_kaprekar(5) ➞ false
is_kaprekar(297) ➞ true
*/





 
70. Pass Parameter to a threading.Timer Function
#include <stdio.h>
#include <pthread.h>
#include <unistd.h>
#include <string.h>

// Function to be executed after a delay
void *my_function(void *arg) {
    char *parameter = (char *)arg;
    printf("Parameter received: %s\n", parameter);
    return NULL;
}

int main() {
    // Define the parameter
    char my_parameter[] = "Hello, world!";

    // Create a thread to execute the function with a delay
    pthread_t thread;
    
    // Define the function to execute with a delay
    void *delayed_execution(void *param) {
        sleep(1); // Delay for 1 second
        my_function(param); // Pass the parameter to the function
        return NULL;
    }

    // Create a new thread to run the delayed_execution function
    pthread_create(&thread, NULL, delayed_execution, (void *)my_parameter);

    // Wait for the thread to finish
    pthread_join(thread, NULL);

    return 0;
}

/*
Expected Output:
Parameter received: Hello, world!
*/



 
71. Generate a Range of Numbers and Characters
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

// Function to generate a range of numbers (inclusive)
unsigned int* generate_number_range(unsigned int start, unsigned int end, int *size) {
    *size = end - start + 1;
    unsigned int *range = (unsigned int*)malloc((*size) * sizeof(unsigned int));
    for (unsigned int i = 0; i < *size; ++i) {
        range[i] = start + i;
    }
    return range;
}

// Function to generate a range of characters (inclusive)
char* generate_char_range(char start, char end, int *size) {
    *size = end - start + 1;
    char *range = (char*)malloc((*size) * sizeof(char));
    for (int i = 0; i < *size; ++i) {
        range[i] = start + i;
    }
    return range;
}

int main() {
    // Generate numbers from 1 to 5
    int num_size;
    unsigned int* number_range = generate_number_range(1, 5, &num_size);
    printf("Number Range: ");
    for (int i = 0; i < num_size; ++i) {
        printf("%u ", number_range[i]);
    }
    printf("\n");
    free(number_range); // Free the allocated memory for number range

    // Generate characters from 'a' to 'e'
    int char_size;
    char* char_range = generate_char_range('a', 'e', &char_size);
    printf("Character Range: ");
    for (int i = 0; i < char_size; ++i) {
        printf("%c ", char_range[i]);
    }
    printf("\n");
    free(char_range); // Free the allocated memory for character range

    return 0;
}

/*
Expected Output:
Number Range: 1 2 3 4 5 
Character Range: a b c d e 
*/


 
72. Perform Function Overloading
#include <stdio.h>

// Function with no arguments
void example_function() {
    printf("No arguments\n");
}

// Function with one integer argument
void example_function_number(int n) {
    printf("One number argument: %d\n", n);
}

// Function with a string and an integer argument
void example_function_string_and_number(const char* s, int n) {
    printf("String and number arguments: %s, %d\n", s, n);
}

int main() {
    example_function();                          // Call function with no arguments
    example_function_number(42);                 // Call function with one integer argument
    example_function_string_and_number("Hello", 7); // Call function with string and integer arguments

    // Note: The following line is commented out as it would lead to a type mismatch:
    // example_function("world", 7); // Uncommenting this will cause a compilation error

    return 0;
}

/*
Expected Output:
No arguments
One number argument: 42
String and number arguments: Hello, 7
*/




 
73. Reverse Image
#include <stdio.h>
#include <stdlib.h>

// Function to reverse the image
void reverse_image(int rows, int cols, int image[rows][cols]) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            // Invert the pixel value
            image[i][j] = 1 - image[i][j];
        }
    }
}

// Function to print the image
void print_image(int rows, int cols, int image[rows][cols]) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d ", image[i][j]);
        }
        printf("\n");
    }
}

int main() {
    // Define first image
    int image1[3][3] = {
        {1, 0, 0},
        {0, 1, 0},
        {0, 0, 1},
    };
    reverse_image(3, 3, image1);
    print_image(3, 3, image1); // Output: [[0, 1, 1], [1, 0, 1], [1, 1, 0]]

    // Define second image
    int image2[2][3] = {
        {1, 1, 1},
        {0, 0, 0},
    };
    reverse_image(2, 3, image2);
    print_image(2, 3, image2); // Output: [[0, 0, 0], [1, 1, 1]]

    // Define third image
    int image3[2][3] = {
        {1, 0, 0},
        {1, 0, 0},
    };
    reverse_image(2, 3, image3);
    print_image(2, 3, image3); // Output: [[0, 1, 1], [0, 1, 1]]

    return 0;
}

/*
Expected Output:
0 1 1 
1 0 1 
1 1 0 
0 0 0 
1 1 1 
0 1 1 
0 1 1 
*/



 
74. No Yelling
#include <stdio.h>
#include <string.h>
#include <ctype.h>

void no_yelling(const char *sentence, char *result) {
    int len = strlen(sentence);
    int end = len - 1;

    // Trim the trailing '!' and '?'
    while (end >= 0 && (sentence[end] == '!' || sentence[end] == '?')) {
        end--;
    }

    // Check if the last character was '!' or '?'
    char last_char = sentence[len - 1];
    strncpy(result, sentence, end + 1);
    result[end + 1] = '\0';  // Null-terminate the string

    // Append the appropriate punctuation if necessary
    if (last_char == '!' || last_char == '?') {
        int result_len = strlen(result);
        result[result_len] = last_char;
        result[result_len + 1] = '\0';
    }
}

int main() {
    char result[100];

    no_yelling("What went wrong?????????", result);
    printf("%s\n", result);  // ➞ "What went wrong?"

    no_yelling("Oh my goodness!!!", result);
    printf("%s\n", result);  // ➞ "Oh my goodness!"

    no_yelling("I just!!! can!!! not!!! believe!!! it!!!", result);
    printf("%s\n", result);  // ➞ "I just!!! can!!! not!!! believe!!! it!"

    no_yelling("Oh my goodness!", result);
    printf("%s\n", result);  // ➞ "Oh my goodness!"

    no_yelling("I just cannot believe it.", result);
    printf("%s\n", result);  // ➞ "I just cannot believe it."

    return 0;
}

/*
What went wrong?
Oh my goodness!
I just!!! can!!! not!!! believe!!! it!
Oh my goodness!
I just cannot believe it.
*/



 
75. Check if a Number is Float or Integer
#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>

void check_number_type(const char *number) {
    int is_integer = 1, is_float = 0;
    int dot_seen = 0;

    for (int i = 0; i < strlen(number); i++) {
        if (number[i] == '.') {
            if (dot_seen) {
                is_integer = 0;
                break;
            }
            dot_seen = 1;
            is_float = 1;
        } else if (!isdigit(number[i]) && number[i] != '-' && number[i] != '+') {
            is_integer = 0;
            is_float = 0;
            break;
        }
    }

    if (is_integer && !is_float) {
        printf("%s is an integer.\n", number);
    } else if (is_float) {
        printf("%s is a float.\n", number);
    } else {
        printf("%s is not a valid number.\n", number);
    }
}

int main() {
    check_number_type("5");         // Outputs: 5 is an integer.
    check_number_type("3.14");      // Outputs: 3.14 is a float.
    check_number_type("7.0");       // Outputs: 7.0 is a float.
    check_number_type("-2.5");      // Outputs: -2.5 is a float.
    check_number_type("abc");       // Outputs: abc is not a valid number.

    return 0;
}






 
76. Pass a Function as Parameter
#include <stdio.h>

// Define a function type for operations
typedef int (*Operation)(int, int);

// Function that takes another function as a parameter
int operate_on_numbers(int a, int b, Operation operation) {
    return operation(a, b); // Call the passed function with the provided arguments
}

// Example functions to be passed as parameters
int add(int x, int y) {
    return x + y;
}

int multiply(int x, int y) {
    return x * y;
}

int main() {
    // Example usage
    int result1 = operate_on_numbers(3, 5, add);
    printf("Result of addition: %d\n", result1);  // Outputs: 8

    int result2 = operate_on_numbers(3, 5, multiply);
    printf("Result of multiplication: %d\n", result2);  // Outputs: 15

    return 0;
}

// Result of addition: 8
// Result of multiplication: 15



77. Slidey Numbers
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Function to check if a number is slidey
bool is_slidey(int n) {
    char digits[20]; // Buffer to store the string representation of the number
    sprintf(digits, "%d", n); // Convert the number to a string
    int len = strlen(digits); // Get the length of the number

    // All single-digit numbers are considered slidey
    if (len <= 1) {
        return true;
    }

    // Check the absolute difference between consecutive digits
    for (int i = 0; i < len - 1; i++) {
        if (abs(digits[i] - digits[i + 1]) != 1) {
            return false; // Not slidey if the difference is not 1
        }
    }

    return true; // If all checks pass, it's slidey
}

int main() {
    // Test cases
    printf("%d\n", is_slidey(123454321)); // Outputs: 1 (true)
    printf("%d\n", is_slidey(54345));     // Outputs: 1 (true)
    printf("%d\n", is_slidey(987654321)); // Outputs: 1 (true)
    printf("%d\n", is_slidey(1123));      // Outputs: 0 (false)
    printf("%d\n", is_slidey(1357));      // Outputs: 0 (false)

    return 0;
}






 
78. Remove All Whitespaces from a Text
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Function to remove whitespaces
void remove_whitespaces(const char* input_text, char* output_text) {
    int j = 0;
    for (int i = 0; input_text[i] != '\0'; i++) {
        if (!isspace(input_text[i])) {  // Check if the character is not a whitespace
            output_text[j++] = input_text[i];
        }
    }
    output_text[j] = '\0'; // Null-terminate the output string
}

int main() {
    char text_with_whitespaces[] = "This is a text with spaces";
    char text_without_whitespaces[100];  // Define output buffer

    // Remove whitespaces
    remove_whitespaces(text_with_whitespaces, text_without_whitespaces);

    printf("Original Text: %s\n", text_with_whitespaces);
    printf("Text without Whitespaces: %s\n", text_without_whitespaces);

    return 0;
}

// Original Text: This is a text with spaces
// Text without Whitespaces: Thisisatextwithspaces

79. Write to Console
#include <stdio.h>

int main() {
    // Print a message to the console
    printf("Hello, world!\n");

    // You can also print variables or expressions
    int number = 42;
    printf("The answer is: %d\n", number);

    // Multiple values can be printed in a single statement
    const char* first_name = "John";
    const char* last_name = "Doe";
    printf("Full Name: %s %s\n", first_name, last_name);

    return 0;
}

// Hello, world!
// The answer is: 42
// Full Name: John Doe



 
80. Convert Date to Number
#include <stdio.h>
#include <time.h>

int main() {
    // Get the current time
    struct timespec current_time;
    clock_gettime(CLOCK_REALTIME, &current_time);

    // Convert to milliseconds since Unix Epoch
    long long milliseconds_since_epoch = (current_time.tv_sec * 1000LL) + (current_time.tv_nsec / 1000000);

    // Print the current time in milliseconds since Unix Epoch
    printf("Current Time in milliseconds since Unix Epoch: %lld\n", milliseconds_since_epoch);

    return 0;
}

// Current Time in milliseconds since Unix Epoch: 1726202472472


 
81. Find the Average of Two Numbers
#include <stdio.h>

// Function to find the average of two numbers
double find_average(double num1, double num2) {
    // Calculate the sum of the two numbers
    double total = num1 + num2;

    // Calculate the average by dividing the sum by 2
    double average = total / 2.0;

    return average;
}

int main() {
    double number1 = 10.0;
    double number2 = 20.0;

    double result = find_average(number1, number2);

    printf("The average of %.2f and %.2f is: %.2f\n", number1, number2, result);

    return 0;
}
// The average of 10.00 and 20.00 is: 15.00




 
82. Calculate the Area of a Circle
#include <stdio.h>
#include <math.h>

// Function to calculate the area of a circle
double calculate_circle_area(double radius) {
    // Check if the radius is a valid number
    if (radius <= 0.0) {
        printf("Invalid radius. Please provide a positive number.\n");
        return -1; // Return -1 to indicate an error
    }

    // Calculate the area
    double area = M_PI * radius * radius;

    return area;
}

int main() {
    double radius = 5.0;

    double area = calculate_circle_area(radius);
    
    // Check for error in area calculation
    if (area >= 0) {
        printf("The area of a circle with radius %.2f is: %.10f\n", radius, area);
    }

    return 0;
}

// The area of a circle with radius 5.00 is: 78.5398163397





83. Numbered Alphabet
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Function to convert letters to their numbered positions
void alph_num(const char *s) {
    for (int i = 0; i < strlen(s); i++) {
        char c = toupper(s[i]); // Convert to uppercase
        if (c >= 'A' && c <= 'Z') {
            // Calculate the index (0-based) and print it
            printf("%d ", c - 'A');
        }
    }
    printf("\n");
}

int main() {
    const char *examples[] = {"XYZ", "ABCDEF", "JAVASCRIPT"};
    
    for (int i = 0; i < 3; i++) {
        printf("%s ➞ ", examples[i]);
        alph_num(examples[i]);
    }

    return 0;
}

// XYZ ➞ 23 24 25 
// ABCDEF ➞ 0 1 2 3 4 5 
// JAVASCRIPT ➞ 9 0 21 0 18 2 17 8 15 19 



 
84. Check if a String is Empty
#include <stdio.h>
#include <string.h>

// Function to check if a string is empty
int is_empty_string(const char *string) {
    return strlen(string) == 0; // Return 1 if empty, 0 otherwise
}

int main() {
    const char *empty_string = "";
    const char *non_empty_string = "Hello, world!";

    printf("Is empty_string empty? %s\n", is_empty_string(empty_string) ? "true" : "false");
    printf("Is non_empty_string empty? %s\n", is_empty_string(non_empty_string) ? "true" : "false");

    return 0;
}

// Is empty_string empty? true
// Is non_empty_string empty? false


 
85. Capitalize the First Letter of a String
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Function to capitalize the first letter of a string
void capitalize_first_letter(const char *string, char *output) {
    if (strlen(string) == 0) {
        strcpy(output, "Empty string");
        return;
    }

    // Capitalize the first letter
    output[0] = toupper(string[0]);

    // Copy the rest of the string
    strcpy(output + 1, string + 1);
}

int main() {
    const char *original_string = "hello, world!";
    char capitalized_string[100]; // Ensure this is large enough for the output

    capitalize_first_letter(original_string, capitalized_string);

    printf("Original String: %s\n", original_string);
    printf("Capitalized String: %s\n", capitalized_string);

    return 0;
}

// Original String: hello, world!
// Capitalized String: Hello, world!



86. Find the Maximum Element in an Array
#include <stdio.h>
#include <limits.h>

// Function to find the maximum element in an array
int find_max_element(int arr[], int size) {
    // Check if the array size is zero
    if (size == 0) {
        return -1; // Return -1 to indicate the array is empty
    }

    int max = INT_MIN; // Initialize max to the smallest possible integer

    // Iterate through the array to find the maximum element
    for (int i = 0; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

int main() {
    int numbers[] = {5, 2, 9, 1, 7};
    int size = sizeof(numbers) / sizeof(numbers[0]);

    int max_number = find_max_element(numbers, size);
    
    if (max_number != -1) {
        printf("Array: ");
        for (int i = 0; i < size; i++) {
            printf("%d ", numbers[i]);
        }
        printf("\nMaximum Element: %d\n", max_number);
    } else {
        printf("Empty array\n");
    }

    return 0;
}

// Array: 5 2 9 1 7 
// Maximum Element: 9



 
87. Reverse an Array
#include <stdio.h>

// Function to reverse an array
void reverse_array(int arr[], int size) {
    int start = 0;
    int end = size - 1;

    // Swap elements from start and end until they meet in the middle
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

int main() {
    int original_array[] = {1, 2, 3, 4, 5};
    int size = sizeof(original_array) / sizeof(original_array[0]);
    int reversed_array[size];

    // Copy the original array to the reversed_array
    for (int i = 0; i < size; i++) {
        reversed_array[i] = original_array[i];
    }

    reverse_array(reversed_array, size);

    // Print original and reversed arrays
    printf("Original Array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", original_array[i]);
    }
    printf("\n");

    printf("Reversed Array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", reversed_array[i]);
    }
    printf("\n");

    return 0;
}

// Original Array: 1 2 3 4 5 
// Reversed Array: 5 4 3 2 1 




 
88. Calculate the Power of a Number
#include <stdio.h>
#include <math.h>

double calculate_power_with_powf(double base, double exponent) {
    return pow(base, exponent);
}

int calculate_power_with_integer_exponent(int base, unsigned int exponent) {
    int result = 1;
    for (unsigned int i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

int main() {
    double base_number_f64 = 2.0;
    double exponent_number_f64 = 3.0;

    double result_with_powf = calculate_power_with_powf(base_number_f64, exponent_number_f64);

    printf("%.1f to the power of %.1f using pow(): %.1f\n", base_number_f64, exponent_number_f64, result_with_powf);

    int base_number_i32 = 2;
    unsigned int exponent_number_u32 = 3;

    int result_with_integer_pow = calculate_power_with_integer_exponent(base_number_i32, exponent_number_u32);

    printf("%d to the power of %u using custom integer power function: %d\n", base_number_i32, exponent_number_u32, result_with_integer_pow);

    return 0;
}



 
89. Find the Minimum Element in an Array
#include <stdio.h>

int find_min_element(const int arr[], int size) {
    if (size == 0) {
        return -1; // Indicating an empty array
    }

    int min = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

int main() {
    int numbers[] = {5, 2, 9, 1, 7};
    int size = sizeof(numbers) / sizeof(numbers[0]);

    if (size == 0) {
        printf("Empty list\n");
    } else {
        int min_number = find_min_element(numbers, size);
        printf("List: ");
        for (int i = 0; i < size; i++) {
            printf("%d ", numbers[i]);
        }
        printf("\nMinimum Element: %d\n", min_number);
    }

    return 0;
}



90. Convert Minutes to Hours and Minutes
#include <stdio.h>

void convert_minutes_to_hours_and_minutes(unsigned int total_minutes, unsigned int *hours, unsigned int *minutes) {
    // Calculate hours and remaining minutes
    *hours = total_minutes / 60;
    *minutes = total_minutes % 60;
}

int main() {
    unsigned int total_minutes = 135;
    unsigned int hours, minutes;

    convert_minutes_to_hours_and_minutes(total_minutes, &hours, &minutes);

    printf("%u minutes is equivalent to: %u hours and %u minutes\n", total_minutes, hours, minutes);

    return 0;
}






 
91. Find the Sum of Digits in a Number
#include <stdio.h>

int sum_of_digits(unsigned int number) {
    int sum = 0;

    // Iterate through each digit
    while (number > 0) {
        sum += number % 10; // Add the last digit to the sum
        number /= 10;       // Remove the last digit
    }

    return sum;
}

int main() {
    unsigned int input_number = 12345;
    int result = sum_of_digits(input_number);

    printf("The sum of digits in %u is: %d\n", input_number, result);

    return 0;
}




 
92. Like vs. Dislkes
#include <stdio.h>
#include <string.h>

const char* like_or_dislike(const char* buttons[], int size) {
    const char* state = "Nothing";

    for (int i = 0; i < size; i++) {
        if (strcmp(state, "Nothing") == 0 && strcmp(buttons[i], "Like") == 0) {
            state = "Like";
        } else if (strcmp(state, "Nothing") == 0 && strcmp(buttons[i], "Dislike") == 0) {
            state = "Dislike";
        } else if (strcmp(state, "Like") == 0 && strcmp(buttons[i], "Like") == 0) {
            state = "Nothing";
        } else if (strcmp(state, "Like") == 0 && strcmp(buttons[i], "Dislike") == 0) {
            state = "Dislike";
        } else if (strcmp(state, "Dislike") == 0 && strcmp(buttons[i], "Like") == 0) {
            state = "Like";
        } else if (strcmp(state, "Dislike") == 0 && strcmp(buttons[i], "Dislike") == 0) {
            state = "Nothing";
        }
    }

    return state;
}

int main() {
    const char* test_cases[][3] = {
        {"Dislike"},
        {"Like", "Like"},
        {"Dislike", "Like"},
        {"Like", "Dislike", "Dislike"}
    };

    int sizes[] = {1, 2, 2, 3};

    for (int i = 0; i < 4; i++) {
        const char* result = like_or_dislike(test_cases[i], sizes[i]);
        printf("Final state: %s\n", result);
    }

    return 0;
}



 
93. Is a Valid Number?
#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

bool is_valid_phone_number(const char* phone_number) {
    // Check length
    if (strlen(phone_number) != 14) {
        return false;
    }

    // Check format
    for (int i = 0; i < 14; i++) {
        if ((i == 0 && phone_number[i] != '(') ||
            (i >= 1 && i <= 3 && !isdigit(phone_number[i])) ||
            (i == 4 && phone_number[i] != ')') ||
            (i == 5 && phone_number[i] != ' ') ||
            (i >= 6 && i <= 8 && !isdigit(phone_number[i])) ||
            (i == 9 && phone_number[i] != '-') ||
            (i >= 10 && i <= 13 && !isdigit(phone_number[i]))) {
            return false;
        }
    }

    return true;
}

int main() {
    const char* test_numbers[] = {
        "(123) 456-7890",
        "1111)555 2345",
        "098) 123 4567"
    };

    for (int i = 0; i < 3; i++) {
        printf("Is '%s' a valid phone number? %s\n", test_numbers[i], 
               is_valid_phone_number(test_numbers[i]) ? "true" : "false");
    }

    return 0;
}

  
94. Calculate Simple Interest
#include <stdio.h>
#include <stdbool.h>

bool calculate_simple_interest(double principal, double rate, double time, double* result) {
    // Check if the inputs are valid positive numbers
    if (principal <= 0.0 || rate <= 0.0 || time <= 0.0) {
        return false;
    }

    // Calculate simple interest
    *result = (principal * rate * time) / 100.0;
    return true;
}

int main() {
    double principal_amount = 1000.0;
    double interest_rate = 5.0;  // 5%
    double investment_time = 2.0;  // 2 years
    double interest_amount;

    if (calculate_simple_interest(principal_amount, interest_rate, investment_time, &interest_amount)) {
        printf("Principal Amount: $%.2f\n", principal_amount);
        printf("Interest Rate: %.2f%%\n", interest_rate);
        printf("Investment Time: %.2f years\n", investment_time);
        printf("Simple Interest: $%.2f\n", interest_amount);
    } else {
        printf("Invalid inputs. Please provide valid positive numbers.\n");
    }

    return 0;
}

95. Mini Sudoku
#include <stdio.h>
#include <stdbool.h>

bool is_mini_sudoku(int square[3][3]) {
    // Array to keep track of numbers seen (1-9)
    bool seen[10] = {false};

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            int num = square[i][j];

            // Check if the number is within the valid range
            if (num < 1 || num > 9) {
                return false;
            }

            // Check for duplicates
            if (seen[num]) {
                return false;
            }

            // Mark the number as seen
            seen[num] = true;
        }
    }

    // If all checks pass, return true
    return true;
}

int main() {
    int valid_sudoku[3][3] = {{1, 3, 2}, {9, 7, 8}, {4, 5, 6}};
    int invalid_sudoku_1[3][3] = {{1, 1, 3}, {6, 5, 4}, {8, 7, 9}};
    int invalid_sudoku_2[3][3] = {{0, 1, 2}, {6, 4, 5}, {9, 8, 7}};
    int valid_sudoku_2[3][3] = {{8, 9, 2}, {5, 6, 1}, {3, 7, 4}};

    printf("is_mini_sudoku(valid_sudoku) = %s\n", is_mini_sudoku(valid_sudoku) ? "true" : "false");
    printf("is_mini_sudoku(invalid_sudoku_1) = %s\n", is_mini_sudoku(invalid_sudoku_1) ? "true" : "false");
    printf("is_mini_sudoku(invalid_sudoku_2) = %s\n", is_mini_sudoku(invalid_sudoku_2) ? "true" : "false");
    printf("is_mini_sudoku(valid_sudoku_2) = %s\n", is_mini_sudoku(valid_sudoku_2) ? "true" : "false");

    return 0;
}

 
96. Check if a Number is a Perfect Number
#include <stdio.h>
#include <math.h>
#include <stdbool.h>

bool is_perfect_number(unsigned int number) {
    if (number < 2) {
        return false; // 1 and below cannot be perfect numbers
    }

    // Calculate the sum of proper divisors
    unsigned int sum_of_divisors = 1; // Start with 1, as 1 is a divisor of any number
    unsigned int sqrt_val = (unsigned int)sqrt(number);

    for (unsigned int i = 2; i <= sqrt_val; i++) {
        if (number % i == 0) {
            sum_of_divisors += i;
            if (i != number / i) {
                sum_of_divisors += number / i;
            }
        }
    }

    // Check if the sum of the divisors equals the original number
    return sum_of_divisors == number;
}

int main() {
    unsigned int test_number = 28;
    bool result = is_perfect_number(test_number);

    printf("Is %u a perfect number? %s\n", test_number, result ? "true" : "false");

    return 0;
}



 
97. Calculate the Volume of a Cylinder
#include <stdio.h>
#include <math.h>

double calculate_cylinder_volume(double radius, double height) {
    // Check if the inputs are valid positive numbers
    if (radius <= 0.0 || height <= 0.0) {
        return -1.0; // Return -1 to indicate invalid input
    }

    // Calculate the volume of the cylinder
    const double PI = 3.141592653589793;
    return PI * pow(radius, 2) * height;
}

int main() {
    double cylinder_radius = 5.0;
    double cylinder_height = 10.0;

    double volume = calculate_cylinder_volume(cylinder_radius, cylinder_height);

    if (volume < 0) {
        printf("Invalid inputs. Please provide valid positive numbers.\n");
    } else {
        printf("Cylinder Volume: %.2f cubic units\n", volume);
    }

    return 0;
}



 
98. Get Student Top Notes
#include <stdio.h>

#define MAX_NOTES 10  // Maximum number of notes per student

// Define a structure for Student
typedef struct {
    int id;
    char name[50];
    int notes[MAX_NOTES];
    int note_count;  // Keep track of the number of notes
} Student;

// Function to get the top note for each student
void get_student_top_notes(Student students[], int student_count) {
    for (int i = 0; i < student_count; i++) {
        int max_note = students[i].notes[0];  // Assume first note is the maximum initially
        // Find the maximum note for the student
        for (int j = 1; j < students[i].note_count; j++) {
            if (students[i].notes[j] > max_note) {
                max_note = students[i].notes[j];
            }
        }
        printf("Top note for %s: %d\n", students[i].name, max_note);
    }
}

int main() {
    // Define some students with their notes
    Student students[] = {
        {1, "Jacek", {5, 3, 4, 2, 5, 5}, 6},
        {2, "Ewa", {2, 3, 3, 3, 2, 5}, 6},
        {3, "Zygmunt", {2, 2, 4, 4, 3, 3}, 6},
    };
    int student_count = sizeof(students) / sizeof(students[0]);

    // Get the top notes for each student
    get_student_top_notes(students, student_count);

    return 0;
}



 
99. Find the Intersection of Two Arrays
#include <stdio.h>

// Function to find the intersection of two arrays
void find_intersection(int vec1[], int len1, int vec2[], int len2) {
    printf("Intersection of Arrays: ");
    
    // Check each element of vec1 if it exists in vec2
    for (int i = 0; i < len1; i++) {
        for (int j = 0; j < len2; j++) {
            if (vec1[i] == vec2[j]) {
                // Print the element if found in both arrays
                printf("%d ", vec1[i]);
                // To avoid printing duplicates, set vec2[j] to a value that's not in vec2
                vec2[j] = -1;  // Mark as visited
                break;  // Stop checking further elements of vec2 for the current element in vec1
            }
        }
    }
    printf("\n");
}

int main() {
    int vec1[] = {1, 2, 3, 4, 5};
    int vec2[] = {3, 4, 5, 6, 7};
    int len1 = sizeof(vec1) / sizeof(vec1[0]);
    int len2 = sizeof(vec2) / sizeof(vec2[0]);

    find_intersection(vec1, len1, vec2, len2);

    return 0;
}



100. Convert Feet to Meters
#include <stdio.h>

// Function to convert feet to meters
double feet_to_meters(double feet) {
    return feet * 0.3048;  // Conversion factor from feet to meters
}

int main() {
    double feet_value = 10.0;
    double meters_value = feet_to_meters(feet_value);

    printf("%.2f feet is equal to %.2f meters\n", feet_value, meters_value);

    return 0;
}




 
101. Convert Days to Years, Months, and Days
#include <stdio.h>

// Function to convert days to years, months, and days
void convert_days_to_years_months_days(int days, int* years, int* months, int* remaining_days) {
    // Calculate years
    *years = days / 365;

    // Calculate remaining days after years
    int remaining_days_after_years = days % 365;

    // Calculate months
    *months = remaining_days_after_years / 30;

    // Calculate remaining days after months
    *remaining_days = remaining_days_after_years % 30;
}

int main() {
    int total_days = 1000;
    int years, months, days;

    convert_days_to_years_months_days(total_days, &years, &months, &days);

    printf("%d days is approximately %d years, %d months, and %d days.\n", total_days, years, months, days);

    return 0;
}





 
102. Find the Median of an Array
#include <stdio.h>
#include <stdlib.h>

// Function to compare two integers (used in sorting)
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

// Function to find the median of an array
double find_median(int arr[], int n) {
    // Check if the array is empty
    if (n == 0) {
        printf("Invalid input. Please provide a non-empty list.\n");
        exit(1); // Exit the program if the input is invalid
    }

    // Sort the array
    qsort(arr, n, sizeof(int), compare);

    // Calculate the median
    if (n % 2 == 0) {
        // If the number of elements is even, return the average of the two middle elements
        return (arr[n / 2 - 1] + arr[n / 2]) / 2.0;
    } else {
        // If the number of elements is odd, return the middle element
        return arr[n / 2];
    }
}

int main() {
    int numbers[] = {5, 2, 8, 1, 7, 3};
    int n = sizeof(numbers) / sizeof(numbers[0]);

    double median = find_median(numbers, n);

    printf("Median: %.2f\n", median);

    return 0;
}




 
103. Calculate the Distance Between Two Points
#include <stdio.h>
#include <math.h>

// Function to calculate the distance between two points (x1, y1) and (x2, y2)
double calculate_distance(double x1, double y1, double x2, double y2) {
    // Calculate the distance using the distance formula
    double distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
    return distance;
}

int main() {
    double x1 = 1.0, y1 = 2.0;
    double x2 = 4.0, y2 = 6.0;

    // Call the function to calculate the distance
    double result = calculate_distance(x1, y1, x2, y2);

    // Print the result
    printf("The distance between (%.2f, %.2f) and (%.2f, %.2f) is %.2f\n", x1, y1, x2, y2, result);

    return 0;
}





 
104. Check if a Number is a Perfect Square
#include <stdio.h>
#include <math.h>

// Function to check if a number is a perfect square
int is_perfect_square(double number) {
    // Check if the number is non-negative
    if (number < 0) {
        return 0; // Return 0 (false) if the number is negative
    }

    // Calculate the square root of the number
    double square_root = sqrt(number);

    // Check if the square of the integer part of the square root is equal to the original number
    if (square_root == floor(square_root)) {
        return 1; // Return 1 (true) if it's a perfect square
    } else {
        return 0; // Return 0 (false) if it's not a perfect square
    }
}

int main() {
    double test_number = 25.0;

    // Call the function to check if the number is a perfect square
    int result = is_perfect_square(test_number);

    // Print the result
    printf("Is %.2f a perfect square? %s\n", test_number, result ? "true" : "false");

    return 0;
}




 
105. Find the Area of a Rectangle
#include <stdio.h>

// Function to calculate the area of a rectangle
double calculate_rectangle_area(double length, double width) {
    // Check if the inputs are valid positive numbers
    if (length <= 0.0 || width <= 0.0) {
        printf("Invalid inputs. Please provide valid positive numbers for length and width.\n");
        return 0.0; // Return 0 if inputs are invalid
    }

    // Calculate the area of the rectangle
    return length * width;
}

int main() {
    double rectangle_length = 5.0;
    double rectangle_width = 8.0;

    // Call the function to calculate the area of the rectangle
    double result = calculate_rectangle_area(rectangle_length, rectangle_width);

    // Print the result
    printf("The area of the rectangle with length %.2f and width %.2f is %.2f\n", rectangle_length, rectangle_width, result);

    return 0;
}



 
106. Convert Binary to Decimal
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Function to convert binary string to decimal
int binary_to_decimal(const char *binary_string) {
    int decimal_value = 0;
    int length = strlen(binary_string);

    // Check if the input string contains only '0' and '1'
    for (int i = 0; i < length; i++) {
        if (binary_string[i] != '0' && binary_string[i] != '1') {
            printf("Invalid input. Please provide a valid binary string.\n");
            return -1; // Return -1 to indicate invalid input
        }
    }

    // Convert binary string to decimal
    for (int i = 0; i < length; i++) {
        decimal_value = decimal_value * 2 + (binary_string[i] - '0');
    }

    return decimal_value;
}

int main() {
    const char *binary_number = "1101";
    int decimal_result = binary_to_decimal(binary_number);

    // Check if the conversion was successful
    if (decimal_result != -1) {
        printf("The decimal equivalent of binary %s is %d\n", binary_number, decimal_result);
    }

    return 0;
}




 
107. Count the Number of Words in a Sentence
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Function to count words in a sentence
int count_words(const char *sentence) {
    // Check if the input is a valid non-empty string
    if (sentence == NULL || strlen(sentence) == 0) {
        printf("Invalid input. Please provide a valid sentence.\n");
        return -1; // Return -1 to indicate invalid input
    }

    int word_count = 0;
    int in_word = 0;

    // Iterate through the sentence to count words
    for (int i = 0; sentence[i] != '\0'; i++) {
        // Check if the character is a space or any other separator
        if (isspace(sentence[i])) {
            in_word = 0; // End of a word
        } else if (in_word == 0) {
            // Start of a new word
            word_count++;
            in_word = 1; // Flag indicating we are inside a word
        }
    }

    return word_count;
}

int main() {
    const char *sentence = "This is a sample sentence.";
    int word_count = count_words(sentence);

    // Check if the sentence is valid
    if (word_count != -1) {
        printf("The sentence \"%s\" has %d words.\n", sentence, word_count);
    }

    return 0;
}




 
108. Find the Union of Two Arrays
#include <stdio.h>

#define MAX_SIZE 100

// Function to find the union of two arrays
int find_union(int arr1[], int arr2[], int size1, int size2, int result[]) {
    int index = 0;
    
    // Insert elements of the first array into the result array
    for (int i = 0; i < size1; i++) {
        result[index++] = arr1[i];
    }
    
    // Insert elements of the second array into the result array if not already present
    for (int i = 0; i < size2; i++) {
        int found = 0;
        for (int j = 0; j < index; j++) {
            if (arr2[i] == result[j]) {
                found = 1; // Element is already in the result array
                break;
            }
        }
        if (!found) {
            result[index++] = arr2[i]; // Add element to the result array if not found
        }
    }
    
    return index; // Return the size of the resulting array
}

int main() {
    int array1[] = {1, 2, 3, 4, 5};
    int array2[] = {3, 4, 5, 6, 7};
    
    int result[MAX_SIZE];
    
    int size1 = sizeof(array1) / sizeof(array1[0]);
    int size2 = sizeof(array2) / sizeof(array2[0]);
    
    // Find the union of both arrays
    int union_size = find_union(array1, array2, size1, size2, result);
    
    // Display the result
    printf("Union of Arrays: ");
    for (int i = 0; i < union_size; i++) {
        printf("%d ", result[i]);
    }
    printf("\n");

    return 0;
}




 
109. Scoring System
#include <stdio.h>
#include <string.h>

// Function to calculate scores for Andy (A), Ben (B), and Charlotte (C)
void calculate_scores(const char* score_string, int* andy, int* ben, int* charlotte) {
    // Initialize scores for Andy, Ben, and Charlotte
    *andy = 0;
    *ben = 0;
    *charlotte = 0;

    // Loop through the characters in the score string
    for (int i = 0; score_string[i] != '\0'; i++) {
        // Increment the score for the corresponding player
        if (score_string[i] == 'A') {
            (*andy)++;
        } else if (score_string[i] == 'B') {
            (*ben)++;
        } else if (score_string[i] == 'C') {
            (*charlotte)++;
        }
    }
}

int main() {
    // Example usage
    int andy, ben, charlotte;
    
    calculate_scores("A", &andy, &ben, &charlotte);
    printf("[%d, %d, %d]\n", andy, ben, charlotte);  // [1, 0, 0]
    
    calculate_scores("ABC", &andy, &ben, &charlotte);
    printf("[%d, %d, %d]\n", andy, ben, charlotte);  // [1, 1, 1]
    
    calculate_scores("ABCBACC", &andy, &ben, &charlotte);
    printf("[%d, %d, %d]\n", andy, ben, charlotte);  // [2, 2, 3]

    return 0;
}



 
110. Check if a Number is a Strong Number
#include <stdio.h>

// Function to calculate the factorial of a number
unsigned int calculate_factorial(unsigned int n) {
    unsigned int result = 1;
    for (unsigned int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to check if a number is a Strong Number
int is_strong_number(unsigned int num) {
    unsigned int original_num = num;
    unsigned int sum_of_factorials = 0;

    // Calculate the sum of factorial of each digit
    while (num > 0) {
        unsigned int digit = num % 10;  // Get the last digit
        sum_of_factorials += calculate_factorial(digit); // Add its factorial
        num /= 10; // Remove the last digit
    }

    // Check if the sum equals the original number
    return sum_of_factorials == original_num;
}

int main() {
    unsigned int test_number = 145;
    
    if (is_strong_number(test_number)) {
        printf("%u is a strong number: true\n", test_number);  // 145 is a strong number: true
    } else {
        printf("%u is a strong number: false\n", test_number);  // 145 is a strong number: false
    }

    return 0;
}



 
111. Check if a Number is a Narcissistic Number
#include <stdio.h>
#include <math.h>

// Function to calculate the number of digits in a number
int count_digits(int num) {
    int count = 0;
    while (num > 0) {
        count++;
        num /= 10;
    }
    return count;
}

// Function to check if a number is a Narcissistic Number
int is_narcissistic_number(int num) {
    int original_num = num;
    int num_digits = count_digits(num);
    int sum_of_powers = 0;

    // Calculate the sum of each digit raised to the power of the number of digits
    while (num > 0) {
        int digit = num % 10;  // Get the last digit
        sum_of_powers += (int)pow(digit, num_digits); // Add the power of the digit
        num /= 10; // Remove the last digit
    }

    // Check if the sum equals the original number
    return sum_of_powers == original_num;
}

int main() {
    int test_number = 1634;

    if (is_narcissistic_number(test_number)) {
        printf("%d is a Narcissistic Number: true\n", test_number);  // 1634 is a Narcissistic Number: true
    } else {
        printf("%d is a Narcissistic Number: false\n", test_number);  // 1634 is a Narcissistic Number: false
    }

    return 0;
}



 
112. Count the Number of Consonants in a String
#include <stdio.h>
#include <ctype.h>

// Function to count the number of consonants in a string
int count_consonants(const char *input_str) {
    int count = 0;
    
    // Traverse the string character by character
    while (*input_str) {
        // Convert to lowercase to handle both upper and lower case
        char c = tolower(*input_str);
        
        // Check if the character is a consonant
        if ((c >= 'a' && c <= 'z') && !(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')) {
            count++;
        }
        
        // Move to the next character
        input_str++;
    }
    
    return count;
}

int main() {
    const char *test_string = "Hello World";
    
    // Count the consonants in the string
    int result = count_consonants(test_string);
    
    // Print the result
    printf("The number of consonants in '%s' is: %d\n", test_string, result);  // Output: 7
    
    return 0;
}




 
113. Check if a Number is a Triangular Number
#include <stdio.h>
#include <stdbool.h>

// Function to check if a number is a triangular number
bool is_triangular_number(int num) {
    // Check if the input is a non-negative integer
    if (num <= 0) {
        return false; // Zero or negative numbers cannot be triangular numbers
    }

    int total = 0;
    int n = 1;

    // Iterate through natural numbers until the sum exceeds or equals the input number
    while (total < num) {
        total += n;
        n++;
    }

    // Check if the total equals the input number
    return total == num;
}

int main() {
    int test_number = 10;

    // Check if the number is a triangular number
    bool result = is_triangular_number(test_number);

    // Print the result
    if (result) {
        printf("%d is a triangular number: true\n", test_number);
    } else {
        printf("%d is a triangular number: false\n", test_number);
    }

    return 0;
}




 
114. Find the Area of a Trapezoid
#include <stdio.h>

// Function to calculate the area of a trapezoid
double trapezoid_area(double base1, double base2, double height) {
    // Check if the inputs are valid positive numbers
    if (base1 <= 0.0 || base2 <= 0.0 || height <= 0.0) {
        printf("Invalid input. Please provide valid positive numbers.\n");
        return -1.0; // Return a negative value to indicate invalid input
    }

    // Calculate the area of the trapezoid
    double area = 0.5 * height * (base1 + base2);
    
    return area;
}

int main() {
    double base1_length = 5.0;
    double base2_length = 9.0;
    double trapezoid_height = 4.0;

    // Calculate the area of the trapezoid
    double result = trapezoid_area(base1_length, base2_length, trapezoid_height);

    if (result >= 0) {
        printf("The area of the trapezoid is: %.2f\n", result);
    }

    return 0;
}



115. Abbreviations Unique?
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define MAX_WORDS 100
#define MAX_ABBREV_LEN 2
#define MAX_WORD_LEN 50

// Function to check if abbreviations are unique for words
bool unique_abbrev(char abbreviations[][MAX_ABBREV_LEN], int abbrev_count, char words[][MAX_WORD_LEN], int word_count) {
    // Create an array to store the abbreviations
    char abbrev_map[MAX_WORD_COUNT][MAX_ABBREV_LEN] = {0}; 
    int map_count[MAX_WORD_COUNT] = {0};  // To count occurrences of abbreviations
    
    for (int i = 0; i < word_count; ++i) {
        char abbrev[MAX_ABBREV_LEN];
        strncpy(abbrev, words[i], 1); // Take first character as abbreviation
        abbrev[1] = '\0';

        // Find and store abbreviations
        for (int j = 0; j < abbrev_count; ++j) {
            if (strncmp(abbrev, abbreviations[j], 1) == 0) {
                // Increase count of abbreviation occurrences
                if (map_count[j] > 1) {
                    return false;
                }
                map_count[j]++;
            }
        }
    }
    return true;
}

int main() {
    char abbreviations1[][MAX_ABBREV_LEN] = {"ho", "h", "ha"};
    char words1[][MAX_WORD_LEN] = {"house", "hope", "happy"};
    printf("unique_abbrev([\"ho\", \"h\", \"ha\"], [\"house\", \"hope\", \"happy\"]): %s\n", unique_abbrev(abbreviations1, 3, words1, 3) ? "true" : "false");

    char abbreviations2[][MAX_ABBREV_LEN] = {"s", "t", "v"};
    char words2[][MAX_WORD_LEN] = {"stamina", "television", "vindaloo"};
    printf("unique_abbrev([\"s\", \"t\", \"v\"], [\"stamina\", \"television\", \"vindaloo\"]): %s\n", unique_abbrev(abbreviations2, 3, words2, 3) ? "true" : "false");

    char abbreviations3[][MAX_ABBREV_LEN] = {"bi", "ba", "bat"};
    char words3[][MAX_WORD_LEN] = {"big", "bard", "battery"};
    printf("unique_abbrev([\"bi\", \"ba\", \"bat\"], [\"big\", \"bard\", \"battery\"]): %s\n", unique_abbrev(abbreviations3, 3, words3, 3) ? "true" : "false");

    char abbreviations4[][MAX_ABBREV_LEN] = {"mo", "ma", "me"};
    char words4[][MAX_WORD_LEN] = {"moment", "many", "mean"};
    printf("unique_abbrev([\"mo\", \"ma\", \"me\"], [\"moment\", \"many\", \"mean\"]): %s\n", unique_abbrev(abbreviations4, 3, words4, 3) ? "true" : "false");

    return 0;
}
116. Check if a Number is a Fibonacci Number
#include <stdio.h>
#include <math.h>
#include <stdbool.h>

// Function to check if a number is a perfect square
bool is_perfect_square(unsigned long long n) {
    unsigned long long sqrt_val = (unsigned long long)sqrt(n);
    return (sqrt_val * sqrt_val == n);
}

// Function to check if a number is a Fibonacci number
bool is_fibonacci_number(unsigned long long num) {
    // A number is a Fibonacci number if and only if one of (5 * num^2 + 4) or (5 * num^2 - 4) is a perfect square
    unsigned long long num_squared = num * num;
    return is_perfect_square(5 * num_squared + 4) || is_perfect_square(5 * num_squared - 4);
}

int main() {
    unsigned long long test_number = 8;
    bool result = is_fibonacci_number(test_number);

    printf("%llu is a Fibonacci number: %s\n", test_number, result ? "true" : "false");

    return 0;
}




 
117. Find the Perimeter of a Rectangle
#include <stdio.h>

// Function to calculate the perimeter of a rectangle
double rectangle_perimeter(double length, double width) {
    // Check if the inputs are valid positive numbers
    if (length <= 0.0 || width <= 0.0) {
        printf("Invalid input. Please provide valid positive numbers.\n");
        return -1; // Return -1 to indicate an error
    }

    // Calculate the perimeter of the rectangle
    return 2.0 * (length + width);
}

int main() {
    double length = 5.0;
    double width = 8.0;

    // Calculate the perimeter
    double perimeter = rectangle_perimeter(length, width);
    
    // Check for errors in the perimeter calculation
    if (perimeter != -1) {
        printf("The perimeter of the rectangle is: %.2f\n", perimeter);
    }

    return 0;
}





 
118. Club Entry
#include <stdio.h>
#include <string.h>

// Function to check for the doubled letter and return the result
int club_entry(const char *word) {
    // Loop through the string and check for doubled letters
    for (int i = 0; i < strlen(word) - 1; i++) {
        if (word[i] == word[i + 1]) {
            // Calculate the position of the letter in the alphabet (1-based)
            int position = word[i] - 'a' + 1;
            return position * 4; // Multiply the position by 4
        }
    }
    
    // Return -1 if no doubled letter is found
    return -1;
}

int main() {
    const char *words[] = {"hill", "apple", "bee"};
    
    // Iterate over the words and check for doubled letters
    for (int i = 0; i < 3; i++) {
        int result = club_entry(words[i]);
        if (result != -1) {
            printf("club_entry(\"%s\") ➞ %d\n", words[i], result);
        } else {
            printf("club_entry(\"%s\") ➞ No doubled letter found\n", words[i]);
        }
    }
    return 0;
}
119. Check if a String is Anagram of Another String
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Function to clean and count characters
void clean_and_count(const char *str, int count[26]) {
    for (int i = 0; i < strlen(str); i++) {
        char c = tolower(str[i]);  // Convert to lowercase
        if (isalpha(c)) {  // Only consider alphabetic characters
            count[c - 'a']++;
        }
    }
}

// Function to check if two strings are anagrams
int are_anagrams(const char *str1, const char *str2) {
    // Create an array to count character frequencies for each string
    int count1[26] = {0};  // Count for str1
    int count2[26] = {0};  // Count for str2

    // Count characters in both strings
    clean_and_count(str1, count1);
    clean_and_count(str2, count2);

    // Compare the counts of both strings
    for (int i = 0; i < 26; i++) {
        if (count1[i] != count2[i]) {
            return 0;  // Not anagrams
        }
    }
    return 1;  // Are anagrams
}

int main() {
    const char *string1 = "listen";
    const char *string2 = "silent";

    int result = are_anagrams(string1, string2);
    printf("\"%s\" and \"%s\" are anagrams: %s\n", string1, string2, result ? "true" : "false");

    return 0;
}




 
120. Generate Pascal's Triangle
#include <stdio.h>
#include <stdlib.h>

// Function to generate Pascal's Triangle
void generate_pascals_triangle(int num_rows) {
    if (num_rows == 0) {
        return;
    }

    // Create a 2D array to hold the triangle
    int **triangle = (int **)malloc(num_rows * sizeof(int *));
    
    // Initialize the first row
    for (int i = 0; i < num_rows; i++) {
        triangle[i] = (int *)malloc((i + 1) * sizeof(int));
        triangle[i][0] = 1;  // The first element in each row is 1
        triangle[i][i] = 1;  // The last element in each row is 1

        // Fill in the interior elements of the triangle
        for (int j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }

    // Print the Pascal's Triangle
    printf("Pascal's Triangle with %d rows:\n", num_rows);
    for (int i = 0; i < num_rows; i++) {
        for (int j = 0; j <= i; j++) {
            printf("%d ", triangle[i][j]);
        }
        printf("\n");
    }

    // Free the allocated memory
    for (int i = 0; i < num_rows; i++) {
        free(triangle[i]);
    }
    free(triangle);
}

int main() {
    int number_of_rows = 5;
    generate_pascals_triangle(number_of_rows);
    return 0;
}


// Pascal's Triangle with 5 rows:
// [1]
// [1, 1]
// [1, 2, 1]
// [1, 3, 3, 1]
// [1, 4, 6, 4, 1]

 
121. Convert Decimal to Roman Numerals
#include <stdio.h>
#include <string.h>

// Function to convert a decimal number to a Roman numeral
void decimal_to_roman(int num) {
    // Check if the number is within the valid range (1-3999)
    if (num <= 0 || num > 3999) {
        printf("Invalid input. Please provide a valid positive integer within the range 1 to 3999.\n");
        return;
    }

    // Define the Roman numeral symbols and their corresponding values
    const char* roman_symbols[] = {
        "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
    };
    int values[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};

    // Create a buffer to store the Roman numeral result
    char result[20] = "";
    
    // Iterate through the values and symbols
    for (int i = 0; i < 13; i++) {
        // While the number is greater than or equal to the value
        while (num >= values[i]) {
            // Append the corresponding Roman numeral symbol
            strcat(result, roman_symbols[i]);
            num -= values[i];  // Subtract the value from the number
        }
    }

    // Print the result
    printf("The Roman numeral representation is: %s\n", result);
}

int main() {
    int decimal_number = 1984;
    decimal_to_roman(decimal_number);
    return 0;
}


 
122. Find the Area of a Parallelogram
#include <stdio.h>

// Function to calculate the area of a parallelogram
double parallelogram_area(double base, double height) {
    // Check if the input values are valid (positive numbers)
    if (base > 0.0 && height > 0.0) {
        return base * height;
    } else {
        printf("Invalid input. Please provide valid positive numbers.\n");
        return -1;  // Return -1 to indicate an error
    }
}

int main() {
    double base = 6.0;
    double height = 8.0;

    double area = parallelogram_area(base, height);

    // Check if the area is valid
    if (area != -1) {
        printf("The area of the parallelogram is: %.2f\n", area);
    }
    
    return 0;
}



 
123. Superheroes
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Comparator function for sorting strings alphabetically
int compare(const void *a, const void *b) {
    return strcmp(*(const char **)a, *(const char **)b);
}

// Function to filter and sort superhero names ending with "man"
void superheroes(char *names[], int size) {
    char *filtered[size];
    int count = 0;

    // Filter names that end with "man"
    for (int i = 0; i < size; i++) {
        int len = strlen(names[i]);
        if (len >= 3 && strcmp(&names[i][len - 3], "man") == 0) {
            filtered[count++] = names[i];
        }
    }

    // Sort the filtered array alphabetically
    qsort(filtered, count, sizeof(char *), compare);

    // Print the sorted filtered names
    printf("[");
    for (int i = 0; i < count; i++) {
        printf("\"%s\"", filtered[i]);
        if (i < count - 1) {
            printf(", ");
        }
    }
    printf("]\n");
}

int main() {
    // Test case 1
    char *heroes1[] = {"Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"};
    int size1 = sizeof(heroes1) / sizeof(heroes1[0]);
    superheroes(heroes1, size1);

    // Test case 2
    char *heroes2[] = {"Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"};
    int size2 = sizeof(heroes2) / sizeof(heroes2[0]);
    superheroes(heroes2, size2);

    // Test case 3
    char *heroes3[] = {"Wonder-Woman", "Catwoman", "Invisible-Woman"};
    int size3 = sizeof(heroes3) / sizeof(heroes3[0]);
    superheroes(heroes3, size3);

    return 0;
}


 
124. Applying Discounts
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function to apply discounts to the prices
void get_discounts(double prices[], int size, const char *discount) {
    // Extract the discount percentage from the string
    int discount_percentage = atoi(discount); // Convert the discount percentage to integer

    // Calculate the discount factor
    double discount_factor = discount_percentage / 100.0;

    // Calculate and print the discounted prices
    printf("[");
    for (int i = 0; i < size; i++) {
        double discounted_price = prices[i] * (1.0 - discount_factor);
        printf("%.2f", discounted_price);
        if (i < size - 1) {
            printf(", ");
        }
    }
    printf("]\n");
}

int main() {
    // Test case 1
    double prices1[] = {2.0, 4.0, 6.0, 11.0};
    int size1 = sizeof(prices1) / sizeof(prices1[0]);
    char discount1[] = "50";
    get_discounts(prices1, size1, discount1); // Output: [1.00, 2.00, 3.00, 5.50]

    // Test case 2
    double prices2[] = {10.0, 20.0, 40.0, 80.0};
    int size2 = sizeof(prices2) / sizeof(prices2[0]);
    char discount2[] = "75";
    get_discounts(prices2, size2, discount2); // Output: [7.50, 15.00, 30.00, 60.00]

    // Test case 3
    double prices3[] = {100.0};
    int size3 = sizeof(prices3) / sizeof(prices3[0]);
    char discount3[] = "45";
    get_discounts(prices3, size3, discount3); // Output: [55.00]

    return 0;
}




 
125. Check if a Number is a Smith Number
#include <stdio.h>
#include <math.h>

// Function to check if a number is prime
int is_prime(unsigned long num) {
    if (num < 2) return 0;
    for (unsigned long i = 2; i <= sqrt(num); i++) {
        if (num % i == 0) return 0;
    }
    return 1;
}

// Function to sum the digits of a number
unsigned long sum_of_digits(unsigned long num) {
    unsigned long sum = 0;
    while (num > 0) {
        sum += num % 10;
        num /= 10;
    }
    return sum;
}

// Function to find the prime factors of a number
void prime_factors(unsigned long num, unsigned long *factors, int *size) {
    for (unsigned long i = 2; i <= sqrt(num); i++) {
        while (num % i == 0) {
            factors[*size] = i;
            (*size)++;
            num /= i;
        }
    }
    if (num > 1) {
        factors[*size] = num;
        (*size)++;
    }
}

// Function to check if a number is a Smith number
int is_smith_number(unsigned long num) {
    if (is_prime(num)) return 0; // A prime number can't be a Smith number

    unsigned long original_sum = sum_of_digits(num);
    unsigned long factors[100];
    int size = 0;
    prime_factors(num, factors, &size);

    unsigned long prime_factor_sum = 0;
    for (int i = 0; i < size; i++) {
        prime_factor_sum += sum_of_digits(factors[i]);
    }

    return (original_sum != prime_factor_sum);
}

int main() {
    unsigned long number = 728;
    if (is_smith_number(number)) {
        printf("Is %lu a Smith number? true\n", number);
    } else {
        printf("Is %lu a Smith number? false\n", number);
    }

    return 0;
}

 
126. Basic Chessboard
#include <stdio.h>

void generate_chessboard() {
    int size = 8; // Size of the chessboard (8x8)
    
    for (int row = 0; row < size; row++) {
        for (int col = 0; col < size; col++) {
            // Use 'X' for black squares and ' ' for white squares
            if ((row + col) % 2 == 0) {
                printf(" ");
            } else {
                printf("X");
            }
            printf(" "); // Space between squares
        }
        printf("\n"); // Newline after each row
    }
}

int main() {
    generate_chessboard(); // Generate and print the chessboard
    return 0;
}


//   X   X   X   X
// X   X   X   X
//   X   X   X   X
// X   X   X   X
//   X   X   X   X
// X   X   X   X
//   X   X   X   X
// X   X   X   X
 
127. Which Number Is Not Like The Others
#include <stdio.h>
#include <stdlib.h>

int unique(int numbers[], int size) {
    // Create an array to count the frequency of each number
    int *counts = (int *)malloc(size * sizeof(int));
    
    // Initialize the counts array to 0
    for (int i = 0; i < size; i++) {
        counts[i] = 0;
    }

    // Count the frequency of each number
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            if (numbers[i] == numbers[j]) {
                counts[i]++;
            }
        }
    }

    // Find and return the unique number (the one that appears once)
    for (int i = 0; i < size; i++) {
        if (counts[i] == 1) {
            free(counts); // Free the dynamically allocated memory
            return numbers[i];
        }
    }

    free(counts); // Free the dynamically allocated memory
    return -1; // Return -1 if no unique number is found
}

int main() {
    int numbers1[] = {3, 3, 3, 7, 3, 3};
    int numbers2[] = {0, 0, 77, 0, 0};
    int numbers3[] = {0, 1, 1, 1, 1, 1, 1, 1};

    int size1 = sizeof(numbers1) / sizeof(numbers1[0]);
    int size2 = sizeof(numbers2) / sizeof(numbers2[0]);
    int size3 = sizeof(numbers3) / sizeof(numbers3[0]);

    printf("Unique number in array 1: %d\n", unique(numbers1, size1));
    printf("Unique number in array 2: %d\n", unique(numbers2, size2));
    printf("Unique number in array 3: %d\n", unique(numbers3, size3));

    return 0;
}


// Unique number in array 1: 7
// Unique number in array 2: 77
// Unique number in array 3: 0




 
128. Find the Discount
#include <stdio.h>

double find_discount(double original_price, unsigned char discount_percentage) {
    // Calculate the discount and subtract it from the original price
    double discount = original_price * (discount_percentage / 100.0);
    return original_price - discount;
}

int main() {
    // Example usage
    printf("%.2f\n", find_discount(1500.0, 50)); 
// Output: 750.00
    printf("%.2f\n", find_discount(89.0, 20));   
// Output: 71.20
    printf("%.2f\n", find_discount(100.0, 75));  
// Output: 25.00

    return 0;
}



 
129. Check if a String is Pangram or Not
#include <stdio.h>
#include <ctype.h>

int is_pangram(const char *input_str) {
    // Create an array to keep track of the characters we encounter
    int alphabet[26] = {0};
    int i = 0;
    
    // Loop through the string
    while (input_str[i] != '\0') {
        // Convert the character to lowercase
        char ch = tolower(input_str[i]);
        
        // Check if the character is a letter and mark it in the alphabet array
        if (ch >= 'a' && ch <= 'z') {
            alphabet[ch - 'a'] = 1;
        }
        
        i++;
    }
    
    // Check if all letters have been marked
    for (i = 0; i < 26; i++) {
        if (alphabet[i] == 0) {
            return 0;  // Not a pangram
        }
    }
    
    return 1;  // It's a pangram
}

int main() {
    // Example usage
    const char *input_string = "The quick brown fox jumps over the lazy dog";
    
    if (is_pangram(input_string)) {
        printf("The given string is a pangram! 🎉\n");
    } else {
        printf("The given string is not a pangram. 😢\n");
    }

    return 0;
}


 
130. Coaxial Cable Impedance
#include <stdio.h>
#include <math.h>

double impedance_calculator(double d_d, double d_c, double e_r) {
    // Calculate the impedance using the formula
    double log_term = log10(d_d / d_c);
    double impedance = 60.0 / sqrt(e_r) * log_term;
    return impedance;
}

int main() {
    // Example usage
    printf("%.1f\n", impedance_calculator(20.7, 2.0, 4.0)); 
    printf("%.1f\n", impedance_calculator(5.3, 1.2, 2.2));  
    printf("%.1f\n", impedance_calculator(4.48, 1.33, 2.2));

    return 0;
}

// 30.4
// 26.1
// 21.3

 
131. Censor Words Longer Than Four Characters
#include <stdio.h>
#include <string.h>
#include <ctype.h>

void censor(char *text) {
    char result[1024]; // Store the final censored string
    int result_index = 0;
    char word[100]; // Temporary buffer for words
    int word_index = 0;
    int i = 0;

    while (text[i] != '\0') {
        if (isspace(text[i]) || text[i] == '\0') {
            if (word_index > 0) {
                word[word_index] = '\0'; // End the word
                if (strlen(word) > 4) {
                    // Replace word with '*' if it's longer than 4 characters
                    for (int j = 0; j < strlen(word); j++) {
                        result[result_index++] = '*';
                    }
                } else {
                    // Otherwise, copy the word as is
                    for (int j = 0; j < word_index; j++) {
                        result[result_index++] = word[j];
                    }
                }
                word_index = 0; // Reset the word buffer
            }
            if (text[i] != '\0') {
                result[result_index++] = text[i]; // Add space or end
            }
        } else {
            word[word_index++] = text[i]; // Collect the word
        }
        i++;
    }
    result[result_index] = '\0'; // Null-terminate the result string
    printf("%s\n", result); // Print the censored string
}

int main() {
    // Example usage
    censor("The code is fourty");
    censor("Two plus three is five");
    censor("aaaa aaaaa 1234 12345");

    return 0;
}


// The code is ******
// Two plus ***** is five
// aaaa ***** 1234 *****


 
132. Find the Area of an Ellipse
#include <stdio.h>
#include <math.h>

double calculate_ellipse_area(double semi_major_axis, double semi_minor_axis) {
    // Use the formula for the area of an ellipse: PI * a * b
    return M_PI * semi_major_axis * semi_minor_axis;
}

int main() {
    double semi_major_axis = 5.0;  // Semi-major axis length
    double semi_minor_axis = 3.0;  // Semi-minor axis length

    double ellipse_area = calculate_ellipse_area(semi_major_axis, semi_minor_axis);
    printf("The area of the ellipse is: %.2f\n", ellipse_area);

    return 0;
}

// The area of the ellipse is: 47.12


 
133. Check if a Number is a Palindrome in Binary
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Function to check if a number is a palindrome in its binary representation
int is_binary_palindrome(unsigned int number) {
    // Convert the number to binary and store it in a string
    char binary_rep[33]; // 32 bits + null terminator
    int index = 0;

    // Convert to binary
    while (number > 0) {
        binary_rep[index++] = (number % 2) + '0'; // Store the bit as a character ('0' or '1')
        number /= 2;
    }
    binary_rep[index] = '\0'; // Null-terminate the string

    // Reverse the binary representation
    int length = strlen(binary_rep);
    for (int i = 0; i < length / 2; i++) {
        // Swap the characters
        char temp = binary_rep[i];
        binary_rep[i] = binary_rep[length - i - 1];
        binary_rep[length - i - 1] = temp;
    }

    // Check if the original binary string is equal to its reverse
    return (strcmp(binary_rep, binary_rep) == 0);
}

int main() {
    unsigned int number_to_check = 9; // Number to check

    if (is_binary_palindrome(number_to_check)) {
        printf("%u is a binary palindrome! 🎉\n", number_to_check);
    } else {
        printf("%u is not a binary palindrome. 😢\n", number_to_check);
    }

    return 0;
}


// 9 is a binary palindrome! 🎉


 
134. Find the Area of a Rhombus
#include <stdio.h>

// Function to calculate the area of a rhombus
double calculate_rhombus_area(double diagonal1, double diagonal2) {
    return (diagonal1 * diagonal2) / 2.0;  // Formula: (d1 * d2) / 2
}

int main() {
    double diagonal1_length = 8.0; // Length of the first diagonal
    double diagonal2_length = 6.0; // Length of the second diagonal

    // Calculate the area of the rhombus
    double rhombus_area = calculate_rhombus_area(diagonal1_length, diagonal2_length);

    // Output the result
    printf("The area of the rhombus is: %.2f\n", rhombus_area);

    return 0;
}

// The area of the rhombus is: 24.00


 
135. Check if a Number is a Catalan Number
#include <stdio.h>

// Function to calculate the binomial coefficient C(n, k)
unsigned long long binomial_coefficient(unsigned long long n, unsigned long long k) {
    unsigned long long result = 1;
    if (k > n - k) {
        k = n - k;
    }
    for (unsigned long long i = 0; i < k; i++) {
        result *= n;
        result /= i + 1;
        n -= 1;
    }
    return result;
}

// Function to check if a number is a Catalan number
int is_catalan_number(unsigned long long num) {
    unsigned long long i = 0;
    unsigned long long catalan;
    while (1) {
        catalan = binomial_coefficient(2 * i, i) / (i + 1);
        if (catalan == num) {
            return 1; // It is a Catalan number
        } else if (catalan > num) {
            return 0; // It is not a Catalan number
        }
        i++;
    }
}

int main() {
    unsigned long long number_to_check = 42; // Example number
    if (is_catalan_number(number_to_check)) {
        printf("%llu is a Catalan number! 🎉\n", number_to_check);
    } else {
        printf("%llu is not a Catalan number. 😢\n", number_to_check);
    }
    return 0;
}

// 42 is a Catalan number! 🎉
 
136. Find the Luhn Algorithm Check Digit
#include <stdio.h>

int calculate_luhn_check_digit(unsigned long long input) {
    int total_sum = 0;
    int is_second_digit = 0;

    while (input > 0) {
        int digit = input % 10;
        if (is_second_digit) {
            digit = digit * 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        total_sum += digit;
        input /= 10;
        is_second_digit = !is_second_digit;
    }

    int check_digit = (10 - (total_sum % 10)) % 10;
    return check_digit;
}

int main() {
    unsigned long long partial_number = 123456789; // Example partial number
    int check_digit = calculate_luhn_check_digit(partial_number);
    printf("Partial Number: %llu\n", partial_number);
    printf("Check Digit: %d\n", check_digit);
    printf("Full Number with Check Digit: %llu\n", partial_number * 10 + check_digit);

    return 0;
}

// Partial Number: 123456789
// Check Digit: 3
// Full Number with Check Digit: 1234567893

 
137. ATM Pin Validator
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int is_valid_pin(const char *pin) {
    // Check if the length is either 4 or 6
    int length = strlen(pin);
    if (length != 4 && length != 6) {
        return 0; // Invalid pin
    }

    // Check if all characters are digits
    for (int i = 0; i < length; i++) {
        if (!isdigit(pin[i])) {
            return 0; // Invalid pin
        }
    }

    return 1; // Valid pin
}

int main() {
    // Example usage
    const char *pins[] = {"1234", "12345", "a234", "", "123456"};
    for (int i = 0; i < 5; i++) {
        printf("PIN '%s' is valid: %d\n", pins[i], is_valid_pin(pins[i]));
    }

    return 0;
}

// PIN '1234' is valid: true
// PIN '12345' is valid: false
// PIN 'a234' is valid: false
// PIN '' is valid: false
// PIN '123456' is valid: true
138. Check if a Year is a Magic Year
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int is_magic_year(int year) {
    // Convert year to string to extract the month, day, and result
    char year_str[7];  // 6 digits plus null terminator
    snprintf(year_str, sizeof(year_str), "%d", year);

    // Check if the length is exactly 6
    if (strlen(year_str) != 6) {
        return 0; // Not a Magic Year
    }

    // Extract month, day, and result
    int month = atoi(year_str);
    int day = atoi(year_str + 2);
    int result = atoi(year_str + 4);

    // Check if the month * day equals the result
    return (month * day == result);
}

int main() {
    // Example usage
    int year_to_check = 1978; // Replace with the year you want to check
    if (is_magic_year(year_to_check)) {
        printf("%d is a Magic Year! 🎉\n", year_to_check);
    } else {
        printf("%d is not a Magic Year. 😢\n", year_to_check);
    }
    return 0;
}

// 1978 is not a Magic Year. 😢
139. Enharmonic Equivalents
#include <stdio.h>
#include <string.h>

const char* get_equivalent(const char* note) {
    // Define the enharmonic equivalents using a simple if-else chain
    if (strcmp(note, "C#") == 0) {
        return "Db";
    } else if (strcmp(note, "Db") == 0) {
        return "C#";
    } else if (strcmp(note, "D#") == 0) {
        return "Eb";
    } else if (strcmp(note, "Eb") == 0) {
        return "D#";
    } else if (strcmp(note, "F#") == 0) {
        return "Gb";
    } else if (strcmp(note, "Gb") == 0) {
        return "F#";
    } else if (strcmp(note, "G#") == 0) {
        return "Ab";
    } else if (strcmp(note, "Ab") == 0) {
        return "G#";
    } else if (strcmp(note, "A#") == 0) {
        return "Bb";
    } else if (strcmp(note, "Bb") == 0) {
        return "A#";
    } else if (strcmp(note, "C") == 0) {
        return "C";
    } else if (strcmp(note, "D") == 0) {
        return "D";
    } else if (strcmp(note, "E") == 0) {
        return "E";
    } else if (strcmp(note, "F") == 0) {
        return "F";
    } else if (strcmp(note, "G") == 0) {
        return "G";
    } else if (strcmp(note, "A") == 0) {
        return "A";
    } else if (strcmp(note, "B") == 0) {
        return "B";
    }

    // Return "Invalid note" for any other input
    return "Invalid note";
}

int main() {
    // Example usage
    printf("%s\n", get_equivalent("D#"));  // Output: Eb
    printf("%s\n", get_equivalent("Gb"));  // Output: F#
    printf("%s\n", get_equivalent("Bb"));  // Output: A#
    
    return 0;
}


 
140. Find the Area of a Regular Polygon
#include <stdio.h>
#include <math.h>

// Function to calculate the area of a regular polygon
double calculate_regular_polygon_area(int n, double s) {
    double numerator = (1.0 / 4.0) * n * pow(s, 2);
    double denominator = tan(M_PI / n);
    double area = numerator / denominator;
    return area;
}

int main() {
    int number_of_sides = 6; // Replace with the number of sides of your polygon
    double side_length = 5.0;  // Replace with the length of each side of your polygon

    double polygon_area = calculate_regular_polygon_area(number_of_sides, side_length);
    printf("The area of the regular polygon is: %.2f\n", polygon_area);

    return 0;
}

// The area of the regular polygon is: 64.95


 
141. Check if a Number is an Abundant Number
#include <stdio.h>

// Function to calculate the sum of proper divisors
int get_proper_divisors_sum(int number) {
    int divisor_sum = 0;
    int limit = number / 2; // Proper divisors are less than half the number
    for (int i = 1; i <= limit; i++) {
        if (number % i == 0) {
            divisor_sum += i;
        }
    }
    return divisor_sum;
}

// Function to check if a number is an abundant number
int is_abundant_number(int number) {
    int divisors_sum = get_proper_divisors_sum(number);
    return divisors_sum > number; // Return 1 if it's abundant, 0 if not
}

int main() {
    int number_to_check = 12; // Replace with the number you want to check
    
    if (is_abundant_number(number_to_check)) {
        printf("%d is an Abundant Number! 🎉\n", number_to_check);
    } else {
        printf("%d is not an Abundant Number. 😢\n", number_to_check);
    }
    return 0;
}
// 12 is an Abundant Number! 🎉
142. Wash Your Hands
#include <stdio.h>

// Function to calculate time spent washing hands
void wash_hands(int n, int nm) {
    // Total seconds spent washing hands (21 seconds per wash)
    int total_seconds = n * nm * 21;
    
    // Convert seconds to minutes and seconds
    int minutes = total_seconds / 60;
    int seconds = total_seconds % 60;
    
    // Print the result
    printf("%d minutes and %d seconds\n", minutes, seconds);
}

int main() {
    // Example usage
    wash_hands(8, 7);  // Output: "588 minutes and 0 seconds"
    wash_hands(0, 0);  // Output: "0 minutes and 0 seconds"
    wash_hands(7, 9);  // Output: "661 minutes and 30 seconds"
    
    return 0;
}



 
143. Calculate the Euler's Totient Function
#include <stdio.h>

// Function to calculate Euler's Totient Function
unsigned int euler_totient_function(unsigned int n) {
    if (n == 0) {
        printf("Input must be a positive integer.\n");
        return 0; // Return 0 for invalid input
    }

    unsigned int result = n;  // Initialize result with n
    unsigned int p = 2;

    // Iterate through all prime factors of n
    while (p * p <= n) {
        if (n % p == 0) {
            // If p divides n, divide n by p as many times as possible
            while (n % p == 0) {
                n /= p;
            }
            result -= result / p;  // Apply the formula for prime factors
        }
        p++;
    }

    // If n is a prime number greater than 1
    if (n > 1) {
        result -= result / n;
    }

    return result;  // Return the result
}

int main() {
    // Example usage
    unsigned int n = 12;  // Replace this with the number you want to calculate the totient function for
    unsigned int result = euler_totient_function(n);
    printf("Euler's Totient Function for %u is: %u\n", n, result);

    return 0;
}

// Euler's Totient Function for 12 is: 4

 
144. Who’s The Oldest?
#include <stdio.h>
#include <string.h>

// Structure to hold a person's name and age
typedef struct {
    const char *name;
    unsigned int age;
} Person;

// Function to find the oldest person
const char* oldest(Person people[], size_t size) {
    const char *oldest_name = "";
    unsigned int max_age = 0;

    for (size_t i = 0; i < size; i++) {
        if (people[i].age > max_age) {
            max_age = people[i].age;
            oldest_name = people[i].name;
        }
    }

    return oldest_name;
}

int main() {
    // Example usage for first group of people
    Person people1[] = {
        {"Emma", 71},
        {"Jack", 45},
        {"Amy", 15},
        {"Ben", 29}
    };
    size_t size1 = sizeof(people1) / sizeof(people1[0]);
    printf("The oldest person is: %s\n", oldest(people1, size1));

    // Example usage for second group of people
    Person people2[] = {
        {"Max", 9},
        {"Josh", 13},
        {"Sam", 48},
        {"Anne", 33}
    };
    size_t size2 = sizeof(people2) / sizeof(people2[0]);
    printf("The oldest person is: %s\n", oldest(people2, size2));

    return 0;
}

// The oldest person is: Emma
// The oldest person is: Sam


 
145. Digital Cipher
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Function to calculate the digital cipher
void digital_cipher(const char *message, unsigned int key, unsigned int *encoded_message, size_t *encoded_length) {
    // Convert the key into a string to extract its digits
    char key_str[20];
    sprintf(key_str, "%u", key);
    size_t key_length = strlen(key_str);

    size_t message_length = strlen(message);
    *encoded_length = message_length;

    for (size_t i = 0; i < message_length; i++) {
        // Calculate the letter value ('a' -> 1, 'b' -> 2, ..., 'z' -> 26)
        unsigned int letter_value = message[i] - 'a' + 1;
        
        // Get the corresponding digit from the key (repeating if necessary)
        unsigned int key_digit = key_str[i % key_length] - '0'; // Convert char to digit
        
        // Store the encoded value
        encoded_message[i] = letter_value + key_digit;
    }
}

int main() {
    // Example usage for the first message
    const char *message1 = "scout";
    unsigned int key1 = 1939;
    unsigned int encoded_message1[100];
    size_t encoded_length1;
    digital_cipher(message1, key1, encoded_message1, &encoded_length1);

    printf("Encoded message 1: ");
    for (size_t i = 0; i < encoded_length1; i++) {
        printf("%u ", encoded_message1[i]);
    }
    printf("\n");

    // Example usage for the second message
    const char *message2 = "hernando";
    unsigned int key2 = 1990;
    unsigned int encoded_message2[100];
    size_t encoded_length2;
    digital_cipher(message2, key2, encoded_message2, &encoded_length2);

    printf("Encoded message 2: ");
    for (size_t i = 0; i < encoded_length2; i++) {
        printf("%u ", encoded_message2[i]);
    }
    printf("\n");

    // Example usage for the third message
    const char *message3 = "abella";
    unsigned int key3 = 100;
    unsigned int encoded_message3[100];
    size_t encoded_length3;
    digital_cipher(message3, key3, encoded_message3, &encoded_length3);

    printf("Encoded message 3: ");
    for (size_t i = 0; i < encoded_length3; i++) {
        printf("%u ", encoded_message3[i]);
    }
    printf("\n");

    return 0;
}

// Encoded message 1: 20 12 18 30 21 
// Encoded message 2: 9 14 27 14 2 23 13 15 
// Encoded message 3: 2 2 5 13 12 1 


 
146. Chocolate Dilemma
#include <stdio.h>

// Function to calculate the total area of the chocolate pieces
int total_area(int pieces[][2], int length) {
    int area = 0;
    for (int i = 0; i < length; i++) {
        area += pieces[i][0] * pieces[i][1];
    }
    return area;
}

// Function to test if both sisters have the same total area of chocolate
int test_fairness(int sister1[][2], int len1, int sister2[][2], int len2) {
    return total_area(sister1, len1) == total_area(sister2, len2);
}

int main() {
    // Example usage
    int agatha1[][2] = {{4, 3}, {2, 4}, {1, 2}};
    int bertha1[][2] = {{6, 2}, {4, 2}, {1, 1}, {1, 1}};
    printf("%d\n", test_fairness(agatha1, 3, bertha1, 4));  // 1 (true)

    int agatha2[][2] = {{1, 2}, {2, 1}};
    int bertha2[][2] = {{2, 2}};
    printf("%d\n", test_fairness(agatha2, 2, bertha2, 1));  // 1 (true)

    int agatha3[][2] = {{1, 2}, {2, 1}};
    int bertha3[][2] = {{2, 2}, {4, 4}};
    printf("%d\n", test_fairness(agatha3, 2, bertha3, 2));  // 0 (false)

    int agatha4[][2] = {{2, 2}, {2, 2}, {2, 2}, {2, 2}};
    int bertha4[][2] = {{4, 4}};
    printf("%d\n", test_fairness(agatha4, 4, bertha4, 1));  // 1 (true)

    int agatha5[][2] = {{1, 5}, {6, 3}, {1, 1}};
    int bertha5[][2] = {{7, 1}, {2, 2}, {1, 1}};
    printf("%d\n", test_fairness(agatha5, 3, bertha5, 3));  // 0 (false)

    return 0;
}



 
147. Calculate the Area of a Hexagon
#include <stdio.h>
#include <math.h>

// Function to calculate the area of a hexagon
double calculate_hexagon_area(double side_length) {
    // Area of a hexagon formula: (3 * sqrt(3) / 2) * side_length^2
    return (3.0 * sqrt(3.0) / 2.0) * pow(side_length, 2);
}

int main() {
    // Example usage
    double side_length = 5.0; // Replace with the length of a side of your hexagon
    double hexagon_area = calculate_hexagon_area(side_length);
    
    printf("The area of the hexagon is: %.2f\n", hexagon_area);
    
    return 0;
}


// The area of the hexagon is: 64.95

 
148. Check if a Number is a Pronic Number
#include <stdio.h>
#include <stdbool.h>

// Function to check if a number is a Pronic number
bool is_pronic_number(int number) {
    for (int i = 0; i <= number; i++) {
        if (i * (i + 1) == number) {
            return true;
        }
    }
    return false;
}

int main() {
    // Example usage
    int pronic_number = 6; // Replace with the number you want to check

    if (is_pronic_number(pronic_number)) {
        printf("%d is a Pronic Number!\n", pronic_number);
    } else {
        printf("%d is not a Pronic Number.\n", pronic_number);
    }

    int pronic_number2 = 7; // Another example
    if (is_pronic_number(pronic_number2)) {
        printf("%d is a Pronic Number!\n", pronic_number2);
    } else {
        printf("%d is not a Pronic Number.\n", pronic_number2);
    }

    return 0;
}


// 6 is a Pronic Number!
// 7 is not a Pronic Number.


 
149. Virtual DAC
#include <stdio.h>

// Function to simulate a virtual DAC (Digital-to-Analog Converter)
double v_dac(unsigned short digital_value) {
    // Convert the digital value to the corresponding voltage level
    return (digital_value / 1023.0) * 5.0;
}

int main() {
    // Example usage
    printf("%.2f\n", v_dac(0));      
// Expected output: 0.00
    printf("%.2f\n", v_dac(1023));   
// Expected output: 5.00
    printf("%.2f\n", v_dac(400));    
// Expected output: 1.96

    return 0;
}


 
150. Find the Area of a Pentagon
#include <stdio.h>
#include <math.h>

// Function to calculate the area of a regular pentagon given the side length
double calculate_pentagon_area(double side_length) {
    double sqrt_5 = sqrt(5.0);
    double area = (1.0 / 4.0) * sqrt(5.0 * (5.0 + 2.0 * sqrt_5)) * side_length * side_length;
    return area;
}

int main() {
    // Example usage
    double side_length = 4.0; // Example side length
    double pentagon_area = calculate_pentagon_area(side_length);
    printf("The area of the pentagon is: %.2f\n", pentagon_area);

    return 0;
}

// The area of the pentagon is: 27.53



 
151. Check if a Number is a Cube Number
#include <stdio.h>
#include <math.h>

// Function to check if a number is a cube number
int is_cube_number(long long number) {
    // Calculate the cube root and round it to the nearest integer
    long long cube_root = round(cbrt((double)number));
    // Check if the cube of the cube root equals the original number
    return (cube_root * cube_root * cube_root == number);
}

int main() {
    long long number_to_check = 27; // Example number to check
    
    if (is_cube_number(number_to_check)) {
        printf("%lld is a Cube Number! 🎲\n", number_to_check);
    } else {
        printf("%lld is not a Cube Number. 😢\n", number_to_check);
    }

    return 0;
}

// 27 is a Cube Number! 🎲


 
152. Weekly Salary Calculation
#include <stdio.h>

unsigned int weekly_salary(unsigned int hours[7]) {
    unsigned int total_salary = 0;

    for (int i = 0; i < 7; i++) {
        unsigned int hour = hours[i];
        
        if (i < 5) {  // Monday to Friday
            if (hour > 8) {
                total_salary += 8 * 10; // 8 hours at $10 per hour
                total_salary += (hour - 8) * 15; // Overtime hours at $15 per hour
            } else {
                total_salary += hour * 10; // All hours at $10 per hour
            }
        } else {  // Saturday and Sunday
            if (hour > 8) {
                total_salary += 8 * 20; // 8 hours at $20 per hour
                total_salary += (hour - 8) * 30; // Overtime hours at $30 per hour
            } else {
                total_salary += hour * 20; // All hours at $20 per hour
            }
        }
    }

    return total_salary;
}

int main() {
    unsigned int hours[7] = {8, 8, 8, 8, 8, 0, 0}; // Example input
    unsigned int salary = weekly_salary(hours);
    printf("Total weekly salary: $%u\n", salary);
    
    return 0;
}


 
153. Find the Area of a Cube
#include <stdio.h>
#include <math.h>

double calculate_cube_surface_area(double side_length) {
    return 6.0 * pow(side_length, 2);
}

int main() {
    double side_length = 4.0;  // Replace with the length of a side of your cube
    double cube_surface_area = calculate_cube_surface_area(side_length);
    printf("The surface area of the cube is: %.2f\n", cube_surface_area);
    
    return 0;
}

// The surface area of the cube is: 96.00


 
154. Find the Area of a Cone
#include <stdio.h>
#include <math.h>

// Function to calculate the surface area of a cone
double calculate_cone_surface_area(double radius, double slant_height) {
    // Surface area formula for a cone: π * r * (r + l)
    return M_PI * radius * (radius + slant_height);
}

int main() {
    double radius = 3.0;       // Radius of the cone's base
    double slant_height = 5.0; // Slant height of the cone

    // Calculate surface area
    double surface_area = calculate_cone_surface_area(radius, slant_height);
    
    // Print the surface area rounded to two decimal places
    printf("The surface area of the cone is: %.2f\n", surface_area);

    return 0;
}

// The surface area of the cone is: 75.40


 
155. Check if a Number is a Happy Number
#include <stdio.h>
#include <stdbool.h>

// Function to calculate the sum of squared digits of a number
int sum_of_squared_digits(int number) {
    int sum = 0;
    while (number > 0) {
        int digit = number % 10;
        sum += digit * digit;
        number /= 10;
    }
    return sum;
}

// Function to check if a number is a Happy Number
bool is_happy_number(int number) {
    int slow = number, fast = number;

    // Use the Floyd's Tortoise and Hare algorithm to detect cycles
    do {
        slow = sum_of_squared_digits(slow);  // Move slow by one step
        fast = sum_of_squared_digits(sum_of_squared_digits(fast));  // Move fast by two steps
    } while (slow != fast);  // Continue until they meet or cycle is detected

    // If the fast pointer reaches 1, the number is happy
    return slow == 1;
}

int main() {
    int number = 19;  // Replace with the number you want to check

    if (is_happy_number(number)) {
        printf("%d is a Happy Number! 😃\n", number);
    } else {
        printf("%d is not a Happy Number. 😢\n", number);
    }

    return 0;
}


// 19 is a Happy Number! 😃

 
156. Calculate the Area of a Triangular Prism
#include <stdio.h>
#include <stdbool.h>

// Function to calculate the sum of squared digits of a number
int sum_of_squared_digits(int number) {
    int sum = 0;
    while (number > 0) {
        int digit = number % 10;
        sum += digit * digit;
        number /= 10;
    }
    return sum;
}

// Function to check if a number is a Happy Number
bool is_happy_number(int number) {
    int slow = number, fast = number;

    do {
        slow = sum_of_squared_digits(slow);                   // Move slow pointer by one step
        fast = sum_of_squared_digits(sum_of_squared_digits(fast)); // Move fast pointer by two steps
    } while (slow != fast);

    return slow == 1; // If the cycle ends at 1, it's a Happy Number
}

int main() {
    int number = 19; // Replace with the number you want to check

    if (is_happy_number(number)) {
        printf("%d is a Happy Number! 😃\n", number);
    } else {
        printf("%d is not a Happy Number. 😢\n", number);
    }

    return 0;
}


// The surface area of the triangular prism is: 78.00



 
157. Find ASCII Charcode of Inverse Case Character
#include <stdio.h>
#include <ctype.h>

// Function to find the ASCII char code of the inverse case character
unsigned int counterpart_char_code(char c) {
    if (isupper(c)) {
        // Convert uppercase to lowercase
        return (unsigned int)tolower(c);
    } else if (islower(c)) {
        // Convert lowercase to uppercase
        return (unsigned int)toupper(c);
    } else {
        // Return the ASCII code of the character if it's not an alphabet
        return (unsigned int)c;
    }
}

int main() {
    char test_cases[] = {'A', 'a', '1', '#'};
    int num_cases = sizeof(test_cases) / sizeof(test_cases[0]);

    for (int i = 0; i < num_cases; i++) {
        char test = test_cases[i];
        printf("Char: %c, ASCII Code: %u\n", test, counterpart_char_code(test));
    }

    return 0;
}


// Char: A, ASCII Code: 97
// Char: a, ASCII Code: 65
// Char: 1, ASCII Code: 49
// Char: #, ASCII Code: 35

 
158. Solve a Linear Equation
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function to solve the linear equation
int solve_equation(const char *equation) {
    char left_side[50], right_side[50];
    char op;
    int num, rhs;

    // Split the equation into left and right parts
    sscanf(equation, "%s = %d", left_side, &rhs);

    // Identify the operator and extract the number
    if (strchr(left_side, '+') != NULL) {
        sscanf(left_side, "x + %d", &num);
        return rhs - num;
    } else if (strchr(left_side, '-') != NULL) {
        sscanf(left_side, "x - %d", &num);
        return rhs + num;
    } else {
        printf("Unsupported operation\n");
        exit(1);
    }
}

int main() {
    printf("%d\n", solve_equation("x + 43 = 50"));   
// Output: 7
    printf("%d\n", solve_equation("x - 9 = 10"));    
// Output: 19
    printf("%d\n", solve_equation("x + 300 = 100")); 
// Output: -200

    return 0;
}


159. Factorize a Number
#include <stdio.h>
#include <math.h>

// Function to factorize a number and print the factors
void factorize(int n) {
    int factors[1000], count = 0;

    // Find factors
    for (int i = 1; i <= (int)sqrt(n); i++) {
        if (n % i == 0) {
            factors[count++] = i;
            if (i != n / i) {
                factors[count++] = n / i;
            }
        }
    }

    // Sort factors (simple bubble sort for demonstration purposes)
    for (int i = 0; i < count - 1; i++) {
        for (int j = 0; j < count - i - 1; j++) {
            if (factors[j] > factors[j + 1]) {
                int temp = factors[j];
                factors[j] = factors[j + 1];
                factors[j + 1] = temp;
            }
        }
    }

    // Print factors
    printf("[");
    for (int i = 0; i < count; i++) {
        printf("%d", factors[i]);
        if (i < count - 1) {
            printf(", ");
        }
    }
    printf("]\n");
}

int main() {
    int num = 12;
    factorize(num);  // Output: [1, 2, 3, 4, 6, 12]

    return 0;
}



 
160. Check if a Number is an Automorphic Number
#include <stdio.h>
#include <stdbool.h>
#include <math.h>
#include <string.h>

// Function to check if a number is Automorphic
bool is_automorphic_number(unsigned long long number) {
    unsigned long long square = number * number;

    // Convert number and square to strings
    char number_str[20], square_str[40];
    sprintf(number_str, "%llu", number);
    sprintf(square_str, "%llu", square);

    // Check if the square ends with the number
    int num_len = strlen(number_str);
    int square_len = strlen(square_str);

    return strcmp(&square_str[square_len - num_len], number_str) == 0;
}

int main() {
    unsigned long long automorphic_number = 25; // Replace with the number you want to check

    if (is_automorphic_number(automorphic_number)) {
        printf("%llu is an Automorphic Number!\n", automorphic_number);
    } else {
        printf("%llu is not an Automorphic Number.\n", automorphic_number);
    }

    return 0;
}


// 25 is an Automorphic Number!


 
161. Calculate the Area of a Pyramid
#include <stdio.h>
#include <math.h>

// Function to calculate the surface area of a pyramid
double calculate_pyramid_surface_area(double side_length, double slant_height) {
    double base_area = pow(side_length, 2); // Area of the square base
    double lateral_area = 4.0 * (side_length * slant_height) / 2.0; // Lateral area from triangular faces
    return base_area + lateral_area;
}

int main() {
    double side_length = 4.0;  // Length of a side of the pyramid's base
    double slant_height = 5.0; // Slant height of the pyramid

    double pyramid_surface_area = calculate_pyramid_surface_area(side_length, slant_height);
    printf("The surface area of the pyramid is: %.2f\n", pyramid_surface_area);

    return 0;
}

// The surface area of the pyramid is: 56.00

 
162. Check if a Number is a Smith–Morra Gambit Number
#include <stdio.h>
#include <stdbool.h>

// Function to calculate the sum of digits of a number
int digit_sum(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

// Function to perform prime factorization and store the factors in an array
int prime_factorization(int n, int factors[]) {
    int count = 0;
    int i = 2;

    // Factorize the number
    while (i * i <= n) {
        while (n % i == 0) {
            factors[count++] = i;
            n /= i;
        }
        i++;
    }
    if (n > 1) {
        factors[count++] = n;
    }
    return count; // Return the number of factors
}

// Function to check if a number is a Smith Number
bool is_smith_morra_gambit_number(int number) {
    if (number <= 1) {
        return false; // Smith numbers are composite, so exclude 1 and primes
    }

    int factors[100], factor_count;

    // Get prime factors
    factor_count = prime_factorization(number, factors);

    // If the number has no factors other than itself, it's not a Smith number
    if (factor_count == 1 && factors[0] == number) {
        return false;
    }

    // Calculate the digit sum of the prime factors
    int sum_of_digits_of_factors = 0;
    for (int i = 0; i < factor_count; i++) {
        sum_of_digits_of_factors += digit_sum(factors[i]);
    }

    // Compare the digit sum of the number to the digit sum of its factors
    return sum_of_digits_of_factors == digit_sum(number);
}

int main() {
    int number = 22; // Example number
    if (is_smith_morra_gambit_number(number)) {
        printf("Is %d a Smith–Morra Gambit Number? true\n", number);
    } else {
        printf("Is %d a Smith–Morra Gambit Number? false\n", number);
    }

    return 0;
}


// Is 22 a Smith–Morra Gambit Number? true

 
163. Check if a Number is a Solitary Number
#include <stdio.h>
#include <stdbool.h>

// Function to calculate the sum of proper divisors of a number
int get_proper_divisors_sum(int number) {
    int sum = 1; // Start with 1 as every number is divisible by 1

    for (int i = 2; i * i <= number; i++) {
        if (number % i == 0) {
            sum += i;
            if (i != number / i) {
                sum += number / i;
            }
        }
    }

    return sum;
}

// Function to check if a number is a Solitary Number
bool is_solitary_number(int number) {
    int sum_of_divisors = get_proper_divisors_sum(number);
    return number != sum_of_divisors;
}

int main() {
    int solitary_number = 28; // Replace with the number you want to check

    if (is_solitary_number(solitary_number)) {
        printf("%d is a Solitary Number!\n", solitary_number);
    } else {
        printf("%d is not a Solitary Number.\n", solitary_number);
    }

    return 0;
}



 
164. Basic Tower of Hanoi Puzzle
#include <stdio.h>

// Function to solve the Tower of Hanoi problem
void tower_of_hanoi(int n, char source, char auxiliary, char target) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\n", source, target);
        return;
    }

    // Move n-1 disks from source to auxiliary using target as temporary
    tower_of_hanoi(n - 1, source, target, auxiliary);

    // Move the nth disk from source to target
    printf("Move disk %d from %c to %c\n", n, source, target);

    // Move n-1 disks from auxiliary to target using source as temporary
    tower_of_hanoi(n - 1, auxiliary, source, target);
}

int main() {
    int number_of_disks = 3; // Number of disks
    char source_peg = 'A';   // Source peg
    char auxiliary_peg = 'B'; // Auxiliary peg
    char target_peg = 'C';   // Target peg

    printf("Tower of Hanoi solution for %d disks:\n", number_of_disks);
    tower_of_hanoi(number_of_disks, source_peg, auxiliary_peg, target_peg);

    return 0;
}


// Tower of Hanoi solution for 3 disks:
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C

 
165. Calculate the Area of a Frustum
#include <stdio.h>
#include <math.h>

// Function to calculate the surface area of a frustum
double surface_area_of_frustum(double r1, double r2, double l) {
    double surface_area = M_PI * (r1 + r2) * l + M_PI * r1 * r1 + M_PI * r2 * r2;
    return surface_area;
}

int main() {
    double r1 = 4.0; // Top radius
    double r2 = 8.0; // Bottom radius
    double l = 6.0;  // Slant height

    double area = surface_area_of_frustum(r1, r2, l);
    printf("Surface Area of the frustum is: %.2f\n", area);

    return 0;
}

// Surface Area of the frustum is: 477.52















166. Check if a Number is a Motzkin Number
#include <stdio.h>
#include <stdbool.h>

// Function to check if a number is a Motzkin number
bool is_motzkin_number(int number) {
    if (number == 0) {
        return true;
    }

    // Initialize the first two Motzkin numbers
    double motzkin_numbers[100]; // Assuming the array size is enough
    motzkin_numbers[0] = 1.0;
    motzkin_numbers[1] = 1.0;

    for (int n = 2; n <= number; n++) {
        double next_motzkin = ((2.0 * n + 1.0) * motzkin_numbers[n - 1] + 
                               (3.0 * n - 3.0) * motzkin_numbers[n - 2]) / 
                               (n + 2.0);
        motzkin_numbers[n] = next_motzkin;
    }

    // Check if the given number is a Motzkin number
    for (int i = 0; i <= number; i++) {
        if ((int)motzkin_numbers[i] == number) {
            return true;
        }
    }

    return false;
}

int main() {
    int test_numbers[] = {1, 2, 5, 6, 11};  // Array of test numbers
    int n = sizeof(test_numbers) / sizeof(test_numbers[0]);

    for (int i = 0; i < n; i++) {
        if (is_motzkin_number(test_numbers[i])) {
            printf("%d is a Motzkin Number!\n", test_numbers[i]);
        } else {
            printf("%d is not a Motzkin Number.\n", test_numbers[i]);
        }
    }

    return 0;
}

// 1 is a Motzkin Number!
// 2 is a Motzkin Number!
// 5 is not a Motzkin Number.
// 6 is not a Motzkin Number.
// 11 is not a Motzkin Number.

 
167. Swapping Two by Two
#include <stdio.h>
#include <string.h>

// Function to swap two characters at a time in a string
void swap_two(char *s) {
    int len = strlen(s);
    char temp;

    // Iterate through the string in steps of 4
    for (int i = 0; i + 3 < len; i += 4) {
        // Swap characters at positions i, i+1 with i+2, i+3
        temp = s[i];
        s[i] = s[i + 2];
        s[i + 2] = temp;

        temp = s[i + 1];
        s[i + 1] = s[i + 3];
        s[i + 3] = temp;
    }
}

int main() {
    char *examples[] = {
        "ABCDEFGH",
        "AABBCCDDEEFF",
        "munchkins",
        "FFGGHHI"
    };

    // Number of examples to test
    int n = sizeof(examples) / sizeof(examples[0]);

    for (int i = 0; i < n; i++) {
        // Make a copy of the example string as strings are immutable in C
        char str[100];
        strcpy(str, examples[i]);

        swap_two(str);  // Swap the characters two by two
        printf("Original: %s, Swapped: %s\n", examples[i], str);
    }

    return 0;
}

// Original: ABCDEFGH, Swapped: CDABGHEF
// Original: AABBCCDDEEFF, Swapped: BBAADDCCFFEE
// Original: munchkins, Swapped: ncmuinhks
// Original: FFGGHHI, Swapped: GGFFHHI


 
168. Extract a Word From a Sentence
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Function to remove a word from a sentence
char* remove_word(const char* sentence, const char* word_to_remove) {
    // Allocate memory for the result string (same size as sentence)
    char* result = (char*)malloc(strlen(sentence) + 1);
    result[0] = '\0'; // Initialize the result string as empty

    const char* word = sentence;
    size_t word_len = strlen(word_to_remove);

    while (*word != '\0') {
        // Find the next occurrence of the word to remove
        if (strncmp(word, word_to_remove, word_len) == 0 && 
            (word[word_len] == ' ' || word[word_len] == '\0')) {
            // Skip the word to be removed and the following space
            word += word_len;
            if (*word == ' ') {
                word++; // Skip space after the word
            }
        } else {
            // Append the current character to the result string
            size_t result_len = strlen(result);
            result[result_len] = *word;
            result[result_len + 1] = '\0';
            word++;
        }
    }

    return result;
}

int main() {
    const char* sentence1 = "One two three four";
    const char* word1 = "two";
    char* result1 = remove_word(sentence1, word1);
    printf("%s\n", result1);  // Output: "One three four"
    free(result1);

    const char* sentence2 = "Bob has a kid";
    const char* word2 = "kid";
    char* result2 = remove_word(sentence2, word2);
    printf("%s\n", result2);  // Output: "Bob has a"
    free(result2);

    return 0;
}

// One three four
// Bob has a

 
169. Basic Chatbot
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Function to convert a string to lowercase
void to_lowercase(char* str) {
    for (int i = 0; str[i]; i++) {
        str[i] = tolower(str[i]);
    }
}

// Function to simulate chatbot responses
const char* chatbot(const char* message) {
    // Convert the message to lowercase to make comparisons case-insensitive
    char message_copy[256];
    strcpy(message_copy, message);
    to_lowercase(message_copy);

    // Check for specific responses based on the input message
    if (strstr(message_copy, "hello") != NULL) {
        return "Hello! How can I help you?";
    } else if (strstr(message_copy, "how are you") != NULL) {
        return "I am just a computer program, but thanks for asking!";
    } else if (strstr(message_copy, "bye") != NULL) {
        return "Goodbye!";
    } else {
        return "I didn't understand that. Can you please rephrase?";
    }
}

int main() {
    char user_input[256];

    printf("Chatbot: Hello! How can I help you today?\n");

    while (1) {
        printf("You: ");
        fgets(user_input, sizeof(user_input), stdin);
        
        // Remove the trailing newline character if present
        user_input[strcspn(user_input, "\n")] = '\0';

        if (strlen(user_input) == 0) {
            continue;
        }

        if (strcasecmp(user_input, "bye") == 0) {
            printf("Chatbot: Goodbye!\n");
            break;
        }

        // Get chatbot's response and print it
        printf("Chatbot: %s\n", chatbot(user_input));
    }

    return 0;
}


 
170. Backspace Attack
#include <stdio.h>
#include <string.h>

// Function to simulate backspace attack
void erase(const char* input, char* output) {
    int j = 0; // Output index
    
    for (int i = 0; i < strlen(input); i++) {
        if (input[i] == '#') {
            if (j > 0) {
                j--; // Remove the last character if possible
            }
        } else {
            output[j++] = input[i]; // Append the current character to the result
        }
    }
    
    output[j] = '\0'; // Null-terminate the result string
}

int main() {
    const char* examples[] = {
        "he##l#hel#llo",
        "major# spar##ks",
        "si###t boy",
        "####"
    };

    char output[256]; // Output buffer

    for (int i = 0; i < 4; i++) {
        erase(examples[i], output);
        printf("Input: '%s', Output: '%s'\n", examples[i], output);
    }

    return 0;
}

// Input: 'he##l#hel#llo', Output: 'hello'
// Input: 'major# spar##ks', Output: 'majo spks'
// Input: 'si###t boy', Output: 't boy'
// Input: '####', Output: ''

 
171. Counter
#include <stdio.h>

// Define the Counter struct
struct Counter {
    int count;
};

// Function to initialize the counter
void counter_new(struct Counter* counter) {
    counter->count = 0;
}

// Function to increment the counter
void increment(struct Counter* counter) {
    counter->count += 1;
    printf("Counter: %d\n", counter->count);
}

// Function to decrement the counter
void decrement(struct Counter* counter) {
    counter->count -= 1;
    printf("Counter: %d\n", counter->count);
}

// Function to reset the counter
void reset(struct Counter* counter) {
    counter->count = 0;
    printf("Counter reset to 0\n");
}

int main() {
    struct Counter counter;
    counter_new(&counter); // Initialize counter to 0

    increment(&counter);   // Counter: 1
    increment(&counter);   // Counter: 2
    decrement(&counter);   // Counter: 1
    reset(&counter);       // Counter reset to 0

    return 0;
} 
172. Phone Number Word Decoder
#include <stdio.h>
#include <string.h>

char char_to_num(char c) {
    if (c >= 'A' && c <= 'C') return '2';
    if (c >= 'D' && c <= 'F') return '3';
    if (c >= 'G' && c <= 'I') return '4';
    if (c >= 'J' && c <= 'L') return '5';
    if (c >= 'M' && c <= 'O') return '6';
    if (c >= 'P' && c <= 'S') return '7';
    if (c >= 'T' && c <= 'V') return '8';
    if (c >= 'W' && c <= 'Z') return '9';
    return c; // If the character is not a letter, return it as is
}

void text_to_num(const char* phone) {
    char result[strlen(phone) + 1];  // Create a result array with same length as phone number
    int i;

    for (i = 0; phone[i] != '\0'; i++) {
        result[i] = char_to_num(phone[i]); // Convert each character to corresponding number
    }
    result[i] = '\0'; // Null-terminate the result string
    printf("%s\n", result); // Print the result
}

int main() {
    const char* examples[] = {
        "123-647-EYES",
        "(325)444-TEST",
        "653-TRY-THIS",
        "435-224-7613",
    };

    for (int i = 0; i < 4; i++) {
        text_to_num(examples[i]);  // Decode and print each example
    }

    return 0;
}
// 123-647-3937
// (325)444-8378
// 653-879-8447
// 435-224-7613

 
173. Coin Co-Operation
#include <stdio.h>
#include <string.h>

void get_coin_balances(const char* p1_choices[], const char* p2_choices[], int n, int* p1_balance, int* p2_balance) {
    *p1_balance = 3;  // Initial balance for player 1
    *p2_balance = 3;  // Initial balance for player 2

    for (int i = 0; i < n; i++) {
        if (strcmp(p1_choices[i], "share") == 0 && strcmp(p2_choices[i], "share") == 0) {
            *p1_balance += 2;
            *p2_balance += 2;
        } else if (strcmp(p1_choices[i], "share") == 0 && strcmp(p2_choices[i], "steal") == 0) {
            *p1_balance -= 1;
            *p2_balance += 3;
        } else if (strcmp(p1_choices[i], "steal") == 0 && strcmp(p2_choices[i], "share") == 0) {
            *p1_balance += 3;
            *p2_balance -= 1;
        }
    }
}

int main() {
    const char* p1_choices[] = {"share", "share", "share"};
    const char* p2_choices[] = {"steal", "share", "steal"};
    int p1_balance, p2_balance;
    
    get_coin_balances(p1_choices, p2_choices, 3, &p1_balance, &p2_balance);

    printf("Person 1 balance: %d\n", p1_balance);
    printf("Person 2 balance: %d\n", p2_balance);

    return 0;
}

// Person 1 balance: 3
// Person 2 balance: 11
 
  174. Validate PIN
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int validate(const char *pin) {
    int len = strlen(pin);
    
    // Check if length is either 4 or 6
    if (len != 4 && len != 6) {
        return 0; // Invalid length
    }

    // Check if all characters are digits
    for (int i = 0; i < len; i++) {
        if (!isdigit(pin[i])) {
            return 0; // Contains non-digit characters
        }
    }

    return 1; // Valid PIN
}

int main() {
    // Test cases
    printf("%d\n", validate("121317")); // 1 (true)
    printf("%d\n", validate("1234"));   // 1 (true)
    printf("%d\n", validate("45135"));  // 0 (false)
    printf("%d\n", validate("89abc1")); // 0 (false)
    printf("%d\n", validate("900876")); // 1 (true)
    printf("%d\n", validate(" 4983"));  // 0 (false)

    return 0;
}


 
175. Random Number Generator
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int generate_random_number(int min_val, int max_val) {
    return rand() % (max_val - min_val + 1) + min_val;
}

int main() {
    // Seed the random number generator
    srand(time(NULL));

    // Generate and print a random number between 1 and 10
    int random_number = generate_random_number(1, 10);
    printf("Random Number: %d\n", random_number);

    return 0;
}

// Random Number: 1


 
176. Seven Boom!
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

const char* seven_boom(int numbers[], size_t size) {
    for (size_t i = 0; i < size; i++) {
        // Convert the current number to a string
        char str[20];  // assuming the number won't be larger than 19 digits
        sprintf(str, "%d", numbers[i]);
        
        // Check if '7' exists in the string representation of the number
        if (strchr(str, '7') != NULL) {
            return "Boom!";
        }
    }
    return "there is no 7 in the array";
}

int main() {
    // Test examples
    int example1[] = {1, 2, 3, 4, 5, 6, 7};
    int example2[] = {8, 6, 33, 100};
    int example3[] = {2, 55, 60, 97, 86};
    
    printf("%s\n", seven_boom(example1, 7));
    printf("%s\n", seven_boom(example2, 4));
    printf("%s\n", seven_boom(example3, 5));
    
    return 0;
}


 
177. Capitalize the Last Letter
#include <stdio.h>
#include <ctype.h>
#include <string.h>

void cap_last(char *input) {
    char *word = strtok(input, " ");  // Split the input string into words
    
    while (word != NULL) {
        int len = strlen(word);
        if (len > 0) {
            // Capitalize the last letter of the word
            word[len - 1] = toupper((unsigned char) word[len - 1]);
        }
        printf("%s ", word);  // Print the word with the last letter capitalized
        word = strtok(NULL, " ");  // Move to the next word
    }
}

int main() {
    // Test examples
    char example1[] = "hello";
    char example2[] = "My Name Is Example";
    char example3[] = "HELp THe LASt LETTERs CAPITALISe";
    
    cap_last(example1);
    printf("\n");
    
    cap_last(example2);
    printf("\n");
    
    cap_last(example3);
    printf("\n");

    return 0;
}
// hellO
// MY NamE IS ExamplE
// HELP THE LAST LETTERS CAPITALISE

 
178. Dice Rolling Simulator
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void roll_dice() {
    int result = rand() % 6 + 1;  // Generate a random number between 1 and 6
    printf("You rolled a %d\n", result);
}

int main() {
    // Initialize the random number generator
    srand(time(NULL));

    roll_dice();  // Simulate rolling the dice

    return 0;
}



 
179. Seconds to Time Converter
#include <stdio.h>

void convert_seconds_to_time(unsigned int seconds) {
    unsigned int hours = seconds / 3600;
    unsigned int minutes = (seconds % 3600) / 60;
    unsigned int remaining_seconds = seconds % 60;

    printf("Time: %u hours, %u minutes, %u seconds\n", hours, minutes, remaining_seconds);
}

int main() {
    unsigned int input_seconds = 3665;
    convert_seconds_to_time(input_seconds);
    
    return 0;
}



 
180. Bar Chart Generator
#include <stdio.h>
#include <stdlib.h>

void generate_bar_chart(int data[], size_t size) {
    if (size == 0) {
        printf("No data to display.\n");
        return;
    }

    // Find the maximum value in the data
    int max_value = data[0];
    for (size_t i = 1; i < size; i++) {
        if (data[i] > max_value) {
            max_value = data[i];
        }
    }

    // Generate the bar chart
    for (size_t i = 0; i < size; i++) {
        int bar_length = (int)(((float)data[i] / max_value) * 20.0f); // Normalize the value to a max length of 20
        printf("%d | ", data[i]);

        for (int j = 0; j < bar_length; j++) {
            printf("█");
        }

        // Print spaces to make the total length always 20
        for (int j = bar_length; j < 20; j++) {
            printf(" ");
        }

        printf("\n");
    }
}

int main() {
    int chart_data[] = {5, 8, 12, 4, 6};
    size_t size = sizeof(chart_data) / sizeof(chart_data[0]);

    generate_bar_chart(chart_data, size);

    return 0;
}


// 5 | ████████            
// 8 | █████████████       
// 12 | ████████████████████
// 4 | ███████             
// 6 | ██████████ 

 
181. Right-Angled Triangle Pattern
#include <stdio.h>

void generate_right_angled_triangle(int height) {
    for (int i = 1; i <= height; i++) {
        for (int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\n");
    }
}

int main() {
    int triangle_height = 5; // Example height
    generate_right_angled_triangle(triangle_height);

    return 0;
}

// *
// **
// ***
// ****
// *****
 
182. Positive Count / Negative Sum
#include <stdio.h>

void count_positives_sum_negatives(int numbers[], int length) {
    int count_positives = 0;
    int sum_negatives = 0;

    for (int i = 0; i < length; i++) {
        if (numbers[i] > 0) {
            count_positives++;
        } else if (numbers[i] < 0) {
            sum_negatives += numbers[i];
        }
    }

    if (count_positives == 0 && sum_negatives == 0) {
        printf("[]\n");
    } else {
        printf("[%d, %d]\n", count_positives, sum_negatives);
    }
}

int main() {
    int example1[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15};
    int example2[] = {92, 6, 73, -77, 81, -90, 99, 8, -85, 34};
    int example3[] = {91, -4, 80, -73, -28};
    int example4[] = {};

    count_positives_sum_negatives(example1, sizeof(example1) / sizeof(example1[0])); 
    count_positives_sum_negatives(example2, sizeof(example2) / sizeof(example2[0])); 
    count_positives_sum_negatives(example3, sizeof(example3) / sizeof(example3[0])); 
    count_positives_sum_negatives(example4, sizeof(example4) / sizeof(example4[0])); 

    return 0;
}

// [10, -65]
// [7, -252]
// [2, -105]
// []

 
183. Number Pyramid Generator
#include <stdio.h>

void generate_number_pyramid(int height) {
    for (int i = 1; i <= height; i++) {
        // Print spaces
        for (int j = 0; j < height - i; j++) {
            printf(" ");
        }
        
        // Print numbers
        for (int j = 1; j <= i; j++) {
            printf("%d", j);
            if (j < i) {
                printf(" ");  // Print space between numbers
            }
        }
        
        // Move to the next line after each row
        printf("\n");
    }
}

int main() {
    int pyramid_height = 4;
    generate_number_pyramid(pyramid_height);
    return 0;
}

//    1
//   1 2
//  1 2 3
// 1 2 3 4


 
184. Diamond Pattern Generator
#include <stdio.h>
#include <stdlib.h>

void generate_diamond_pattern(int height) {
    if (height % 2 == 0 || height < 1) {
        printf("Height must be an odd positive integer.\n");
        return;
    }

    int midpoint = (height + 1) / 2;

    for (int i = 1; i <= height; i++) {
        int spaces = abs(midpoint - i); // Calculate the number of spaces
        int stars = height - 2 * spaces; // Calculate the number of stars

        // Print spaces
        for (int j = 0; j < spaces; j++) {
            printf(" ");
        }

        // Print stars
        for (int j = 0; j < stars; j++) {
            printf("*");
        }

        // Move to the next line after each row
        printf("\n");
    }
}

int main() {
    generate_diamond_pattern(5);
    return 0;
}


//   *
//  ***
// *****
//  ***
//   *

 
185. Check If the Brick Fits through the Hole
#include <stdio.h>
#include <stdbool.h>

// Function to check if the brick dimensions fit through the hole dimensions
bool fits(int brick_w, int brick_h, int hole_w, int hole_h) {
    return (brick_w <= hole_w && brick_h <= hole_h) || (brick_w <= hole_h && brick_h <= hole_w);
}

// Function to check if the brick fits through the hole in any orientation
bool does_brick_fit(int a, int b, int c, int w, int h) {
    return fits(a, b, w, h) || fits(a, c, w, h) || fits(b, c, w, h);
}

int main() {
    // Test cases
    printf("%d\n", does_brick_fit(1, 1, 1, 1, 1)); // true
    printf("%d\n", does_brick_fit(1, 2, 1, 1, 1)); // true
    printf("%d\n", does_brick_fit(1, 2, 2, 1, 1)); // false

    return 0;
}

// true
// true
// false



 
186. Countdown Timer
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> // For sleep()

int main() {
    unsigned int time;
    printf("Enter countdown time in seconds: ");
    
    if (scanf("%u", &time) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    while (time > 0) {
        printf("Time Remaining: %u seconds\n", time);
        sleep(1);  // Sleep for 1 second
        time--;
    }

    printf("Countdown completed!\n");
    return 0;
}

// Enter countdown time in seconds: 
// Time Remaining: 3 seconds
// Time Remaining: 2 seconds
// Time Remaining: 1 seconds
// Countdown completed!


 
187. State Names and Abbreviations
#include <stdio.h>
#include <string.h>

int is_full_state_name(const char *state) {
    const char *full_state_names[] = {
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
        "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
        "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
        "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
        "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
        "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    };

    size_t num_states = sizeof(full_state_names) / sizeof(full_state_names[0]);
    for (size_t i = 0; i < num_states; i++) {
        if (strcmp(state, full_state_names[i]) == 0) {
            return 1; // State name matches
        }
    }
    return 0; // State name does not match
}

void filter_state_names(const char *states[], size_t num_states, const char *category) {
    for (size_t i = 0; i < num_states; i++) {
        if (strcmp(category, "abb") == 0 && strlen(states[i]) == 2) {
            printf("\"%s\" ", states[i]);
        } else if (strcmp(category, "full") == 0 && is_full_state_name(states[i])) {
            printf("\"%s\" ", states[i]);
        }
    }
    printf("\n");
}

int main() {
    const char *states1[] = {"Arizona", "CA", "NY", "Nevada"};
    const char *states2[] = {"MT", "NJ", "TX", "ID", "IL"};

    printf("Abbreviations in states1: ");
    filter_state_names(states1, 4, "abb");  // Expected: "CA", "NY"
    
    printf("Full state names in states1: ");
    filter_state_names(states1, 4, "full");  // Expected: "Arizona", "Nevada"
    
    printf("Abbreviations in states2: ");
    filter_state_names(states2, 5, "abb");  // Expected: "MT", "NJ", "TX", "ID", "IL"
    
    printf("Full state names in states2: ");
    filter_state_names(states2, 5, "full");  // Expected: None
    
    return 0;
}


 
188. Functioninator 8000
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Helper function to check if a character is a consonant
int is_consonant(char c) {
    c = tolower(c); // Convert to lowercase to handle case-insensitive comparison
    return (isalpha(c) && !strchr("aeiou", c));
}

// Function to generate the inator string
void inator_inator(const char *word) {
    int length = strlen(word);
    char last_char = word[length - 1]; // Get the last character

    // Determine the suffix based on the last character
    const char *suffix = is_consonant(last_char) ? "inator" : "-inator";

    // Create the length suffix
    char length_suffix[10];
    sprintf(length_suffix, "%d000", length);

    // Print the final string
    printf("%s%s %s\n", word, suffix, length_suffix);
}

int main() {
    // Test cases
    const char *test_cases[] = {"Shrink", "Doom", "EvilClone"};
    for (int i = 0; i < 3; i++) {
        inator_inator(test_cases[i]);
    }

    return 0;
}


// Shrinkinator 6000
// Doominator 4000
// EvilClone-inator 9000


 
189. Pages in a Book
#include <stdio.h>
#include <math.h>
#include <stdbool.h>

// Function to check if a number is a perfect square
bool is_perfect_square(long long x) {
    long long s = (long long)sqrt(x);
    return s * s == x;
}

// Function to check if the total number of pages forms a triangular number
bool pages_in_book(long long total) {
    if (total <= 0) {
        return false;
    }

    long long discriminant = 1 + 8 * total;
    if (!is_perfect_square(discriminant)) {
        return false;
    }

    long long sqrt_disc = (long long)sqrt(discriminant);
    long long n = (sqrt_disc - 1) / 2;

    // Verify that n is a positive integer and satisfies the original condition
    return n > 0 && n * (n + 1) / 2 == total;
}

int main() {
    // Test cases
    long long test_cases[] = {5, 4005, 9453};

    for (int i = 0; i < 3; i++) {
        long long total = test_cases[i];
        printf("Total pages %lld: %s\n", total, pages_in_book(total) ? "true" : "false");
    }

    return 0;
}

// Total pages 5: false
// Total pages 4005: true
// Total pages 9453: true


 
190. Highest Digit
#include <stdio.h>

int highest_digit(int n) {
    int max_digit = 0;

    while (n > 0) {
        int digit = n % 10;  // Extract the last digit
        if (digit > max_digit) {
            max_digit = digit;  // Update the highest digit
        }
        n /= 10;  // Remove the last digit
    }

    return max_digit;
}

int main() {
    // Test cases
    int test_cases[] = {4666, 544, 379, 2, 377401};

    for (int i = 0; i < 5; i++) {
        int case_value = test_cases[i];
        printf("Highest digit in %d: %d\n", case_value, highest_digit(case_value));
    }

    return 0;
}





 
191. Video Length in Seconds
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int minutes_to_seconds(const char* video_length) {
    int minutes, seconds;
    char minute_str[3], second_str[3];

    // Try to split the input into minutes and seconds using ":"
    if (sscanf(video_length, "%2s:%2s", minute_str, second_str) != 2) {
        return -1;  // Invalid format
    }

    // Convert the minute and second parts into integers
    minutes = atoi(minute_str);
    seconds = atoi(second_str);

    // Check for invalid seconds value
    if (seconds >= 60) {
        return -1;  // Invalid seconds value
    }

    // Return total time in seconds
    return minutes * 60 + seconds;
}

int main() {
    // Test cases
    const char* test_cases[] = {"01:00", "13:56", "10:60", "121:49", "invalid"};
    
    for (int i = 0; i < 5; i++) {
        const char* case_value = test_cases[i];
        printf("Video Length '%s': %d seconds\n", case_value, minutes_to_seconds(case_value));
    }

    return 0;
}

// Video Length '01:00': 60 seconds
// Video Length '13:56': 836 seconds
// Video Length '10:60': -1 seconds
// Video Length '121:49': 7309 seconds
// Video Length 'invalid': -1 seconds
 
192. Count Letters in a Word Search
#include <stdio.h>

size_t letter_counter(const char grid[5][6], char letter) {
    size_t count = 0;

    // Iterate through the 5x6 grid
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 6; j++) {
            if (grid[i][j] == letter) {
                count++;
            }
        }
    }

    return count;
}

int main() {
    // 5x6 grid of letters
    char grid[5][6] = {
        {'D', 'E', 'Y', 'H', 'A', 'D'},
        {'C', 'B', 'Z', 'Y', 'J', 'K'},
        {'D', 'B', 'C', 'A', 'M', 'N'},
        {'F', 'G', 'G', 'R', 'S', 'R'},
        {'V', 'X', 'H', 'A', 'S', 'S'}
    };

    char letter = 'D';
    printf("The letter '%c' appears %zu times.\n", letter, letter_counter(grid, letter));

    letter = 'H';
    printf("The letter '%c' appears %zu times.\n", letter, letter_counter(grid, letter));

    return 0;
}


// The letter 'D' appears 3 times.
// The letter 'H' appears 2 times.


 
193. Find the Other Two Side Lengths
#include <stdio.h>
#include <math.h>

#define SQRT_3 1.7320508075688772

void other_sides(double shortest_side, double* longest, double* medium) {
    *longest = 2.0 * shortest_side;
    *medium = shortest_side * SQRT_3;
    
    // Rounding to 2 decimal places
    *longest = round(*longest * 100.0) / 100.0;
    *medium = round(*medium * 100.0) / 100.0;
}

int main() {
    double test_cases[] = {1.0, 12.0, 2.0, 3.0};
    size_t n = sizeof(test_cases) / sizeof(test_cases[0]);

    for (size_t i = 0; i < n; i++) {
        double shortest = test_cases[i];
        double longest, medium;
        
        other_sides(shortest, &longest, &medium);
        
        printf("Shortest Side: %.1f, Longest Side: %.2f, Medium Side: %.2f\n", shortest, longest, medium);
    }

    return 0;
}


// Shortest Side: 1.0, Longest Side: 2.00, Medium Side: 1.73
// Shortest Side: 12.0, Longest Side: 24.00, Medium Side: 20.78
// Shortest Side: 2.0, Longest Side: 4.00, Medium Side: 3.46
// Shortest Side: 3.0, Longest Side: 6.00, Medium Side: 5.20



 
194. War of Numbers
#include <stdio.h>
#include <stdlib.h>

int war_of_numbers(int numbers[], size_t size) {
    int even_sum = 0;
    int odd_sum = 0;

    // Iterate over the numbers and calculate the sum of even and odd numbers
    for (size_t i = 0; i < size; i++) {
        if (numbers[i] % 2 == 0) {
            even_sum += numbers[i];
        } else {
            odd_sum += numbers[i];
        }
    }

    // Return the absolute difference between even_sum and odd_sum
    return abs(even_sum - odd_sum);
}

int main() {
    // Test cases
    int example1[] = {2, 8, 7, 5};
    int example2[] = {12, 90, 75};
    int example3[] = {5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243};
    
    printf("%d\n", war_of_numbers(example1, sizeof(example1)/sizeof(example1[0])));
    printf("%d\n", war_of_numbers(example2, sizeof(example2)/sizeof(example2[0])));
    printf("%d\n", war_of_numbers(example3, sizeof(example3)/sizeof(example3[0])));

    return 0;
}


// 2
// 27
// 168


 
195. Make a Circle with OOP
#include <iostream>
#include <cmath>
using namespace std;

class Circle {
private:
    double radius;
    
public:
    // Constructor to initialize radius
    Circle(double r) : radius(r) {}

    // Function to calculate area
    double getArea() const {
        return M_PI * radius * radius;
    }

    // Function to calculate perimeter
    double getPerimeter() const {
        return 2 * M_PI * radius;
    }

    // Getter for radius (optional)
    double getRadius() const {
        return radius;
    }
};

int main() {
    double circles[] = {11.0, 4.44};
    
    for (double radius : circles) {
        Circle circle(radius);
        cout << "Radius: " << radius << " - Area: " << circle.getArea() << ", Perimeter: " << circle.getPerimeter() << endl;
    }

    return 0;
}

// Radius: 11.00 - Area: 380.132711, Perimeter: 69.115038
// Radius: 4.44 - Area: 61.932101, Perimeter: 27.897343


 
196. Find the nth Tetrahedral Number
#include <iostream>
using namespace std;

// Function to calculate the nth Tetrahedral Number
unsigned long long tetra(unsigned long long n) {
    return n * (n + 1) * (n + 2) / 6;
}

int main() {
    cout << tetra(2) << endl;  // Output: 4
    cout << tetra(5) << endl;  // Output: 35
    cout << tetra(6) << endl;  // Output: 56
    
    return 0;
}



 
197. Joke Teller 
#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>

using namespace std;

void prompt_user(const string& prompt) {
    cout << prompt << " ";
    string input;
    getline(cin, input);  // Waits for user input
}

void joke_teller_program() {
    vector<string> categories = {"knock-knock", "dad", "animal", "puns"};

    // Randomly select a category
    srand(time(0));  // Seed for random number generation
    string category = categories[rand() % categories.size()];

    string setup, punchline1, punchline2;

    if (category == "knock-knock") {
        setup = "Knock, knock.";
        punchline1 = "Tank.";
        punchline2 = "You're welcome!";
    } else if (category == "dad") {
        setup = "Why did the scarecrow win an award?";
        punchline1 = "";
        punchline2 = "Because he was outstanding in his field!";
    } else if (category == "animal") {
        setup = "Why don't scientists trust atoms?";
        punchline1 = "";
        punchline2 = "Because they make up everything!";
    } else {  // Default to "puns"
        setup = "I used to be a baker because I kneaded dough.";
        punchline1 = "";
        punchline2 = "";
    }

    if (!setup.empty()) cout << setup << endl;
    if (!punchline1.empty()) prompt_user(punchline1);
    cout << punchline2 << endl;
}

int main() {
    joke_teller_program();
    return 0;
}


// Why did the scarecrow win an award?
// Because he was outstanding in his field!


 
198. Which Generation Are You?
#include <iostream>
#include <string>

using namespace std;

string generation(int x, char y) {
    switch (x) {
        case -3:
            return (y == 'm') ? "great grandfather" : "great grandmother";
        case -2:
            return (y == 'm') ? "grandfather" : "grandmother";
        case -1:
            return (y == 'm') ? "father" : "mother";
        case 0:
            return "me!";
        case 1:
            return (y == 'm') ? "son" : "daughter";
        case 2:
            return (y == 'm') ? "grandson" : "granddaughter";
        case 3:
            return (y == 'm') ? "great grandson" : "great granddaughter";
        default:
            return "unknown";
    }
}

int main() {
    cout << generation(2, 'f') << endl;  // granddaughter
    cout << generation(-3, 'm') << endl; // great grandfather
    cout << generation(1, 'f') << endl;  // daughter
    return 0;
}

// granddaughter
// great grandfather
// daughter


 
199. FizzBuzz Game
#include <iostream>
#include <string>

using namespace std;

void fizz_buzz_game() {
    cout << "Welcome to the FizzBuzz Game!" << endl;
    cout << "Let's play FizzBuzz!" << endl;

    for (int i = 1; i <= 100; ++i) {
        string output = "";

        if (i % 3 == 0) {
            output += "Fizz";
        }

        if (i % 5 == 0) {
            output += "Buzz";
        }

        // Print the output or the number itself
        if (output.empty()) {
            cout << i << endl;
        } else {
            cout << output << endl;
        }
    }
}

int main() {
    fizz_buzz_game();
    return 0;
}

// Welcome to the FizzBuzz Game!
// Let's play FizzBuzz!
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz

 
200. Swap Pairs of Adjacent Digits
#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

void swap_pairs_of_adjacent_digits(unsigned int number) {
    string number_str = to_string(number);
    int length = number_str.length();

    // Check if the number has an even length
    if (length % 2 != 0) {
        cout << "Please enter an integer with an even length." << endl;
        return;
    }

    // Swap pairs of adjacent digits
    string swapped_number = "";
    for (int i = 0; i < length; i += 2) {
        // Swap adjacent digits
        swapped_number += number_str[i + 1];
        swapped_number += number_str[i];
    }

    // Convert the result back to an integer
    unsigned int result = stoul(swapped_number);
    cout << "Original Number: " << number << endl;
    cout << "Number with Swapped Pairs of Adjacent Digits: " << result << endl;
}

int main() {
    unsigned int number = 123456;
    swap_pairs_of_adjacent_digits(number);
    return 0;
}


// Original Number: 123456
// Number with Swapped Pairs of Adjacent Digits: 214365


 
201. Capitalization Changer
#include <iostream>
#include <string>
#include <cctype>

using namespace std;

string change_capitalization(const string &input_string) {
    string result_string = "";

    for (char ch : input_string) {
        if (isupper(ch)) {
            // Convert uppercase to lowercase
            result_string += tolower(ch);
        } else {
            // Convert lowercase to uppercase
            result_string += toupper(ch);
        }
    }

    cout << "Original String: " << input_string << endl;
    cout << "String with Changed Capitalization: " << result_string << endl;

    return result_string;
}

int main() {
    string input = "Hello World";
    change_capitalization(input);
    return 0;
}

// Original String: Hello World
// String with Changed Capitalization: hELLO wORLD



 
202. Array Halves Swapper
#include <iostream>
#include <vector>
using namespace std;

void swap_array_halves(vector<int>& arr) {
    int length = arr.size();

    // Check if the array has an even length
    if (length % 2 != 0) {
        cout << "Please provide an array with an even length." << endl;
        return;
    }

    // Calculate the midpoint of the array
    int midpoint = length / 2;

    // Swap the two halves of the array
    for (int i = 0; i < midpoint; ++i) {
        swap(arr[i], arr[midpoint + i]);
    }

    cout << "Array with Swapped Halves: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
}

int main() {
    vector<int> array = {1, 2, 3, 4, 5, 6};
    swap_array_halves(array);
    return 0;
}


// Array with Swapped Halves: [4, 5, 6, 1, 2, 3]

203. Sum of Digits in String
#include <iostream>
#include <string>
using namespace std;

void sum_of_digits_in_string(const string& input_string) {
    int digit_sum = 0;

    for (char ch : input_string) {
        // Check if the character is a digit
        if (isdigit(ch)) {
            // Add the digit value to the sum
            digit_sum += ch - '0';
        }
    }

    cout << "Original String: " << input_string << endl;
    cout << "Sum of Digits in the String: " << digit_sum << endl;
}

int main() {
    sum_of_digits_in_string("abc123xyz456");
    return 0;
}

// Original String: abc123xyz456
// Sum of Digits in the String: 21

 
204. Sum of Cubes
#include <iostream>
using namespace std;

void sum_of_cubes(unsigned int up_to_integer) {
    unsigned long long cubes_sum = 0;  // Use long long to handle large sums

    for (unsigned int i = 1; i <= up_to_integer; ++i) {
        // Calculate the cube of each integer and add to sum
        cubes_sum += static_cast<unsigned long long>(i) * i * i;
    }

    cout << "Sum of Cubes from 1 to " << up_to_integer << ": " << cubes_sum << endl;
}

int main() {
    sum_of_cubes(5);
    return 0;
}

// Sum of Cubes from 1 to 5: 225

 
205. Maximum Integer for Sum
#include <iostream>
using namespace std;

void find_max_integer_for_sum(unsigned int target_sum) {
    unsigned int current_sum = 0;
    unsigned int max_integer = 0;

    while (current_sum + max_integer + 1 <= target_sum) {
        max_integer += 1;
        current_sum += max_integer;
    }

    cout << "Maximum Integer (n) for Sum <= " << target_sum << ": " << max_integer << endl;
}

int main() {
    find_max_integer_for_sum(15);
    return 0;
}

// Maximum Integer (n) for Sum <= 15: 5

 
206. URL Breakdown
#include <iostream>
#include <regex>
#include <string>
#include <unordered_map>

void break_url(const std::string& url) {
    // Regular expression to capture scheme, domain, and path
    std::regex url_regex(R"(^(\w+):\/\/([\w.-]+)(\/.*)?$)");
    std::smatch matches;

    if (std::regex_match(url, matches, url_regex)) {
        // Create a map to store the parts of the URL
        std::unordered_map<std::string, std::string> url_parts;

        url_parts["scheme"] = matches[1].str();
        url_parts["domain"] = matches[2].str();
        url_parts["path"] = matches[3].str().empty() ? "" : matches[3].str();

        // Output the parts of the URL
        std::cout << "URL Parts:\n";
        for (const auto& pair : url_parts) {
            std::cout << pair.first << ": " << pair.second << std::endl;
        }
    } else {
        std::cout << "Invalid URL format." << std::endl;
    }
}

int main() {
    break_url("https://www.example.org/page");
    return 0;
}


// URL Parts:
// path: /page
// scheme: https
// domain: www.example.org

 
207. Sort Strings by Length
#include <iostream>
#include <vector>
#include <algorithm>

void sort_strings_by_length(std::vector<std::string>& strings) {
    // Sort the vector of strings by length
    std::sort(strings.begin(), strings.end(), [](const std::string& a, const std::string& b) {
        return a.size() < b.size();
    });

    // Print the original array and the sorted array
    std::cout << "Original Array of Strings:\n";
    for (const auto& str : strings) {
        std::cout << str << " ";
    }
    std::cout << "\n";

    std::cout << "Array of Strings Sorted by Length:\n";
    for (const auto& str : strings) {
        std::cout << str << " ";
    }
    std::cout << "\n";
}

int main() {
    std::vector<std::string> strings = {"apple", "banana", "orange", "kiwi", "grape"};
    sort_strings_by_length(strings);
    return 0;
}


// Original Array of Strings:
// ["apple", "banana", "orange", "kiwi", "grape"]
// Array of Strings Sorted by Length:
// ["kiwi", "apple", "grape", "banana", "orange"]
208. Simplify Absolute Path
#include <iostream>
#include <vector>
#include <sstream>
#include <string>

void simplify_absolute_path(const std::string& path) {
    std::vector<std::string> parts;
    std::stringstream ss(path);
    std::string part;

    // Split the path into parts using '/' as a delimiter
    while (std::getline(ss, part, '/')) {
        if (part == "..") {
            if (!parts.empty()) {
                parts.pop_back(); // Go up one directory level
            }
        } else if (part != "." && !part.empty()) {
            parts.push_back(part); // Add valid part
        }
    }

    // Construct the simplified path
    std::string simplified_path = "/";
    for (size_t i = 0; i < parts.size(); ++i) {
        simplified_path += parts[i];
        if (i != parts.size() - 1) {
            simplified_path += "/";
        }
    }

    std::cout << "Original Absolute Path: " << path << std::endl;
    std::cout << "Simplified Absolute Path: " << simplified_path << std::endl;
}

int main() {
    simplify_absolute_path("/home/user/../documents/./file.txt");
    return 0;
}

 
209. Count Common Elements in Arrays
#include <iostream>
#include <vector>
#include <unordered_set>

void count_common_elements(const std::vector<int>& arr1, const std::vector<int>& arr2) {
    std::unordered_set<int> set1(arr1.begin(), arr1.end());
    std::unordered_set<int> set2(arr2.begin(), arr2.end());
    
    // Find common elements by using the intersection of the two sets
    std::unordered_set<int> common_elements;
    for (const int& elem : set1) {
        if (set2.find(elem) != set2.end()) {
            common_elements.insert(elem);
        }
    }

    // Display results
    std::cout << "Array 1: ";
    for (const int& num : arr1) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    std::cout << "Array 2: ";
    for (const int& num : arr2) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    std::cout << "Common Elements: ";
    for (const int& num : common_elements) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    std::cout << "Number of Common Elements: " << common_elements.size() << std::endl;
}

int main() {
    count_common_elements({1, 2, 3, 4, 5}, {3, 4, 5, 6, 7});
    return 0;
}


// Array 1: [1, 2, 3, 4, 5]
// Array 2: [3, 4, 5, 6, 7]
// Common Elements: [5, 3, 4]
// Number of Common Elements: 3

 
210. Check Same Digits in a Number
#include <stdio.h>

void are_all_digits_same(int number) {
    int first_digit = number % 10;
    number /= 10;

    while (number > 0) {
        int digit = number % 10;
        if (digit != first_digit) {
            printf("Digits in %d are not all the same.\n", number * 10 + first_digit); // Restore original number
            return;
        }
        number /= 10;
    }

    printf("Digits in %d are all the same.\n", number * 10 + first_digit); // Restore original number
}

int main() {
    are_all_digits_same(22222);
    are_all_digits_same(12345);
    return 0;
}

// Digits in 22222 are all the same.


 
211. Rightmost Round Number Position
#include <stdio.h>

void rightmost_round_number_position(int arr[], int size) {
    // Loop through the array from the end to the beginning
    for (int i = size - 1; i >= 0; i--) {
        if (arr[i] % 10 == 0) {
            printf("Rightmost Round Number: %d, Position: %d\n", arr[i], i + 1);
            return;
        }
    }
    printf("No round numbers found in the array. Position: 0\n");
}

int main() {
    int arr[] = {123, 450, 678, 900};
    int size = sizeof(arr) / sizeof(arr[0]);
    
    rightmost_round_number_position(arr, size);
    
    return 0;
}

// Rightmost Round Number: 900, Position: 4


 
212. Reverse Bits of 16-Bit Unsigned Short Integer
#include <stdio.h>

unsigned short reverse_bits_16_bit_unsigned_short(unsigned short integer) {
    unsigned short reversed_integer = 0;
    
    // Loop through each bit of the 16-bit integer
    for (int i = 0; i < 16; i++) {
        // Shift the bits of the original integer to the right and get the least significant bit
        unsigned short bit = (integer >> i) & 1;
        
        // Shift the bits of the reversed integer to the left and add the current bit
        reversed_integer |= (bit << (15 - i));
    }
    
    return reversed_integer;
}

void print_binary(unsigned short integer) {
    for (int i = 15; i >= 0; i--) {
        // Print each bit from most significant to least significant
        printf("%d", (integer >> i) & 1);
    }
}

int main() {
    unsigned short num = 5678;
    
    // Print the original number and its binary representation
    printf("Original Integer: %u\n", num);
    printf("Binary Representation: ");
    print_binary(num);
    printf("\n");
    
    // Reverse the bits
    unsigned short reversed_num = reverse_bits_16_bit_unsigned_short(num);
    
    // Print the reversed binary and the new integer
    printf("Reversed Binary: ");
    print_binary(reversed_num);
    printf("\n");
    
    printf("Reversed Integer: %u\n", reversed_num);
    
    return 0;
}

// Original Integer: 5678
// Binary Representation: 0001011000101110
// Reversed Binary: 0111010001101000
// Reversed Integer: 29800


 
213. Greater Than 15 Checker
#include <stdio.h>

void greater_than_15_checker(int number) {
    int result = (number > 15) ? number : 15;
    printf("Given Number: %d\n", number);
    printf("Result: %d\n", result);
}

int main() {
    greater_than_15_checker(20);  // Test with number greater than 15
    greater_than_15_checker(10);  // Test with number less than or equal to 15
    return 0;
}

// Given Number: 20
// Result: 21


 
214. Replace First Digit with $
#include <stdio.h>
#include <ctype.h>
#include <string.h>

void replace_first_digit_with_dollar(char *input_string) {
    int found_digit = 0;  // Flag to check if the first digit is found

    for (int i = 0; input_string[i] != '\0'; i++) {
        if (isdigit(input_string[i]) && !found_digit) {
            input_string[i] = '$';  // Replace first digit with '$'
            found_digit = 1;  // Mark that a digit has been replaced
        }
    }

    printf("Original String: %s\n", input_string);
}

int main() {
    char str[] = "abc123xyz456";
    replace_first_digit_with_dollar(str);
    return 0;
}

// Original String: abc123xyz456
// Modified String: abc$23xyz456


 
215. Prefix Sums
#include <stdio.h>

void prefix_sums(int input_array[], int size) {
    int prefix_sum = 0;
    printf("Original Array: [");
    for (int i = 0; i < size; i++) {
        printf("%d", input_array[i]);
        if (i < size - 1) {
            printf(", ");
        }
    }
    printf("]\n");

    printf("Prefix Sums Array: [");
    for (int i = 0; i < size; i++) {
        prefix_sum += input_array[i];
        printf("%d", prefix_sum);
        if (i < size - 1) {
            printf(", ");
        }
    }
    printf("]\n");
}

int main() {
    int input_array[] = {1, 2, 3, 4, 5};
    int size = sizeof(input_array) / sizeof(input_array[0]);
    prefix_sums(input_array, size);
    return 0;
}

// Original Array: [1, 2, 3, 4, 5]
// Prefix Sums Array: [1, 3, 6, 10, 15]

 
216. Next Prime Number
#include <stdio.h>
#include <math.h>

// Function to check if a number is prime
int is_prime(int num) {
    if (num < 2) {
        return 0;  // Not prime
    }
    for (int i = 2; i <= sqrt(num); i++) {
        if (num % i == 0) {
            return 0;  // Not prime
        }
    }
    return 1;  // Prime
}

// Function to find the next prime number after a given number
void next_prime_number(int given_number) {
    int next_number = given_number + 1;

    while (!is_prime(next_number)) {
        next_number++;
    }

    printf("Given Number: %d\n", given_number);
    printf("Next Prime Number: %d\n", next_number);
}

int main() {
    next_prime_number(10);
    return 0;
}

// Given Number: 10
// Next Prime Number: 11


217. Reverse Order of Bits
#include <stdio.h>

// Function to reverse the order of bits of a given 8-bit integer
void reverse_order_of_bits(unsigned char integer) {
    unsigned char reversed_integer = 0;
    unsigned char original_integer = integer;

    // Loop to reverse the bits
    for (int i = 0; i < 8; i++) {
        reversed_integer <<= 1; // Shift the bits of the reversed_integer left by 1
        if (integer & 1) {
            reversed_integer |= 1; // Set the least significant bit of reversed_integer
        }
        integer >>= 1; // Shift the bits of the original integer right by 1
    }

    // Print the original integer, binary representation, reversed binary, and reversed integer
    printf("Original Integer: %u\n", original_integer);

    // Print binary representation of the original integer
    printf("Binary Representation: ");
    for (int i = 7; i >= 0; i--) {
        printf("%u", (original_integer >> i) & 1);
    }
    printf("\n");

    // Print the reversed binary
    printf("Reversed Binary: ");
    for (int i = 7; i >= 0; i--) {
        printf("%u", (reversed_integer >> i) & 1);
    }
    printf("\n");

    // Print the reversed integer
    printf("Reversed Integer: %u\n\n", reversed_integer);
}

int main() {
    reverse_order_of_bits(14);
    reverse_order_of_bits(56);
    reverse_order_of_bits(234);
    return 0;
}


// Original Integer: 14
// Binary Representation: 00001110
// Reversed Binary: 01110000
// Reversed Integer: 112
// Original Integer: 56
// Binary Representation: 00111000
// Reversed Binary: 00011100
// Reversed Integer: 28
// Original Integer: 234
// Binary Representation: 11101010
// Reversed Binary: 01010111
// Reversed Integer: 87

 
218. Pyramid Pattern
#include <stdio.h>

// Function to generate an ASCII triangle (pyramid pattern)
void generate_ascii_triangle(int height) {
    for (int i = 1; i <= height; i++) {
        // Print leading spaces
        for (int j = 0; j < height - i; j++) {
            printf(" ");
        }

        // Print stars
        for (int j = 0; j < (i * 2 - 1); j++) {
            printf("*");
        }

        // Move to the next line
        printf("\n");
    }
}

int main() {
    int triangle_height = 5;
    generate_ascii_triangle(triangle_height);
    return 0;
}


//     *
//    ***
//   *****
//  *******
// *********


 
Congratulations!
In very line of code, they have woven a story of innovation and creativity.

This book has been your compass in the vast world of C.
Close this chapter knowing that every challenge overcome is an achievement, and every solution is a step toward mastery.
Thank you for allowing me to be part of your journey.
With gratitude, Hernando Abella…
Author of 200+ C Programs for Beginners

Discover other useful resources:
www.beat-byte-publishing.com

Get your bonus books here:
www.hernandoabella.com


