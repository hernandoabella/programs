![GitHub Banners (21)](https://github.com/user-attachments/assets/2019f1d0-1441-425b-99f1-b18c9b9d1d7d)

### 1. Print Hello World
Prints a friendly greeting — the classic first step in any programming language.
```python
print("Hello, World!")

# Output:
# Hello, World!
```

### 2. Add Two Numbers
Takes two numbers from the user and calculates their sum.
```python
num1 = float(input("Enter the first number: "))  # e.g. 4
num2 = float(input("Enter the second number: ")) # e.g. 6

sum_result = num1 + num2
print(f"The sum of {num1} and {num2} is: {sum_result}")

# Output:
# Enter the first number: 4
# Enter the second number: 6
# The sum of 4.0 and 6.0 is: 10.0
```

### 3. Find the Square Root
Calculates the square root of a given number using Python's math module.
```python
import math

input_number = float(input("Enter a non-negative number: "))  # e.g. 25

if input_number >= 0:
    square_root = math.sqrt(input_number)
    print(f"The square root of {input_number} is: {square_root}")
else:
    print("Please enter a valid non-negative number.")

# Output:
# Enter a non-negative number: 25
# The square root of 25.0 is: 5.0
```

### 4. Calculate the Area of a Triangle
**Uses the formula:** ½ × base × height to find the area.
```python
base = float(input("Enter the base of the triangle: "))     # e.g. 10
height = float(input("Enter the height of the triangle: ")) # e.g. 5

area = 0.5 * base * height
print(f"The area of the triangle with base {base} and height {height} is: {area}")

# Output:
# Enter the base of the triangle: 10
# Enter the height of the triangle: 5
# The area of the triangle with base 10.0 and height 5.0 is: 25.0
```

### 5. Swap Two Variables
Exchanges the values of two variables using Python’s elegant syntax.
```python
variable1 = input("Enter the first variable: ")  # e.g. Apple
variable2 = input("Enter the second variable: ") # e.g. Banana

print(f"Before swapping: Variable1 = {variable1}, Variable2 = {variable2}")

# Swapping
variable1, variable2 = variable2, variable1

print(f"After swapping: Variable1 = {variable1}, Variable2 = {variable2}")

# Output:
# Enter the first variable: Apple
# Enter the second variable: Banana
# Before swapping: Variable1 = Apple, Variable2 = Banana
# After swapping: Variable1 = Banana, Variable2 = Apple
```

### 6. Solve a Quadratic Equation
Solves equations of the form ax² + bx + c = 0.
```python
import math

a = float(input("Enter the coefficient a: "))  # e.g. 1
b = float(input("Enter the coefficient b: "))  # e.g. -3
c = float(input("Enter the coefficient c: "))  # e.g. 2

discriminant = b**2 - 4*a*c

if discriminant > 0:
    root1 = (-b + math.sqrt(discriminant)) / (2*a)
    root2 = (-b - math.sqrt(discriminant)) / (2*a)
    print(f"The roots are: {root1} and {root2}")
elif discriminant == 0:
    root = -b / (2*a)
    print(f"The equation has one root: {root}")
else:
    print("The equation has complex roots.")

# Output:
# Enter the coefficient a: 1
# Enter the coefficient b: -3
# Enter the coefficient c: 2
# The roots are: 2.0 and 1.0
```

### 7. Convert Kilometers to Miles
Converts a distance from kilometers to miles using a standard conversion factor.
```python
kilometers = float(input("Enter the distance in kilometers: "))  # e.g. 10
conversion_factor = 0.621371
miles = kilometers * conversion_factor

print(f"{kilometers} kilometers is approximately {miles} miles.")

# Output:
# Enter the distance in kilometers: 10
# 10.0 kilometers is approximately 6.21371 miles.
```

### 8. Convert Celsius to Fahrenheit
Converts temperature from Celsius to Fahrenheit.
```python
# Prompt user for temperature in Celsius
celsius = float(input("Enter the temperature in Celsius: "))

# Check if input is a valid number
if not math.isnan(celsius):
    # Convert Celsius to Fahrenheit
    fahrenheit = (celsius * 9) / 5 + 32
    print(f"{celsius} degrees Celsius is equal to {fahrenheit} degrees Fahrenheit.")
else:
    print("Please enter a valid number for the temperature in Celsius.")
```

### 9. Generate a Random Number
Randomly picks a number between two values. Great for simple games or simulations.
```python
import random

min_range = float(input("Enter the minimum value: "))  # e.g. 1
max_range = float(input("Enter the maximum value: "))  # e.g. 100

if min_range < max_range:
    random_number = random.uniform(min_range, max_range)
    print(f"Random number between {min_range} and {max_range}: {random_number}")
else:
    print("Minimum must be less than maximum!")

# Output:
# Enter the minimum value: 1
# Enter the maximum value: 100
# Random number between 1.0 and 100.0: 74.2391 (value may vary)
```

### 10. Check if a number is Positive, Negative, or Zero
A simple classifier that checks whether a number is positive, negative, or zero.
```python
# Prompt user for a number
number = float(input("Enter a number: "))

# Check if input is a valid number
if not math.isnan(number):
    # Check if the number is positive, negative, or zero
    if number > 0:
        print(f"{number} is a positive number.")
    elif number < 0:
        print(f"{number} is a negative number.")
    else:
        print("The entered number is zero.")
else:
    print("Please enter a valid number.")
```

### 11. Check if a Number is Odd or Even
Tells you if a given number is even or odd.
```python
# Prompt user for a number
number = input("Enter a number: ")

# Check if input is a valid integer
if number.isdigit():
    number = int(number)
    # Check if the number is odd or even
    if number % 2 == 0:
        print(f"{number} is an even number.")
    else:
        print(f"{number} is an odd number.")
else:
    print("Please enter a valid integer.")

# Output:
# Enter a number: 7
# 7 is an odd number.
```

### 12. Find the Largest Among Three Numbers
Compares three numbers and returns the largest.
```python
import math

# Prompt user for three numbers
num1 = float(input("Enter the first number: "))   # e.g. 10
num2 = float(input("Enter the second number: "))  # e.g. 25
num3 = float(input("Enter the third number: "))   # e.g. 15

# Check if inputs are valid numbers
if not (math.isnan(num1) or math.isnan(num2) or math.isnan(num3)):
    # Find the largest among the three numbers
    largest_number = max(num1, num2, num3)
    print(f"The largest number among {num1}, {num2}, and {num3} is: {largest_number}")
else:
    print("Please enter valid numbers for all three inputs.")

# Output:
# Enter the first number: 10
# Enter the second number: 25
# Enter the third number: 15
# The largest number among 10.0, 25.0, and 15.0 is: 25.0
```

### 13. Check a Prime Number
Determines whether the entered number is prime.
```python
# Prompt user for a number
number = int(input("Enter a number: "))  # e.g. 17

# Check if input is a valid integer greater than 1
if number > 1:
    is_prime = True

    # Check for factors from 2 to the square root of the number
    for i in range(2, int(number**0.5) + 1):
        if number % i == 0:
            is_prime = False
            break

    # Display the result
    if is_prime:
        print(f"{number} is a prime number.")
    else:
        print(f"{number} is not a prime number.")
else:
    print("Please enter a valid integer greater than 1.")

# Output:
# Enter a number: 17
# 17 is a prime number.
```

### 14. Print All Prime Numbers in an Interval
Prints all prime numbers between two given values.
```python
# Prompt user for the interval
start_number = int(input("Enter the starting number of the interval: "))  # e.g. 10
end_number = int(input("Enter the ending number of the interval: "))      # e.g. 20

# Check if the inputs are valid integers and the startNumber is less than the endNumber
if (
    isinstance(start_number, int)
    and isinstance(end_number, int)
    and start_number < end_number
    and start_number > 1
):
    print(f"Prime numbers in the interval [{start_number}, {end_number}]:")
    
    # Check for prime numbers in the interval
    for i in range(start_number, end_number + 1):
        is_prime = True
        
        for j in range(2, int(i ** 0.5) + 1):
            if i % j == 0:
                is_prime = False
                break
        
        if is_prime:
            print(i)
else:
    print(
        "Please enter valid integers, ensuring that the starting number is less than the ending number and greater than 1."
    )

# Output:
# Enter the starting number of the interval: 10
# Enter the ending number of the interval: 20
# Prime numbers in the interval [10, 20]:
# 11
# 13
# 17
# 19
```

### 15. Find the Factorial of a Number
Calculates the factorial of a given number using a loop.
```python
# Prompt user for a non-negative integer
number = int(input("Enter a non-negative integer: "))  # e.g. 5

# Check if input is a valid non-negative integer
if isinstance(number, int) and number >= 0:
    # Calculate the factorial
    factorial = 1
    for i in range(1, number + 1):
        factorial *= i

    print(f"The factorial of {number} is: {factorial}")
else:
    print("Please enter a valid non-negative integer.")

# Output:
# Enter a non-negative integer: 5
# The factorial of 5 is: 120
```

### 16. Display the Multiplication Table
This program displays the multiplication table of a given number, up to 10.
```python
# Prompt user for a number
number = int(input("Enter a number for the multiplication table: "))  # Example: 5

# Check if input is a valid integer
if isinstance(number, int):
    # Set range for the multiplication table (1 to 10)
    range_val = 10

    print(f"Multiplication table for {number} (up to {range_val}):")

    # Loop through and display the multiplication table
    for i in range(1, range_val + 1):
        result = number * i
        print(f"{number} x {i} = {result}")
else:
    print("Please enter a valid integer.")

"""
Sample Output:
Enter a number for the multiplication table: 5
Multiplication table for 5 (up to 10):
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
"""
```

### 17. Print the Fibonacci Sequence
This program generates and displays the Fibonacci sequence up to a user-defined number of terms.
```python
# Prompt user for the number of terms in the Fibonacci sequence
num_terms = int(input("Enter the number of terms in the Fibonacci sequence: "))  # Example: 7

# Check if input is a valid integer and greater than 0
if isinstance(num_terms, int) and num_terms > 0:
    print(f"Fibonacci sequence of {num_terms} terms:")

    fib_list = [0, 1]  # Starting values of the Fibonacci sequence

    # Generate the Fibonacci sequence
    for i in range(2, num_terms):
        fib_list.append(fib_list[i - 1] + fib_list[i - 2])

    # Print the sequence
    print(", ".join(map(str, fib_list)))
else:
    print("Please enter a valid positive integer for the number of terms.")

"""
Sample Output:
Enter the number of terms in the Fibonacci sequence: 7
Fibonacci sequence of 7 terms:
0, 1, 1, 2, 3, 5, 8
"""
```

### 18. Check Armstrong Number
This program checks if a given number is an Armstrong number.
> **What's an Armstrong number?** Is a number equal to the sum of its digits, each raised to the power of the number of digits.
```python
# Prompt user for a number
number = int(input("Enter a number: "))  # Example: 153

# Check if input is a valid positive integer
if isinstance(number, int) and number > 0:
    original_number = number
    number_of_digits = len(str(original_number))
    sum_of_digits = 0

    # Calculate the sum of digits, each raised to the power of the number of digits
    while original_number > 0:
        digit = original_number % 10
        sum_of_digits += digit ** number_of_digits
        original_number //= 10

    # Compare sum with the original number
    if sum_of_digits == number:
        print(f"{number} is an Armstrong number.")
    else:
        print(f"{number} is not an Armstrong number.")
else:
    print("Please enter a valid positive integer.")

"""
Sample Output:
Enter a number: 153
153 is an Armstrong number.
"""
```

### 19. Find an Armstrong Number in an Interval
This program finds and prints all Armstrong numbers within a user-defined range.
```python
# Get range input from user
start_number = int(input("Enter the starting number of the interval: "))  # Example: 100
end_number = int(input("Enter the ending number of the interval: "))      # Example: 999

# Validate the input
if (
    isinstance(start_number, int)
    and isinstance(end_number, int)
    and start_number > 0
    and start_number < end_number
):
    print(f"Armstrong numbers in the interval [{start_number}, {end_number}]:")
    
    # Loop through the interval
    for i in range(start_number, end_number + 1):
        original_number = i
        number_of_digits = len(str(original_number))
        sum_of_digits = 0

        # Compute the sum of digits raised to the power of the number of digits
        while original_number > 0:
            digit = original_number % 10
            sum_of_digits += digit ** number_of_digits
            original_number //= 10

        # Check if the number is an Armstrong number
        if sum_of_digits == i:
            print(i)
else:
    print("Please enter valid positive integers with start < end.")

"""
Sample Output:
Enter the starting number of the interval: 100
Enter the ending number of the interval: 999
Armstrong numbers in the interval [100, 999]:
153
370
371
407
"""
```

### 20. Make a Simple Calculator
A basic calculator that performs addition, subtraction, multiplication, or division based on user input.
```python
import math

# Prompt user for two numbers
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Check if inputs are valid numbers
if not (math.isnan(num1) or math.isnan(num2)):
    # Prompt user for the operation
    operation = input("Choose an operation (+ for addition, - for subtraction, * for multiplication, / for division): ")

    # Perform the selected operation
    if operation in ['+', '-', '*', '/']:
        if operation == '+':
            result = num1 + num2
        elif operation == '-':
            result = num1 - num2
        elif operation == '*':
            result = num1 * num2
        elif operation == '/':
            if num2 != 0:
                result = num1 / num2
            else:
                print("Cannot divide by zero.")
                result = None
    else:
        print("Invalid operation.")
        result = None

    # Display the result
    if result is not None:
        print(f"Result of {num1} {operation} {num2} is: {result}")
else:
    print("Please enter valid numbers.")

# ------------------------
# Example Output:
# Enter the first number: 10
# Enter the second number: 5
# Choose an operation (+ for addition, - for subtraction, * for multiplication, / for division): *
# Result of 10.0 * 5.0 is: 50.0
```

### 21. Find the Sum of Natural Numbers
This program calculates the sum of natural numbers from 1 to a given positive integer n using the formula:

![image](https://github.com/user-attachments/assets/69a0be9e-4507-4ba3-b485-2998fdb3d90c)

```python
# Prompt user for a positive integer
n = int(input("Enter a positive integer: "))  # Example: 5

# Check if input is a valid positive integer
if isinstance(n, int) and n > 0:
    # Calculate the sum of natural numbers
    sum_of_natural_numbers = (n * (n + 1)) // 2
    print(f"The sum of natural numbers from 1 to {n} is: {sum_of_natural_numbers}")  # Example Output: The sum of natural numbers from 1 to 5 is: 15
else:
    print("Please enter a valid positive integer.")

"""
Sample Output:
Enter a positive integer: 5
The sum of natural numbers from 1 to 5 is: 15
"""
```

### 22. Check if the Numbers Have the Same Last Digit
This program checks whether two given numbers have the same last digit. It extracts the last digit of each number and compares it.
```python
# Prompt user for two numbers
num1 = int(input("Enter the first number: "))  # Example: 123
num2 = int(input("Enter the second number: "))  # Example: 43

# Check if inputs are valid integers
if isinstance(num1, int) and isinstance(num2, int):
    # Extract the last digit of each number
    last_digit_1 = abs(num1 % 10)
    last_digit_2 = abs(num2 % 10)

    # Check if the last digits are the same
    if last_digit_1 == last_digit_2:
        print(f"The last digit of {num1} is the same as the last digit of {num2}.")  # Example Output: The last digit of 123 is the same as the last digit of 43.
    else:
        print(f"The last digit of {num1} is different from the last digit of {num2}.")  # Example Output: The last digit of 123 is different from the last digit of 43.
else:
    print("Please enter valid integers.")

"""
Sample Output:
Enter the first number: 123
Enter the second number: 43
The last digit of 123 is the same as the last digit of 43.
"""
```

### 23. Find HCF or GCD
This program calculates the Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two positive integers using a basic approach by checking divisors of both numbers.
```python
# Prompt user for two positive integers
num1 = int(input("Enter the first positive integer: "))  # Example: 36
num2 = int(input("Enter the second positive integer: "))  # Example: 60

# Check if inputs are valid positive integers
if isinstance(num1, int) and isinstance(num2, int) and num1 > 0 and num2 > 0:
    # Find the HCF or GCD
    smaller_number = min(num1, num2)  # Find the smaller number for iteration
    hcf = 1  # Start with 1 as the HCF

    # Check divisibility to find the HCF
    for i in range(1, smaller_number + 1):
        if num1 % i == 0 and num2 % i == 0:
            hcf = i  # Update HCF if divisible by both numbers

    print(f"The HCF (GCD) of {num1} and {num2} is: {hcf}")  # Output the result
else:
    print("Please enter valid positive integers.")

"""
Sample Output:
Enter the first positive integer: 36
Enter the second positive integer: 60
The HCF (GCD) of 36 and 60 is: 12
"""
```

### 24. Find LCM
```python
# Prompt user for two positive integers
num1 = int(input("Enter the first positive integer: "))
num2 = int(input("Enter the second positive integer: "))

# Check if inputs are valid positive integers
if isinstance(num1, int) and isinstance(num2, int) and num1 > 0 and num2 > 0:
    # Find the LCM
    larger_number = max(num1, num2)
    lcm = larger_number

    while True:
        if lcm % num1 == 0 and lcm % num2 == 0:
            print(f"The LCM of {num1} and {num2} is: {lcm}")
            break
        lcm += larger_number
else:
    print("Please enter valid positive integers.")
```

### 25. Find the Factors of a Number
```python
# Prompt user for a positive integer
number = int(input("Enter a positive integer: "))

# Check if input is a valid positive integer
if isinstance(number, int) and number > 0:
    print(f"Factors of {number}:")

    # Find and display the factors
    for i in range(1, number + 1):
        if number % i == 0:
            print(i)
else:
    print("Please enter a valid positive integer.")
```

### 26. Find the Sum of Natural Numbers Using Recursion
```python
# Define a recursive function to calculate the sum of natural numbers
def sum_of_natural_numbers(n):
    if n == 1:
        return 1
    else:
        return n + sum_of_natural_numbers(n - 1)

# Prompt user for a positive integer
number = int(input("Enter a positive integer: "))

# Check if input is a valid positive integer
if isinstance(number, int) and number > 0:
    # Calculate and display the sum using recursion
    sum_result = sum_of_natural_numbers(number)
    print(f"The sum of natural numbers up to {number} is: {sum_result}")
else:
    print("Please enter a valid positive integer.")
```

### 27. Guess a Random Number
```python
import random

# Generate a random number between 1 and 100
random_number = random.randint(1, 100)

# Initialize variables
user_guess = None
attempts = 0

# Game loop
while user_guess != random_number:
    # Prompt user for a guess
    user_input = input("Guess the random number (between 1 and 100): ")

    # Check if the input is a valid number
    if user_input.isdigit():
        user_guess = int(user_input)
        attempts += 1

        # Provide feedback to the user
        if user_guess < random_number:
            print("Too low! Try again.")
        elif user_guess > random_number:
            print("Too high! Try again.")
        else:
            print(f"Congratulations! You guessed the correct number {random_number} in {attempts} attempts.")
    else:
        print("Please enter a valid number.")
```

### 28. Shuffle Deck of Cards
```python
import random

# Function to create a standard deck of cards
def create_deck():
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

    deck = []

    for suit in suits:
        for rank in ranks:
            deck.append(f"{rank} of {suit}")

    return deck

# Function to shuffle the deck of cards
def shuffle_deck(deck):
    random.shuffle(deck)

# Create and display an initial deck of cards
initial_deck = create_deck()
print("Initial Deck:")
print(initial_deck)

# Shuffle the deck and display the shuffled deck
shuffled_deck = initial_deck.copy()  # Create a copy to avoid modifying the original
shuffle_deck(shuffled_deck)
print("\nShuffled Deck:")
print(shuffled_deck)
```

### 29. Display Fibonacci Sequence Using Recursion
```python
# Function to generate the Fibonacci sequence using recursion
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

# Prompt user for the number of terms in the Fibonacci sequence
num_terms = int(input("Enter the number of terms in the Fibonacci sequence: "))

# Check if input is a valid non-negative integer
if isinstance(num_terms, int) and num_terms >= 0:
    print(f"Fibonacci sequence of {num_terms} terms:")

    # Display the Fibonacci sequence using recursion
    for i in range(num_terms):
        print(fibonacci(i))
else:
    print("Please enter a valid non-negative integer for the number of terms.")
```

### 30. Find Factorial of Number Using Recursion
```python
# Function to calculate the factorial using recursion
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Prompt user for a non-negative integer
number = int(input("Enter a non-negative integer: "))

# Check if input is a valid non-negative integer
if isinstance(number, int) and number >= 0:
    # Calculate and display the factorial using recursion
    result = factorial(number)
    print(f"The factorial of {number} is: {result}")
else:
    print("Please enter a valid non-negative integer.")
```

### 31. Convert Decimal to Binary
```python
# Function to convert decimal to binary
def decimal_to_binary(decimal_number):
    if decimal_number == 0:
        return "0"

    binary_result = ""
    while decimal_number > 0:
        remainder = decimal_number % 2
        binary_result = str(remainder) + binary_result
        decimal_number = decimal_number // 2

    return binary_result

# Prompt user for a decimal number
decimal_number = int(input("Enter a decimal number: "))

# Check if input is a valid integer
if isinstance(decimal_number, int) and decimal_number >= 0:
    # Convert and display the binary equivalent
    binary_equivalent = decimal_to_binary(decimal_number)
    print(f"The binary equivalent of {decimal_number} is: {binary_equivalent}")
else:
    print("Please enter a valid non-negative integer.")
``` 
### 32. Find the ASCII Value of a Character
```python
# Prompt user for a character
character = input("Enter a character: ")

# Check if input is a valid single character
if len(character) == 1:
    # Calculate and display the ASCII value
    ascii_value = ord(character)
    print(f"The ASCII value of '{character}' is: {ascii_value}")
else:
    print("Please enter a valid single character.")
```

### 33. Check Whether a String is Palindrome or Not
```python
# Function to check if a string is a palindrome
def is_palindrome(s):
    # Remove non-alphanumeric characters and convert to lowercase
    clean_str = ''.join(char.lower() for char in s if char.isalnum())

    # Compare the original and reversed strings
    return clean_str == clean_str[::-1]

# Prompt user for a string
input_string = input("Enter a string: ")

# Check if input is a valid string
if len(input_string) > 0:
    # Check and display if the string is a palindrome
    if is_palindrome(input_string):
        print(f'"{input_string}" is a palindrome.')
    else:
        print(f'"{input_string}" is not a palindrome.')
else:
    print("Please enter a valid string.")
```

### 34. Sort Words in Alphabetical Order
```python
# Prompt user for a sentence or a list of words
input_string = input("Enter a sentence or a list of words: ")

# Check if input is a valid string
if len(input_string) > 0:
    # Split the input into a list of words
    words_list = input_string.split()

    # Sort the list of words in alphabetical order
    sorted_words = sorted(words_list)

    # Display the sorted words
    print("Sorted Words:")
    print(", ".join(sorted_words))
else:
    print("Please enter a valid string.")
```

### 35. Replace Characters of a String
```python
# Prompt user for a string
input_string = input("Enter a string: ")

# Check if input is a valid string
if len(input_string) > 0:
    # Prompt user for a target character and a replacement character
    target_char = input("Enter the target character: ")
    replacement_char = input("Enter the replacement character: ")

    # Check if target_char is a single character and input is not empty
    if len(target_char) == 1:
        # Replace all occurrences of target_char with replacement_char
        modified_string = input_string.replace(target_char, replacement_char)

        # Display the modified string
        print(f"Modified String: {modified_string}")
    else:
        print("Please enter a valid target character (single character).")
else:
    print("Please enter a valid string.")
```

### 36. Reverse a String
```python
# Prompt user for a string
input_string = input("Enter a string: ")

# Check if input is a valid string
if len(input_string) > 0:
    # Reverse the string
    reversed_string = input_string[::-1]

    # Display the reversed string
    print(f"Reversed String: {reversed_string}")
else:
    print("Please enter a valid string.")
```python

### 37. Check the Number of Occurrences of a Character in the String
```python
# Prompt user for a string and a character
input_string = input("Enter a string: ")
target_char = input("Enter the character to count: ")

# Check if input is valid
if len(input_string) > 0 and len(target_char) == 1:
    # Count occurrences of the target character
    count = input_string.count(target_char)

    # Display the result
    print(f"Number of occurrences of '{target_char}' in '{input_string}': {count}")
else:
    print("Please enter a valid string and a single character.")
```

### 38. Convert the First Letter of a String into UpperCase
```python
# Prompt user for a string
input_string = input("Enter a string: ")

# Check if input is a valid string
if len(input_string) > 0:
    # Capitalize the first letter
    result_string = input_string.capitalize()

    # Display the result
    print(f"Original String: {input_string}")
    print(f"String with First Letter Uppercase: {result_string}")
else:
    print("Please enter a valid string.")
```

### 39. Count the Number of Vowels in a String
```python
# Function to count vowels in a string
def count_vowels(string):
    vowels = "aeiouAEIOU"
    vowel_count = 0

    for char in string:
        if char in vowels:
            vowel_count += 1

    return vowel_count

# Prompt user for a string
input_string = input("Enter a string: ")

# Check if input is a valid string
if len(input_string) > 0:
    # Call the function and display the result
    number_of_vowels = count_vowels(input_string)
    print(f"Number of vowels in '{input_string}': {number_of_vowels}")
else:
    print("Please enter a valid string.")
```

### 40. Check Whether a String Starts and Ends With Certain Characters
```python
# Prompt user for a string
input_string = input("Enter a string: ")

# Check if input is a valid string
if len(input_string) > 0:
    # Prompt user for start and end characters
    start_char = input("Enter the starting characters: ")
    end_char = input("Enter the ending characters: ")

    # Check if the string starts and ends with the specified characters
    if input_string.startswith(start_char) and input_string.endswith(end_char):
        print(f"The string '{input_string}' starts with '{start_char}' and ends with '{end_char}'.")
    else:
        print(f"The string '{input_string}' does not start with '{start_char}' or does not end with '{end_char}'.")
else:
    print("Please enter a valid string.")
```

### 41. Replace All Occurrences of a String
```python
# Example string
original_string = "Hello world, world!"

# String to replace
search_string = "world"

# Replacement string
replacement_string = "universe"

# Replace all occurrences using replace() with a global regex
modified_string = original_string.replace(search_string, replacement_string)

# Display the result
print(f"Original String: {original_string}")
print(f"Modified String: {modified_string}")
```

### 42. Create Multiline Strings
```python
# Multiline string using triple quotes
multiline_string = '''
    This is a multiline string.
    It spans multiple lines.
    You can include line breaks and indentation easily.
'''

print(multiline_string)
```

### 43. Format Numbers as Currency Strings
```python
import locale

# Set the locale to United States
locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')

# Example number
amount = 1234567.89

# Format as currency string
formatted_amount = locale.currency(amount, grouping=True)

# Display the formatted currency string
print(f"Formatted Amount: {formatted_amount}")
```

### 44. Generate Random String
```python
import random
import string

def generate_random_string(length):
    characters = string.ascii_letters + string.digits
    random_string = ''.join(random.choice(characters) for _ in range(length))
    return random_string

# Generate a random string of length 8
random_string = generate_random_string(8)

# Display the random string
print(f"Random String: {random_string}")
```

### 45. Check if a String Starts with Another String
```python
# Example strings
main_string = "Hello, World!"
search_string = "Hello"

# Check if main_string starts with search_string
starts_with = main_string.startswith(search_string)

# Display the result
print(f"Does the string start with '{search_string}'? {starts_with}")
```

### 46. Trim a String
```python
# Example string with leading and trailing whitespaces
string_with_spaces = "   Hello, World!   "

# Trim the string
trimmed_string = string_with_spaces.strip()

# Display the result
print(f"Original String: '{string_with_spaces}'")
print(f"Trimmed String: '{trimmed_string}'")
```

### 47. Check Whether a String Contains a Substring
```python
# Example string
main_string = "Hello, World!"
substring_to_check = "World"

# Check if main_string contains substring_to_check
contains_substring = substring_to_check in main_string

# Display the result
print(f"Does the string contain '{substring_to_check}'? {contains_substring}")
```

### 48. Compare Two Strings
# Example strings
string1 = "Hello"
string2 = "hello"

# Case-sensitive comparison
case_sensitive_comparison = string1 == string2

# Case-insensitive comparison
case_insensitive_comparison = string1.lower() == string2.lower()

# Display the results
print(f"Case-sensitive comparison: {case_sensitive_comparison}")
print(f"Case-insensitive comparison: {case_insensitive_comparison}")
 
### 49. Encode a String to Base64
```python
import base64

# Original string
original_string = "Hello, 你好!"

# Encode the string to Base64
base64_encoded_string = base64.b64encode(original_string.encode('utf-8')).decode('utf-8')

# Display the result
print(f"Original String: {original_string}")
print(f"Base64 Encoded String: {base64_encoded_string}")
```

### 50. Replace all Instances of a Character in a String
```python
# Example string
original_string = "Hello, World!"

# Character to replace
char_to_replace = "l"

# Replacement character
replacement_char = "x"

# Replace all instances of char_to_replace with replacement_char
modified_string = original_string.replace(char_to_replace, replacement_char)

# Display the result
print(f"Original String: {original_string}")
print(f"Modified String: {modified_string}")
```
 
51. Replace All Line Breaks with

# Example string with line breaks
string_with_line_breaks = "Hello,\nWorld!\nThis is a new line."

# Replacement string or character
replacement_string = "-"

# Replace all line breaks with the replacement string
string_without_line_breaks = string_with_line_breaks.replace("\n", replacement_string)

# Display the result
print("Original String:")
print(string_with_line_breaks)
print("\nString without Line Breaks:")
print(string_without_line_breaks)




 
52. Check Leap Year

def is_leap_year(year):
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return True
    else:
        return False

# Example usage
year_to_check = 2024
if is_leap_year(year_to_check):
    print(f"{year_to_check} is a leap year.")
else:
    print(f"{year_to_check} is not a leap year.")

 
53. Format the Date
from datetime import datetime

# Get the current date
current_date = datetime.utcnow()

# Format the date
formatted_date = current_date.strftime("%A, %B %d, %Y")

# Display the result
print(f"Formatted Date: {formatted_date}")


 
54. Display Current Date

from datetime import datetime

# Get the current date
current_date = datetime.now()

# Format the current date as a string
formatted_date = current_date.strftime("%m/%d/%Y")  # Adjust the format as needed

# Display the result
print(f"Current Date: {formatted_date}")

 
55. Compare The Value of Two Dates

from datetime import datetime

# Example dates
date1 = datetime.strptime('2022-01-01', '%Y-%m-%d')
date2 = datetime.strptime('2023-01-01', '%Y-%m-%d')

# Compare dates
if date1 < date2:
    print(f"{date1} is earlier than {date2}")
elif date1 > date2:
    print(f"{date1} is later than {date2}")
else:
    print(f"{date1} is equal to {date2}")

 
56. Create Countdown Timer

import datetime
import time

# Function to update the countdown
def update_countdown(target_date):
    while True:
        # Get the current date and time
        current_datetime = datetime.datetime.now()

        # Calculate the time difference
        time_difference = target_date - current_datetime

        # Check if the countdown has reached zero
        if time_difference.total_seconds() <= 0:
            print("Countdown expired!")
            break

        # Format and display the countdown
        days = time_difference.days
        hours, remainder = divmod(time_difference.seconds, 3600)
        minutes, seconds = divmod(remainder, 60)
        countdown_str = f"{days}d {hours}h {minutes}m {seconds}s"
        print("Countdown:", countdown_str)

        # Wait for one second
        time.sleep(1)

# Set the target date for the countdown
target_date = datetime.datetime(2023, 1, 1)

# Start the countdown
update_countdown(target_date)

 
57. Remove Specific Item From an Array

# Example list
original_list = [1, 2, 3, 4, 5]
item_to_remove = 3

# Find the index of the item to remove
try:
    index_to_remove = original_list.index(item_to_remove)
    # Remove the item from the list
    original_list.pop(index_to_remove)
    print("Original List:", original_list)
except ValueError:
    print("Item not found in the list.")





















58. Check if An Array Contains a Specified Value

# Example list
my_list = [1, 2, 3, 4, 5]
value_to_check = 3

# Check if the list includes the specified value
contains_value = value_to_check in my_list

# Display the result
print(f"Does the list include {value_to_check}? {contains_value}")



 
59. Insert Item in an Array

# Example list
my_list = [1, 2, 3, 4, 5]
item_to_insert = 6

# Insert the item at the end of the list
my_list.append(item_to_insert)

# Display the result
print("List after inserting:", my_list)

 
60. Get Random Item From an Array

import random

# Example list
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Get a random item from the list
random_item = random.choice(my_list)

# Display the result
print("Random Item:", random_item)




 
61. Perform Intersection Between Two Arrays

# Example lists
list1 = [1, 2, 3, 4, 5]
list2 = [3, 4, 5, 6, 7]

# Find the intersection
intersection = [value for value in list1 if value in list2]

# Display the result
print("Intersection:", intersection)

 
62. Split Array into Smaller Chunks

def chunk_array(array, chunk_size):
    result = []
    for i in range(0, len(array), chunk_size):
        result.append(array[i:i+chunk_size])
    return result

# Example array
my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Split the array into chunks of size 3
chunks = chunk_array(my_array, 3)

# Display the result
print("Original Array:", my_array)
print("Chunks:", chunks)

 
63. Get File Extension

def get_file_extension(file_name):
    # Split the file name based on the dot
    parts = file_name.split('.')

    # Get the last part of the array (the file extension)
    extension = parts[-1]

    return extension

# Example usage
file_name = "example.txt"
file_extension = get_file_extension(file_name)

print(f"File Extension: {file_extension}")

 
64. Check If a Variable Is undefined or null

# Example variable
variable = None

# Check if the variable is None
if variable is None:
    print("Variable is None")
else:
    print("Variable has a value")

 
65. Generate a Random Number Between Two Numbers

import random

def get_random_number(min_val, max_val):
    # Generate a random number in the range [min_val, max_val]
    return random.randint(min_val, max_val)

# Example usage: Generate a random number between 1 and 100
random_num = get_random_number(1, 100)
print("Random Number:", random_num)

 
66. Get The Current URL

from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def get_url_details():
    # Get the domain
    domain = request.host

    # Get the path
    path = request.path

    # Get the query parameters
    query_params = request.query_string.decode()

    # Display the results
    print("Domain:", domain)
    print("Path:", path)
    print("Query Parameters:", query_params)
    return "Check the console for details."

if __name__ == '__main__':
    app.run()

 
67. Validate An Email Address

import re

def validate_email(email):
    # Regular expression for a basic email validation
    email_regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'

    # Test the email against the regular expression
    return re.match(email_regex, email) is not None

# Example usage:
email_to_validate = "example@email.com"
if validate_email(email_to_validate):
    print("Email is valid")
else:
    print("Email is not valid")

 
68. Check If a Variable is of Function Type

# Example variable
def my_function():
    print("Hello, world!")

# Check if the variable is a function
if callable(my_function):
    print("The variable is of function type")
else:
    print("The variable is not of function type")


 
69. Work With Constants

# Define a constant (by convention, use all uppercase)
PI = 3.14159

# Attempt to reassign a constant (will not result in an error, but it's against the convention)
# PI = 3.14  # Uncommenting this line will not result in an error, but it's against the convention

# Display the value of the constant
print("The value of PI is:", PI)


 
70. Pass Parameter to a threading.Timer Function

import threading

def my_function(parameter):
    print("Parameter received:", parameter)

# Define the parameter
my_parameter = "Hello, world!"

# Define a function to be executed after a delay
def delayed_execution():
    my_function(my_parameter)

# Schedule the function to be executed after a delay
timer = threading.Timer(1.0, delayed_execution)
timer.start()

 
71. Generate a Range of Numbers and Characters

def generate_number_range(start, end):
    result = []
    for i in range(start, end + 1):
        result.append(i)
    return result

# Example usage: Generate numbers from 1 to 5
number_range = generate_number_range(1, 5)
print("Number Range:", number_range)

 
72. Perform Function Overloading

def example_function(*args):
    if len(args) == 0:
        # No arguments provided
        print("No arguments")
    elif len(args) == 1 and isinstance(args[0], int):
        # One argument of type number provided
        print("One number argument:", args[0])
    elif len(args) == 2 and isinstance(args[0], str) and isinstance(args[1], int):
        # Two arguments: a string followed by a number
        print("String and number arguments:", args[0], args[1])
    else:
        # Default case
        print("Invalid arguments")

# Example usage
example_function()
example_function(42)
example_function("Hello", 7)
example_function(True, "world")  # Invalid arguments


 
73. Implement a Stack

class Stack:
    def __init__(self):
        self.items = []

    # Push an element onto the stack
    def push(self, element):
        self.items.append(element)

    # Pop the top element from the stack
    def pop(self):
        if self.is_empty():
            return "Underflow"
        return self.items.pop()

    # Peek at the top element without removing it
    def peek(self):
        return self.items[-1] if self.items else None

    # Check if the stack is empty
    def is_empty(self):
        return len(self.items) == 0

    # Get the size of the stack
    def size(self):
        return len(self.items)

    # Print the stack elements
    def print(self):
        print(self.items)

# Example usage
stack = Stack()

stack.push(1)
stack.push(2)
stack.push(3)

print("Stack elements:")
stack.print()  # Outputs: [1, 2, 3]

print("Top element:", stack.peek())  # Outputs: 3

print("Popped element:", stack.pop())  # Outputs: 3

print("Stack size:", stack.size())  # Outputs: 2

print("Is the stack empty?", stack.is_empty())  # Outputs: False
























 
74. Implement a Queue

class Queue:
    def __init__(self):
        self.items = []

    # Enqueue an element at the end of the queue
    def enqueue(self, element):
        self.items.append(element)

    # Dequeue the element from the front of the queue
    def dequeue(self):
        if self.is_empty():
            return "Underflow"
        return self.items.pop(0)

    # Peek at the front element without removing it
    def front(self):
        if self.is_empty():
            return "Queue is empty"
        return self.items[0]

    # Check if the queue is empty
    def is_empty(self):
        return len(self.items) == 0

    # Get the size of the queue
    def size(self):
        return len(self.items)

    # Print the queue elements
    def print(self):
        print(self.items)

# Example usage
queue = Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

print("Queue elements:")
queue.print()  # Outputs: [1, 2, 3]

print("Front element:", queue.front())  # Outputs: 1

print("Dequeued element:", queue.dequeue())  # Outputs: 1

print("Queue size:", queue.size())  # Outputs: 2

print("Is the queue empty?", queue.is_empty())  # Outputs: False

 
75. Check if a Number is Float or Integer

def check_number_type(number):
    # Check if the number has a fractional part
    if isinstance(number, int):
        print(str(number) + " is an integer.")
    elif isinstance(number, float):
        print(str(number) + " is a float.")
    else:
        print(str(number) + " is not a valid number.")

# Example usage:
check_number_type(5)        # Outputs: 5 is an integer.
check_number_type(3.14)     # Outputs: 3.14 is a float.
check_number_type(7.0)      # Outputs: 7.0 is a float.
check_number_type(-2.5)     # Outputs: -2.5 is a float.
check_number_type(float('nan'))  # Outputs: nan is not a valid number.
check_number_type("abc")    # Outputs: abc is not a valid number.


 
76. Pass a Function as Parameter

# Function that takes another function as a parameter
def operate_on_numbers(a, b, operation):
    return operation(a, b)

# Example functions to be passed as parameters
def add(x, y):
    return x + y

def multiply(x, y):
    return x * y

# Example usage
result1 = operate_on_numbers(3, 5, add)
print("Result of addition:", result1)  # Outputs: 8

result2 = operate_on_numbers(3, 5, multiply)
print("Result of multiplication:", result2)  # Outputs: 15


 
77. Get the Dimensions of an Image

from PIL import Image
import requests
from io import BytesIO

def get_image_dimensions(image_url):
    try:
        # Make a request to get the image content
        response = requests.get(image_url)
        # Open the image using PIL
        img = Image.open(BytesIO(response.content))
        # Get the dimensions
        width, height = img.size
        # Display the dimensions
        print("Width:", width)
        print("Height:", height)
    except Exception as e:
        print("Error loading the image:", e)

# Example usage
image_url = "path/to/your/image.jpg"
get_image_dimensions(image_url)



 
78. Remove All Whitespaces From a Text

import re

def remove_whitespaces(input_text):
    # Use a regular expression to replace all whitespaces with an empty string
    return re.sub(r'\s', '', input_text)

# Example usage
text_with_whitespaces = "This is a text with spaces"
text_without_whitespaces = remove_whitespaces(text_with_whitespaces)

print("Original Text:", text_with_whitespaces)
print("Text without Whitespaces:", text_without_whitespaces)


 
79. Write to Console

# Write a message to the console
print("Hello, world!")

# You can also print variables or expressions
number = 42
print("The answer is:", number)

# Multiple values can be printed in a single statement
first_name = "John"
last_name = "Doe"
print("Full Name:", first_name, last_name)

 
80. Convert Date to Number

from datetime import datetime

# Create a datetime object representing the current date and time
current_date = datetime.now()

# Get the numeric representation of the date (milliseconds since the Unix Epoch)
numeric_date = int(current_date.timestamp() * 1000)

print("Current Date:", current_date)
print("Numeric Representation:", numeric_date)
 
81. Find the Average of Two Numbers

def find_average(num1, num2):
    # Calculate the sum of the two numbers
    total = num1 + num2

    # Calculate the average by dividing the sum by 2
    average = total / 2

    return average

# Example usage
number1 = 10
number2 = 20

result = find_average(number1, number2)

print(f"The average of {number1} and {number2} is: {result}")

 
82. Calculate the Area of a Circle

import math

def calculate_circle_area(radius):
    # Check if the radius is a valid number
    if not isinstance(radius, (int, float)) or radius <= 0:
        return "Invalid radius. Please provide a positive number."

    # Calculate the area
    area = math.pi * radius ** 2

    return area

# Example usage:
radius = 5
area = calculate_circle_area(radius)

print(f"The area of a circle with radius {radius} is: {area}")



 
83. Random Color Generator

import random

def generate_random_color():
    # Generate random values for red, green, and blue components
    red = random.randint(0, 255)
    green = random.randint(0, 255)
    blue = random.randint(0, 255)

    # Create the RGB color string
    color = f"rgb({red}, {green}, {blue})"

    return color

# Example usage:
random_color = generate_random_color()

print("Random Color:", random_color)

 
84. Check if a String is Empty

def is_empty_string(string):
    return len(string) == 0

# Example usage:
empty_string = ""
non_empty_string = "Hello, world!"

print("Is empty_string empty?", is_empty_string(empty_string))  # Outputs: True
print("Is non_empty_string empty?", is_empty_string(non_empty_string))  # Outputs: False

 
85. Capitalize the First Letter of a String

def capitalize_first_letter(string):
    # Check if the string is not empty
    if len(string) == 0:
        return "Empty string"

    # Capitalize the first letter and concatenate the rest of the string
    return string[0].upper() + string[1:]

# Example usage:
original_string = "hello, world!"
capitalized_string = capitalize_first_letter(original_string)

print("Original String:", original_string)
print("Capitalized String:", capitalized_string)





 
86. Find the Maximum Element in an Array

def find_max_element(arr):
    # Check if the array is not empty
    if len(arr) == 0:
        return "Empty array"

    # Use the max() function to find the maximum element
    max_element = max(arr)

    return max_element

# Example usage:
numbers = [5, 2, 9, 1, 7]
max_number = find_max_element(numbers)

print("Array:", numbers)
print("Maximum Element:", max_number)
 
87. Reverse an Array

def reverse_array(arr):
    # Use the reverse() method to reverse the list in place
    arr.reverse()
    return arr

# Example usage:
original_array = [1, 2, 3, 4, 5]
reversed_array = reverse_array(original_array.copy())

print("Original Array:", original_array)
print("Reversed Array:", reversed_array)


 
88. Calculate the Power of a Number

import math

def calculate_power_with_math_pow(base, exponent):
    return math.pow(base, exponent)

def calculate_power_with_exponentiation_operator(base, exponent):
    return base ** exponent

# Example usage
base_number = 2
exponent_number = 3

result_with_math_pow = calculate_power_with_math_pow(base_number, exponent_number)
result_with_exponentiation_operator = calculate_power_with_exponentiation_operator(base_number, exponent_number)

print(f"{base_number} to the power of {exponent_number} using math.pow(): {result_with_math_pow}")
print(f"{base_number} to the power of {exponent_number} using the exponentiation operator (**): {result_with_exponentiation_operator}")

 
89. Find the Minimum Element in an Array

def find_min_element(arr):
    # Check if the list is not empty
    if not arr:
        return "Empty list"

    # Find the minimum element using the min() function
    min_element = min(arr)

    return min_element

# Example usage:
numbers = [5, 2, 9, 1, 7]
min_number = find_min_element(numbers)

print("List:", numbers)
print("Minimum Element:", min_number)

 
90. Convert Minutes to Hours and Minutes

def convert_minutes_to_hours_and_minutes(total_minutes):
    # Check if the input is a valid positive number
    if not isinstance(total_minutes, int) or total_minutes < 0:
        return "Invalid input. Please provide a non-negative integer number of minutes."

    # Calculate hours and remaining minutes
    hours = total_minutes // 60
    minutes = total_minutes % 60

    # Construct the result string
    result = f"{hours} hours and {minutes} minutes"

    return result

# Example usage:
total_minutes = 135
converted_time = convert_minutes_to_hours_and_minutes(total_minutes)

print(f"{total_minutes} minutes is equivalent to: {converted_time}")



 
91. Find the Sum of Digits in a Number

def sum_of_digits(number):
    # Check if the input is a valid number
    if not isinstance(number, int) or number < 0:
        return "Invalid input. Please provide a non-negative integer."

    # Convert the number to a string to iterate through its digits
    digits_list = [int(digit) for digit in str(number)]

    # Calculate the sum of digits
    sum_result = sum(digits_list)

    return sum_result

# Example usage:
input_number = 12345
result = sum_of_digits(input_number)

print(f"The sum of digits in {input_number} is: {result}")

 
92. Check if a String is a Palindromic Phrase

import re

def is_palindromic_phrase(phrase):
    # Check if the input is a valid string
    if not isinstance(phrase, str):
        return "Invalid input. Please provide a string."

    # Remove non-alphanumeric characters and convert to lowercase
    cleaned_phrase = re.sub(r'[^a-zA-Z0-9]', '', phrase).lower()

    # Compare the cleaned phrase with its reversed version
    return cleaned_phrase == cleaned_phrase[::-1]

# Example usage:
phrase1 = "A man, a plan, a canal, Panama!"
phrase2 = "Hello, world!"

print(f'Is "{phrase1}" a palindromic phrase? {is_palindromic_phrase(phrase1)}')
print(f'Is "{phrase2}" a palindromic phrase? {is_palindromic_phrase(phrase2)}')

 
93. Generate a Random Password

import random
import string

def generate_random_password(length):
    # Define character sets
    uppercase_chars = string.ascii_uppercase
    lowercase_chars = string.ascii_lowercase
    numeric_chars = string.digits
    special_chars = '!@#$%^&*()-_+='

    # Combine character sets
    all_chars = uppercase_chars + lowercase_chars + numeric_chars + special_chars

    # Check if the input length is a valid positive number
    if not isinstance(length, int) or length <= 0:
        return "Invalid input. Please provide a positive integer for the password length."

    # Generate the random password
    password = ''.join(random.choice(all_chars) for _ in range(length))

    return password

# Example usage:
password_length = 12
random_password = generate_random_password(password_length)

print(f'Generated Password: {random_password}')

 
94. Calculate Simple Interest

def calculate_simple_interest(principal, rate, time):
    # Check if the inputs are valid positive numbers
    if not all(isinstance(x, (int, float)) and x > 0 for x in [principal, rate, time]):
        return "Invalid inputs. Please provide valid positive numbers."

    # Calculate simple interest
    simple_interest = (principal * rate * time) / 100

    return simple_interest

# Example usage:
principal_amount = 1000
interest_rate = 5  # 5%
investment_time = 2  # 2 years

interest_amount = calculate_simple_interest(principal_amount, interest_rate, investment_time)

print(f'Principal Amount: ${principal_amount}')
print(f'Interest Rate: {interest_rate}%')
print(f'Investment Time: {investment_time} years')
print(f'Simple Interest: ${interest_amount}')


 
95. Implement a Basic Stopwatch

import tkinter as tk
import time

class StopwatchApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Stopwatch")

        self.startTime = None
        self.stopwatchInterval = None

        self.display = tk.Label(root, text="0:00", font=("Arial", 24))
        self.display.pack(pady=20)

        self.start_button = tk.Button(root, text="Start", command=self.start_stopwatch)
        self.start_button.pack(side=tk.LEFT, padx=10)

        self.stop_button = tk.Button(root, text="Stop", command=self.stop_stopwatch)
        self.stop_button.pack(side=tk.LEFT, padx=10)

        self.reset_button = tk.Button(root, text="Reset", command=self.reset_stopwatch)
        self.reset_button.pack(side=tk.LEFT, padx=10)

    def start_stopwatch(self):
        self.startTime = time.time()

        self.stopwatchInterval = self.root.after(1000, self.update_display)

    def stop_stopwatch(self):
        if self.stopwatchInterval:
            self.root.after_cancel(self.stopwatchInterval)

    def reset_stopwatch(self):
        self.stop_stopwatch()
        self.display.config(text="0:00")

    def update_display(self):
        currentTime = time.time()
        elapsedTime = int(currentTime - self.startTime)

        minutes = elapsedTime // 60
        seconds = elapsedTime % 60

        formattedTime = f"{minutes}:{seconds:02d}"

        self.display.config(text=formattedTime)
        self.stopwatchInterval = self.root.after(1000, self.update_display)

root = tk.Tk()
app = StopwatchApp(root)
root.mainloop()

 
96. Check if a Number is a Perfect Number

def is_perfect_number(number):
    # Check if the input is a positive integer
    if not isinstance(number, int) or number <= 0:
        return "Invalid input. Please provide a positive integer."

    # Find divisors and calculate sum
    divisors_sum = sum(i for i in range(1, number // 2 + 1) if number % i == 0)

    # Check if the sum of divisors equals the original number
    return divisors_sum == number

# Example usage:
test_number = 28
result = is_perfect_number(test_number)

print(f"Is {test_number} a perfect number? {result}")
 
97. This program calculates the Volume of a Cylinder

function calculateCylinderVolume(radius, height) {
    // Check if the inputs are valid positive numbers
    if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
        return "Invalid inputs. Please provide valid positive numbers.";
    }

    // Calculate the volume of the cylinder
    const volume = Math.PI * Math.pow(radius, 2) * height;

    return volume;
}

// Example usage:
const cylinderRadius = 5;
const cylinderHeight = 10;

const cylinderVolume = calculateCylinderVolume(cylinderRadius, cylinderHeight);

console.log(`Cylinder Volume: ${cylinderVolume.toFixed(2)} cubic units`);
 
98. Generate a Random Quote

import random

def generate_random_quote():
    quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "Get busy living or get busy dying. - Stephen King"
        # Add more quotes as needed
    ]

    # Generate a random index to pick a quote from the list
    random_index = random.randint(0, len(quotes) - 1)

    # Return the randomly selected quote
    return quotes[random_index]

# Example usage:
random_quote = generate_random_quote()
print("Random Quote:", random_quote)

 
99. Find the Intersection of Two Arrays
def find_intersection(list1, list2):
    # Check if the inputs are valid lists
    if not isinstance(list1, list) or not isinstance(list2, list):
        return "Invalid inputs. Please provide valid lists."

    # Convert the first list to a set for efficient membership testing
    set1 = set(list1)

    # Use a list comprehension to filter elements from the second list that are present in the set
    intersection = [element for element in list2 if element in set1]

    return intersection

# Example usage:
list1 = [1, 2, 3, 4, 5]
list2 = [3, 4, 5, 6, 7]

result = find_intersection(list1, list2)

print("Intersection of Lists:", result)





 
100. Convert Feet to Meters

def feet_to_meters(feet):
    # Check if the input is a valid number
    if not isinstance(feet, (int, float)):
        return "Invalid input. Please provide a valid number of feet."

    # Perform the conversion
    meters = feet * 0.3048

    return meters

# Example usage:
feet_value = 10
meters_value = feet_to_meters(feet_value)

print(f"{feet_value} feet is equal to {meters_value:.2f} meters")

 
101. Convert Days to Years, Months, and Days

def convert_days_to_years_months_days(days):
    # Check if the input is a valid positive number
    if not isinstance(days, (int, float)) or days <= 0:
        return "Invalid input. Please provide a valid positive number of days."

    # Calculate years
    years = days // 365

    # Calculate remaining days after removing years
    remaining_days_after_years = days % 365

    # Calculate months
    months = remaining_days_after_years // 30

    # Calculate remaining days after removing months
    remaining_days_after_months = remaining_days_after_years % 30

    return {
        "years": years,
        "months": months,
        "days": remaining_days_after_months
    }

# Example usage:
total_days = 1000
result = convert_days_to_years_months_days(total_days)

print(f"{total_days} days is approximately {result['years']} years, {result['months']} months, and {result['days']} days.")

 
102. Find the Median of an Array

def find_median(arr):
    # Check if the input is a valid list
    if not isinstance(arr, list) or len(arr) == 0:
        return "Invalid input. Please provide a non-empty list."

    # Sort the list
    sorted_list = sorted(arr)

    # Calculate the median
    middle_index = len(sorted_list) // 2

    if len(sorted_list) % 2 == 0:
        # If the list has an even number of elements, return the average of the middle two
        median = (sorted_list[middle_index - 1] + sorted_list[middle_index]) / 2
        return median
    else:
        # If the list has an odd number of elements, return the middle element
        return sorted_list[middle_index]

# Example usage:
numbers = [5, 2, 8, 1, 7, 3]
result = find_median(numbers)

print("Median:", result)







 
103. Calculate the Distance Between Two Points

import math

def calculate_distance(x1, y1, x2, y2):
    # Check if the inputs are valid numbers
    if not all(isinstance(coord, (int, float)) for coord in [x1, y1, x2, y2]):
        return "Invalid inputs. Please provide valid numerical coordinates."

    # Calculate the distance using the distance formula
    distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    return distance

# Example usage:
x1 = 1
y1 = 2
x2 = 4
y2 = 6

result = calculate_distance(x1, y1, x2, y2)

print(f"The distance between ({x1}, {y1}) and ({x2}, {y2}) is {result:.2f}")

 
104. Check if a Number is a Perfect Square

def is_perfect_square(number):
    # Check if the input is a valid positive number
    if not isinstance(number, (int, float)) or number < 0:
        return "Invalid input. Please provide a valid non-negative number."

    # Calculate the square root
    square_root = number ** 0.5

    # Check if the square of the integer part of the square root is equal to the original number
    return square_root == int(square_root)

# Example usage:
test_number = 25
result = is_perfect_square(test_number)

print(f"Is {test_number} a perfect square? {result}")

 
105. Find the Area of a Rectangle

def calculate_rectangle_area(length, width):
    # Check if the inputs are valid positive numbers
    if not all(isinstance(x, (int, float)) and x > 0 for x in [length, width]):
        return "Invalid inputs. Please provide valid positive numbers for length and width."

    # Calculate the area of the rectangle
    area = length * width

    return area

# Example usage:
rectangle_length = 5
rectangle_width = 8

result = calculate_rectangle_area(rectangle_length, rectangle_width)

print(f"The area of the rectangle with length {rectangle_length} and width {rectangle_width} is {result}")

 
106. Convert Binary to Decimal

def binary_to_decimal(binary_string):
    # Check if the input is a valid binary string
    if not all(char in '01' for char in binary_string):
        return "Invalid input. Please provide a valid binary string."

    # Convert binary to decimal
    decimal_value = int(binary_string, 2)

    return decimal_value

# Example usage:
binary_number = "1101"
decimal_result = binary_to_decimal(binary_number)

print(f"The decimal equivalent of binary {binary_number} is {decimal_result}")

 
107. Count the Number of Words in a Sentence

def count_words(sentence):
    # Check if the input is a valid string
    if not isinstance(sentence, str):
        return "Invalid input. Please provide a valid sentence."

    # Split the sentence into words
    words = sentence.split()

    # Count the number of words
    word_count = len(words)

    return word_count

# Example usage:
sentence = "This is a sample sentence."
result = count_words(sentence)

print(f'The sentence "{sentence}" has {result} words.')

 
108. Find the Union of Two Arrays

def find_union(arr1, arr2):
    # Check if the inputs are valid lists
    if not isinstance(arr1, list) or not isinstance(arr2, list):
        return "Invalid inputs. Please provide valid lists."

    # Combine the lists and remove duplicates
    union_list = list(set(arr1 + arr2))

    return union_list

# Example usage:
array1 = [1, 2, 3, 4, 5]
array2 = [3, 4, 5, 6, 7]

result = find_union(array1, array2)

print("Union of Arrays:", result)

 
109. Calculate the Factorial of a Large Number

def calculate_factorial(n):
    # Check if the input is a valid non-negative integer
    if not isinstance(n, int) or n < 0:
        return "Invalid input. Please provide a non-negative integer."

    # Calculate factorial
    result = 1
    for i in range(2, n + 1):
        result *= i

    return str(result)

# Example usage:
number = 50
result = calculate_factorial(number)

print(f"The factorial of {number} is:\n{result}")

 
110. Check if a Number is a Strong Number

def calculate_factorial(number):
    result = 1
    for i in range(2, number + 1):
        result *= i
    return result

def is_strong_number(num):
    # Check if the input is a non-negative integer
    if not isinstance(num, int) or num < 0:
        return False
    
    # Convert the number to a list of digits
    digits = [int(digit) for digit in str(num)]
    
    # Calculate the factorial of each digit and sum them
    digit_factorial_sum = sum(calculate_factorial(digit) for digit in digits)
    
    # Check if the sum equals the original number
    return digit_factorial_sum == num

# Example usage:
test_number = 145
result = is_strong_number(test_number)

print(f"{test_number} is a strong number: {result}")

 
111. Check if a Number is a Narcissistic Number

def is_narcissistic_number(num):
    # Check if the input is a non-negative integer
    if not isinstance(num, int) or num < 0:
        return False

    num_str = str(num)
    num_digits = len(num_str)
    total = sum(int(digit) ** num_digits for digit in num_str)

    return total == num

# Example usage:
test_number = 1634
result = is_narcissistic_number(test_number)

print(f"{test_number} is a Narcissistic Number: {result}")

 
112. Count the Number of Consonants in a String

import re

def count_consonants(input_str):
    # Check if the input is a valid string
    if not isinstance(input_str, str):
        return "Invalid input. Please provide a valid string."

    # Define a regular expression pattern for consonants
    consonant_pattern = re.compile(r'[bcdfghjklmnpqrstvwxyz]', re.IGNORECASE)

    # Use findall() to find all consonants in the string
    consonants = re.findall(consonant_pattern, input_str)

    # Return the count of consonants
    return len(consonants)

# Example usage:
test_string = "Hello World"
result = count_consonants(test_string)

print(f"The number of consonants in '{test_string}' is: {result}")

 
113. Check if a Number is a Triangular Number

def is_triangular_number(num):
    # Check if the input is a non-negative integer
    if not isinstance(num, int) or num < 0:
        return False

    # Iterate through natural numbers until the sum exceeds or equals the input number
    total = 0
    n = 1

    while total < num:
        total += n
        n += 1

    # Check if the input number is equal to a triangular number
    return total == num

# Example usage:
test_number = 10
result = is_triangular_number(test_number)

print(f"{test_number} is a triangular number: {result}")

 
114. Find the Area of a Trapezoid

def trapezoid_area(base1, base2, height):
    # Check if the inputs are valid numbers
    if not all(isinstance(x, (int, float)) and x > 0 for x in [base1, base2, height]):
        return "Invalid input. Please provide valid numbers."

    # Calculate the area of the trapezoid
    area = 0.5 * height * (base1 + base2)

    return area

# Example usage:
base1_length = 5
base2_length = 9
trapezoid_height = 4

result = trapezoid_area(base1_length, base2_length, trapezoid_height)
print(f"The area of the trapezoid is: {result}")

 
115. Calculate the Greatest Common Divisor (GCD) of Two Numbers

def calculate_gcd(a, b):
    # Check if the inputs are valid positive integers
    if not all(isinstance(x, int) and x > 0 for x in [a, b]):
        return "Invalid input. Please provide valid positive integers."

    # Apply the Euclidean Algorithm to find the GCD
    while b != 0:
        a, b = b, a % b

    return a

# Example usage:
number1 = 48
number2 = 18

gcd_result = calculate_gcd(number1, number2)
print(f"The GCD of {number1} and {number2} is: {gcd_result}")







 
116. Check if a Number is a Fibonacci Number

def is_fibonacci_number(num):
    # Check if the input is a non-negative integer
    if not isinstance(num, int) or num < 0:
        return False

    # Check if a number is a perfect square
    def is_perfect_square(n):
        sqrt = int(n ** 0.5)
        return sqrt * sqrt == n

    # A number is a Fibonacci number if and only if one of (5 * num^2 + 4) or (5 * num^2 - 4) is a perfect square
    return is_perfect_square(5 * num * num + 4) or is_perfect_square(5 * num * num - 4)

# Example usage:
test_number = 8
result = is_fibonacci_number(test_number)

print(f"{test_number} is a Fibonacci number: {result}")


 
117. Find the Perimeter of a Rectangle

def rectangle_perimeter(length, width):
    # Check if the inputs are valid numbers
    if not (isinstance(length, (int, float)) and isinstance(width, (int, float))) or length <= 0 or width <= 0:
        return "Invalid input. Please provide valid positive numbers."

    # Calculate the perimeter of the rectangle
    perimeter = 2 * length + 2 * width

    return perimeter

# Example usage:
rectangle_length = 5
rectangle_width = 8

perimeter_result = rectangle_perimeter(rectangle_length, rectangle_width)
print(f"The perimeter of the rectangle is: {perimeter_result}")



 
118. Convert Roman Numerals to Numbers

def roman_to_number(roman):
    # Define a mapping of Roman numeral symbols to their numeric values
    roman_numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    # Check if the input is a valid Roman numeral string
    if not isinstance(roman, str):
        return "Invalid input. Please provide a valid Roman numeral string."

    # Convert the Roman numeral string to a numeric value
    result = 0

    for i in range(len(roman)):
        current_symbol = roman[i]
        current_value = roman_numerals[current_symbol]

        # If the current value is less than the next value, subtract it; otherwise, add it
        if i < len(roman) - 1:
            next_symbol = roman[i + 1]
            next_value = roman_numerals[next_symbol]
            if next_value > current_value:
                result -= current_value
            else:
                result += current_value
        else:
            result += current_value

    return result

# Example usage:
roman_numeral = 'XIV'
numeric_value = roman_to_number(roman_numeral)
print(f"The numeric value of {roman_numeral} is: {numeric_value}")





 
119. Check if a String is Anagram of Another String

def are_anagrams(str1, str2):
    # Check if the inputs are valid strings
    if not isinstance(str1, str) or not isinstance(str2, str):
        return "Invalid input. Please provide valid strings."

    # Remove non-alphabetic characters and convert to lowercase for case-insensitive comparison
    clean_str1 = ''.join(filter(str.isalpha, str1.lower()))
    clean_str2 = ''.join(filter(str.isalpha, str2.lower()))

    # Check if the lengths are equal after removing non-alphabetic characters
    if len(clean_str1) != len(clean_str2):
        return False

    # Create character frequency dictionaries for both strings
    char_frequency_dict1 = {}
    char_frequency_dict2 = {}

    # Update frequency dictionaries for str1
    for char in clean_str1:
        char_frequency_dict1[char] = char_frequency_dict1.get(char, 0) + 1

    # Update frequency dictionaries for str2
    for char in clean_str2:
        char_frequency_dict2[char] = char_frequency_dict2.get(char, 0) + 1

    # Check if the frequency dictionaries are equal
    return char_frequency_dict1 == char_frequency_dict2

# Example usage:
string1 = 'listen'
string2 = 'silent'

result = are_anagrams(string1, string2)
print(f"{string1} and {string2} are anagrams: {result}")


 
120. Generate Pascal's Triangle

def generate_pascals_triangle(num_rows):
    # Check if the input is a positive integer
    if not isinstance(num_rows, int) or num_rows <= 0:
        return "Invalid input. Please provide a valid positive integer."

    def factorial(n):
        if n == 0 or n == 1:
            return 1
        return n * factorial(n - 1)

    pascals_triangle = []

    for i in range(num_rows):
        row = []

        for j in range(i + 1):
            # Calculate the binomial coefficient using nCr formula
            coefficient = factorial(i) // (factorial(j) * factorial(i - j))
            row.append(coefficient)

        pascals_triangle.append(row)

    return pascals_triangle

# Example usage:
number_of_rows = 5
triangle = generate_pascals_triangle(number_of_rows)

print(f"Pascal's Triangle with {number_of_rows} rows:")
for row in triangle:
    print(row)

 
121. Convert Decimal to Roman Numerals

def decimal_to_roman(num):
    # Check if the input is a positive integer within the valid Roman numeral range
    if not isinstance(num, int) or num <= 0 or num > 3999:
        return "Invalid input. Please provide a valid positive integer within the range 1 to 3999."

    # Define the Roman numeral symbols and their corresponding values
    roman_symbols = [
        (1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'),
        (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'),
        (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')
    ]

    # Convert the decimal number to Roman numerals
    result = ''
    for value, symbol in roman_symbols:
        while num >= value:
            result += symbol
            num -= value

    return result

# Example usage:
decimal_number = 1984
roman_numeral = decimal_to_roman(decimal_number)

print(f"The Roman numeral representation of {decimal_number} is: {roman_numeral}")






 
122. Find the Area of a Parallelogram

def parallelogram_area(base, height):
    # Check if the inputs are valid numbers
    if not all(isinstance(x, (int, float)) and x > 0 for x in [base, height]):
        return "Invalid input. Please provide valid positive numbers."

    # Calculate the area of the parallelogram
    area = base * height

    return area

# Example usage:
parallelogram_base = 6
parallelogram_height = 8

area_result = parallelogram_area(parallelogram_base, parallelogram_height)
print(f"The area of the parallelogram is: {area_result}")

 
123. Basic Rock, Paper, Scissors Game

import random

def computer_play():
    options = ['rock', 'paper', 'scissors']
    return random.choice(options)

def play_round(player_selection, computer_selection):
    player_selection = player_selection.lower()

    if player_selection not in ['rock', 'paper', 'scissors']:
        return 'Invalid choice. Please choose rock, paper, or scissors.'

    print(f"Player chooses {player_selection}")
    print(f"Computer chooses {computer_selection}")

    if player_selection == computer_selection:
        return "It's a tie!"
    elif (player_selection == 'rock' and computer_selection == 'scissors') or \
         (player_selection == 'paper' and computer_selection == 'rock') or \
         (player_selection == 'scissors' and computer_selection == 'paper'):
        return 'You win!'
    else:
        return 'You lose!'

def game():
    player_score = 0
    computer_score = 0

    for i in range(5):
        player_selection = input('Enter your choice (rock, paper, or scissors): ')
        computer_selection = computer_play()
        result = play_round(player_selection, computer_selection)
        print(result)

        if 'win' in result:
            player_score += 1
        elif 'lose' in result:
            computer_score += 1

    print(f"Final Score: Player {player_score} - {computer_score} Computer")
    if player_score > computer_score:
        print('You win the game!')
    elif player_score < computer_score:
        print('You lose the game!')
    else:
        print('The game is a tie!')

# Uncomment the line below to start the game
# game()

 
124. Basic Slot Machine Game

import random

# Array of symbols for the slot machine
symbols = ['🍒', '🍋', '🍊', '🍇', '🔔', '🍫']

# Function to get a random symbol from the array
def get_random_symbol():
    return random.choice(symbols)

# Function to simulate a spin of the slot machine
def spin():
    # Get three random symbols
    result1 = get_random_symbol()
    result2 = get_random_symbol()
    result3 = get_random_symbol()

    # Display the results
    print(f"Result: {result1} - {result2} - {result3}")

    # Check for a win
    if result1 == result2 == result3:
        print('🎉 Congratulations! You won! 🎉')
    else:
        print('😢 Try again. Better luck next time! 😢')

# Example usage - simulate a spin
spin()


 
125. Check if a Number is a Smith Number

def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def sum_of_digits(number):
    return sum(int(digit) for digit in str(number))

def prime_factors(number):
    factors = []
    i = 2
    while i <= number:
        while is_prime(i) and number % i == 0:
            factors.append(i)
            number //= i
        i += 1
    return factors

def is_smith_number(number):
    original_sum = sum_of_digits(number)
    prime_factor_sum = sum(sum_of_digits(factor) for factor in prime_factors(number))
    return original_sum == prime_factor_sum

# Example: Check if 728 is a Smith number
print(is_smith_number(728))  # Output: True

 
126. Basic Chessboard

def generate_chessboard():
    size = 8  # Size of the chessboard (8x8)
    chessboard = []

    for row in range(size):
        current_row = []

        for col in range(size):
            # Use 'X' for black squares and ' ' for white squares
            is_black = (row + col) % 2 == 1
            square = 'X' if is_black else ' '
            current_row.append(square)

        chessboard.append(' '.join(current_row))

    return '\n'.join(chessboard)

# Example usage
chessboard = generate_chessboard()
print(chessboard)

 
127. Generate a Random Password with Specific Criteria

import random
import string

def generate_random_password(length, include_uppercase, include_lowercase, include_numbers, include_special_chars):
    uppercase_chars = string.ascii_uppercase
    lowercase_chars = string.ascii_lowercase
    number_chars = string.digits
    special_chars = '!@#$%^&*()-=_+[]{}|;:,.<>?'

    valid_chars = ''
    password = ''

    if include_uppercase:
        valid_chars += uppercase_chars
    if include_lowercase:
        valid_chars += lowercase_chars
    if include_numbers:
        valid_chars += number_chars
    if include_special_chars:
        valid_chars += special_chars

    if len(valid_chars) == 0:
        print('Error: At least one character type must be selected.')
        return None

    for i in range(length):
        password += random.choice(valid_chars)

    return password

# Example usage
password_length = 12
include_uppercase = True
include_lowercase = True
include_numbers = True
include_special_chars = True

random_password = generate_random_password(password_length, include_uppercase, include_lowercase, include_numbers, include_special_chars)

if random_password:
    print(f"Random Password: {random_password}")

 
128. Basic Maze Solver

def solve_maze(maze):
    rows = len(maze)
    cols = len(maze[0])
    visited = [[False] * cols for _ in range(rows)]

    def is_safe(row, col):
        return 0 <= row < rows and 0 <= col < cols and maze[row][col] == 1 and not visited[row][col]

    def dfs(row, col):
        if row == rows - 1 and col == cols - 1:
            # Reached the exit
            return True

        if is_safe(row, col):
            visited[row][col] = True

            # Move in all possible directions (up, down, left, right)
            directions = [
                (-1, 0),  # Up
                (1, 0),   # Down
                (0, -1),  # Left
                (0, 1)    # Right
            ]

            for dr, dc in directions:
                new_row = row + dr
                new_col = col + dc

                if dfs(new_row, new_col):
                    return True

            visited[row][col] = False  # Backtrack

        return False

    # Start the depth-first search from the top-left corner
    if dfs(0, 0):
        print('Path found! 🎉')
    else:
        print('No path found. 😢')

# Example usage
maze = [
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 1, 1]
]

solve_maze(maze)

 
129. Check if a String is Pangram or Not

def is_pangram(input_str):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    lowercased_str = input_str.lower()
  
    for char in alphabet:
        if char not in lowercased_str:
            return False
  
    return True

# Example usage
input_string = "The quick brown fox jumps over the lazy dog"
if is_pangram(input_string):
    print('The given string is a pangram! 🎉')
else:
    print('The given string is not a pangram. 😢')

 
130. Basic Sudoku Solver

def is_safe(board, row, col, num):
    # Check if 'num' is not present in the current row and column
    for i in range(9):
        if board[row][i] == num or board[i][col] == num:
            return False

    # Check if 'num' is not present in the 3x3 subgrid
    start_row = (row // 3) * 3
    start_col = (col // 3) * 3
    for i in range(3):
        for j in range(3):
            if board[start_row + i][start_col + j] == num:
                return False

    return True

def find_empty_cell(board):
    for row in range(9):
        for col in range(9):
            if board[row][col] == 0:
                return row, col
    return None

def solve_sudoku(board):
    empty_cell = find_empty_cell(board)
    if not empty_cell:
        # No empty cell found, the puzzle is solved
        return True

    row, col = empty_cell

    # Try filling the empty cell with numbers 1 to 9
    for num in range(1, 10):
        if is_safe(board, row, col, num):
            # If placing 'num' in the current cell is safe, try the next step
            board[row][col] = num

            # Recursively attempt to solve the rest of the puzzle
            if solve_sudoku(board):
                return True

            # If placing 'num' in the current cell leads to an invalid solution, backtrack
            board[row][col] = 0

    # No number from 1 to 9 can be placed in the current cell, backtrack
    return False

# Example usage
sudoku_board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

if solve_sudoku(sudoku_board):
    print('Sudoku solved successfully:')
    for row in sudoku_board:
        print(' '.join(map(str, row)))
else:
    print('No solution exists for the given Sudoku puzzle.')

 
131. Convert Objects to Strings

import json

# Example dictionary representing the object
person = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 30
}

# Convert dictionary to a JSON-formatted string
json_string = json.dumps(person)

# Display the result
print("Original Dictionary:")
print(person)

print("\nJSON-formatted String:")
print(json_string)


 
132. Find the Area of an Ellipse

import math

# Function to calculate the area of an ellipse
def calculate_ellipse_area(semi_major_axis, semi_minor_axis):
    pi = math.pi
    area = pi * semi_major_axis * semi_minor_axis
    return area

# Example usage
semi_major_axis = 5
semi_minor_axis = 3

ellipse_area = calculate_ellipse_area(semi_major_axis, semi_minor_axis)
print(f"The area of the ellipse is: {ellipse_area:.2f}")

 
133. Check if a Number is a Palindrome in Binary

def is_binary_palindrome(number):
    # Convert the number to its binary representation
    binary_representation = bin(number)[2:]
    
    # Reverse the binary representation
    reversed_binary = binary_representation[::-1]
    
    # Check if the binary representation is equal to its reversed version
    return binary_representation == reversed_binary

# Example usage
number_to_check = 9  # Replace with the number you want to check
if is_binary_palindrome(number_to_check):
    print(f"{number_to_check} is a binary palindrome! 🎉")
else:
    print(f"{number_to_check} is not a binary palindrome. 😢")

 
134. Find the Area of a Rhombus

def calculate_rhombus_area(diagonal1, diagonal2):
    area = (diagonal1 * diagonal2) / 2
    return area

# Example usage
diagonal1_length = 8
diagonal2_length = 6

rhombus_area = calculate_rhombus_area(diagonal1_length, diagonal2_length)
print(f"The area of the rhombus is: {rhombus_area:.2f}")

 
135. Check if a Number is a Catalan Number

# Function to calculate binomial coefficient (n choose k)
def binomial_coefficient(n, k):
    if k > n - k:
        k = n - k

    result = 1
    for i in range(k):
        result *= (n - i)
        result //= (i + 1)

    return result

# Function to check if a number is a Catalan number
def is_catalan_number(num):
    for i in range(num + 1):
        if binomial_coefficient(2 * i, i) == num // (i + 1):
            return True
    return False

# Example usage
number_to_check = 42  # Replace with the number you want to check
if is_catalan_number(number_to_check):
    print(f"{number_to_check} is a Catalan number! 🎉")
else:
    print(f"{number_to_check} is not a Catalan number. 😢")

 
136. Find the Luhn Algorithm Check Digit

def calculate_luhn_check_digit(input):
    # Convert the input number to a list of digits
    digits = [int(d) for d in str(input)]

    # Double every second digit from the right
    for i in range(len(digits) - 2, -1, -2):
        doubled_digit = digits[i] * 2

        # If doubling results in a number greater than 9, subtract 9
        if doubled_digit > 9:
            doubled_digit -= 9

        digits[i] = doubled_digit

    # Calculate the sum of all digits
    total_sum = sum(digits)

    # Find the smallest number (x) such that (sum + x) is a multiple of 10
    check_digit = (10 - (total_sum % 10)) % 10

    return check_digit

# Example usage
partial_number = 123456789  # Replace with the partial number for which you want to calculate the check digit
check_digit = calculate_luhn_check_digit(partial_number)
full_number = str(partial_number) + str(check_digit)

print(f"Partial Number: {partial_number}")
print(f"Check Digit: {check_digit}")
print(f"Full Number with Check Digit: {full_number}")

 
137. Basic Maze Generator

import random

class MazeGenerator:
    def __init__(self, rows, cols):
        self.rows = rows
        self.cols = cols
        self.grid = [[0] * cols for _ in range(rows)]

    def generate_maze(self):
        self.visit_cell(0, 0)

    def visit_cell(self, row, col):
        self.grid[row][col] = 1  # Mark the current cell as visited

        # Define the possible directions (up, down, left, right)
        directions = [
            [0, -2],
            [0, 2],
            [-2, 0],
            [2, 0]
        ]

        # Shuffle the directions randomly
        random.shuffle(directions)

        for dr, dc in directions:
            new_row = row + dr
            new_col = col + dc

            # Check if the new cell is within bounds and unvisited
            if 0 <= new_row < self.rows and 0 <= new_col < self.cols and self.grid[new_row][new_col] == 0:
                # Mark the cell between the current and new cell as visited
                self.grid[row + dr // 2][col + dc // 2] = 1

                # Recursively visit the new cell
                self.visit_cell(new_row, new_col)

    def print_maze(self):
        for row in self.grid:
            print(''.join(' ' if cell == 1 else '#' for cell in row))

# Example usage
maze_rows = 11
maze_cols = 21

maze_generator = MazeGenerator(maze_rows, maze_cols)
maze_generator.generate_maze()
maze_generator.print_maze()

 
138. Check if a Year is a Magic Year

def is_magic_year(year):
    year_str = str(year)
    month = int(year_str[:2])
    day = int(year_str[2:4])
    return month * day == int(year_str[4:])

# Example usage
year_to_check = 1978  # Replace with the year you want to check
if is_magic_year(year_to_check):
    print(f"{year_to_check} is a Magic Year! 🎉")
else:
    print(f"{year_to_check} is not a Magic Year. 😢")

 
139. Basic Crossword Puzzle

class CrosswordPuzzle:
    def __init__(self, rows, cols):
        self.rows = rows
        self.cols = cols
        self.grid = [[' '] * cols for _ in range(rows)]
        self.words = []

    def add_word(self, word, row, col, direction):
        if direction == 'across':
            for i in range(len(word)):
                self.grid[row][col + i] = word[i]
        elif direction == 'down':
            for i in range(len(word)):
                self.grid[row + i][col] = word[i]

        self.words.append({'word': word, 'row': row, 'col': col, 'direction': direction})

    def print_puzzle(self):
        for row in self.grid:
            print(' '.join(row))

# Example usage
crossword = CrosswordPuzzle(5, 5)

crossword.add_word('apple', 1, 1, 'across')
crossword.add_word('banana', 3, 0, 'down')
crossword.add_word('grape', 0, 3, 'across')

crossword.print_puzzle()

 
140. Find the Area of a Regular Polygon

import math

def calculate_regular_polygon_area(n, s):
    numerator = 1 / 4 * n * pow(s, 2)
    denominator = math.tan(math.pi / n)
    area = numerator / denominator
    return area

# Example usage
number_of_sides = 6  # Replace with the number of sides of your polygon
side_length = 5      # Replace with the length of each side of your polygon

polygon_area = calculate_regular_polygon_area(number_of_sides, side_length)
print(f"The area of the regular polygon is: {polygon_area:.2f}")

 
141. Check if a Number is an Abundant Number

def get_proper_divisors_sum(number):
    divisor_sum = 0
    for i in range(1, number // 2 + 1):
        if number % i == 0:
            divisor_sum += i
    return divisor_sum

def is_abundant_number(number):
    divisors_sum = get_proper_divisors_sum(number)
    return divisors_sum > number

# Example usage
number_to_check = 12  # Replace with the number you want to check
if is_abundant_number(number_to_check):
    print(f"{number_to_check} is an Abundant Number! 🎉")
else:
    print(f"{number_to_check} is not an Abundant Number. 😢")

 
142. Basic Word Guessing Game

import random
import sys

class WordGuessingGame:
    def __init__(self, word_list):
        self.word_list = word_list
        self.selected_word = self.get_random_word()
        self.guesses = []
        self.max_attempts = 6

    def get_random_word(self):
        return random.choice(self.word_list).upper()

    def display_word(self):
        return ' '.join(letter if letter in self.guesses else '_' for letter in self.selected_word)

    def make_guess(self, letter):
        letter = letter.upper()

        if letter not in self.guesses:
            self.guesses.append(letter)
            if letter not in self.selected_word:
                self.max_attempts -= 1

                if self.max_attempts == 0:
                    print(f"Sorry, you're out of attempts. The word was: {self.selected_word}")
                    sys.exit()

        print(f"Attempts left: {self.max_attempts}")
        print(f"Current word: {self.display_word()}")

        if '_' not in self.display_word():
            print('Congratulations! You guessed the word!')
            sys.exit()

# Example usage
word_list = ['javascript', 'python', 'java', 'ruby', 'typescript']
game = WordGuessingGame(word_list)

print('Welcome to the Word Guessing Game!')
print(f"Attempts left: {game.max_attempts}")
print(f"Current word: {game.display_word()}")

# Simulate the game loop (you can replace this with actual user input in a real environment)
game.make_guess('a')
game.make_guess('e')
game.make_guess('i')
game.make_guess('o')
game.make_guess('u')
game.make_guess('s')

 
143. Calculate the Euler's Totient Function

def euler_totient_function(n):
    if n <= 0:
        return "Input must be a positive integer."

    result = n  # Initialize result as n

    # Iterate through all prime factors of n
    p = 2
    while p * p <= n:
        if n % p == 0:
            while n % p == 0:
                n //= p
            result -= result // p  # Apply the formula for prime factors
        p += 1

    # If n is a prime number greater than 1
    if n > 1:
        result -= result // n

    return int(result)  # Return the result as an integer

# Example usage
n = 12  # Replace with the positive integer for which you want to calculate Euler's Totient Function
result = euler_totient_function(n)
print(f"Euler's Totient Function for {n} is: {result}")

 
144. Basic Memory Matching Game
import random
import sys

class MemoryMatchingGame:
    def __init__(self, cards):
        self.cards = cards + cards  # Duplicate the cards to create pairs
        self.shuffle_cards()
        self.board = self.create_board()
        self.flipped_cards = []
        self.attempts = 0
        self.matches = 0

    def shuffle_cards(self):
        random.shuffle(self.cards)

    def create_board(self):
        board = []
        for i in range(4):
            row = self.cards[i * 4 : (i + 1) * 4]
            board.append(row)
        return board

    def display_board(self):
        for row in self.board:
            print(' '.join(card['value'] if card['faceUp'] else 'X' for card in row))

    def flip_card(self, row, col):
        card = self.board[row][col]
        if not card['faceUp'] and len(self.flipped_cards) < 2:
            card['faceUp'] = True
            self.flipped_cards.append(card)

            if len(self.flipped_cards) == 2:
                self.attempts += 1
                if self.flipped_cards[0]['value'] == self.flipped_cards[1]['value']:
                    self.matches += 1
                    print('Match found!')
                else:
                    print('No match. Try again.')
                    for card in self.flipped_cards:
                        card['faceUp'] = False

                self.flipped_cards = []

            self.display_board()

            if self.matches == len(self.cards) / 2:
                print(f'Congratulations! You completed the game in {self.attempts} attempts.')
                sys.exit()

# Example usage
cards = [
    {'value': 'A', 'faceUp': False},
    {'value': 'B', 'faceUp': False},
    {'value': 'C', 'faceUp': False},
    {'value': 'D', 'faceUp': False},
    {'value': 'A', 'faceUp': False},
    {'value': 'B', 'faceUp': False},
    {'value': 'C', 'faceUp': False},
    {'value': 'D', 'faceUp': False}
]

game = MemoryMatchingGame(cards)

print('Welcome to the Memory Matching Game!')
game.display_board()

# Simulate the game loop (you can replace this with actual user input in a real environment)
game.flip_card(0, 0)
game.flip_card(1, 1)
game.flip_card(2, 2)
game.flip_card(3, 3)
game.flip_card(0, 1)
game.flip_card(1, 0)

 
145. Check if a Number is a Vampire Number
def is_vampire_number(number):
    str_number = str(number)
    length = len(str_number)

    if length % 2 != 0:
        # Vampire numbers must have an even number of digits
        return False

    pairs = get_digit_pairs(str_number)

    for pair1, pair2 in pairs:
        if pair1 == 0 or pair2 == 0:
            # Exclude cases where one of the pairs has a leading zero
            continue

        if number == pair1 * pair2:
            return True

    return False

def get_digit_pairs(str_number):
    pairs = []
    length = len(str_number)

    for i in range(length):
        for j in range(length):
            if i != j:
                pair1 = int(str_number[i] + str_number[j])
                pair2 = int(''.join([str_number[index] for index in range(length) if index != i and index != j]))
                pairs.append((pair1, pair2))

    return pairs

# Example usage
vampire_number = 1260  # Replace with the number you want to check
if is_vampire_number(vampire_number):
    print(f"{vampire_number} is a Vampire Number! 🧛")
else:
    print(f"{vampire_number} is not a Vampire Number. 😢")

 
146. Basic Simon Says Game
import random
import time

class SimonSaysGame:
    def __init__(self, colors):
        self.colors = colors
        self.sequence = []
        self.player_sequence = []
        self.round = 1
        self.generate_sequence()

    def generate_sequence(self):
        for i in range(self.round):
            random_index = random.randint(0, len(self.colors) - 1)
            self.sequence.append(self.colors[random_index])

    def display_sequence(self):
        print(f"Round {self.round} - Simon says:")
        for color in self.sequence:
            print(color)
            # Simulate a delay between colors (you can replace this with actual delays in a real environment)
            time.sleep(1)
            # Clear the console (you may need to adjust this for different systems)
            print("\033[H\033[J")

    def get_player_input(self):
        print('Your turn! Enter the sequence (e.g., "red blue green"):')
        # Simulate user input (you can replace this with actual user input in a real environment)
        user_input = input('Enter the sequence:').lower()
        self.player_sequence = user_input.split()

    def check_sequence(self):
        for i in range(self.round):
            if self.player_sequence[i] != self.sequence[i]:
                print('Wrong sequence! Game over.')
                exit()
        print('Correct sequence! Next round.')
        self.round += 1

    async def play(self):
        while True:
            self.display_sequence()
            self.get_player_input()
            self.check_sequence()

# Example usage
colors = ['red', 'blue', 'green', 'yellow']
simon_says_game = SimonSaysGame(colors)

print('Welcome to Simon Says! Repeat the sequence correctly to advance.')

# Start the game loop
simon_says_game.play()
 
147. Calculate the Area of a Hexagon
import math

def calculate_hexagon_area(side_length):
    area = (3 * math.sqrt(3) / 2) * side_length ** 2
    return area

# Example usage
side_length = 5  # Replace with the length of a side of your hexagon
hexagon_area = calculate_hexagon_area(side_length)
print(f"The area of the hexagon is: {hexagon_area:.2f}")

 
148. Check if a Number is a Pronic Number

 def is_pronic_number(number):
    for i in range(number + 1):
        if i * (i + 1) == number:
            return True
    return False

# Example usage
pronic_number = 6  # Replace with the number you want to check
if is_pronic_number(pronic_number):
    print(f"{pronic_number} is a Pronic Number!")
else:
    print(f"{pronic_number} is not a Pronic Number.")

 
149. Basic Minesweeper Game
import random

class MinesweeperGame:
    def __init__(self, rows, cols, num_mines):
        self.rows = rows
        self.cols = cols
        self.num_mines = num_mines
        self.board = self.create_board()
        self.game_over = False

    def create_board(self):
        board = [[' ' for _ in range(self.cols)] for _ in range(self.rows)]

        # Place mines randomly
        for _ in range(self.num_mines):
            row, col = random.randint(0, self.rows - 1), random.randint(0, self.cols - 1)
            while board[row][col] == 'X':
                row, col = random.randint(0, self.rows - 1), random.randint(0, self.cols - 1)
            board[row][col] = 'X'

        # Calculate numbers around mines
        for i in range(self.rows):
            for j in range(self.cols):
                if board[i][j] == 'X':
                    continue

                for row in range(i - 1, i + 2):
                    for col in range(j - 1, j + 2):
                        if 0 <= row < self.rows and 0 <= col < self.cols and board[row][col] == 'X':
                            board[i][j] += 1

        return board

    def display_board(self):
        print('Minesweeper Board:')
        for row in self.board:
            print(' '.join(str(cell) if cell != 'X' else 'X' for cell in row))

    def uncover_cell(self, row, col):
        if self.game_over or not (0 <= row < self.rows) or not (0 <= col < self.cols):
            return

        cell = self.board[row][col]
        if cell == 'X':
            print('Game over! You hit a mine.')
            self.game_over = True
        elif cell == 0:
            self.board[row][col] = ' '
            self.uncover_neighbors(row, col)
        else:
            self.board[row][col] = str(cell)

        self.check_win()

    def uncover_neighbors(self, row, col):
        for i in range(row - 1, row + 2):
            for j in range(col - 1, col + 2):
                if 0 <= i < self.rows and 0 <= j < self.cols and self.board[i][j] == 0:
                    self.board[i][j] = ' '
                    self.uncover_neighbors(i, j)
                elif 0 <= i < self.rows and 0 <= j < self.cols and self.board[i][j] != 'X':
                    self.board[i][j] = str(self.board[i][j])

    def check_win(self):
        uncovered_count = sum(cell != 'X' for row in self.board for cell in row)
        if uncovered_count == self.rows * self.cols - self.num_mines:
            print('Congratulations! You win!')
            self.game_over = True

# Example usage
minesweeper_game = MinesweeperGame(5, 5, 3)
minesweeper_game.display_board()

# Simulate the game loop (you can replace this with actual user input in a real environment)
minesweeper_game.uncover_cell(0, 0)
minesweeper_game.uncover_cell(2, 2)
minesweeper_game.uncover_cell(1, 1)
minesweeper_game.uncover_cell(3, 3)
minesweeper_game.uncover_cell(4, 4)

 
150. Find the Area of a Pentagon

import math

def calculate_pentagon_area(side_length):
    area = (1 / 4) * math.sqrt(5 * (5 + 2 * math.sqrt(5))) * side_length ** 2
    return area

# Example usage
side_length = 4  # Replace with the length of a side of your pentagon
pentagon_area = calculate_pentagon_area(side_length)
print(f"The area of the pentagon is: {pentagon_area:.2f}")


 
151. Check if a Number is a Cube Number

def is_cube_number(number):
    cube_root = round(number ** (1 / 3))
    return cube_root ** 3 == number

# Example usage
number_to_check = 27  # Replace with the number you want to check
if is_cube_number(number_to_check):
    print(f"{number_to_check} is a Cube Number! 🎲")
else:
    print(f"{number_to_check} is not a Cube Number. 😢")

 
152. Basic Typing Speed Test

import random
import time

class TypingSpeedTest:
    def __init__(self):
        self.words = [
            'programming', 'javascript', 'developer', 'challenge', 'keyboard',
            'speed', 'test', 'accuracy', 'practice', 'learning'
        ]
        self.text = self.generate_random_text()
        self.start_time = 0
        self.end_time = 0
        self.user_input = ''

    def generate_random_text(self):
        random_index = random.randint(0, len(self.words) - 1)
        return self.words[random_index]

    def start_test(self):
        self.text = self.generate_random_text()
        self.start_time = time.time()
        print(f'Type the following text:\n"{self.text}"')

    def end_test(self):
        self.end_time = time.time()
        elapsed_time = self.end_time - self.start_time
        words_per_minute = (len(self.text.split()) / elapsed_time) * 60
        print(f'You typed at a speed of {words_per_minute:.2f} words per minute.')

    def get_user_input(self, input_text):
        self.user_input = input_text.strip()
        if self.user_input == self.text:
            print('Congratulations! You typed the correct text.')
            self.end_test()
        else:
            print('Incorrect. Try again.')

# Example usage
typing_test = TypingSpeedTest()
typing_test.start_test()

# Simulate user input (you can replace this with actual user input in a real environment)
user_input = 'javascript developer'
typing_test.get_user_input(user_input)

 
153. Find the Area of a Cube

def calculate_cube_surface_area(side_length):
    surface_area = 6 * side_length ** 2
    return surface_area

# Example usage
side_length = 4  # Replace with the length of a side of your cube
cube_surface_area = calculate_cube_surface_area(side_length)
print(f"The surface area of the cube is: {cube_surface_area}")

 
154. Find the Area of a Cone

def calculate_cube_surface_area(side_length):
    surface_area = 6 * side_length ** 2
    return surface_area

# Example usage
side_length = 4  # Replace with the length of a side of your cube
cube_surface_area = calculate_cube_surface_area(side_length)
print(f"The surface area of the cube is: {cube_surface_area}")

 
155. Check if a Number is a Happy Number

def is_happy_number(number):
    seen_numbers = set()

    while number != 1 and number not in seen_numbers:
        seen_numbers.add(number)
        number = sum_of_squared_digits(number)

    return number == 1

def sum_of_squared_digits(number):
    return sum(int(digit) ** 2 for digit in str(number))

# Example usage
happy_number = 19  # Replace with the number you want to check
if is_happy_number(happy_number):
    print(f"{happy_number} is a Happy Number! 😃")
else:
    print(f"{happy_number} is not a Happy Number. 😢")

 
156. Calculate the Area of a Triangular Prism

import math

def calculate_triangular_prism_surface_area(a, b, c, height):
    base_area = 0.25 * math.sqrt((-a + b + c) * (a - b + c) * (a + b - c) * (a + b + c))
    perimeter = a + b + c
    surface_area = base_area + perimeter * height
    return surface_area

# Example usage
side_a = 3  # Replace with the length of side A of the triangular base
side_b = 4  # Replace with the length of side B of the triangular base
side_c = 5  # Replace with the length of side C of the triangular base
prism_height = 6  # Replace with the height of the triangular prism
triangular_prism_surface_area = calculate_triangular_prism_surface_area(side_a, side_b, side_c, prism_height)
print(f"The surface area of the triangular prism is: {triangular_prism_surface_area:.2f}")













 
157. Check if a Number is a Fibonacci Prime

import math

def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, int(math.sqrt(number)) + 1):
        if number % i == 0:
            return False
    return True

def is_perfect_square(number):
    sqrt = math.sqrt(number)
    return sqrt == int(sqrt)

def is_fibonacci_prime(number):
    return is_prime(number) and (is_perfect_square(5 * number**2 + 4) or is_perfect_square(5 * number**2 - 4))

# Example usage
fibonacci_prime_candidate = 13  # Replace with the number you want to check
if is_fibonacci_prime(fibonacci_prime_candidate):
    print(f"{fibonacci_prime_candidate} is a Fibonacci Prime!")
else:
    print(f"{fibonacci_prime_candidate} is not a Fibonacci Prime.")

 
158. Check if a Number is a Squareful Number

import math

def is_squareful_number(number):
    factors = get_factors(number)
    unique_factors = list(set(factors))

    for factor in unique_factors:
        count = factors.count(factor)
        if count % 2 != 0:
            return False

    return True

def get_factors(number):
    factors = []
    for i in range(1, int(math.sqrt(number)) + 1):
        if number % i == 0:
            factors.append(i)
            if i != math.sqrt(number):
                factors.append(number // i)
    return factors

# Example usage
squareful_number = 36  # Replace with the number you want to check
if is_squareful_number(squareful_number):
    print(f"{squareful_number} is a Squareful Number!")
else:
    print(f"{squareful_number} is not a Squareful Number.")

 
159. Find the Area of a Tetrahedron

import math

def calculate_tetrahedron_surface_area(edge_length):
    surface_area = math.sqrt(3) * edge_length**2
    return surface_area

# Example usage
edge_length = 5  # Replace with the length of an edge of the tetrahedron
tetrahedron_surface_area = calculate_tetrahedron_surface_area(edge_length)
print(f"The surface area of the tetrahedron is: {tetrahedron_surface_area:.2f}")

 
160. Check if a Number is an Automorphic Number

def is_automorphic_number(number):
    square = number ** 2
    number_digits = str(number)
    square_digits = str(square)

    return square_digits.endswith(number_digits)

# Example usage
automorphic_number = 25  # Replace with the number you want to check
if is_automorphic_number(automorphic_number):
    print(f"{automorphic_number} is an Automorphic Number!")
else:
    print(f"{automorphic_number} is not an Automorphic Number.")

 
161. Calculate the Area of a Pyramid

def calculate_pyramid_surface_area(side_length, slant_height):
    base_area = side_length ** 2
    lateral_area = 2 * side_length * slant_height
    surface_area = base_area + lateral_area
    return surface_area

# Example usage
side_length = 4  # Replace with the length of a side of the pyramid's base
slant_height = 5  # Replace with the slant height of the pyramid
pyramid_surface_area = calculate_pyramid_surface_area(side_length, slant_height)
print(f"The surface area of the pyramid is: {pyramid_surface_area:.2f}")

 
162. Check if a Number is a Smith–Morra Gambit Number

def digit_sum(n):
    return sum(int(digit) for digit in str(n))

def prime_factorization(n):
    factors = []
    i = 2
    while i <= n:
        while n % i == 0:
            factors.append(i)
            n //= i
        i += 1
    return factors

def is_smith_morra_gambit_number(number):
    factors = prime_factorization(number)
    sum_of_digits = sum(digit_sum(factor) for factor in factors)
    return sum_of_digits == digit_sum(number)

# Example: Check if 22 is a Smith–Morra Gambit Number
print(is_smith_morra_gambit_number(22))  # Output: True





 
163. Check if a Number is a Solitary Number

def get_proper_divisors_sum(number):
    sum = 1  # Start with 1 as every number is divisible by 1

    for i in range(2, int(number**0.5) + 1):
        if number % i == 0:
            sum += i
            if i != number // i:
                sum += number // i

    return sum

def is_solitary_number(number):
    sum_of_divisors = get_proper_divisors_sum(number)
    return number != sum_of_divisors

# Example usage
solitary_number = 28  # Replace with the number you want to check
if is_solitary_number(solitary_number):
    print(f"{solitary_number} is a Solitary Number!")
else:
    print(f"{solitary_number} is not a Solitary Number.")

 
164. Basic Tower of Hanoi Puzzle

def tower_of_hanoi(n, source, auxiliary, target):
    if n == 1:
        print(f"Move disk 1 from {source} to {target}")
        return

    tower_of_hanoi(n - 1, source, target, auxiliary)
    print(f"Move disk {n} from {source} to {target}")
    tower_of_hanoi(n - 1, auxiliary, source, target)

# Example usage
number_of_disks = 3
source_peg = 'A'
auxiliary_peg = 'B'
target_peg = 'C'

print(f"Tower of Hanoi solution for {number_of_disks} disks:")
tower_of_hanoi(number_of_disks, source_peg, auxiliary_peg, target_peg)

 
165. Calculate the Area of a Frustum

import math

def surface_area_of_frustum(r1, r2, l):
    surface_area = math.pi * (r1 + r2) * l + math.pi * r1 ** 2 + math.pi * r2 ** 2
    print(f"Surface Area of the frustum is: {surface_area}")

# Example: Calculate the surface area of a frustum with top radius 4, bottom radius 8, and slant height 6
surface_area_of_frustum(4, 8, 6)


























166. Check if a Number is a Motzkin Number

def is_motzkin_number(number):
    if number < 0:
        return False
    
    # Use dynamic programming to calculate Motzkin numbers
    motzkin_numbers = [1, 1]
    for n in range(2, number + 1):
        next_motzkin = ((2 * n + 1) * motzkin_numbers[n - 1] + (3 * n - 3) * motzkin_numbers[n - 2]) / (n + 2)
        motzkin_numbers.append(next_motzkin)
    
    return number in motzkin_numbers

# Example usage
motzkin_number = 5  # Replace with the number you want to check
if is_motzkin_number(motzkin_number):
    print(f"{motzkin_number} is a Motzkin Number!")
else:
    print(f"{motzkin_number} is not a Motzkin Number.")

 
167. Check if a Number is a Padovan Number

 def is_padovan_number(number):
    if number < 0:
        return False
    
    padovan_numbers = [1, 1, 1]

    while padovan_numbers[-1] <= number:
        next_padovan = padovan_numbers[-2] + padovan_numbers[-3]
        padovan_numbers.append(next_padovan)
    
    return number in padovan_numbers

# Example usage
padovan_number = 9  # Replace with the number you want to check
if is_padovan_number(padovan_number):
    print(f"{padovan_number} is a Padovan Number!")
else:
    print(f"{padovan_number} is not a Padovan Number.")

 
168. Calculate the Area of a Koch Snowflake

import math

def calculate_koch_snowflake_area(side_length, iterations):
    sqrt3 = math.sqrt(3)
    area = (4 * sqrt3 / 5) * (side_length / 3) ** 2 * (3 / 2) ** iterations
    return area

# Example usage
side_length = 100  # Replace with the side length of the original equilateral triangle
iterations = 4     # Replace with the number of iterations
koch_snowflake_area = calculate_koch_snowflake_area(side_length, iterations)
print(f"The area of the Koch snowflake is: {koch_snowflake_area:.2f}")

 
169. Basic Chatbot

def chatbot(message):
    # Simple rule-based responses
    if 'hello' in message.lower():
        return 'Hello! How can I help you?'
    elif 'how are you' in message.lower():
        return 'I am just a computer program, but thanks for asking!'
    elif 'bye' in message.lower():
        return 'Goodbye!'
    else:
        return 'I didn\'t understand that. Can you please rephrase?'

def start_chat():
    print('Chatbot: Hello! How can I help you today?')
    while True:
        user_input = input('You: ')
        if user_input.strip() == '':
            continue
        if user_input.lower() == 'bye':
            print('Chatbot: Goodbye!')
            break
        response = chatbot(user_input)
        print('Chatbot:', response)

start_chat()

 
170. RGB to HEX Converter

def convert_to_hex(red, green, blue):
    def to_hex(value):
        hex_value = format(value, '02x')
        return hex_value

    hex_red = to_hex(red)
    hex_green = to_hex(green)
    hex_blue = to_hex(blue)

    return f'#{hex_red}{hex_green}{hex_blue}'

# Example usage
red_value = int(input('Enter the Red value (0-255): '))
green_value = int(input('Enter the Green value (0-255): '))
blue_value = int(input('Enter the Blue value (0-255): '))

hex_result = convert_to_hex(red_value, green_value, blue_value)
print(f'HEX: {hex_result}')

 
171. Counter

count = 0

def increment_counter():
    global count
    count += 1
    print(f"Counter: {count}")

def decrement_counter():
    global count
    count -= 1
    print(f"Counter: {count}")

def reset_counter():
    global count
    count = 0
    print("Counter reset to 0")

# Example usage
increment_counter()
increment_counter()
decrement_counter()
reset_counter()

 
172. Stop The Bomb
import time
import threading

bomb_timer = None
countdown_thread = None
time_left = 10  # Initial time in seconds

def start_bomb():
    global bomb_timer, countdown_thread
    print("The bomb is ticking! Hurry, defuse it!")
    display_time_left()
    bomb_timer = threading.Timer(time_left, explode_bomb)
    countdown_thread = threading.Thread(target=display_time_left)
    bomb_timer.start()
    countdown_thread.start()

def defuse_bomb():
    global bomb_timer, countdown_thread
    if bomb_timer:
        bomb_timer.cancel()
    print("Whew! You successfully defused the bomb!")
    if countdown_thread:
        countdown_thread.join()

def display_time_left():
    global time_left
    while time_left >= 0:
        print(f"Time remaining: {time_left} seconds", end='\r')
        time_left -= 1
        time.sleep(1)
    explode_bomb()

def explode_bomb():
    print("\nBOOM! The bomb exploded. Game over!")
# Example usage
start_bomb()
# Uncomment the line below to simulate successfully defusing the bomb
# defuse_bomb()
173. IP Address Generator

import random

def generate_random_ip():
    octet = lambda: random.randint(0, 255)
    return f"{octet()}.{octet()}.{octet()}.{octet()}"

def generate_multiple_random_ips(count):
    return [generate_random_ip() for _ in range(count)]

# Example: Generate and print 5 random IP addresses
number_of_ips = 5
random_ips = generate_multiple_random_ips(number_of_ips)
print('Random IP Addresses:', random_ips)

 
  174. Digital clock

import datetime
import time

def update_clock():
    now = datetime.datetime.now()
    formatted_time = now.strftime("%H:%M:%S")
    
    # Clear the console to update the time
    print("\033[H\033[J")
    
    print("Current Time:", formatted_time)

# Update the clock every second
while True:
    update_clock()
    time.sleep(1)

 
175. Random Number Generator

import random

def generate_random_number(min_val, max_val):
    return random.randint(min_val, max_val)

random_number = generate_random_number(1, 10)
print("Random Number:", random_number)

 
176. Simple JavaScript Quiz
def run_quiz():
    questions = [
        {
            "question": "What is the capital of France?",
            "options": ["Berlin", "Madrid", "Paris", "Rome"],
            "correct_answer": "Paris"
        },
        {
            "question": "Which programming language is this quiz written in?",
            "options": ["JavaScript", "Python", "Java", "C++"],
            "correct_answer": "JavaScript"
        },
        {
            "question": "What is the largest mammal?",
            "options": ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
            "correct_answer": "Blue Whale"
        }
    ]

    score = 0

    for question in questions:
        print(question["question"])
        for i, option in enumerate(question["options"], 1):
            print(f"{i}. {option}")

        user_answer_index = int(input("Enter the number of your answer:"))
        user_answer = question["options"][user_answer_index - 1]

        if user_answer == question["correct_answer"]:
            print("Correct!\n")
            score += 1
        else:
            print(f"Wrong! The correct answer is {question['correct_answer']}\n")

    print(f"Your final score: {score} out of {len(questions)}")

# Run the quiz
run_quiz()

 
177. Text-based RPG Adventure

def text_rpg_adventure():
    print("Welcome to the Text-based RPG Adventure!")
    print("You find yourself in a dark cave. What do you want to do?")

    choices = [
        {"option": "Explore the cave", "outcome": "You discover a hidden treasure!", "next": "treasure"},
        {"option": "Go deeper into the cave", "outcome": "Uh-oh! A dragon appears! You narrowly escape.", "next": "dragon"},
        {"option": "Exit the cave", "outcome": "You emerge into the sunlight. Adventure awaits!", "next": "end"}
    ]

    current_choice = 0

    while current_choice < len(choices):
        user_choice = input(choices[current_choice]["option"] + "\n")
        print(choices[current_choice]["outcome"])

        if user_choice.lower() == "exit":
            print("You exit the adventure. Goodbye!")
            break

        for index, choice in enumerate(choices):
            if choice["next"] == user_choice.lower():
                current_choice = index
                break
        else:
            print("Invalid choice. Try again or type 'exit' to end the adventure.")

# Start the text-based RPG adventure
text_rpg_adventure()

 
178. Dice Rolling Simulator

import random

def roll_dice():
    result = random.randint(1, 6)
    print(f"You rolled a {result}")

# Simulate rolling the dice
roll_dice()

 
179. Seconds to Time Converter

def convert_seconds_to_time(seconds):
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    remaining_seconds = seconds % 60

    print(f"Time: {hours} hours, {minutes} minutes, {remaining_seconds} seconds")

# Example: Convert 3665 seconds to time
input_seconds = 3665
convert_seconds_to_time(input_seconds)

 
180. Bar Chart Generator

def generate_bar_chart(data):
    max_value = max(data)

    for value in data:
        bar_length = round((value / max_value) * 20)
        bar = '█' * bar_length + ' ' * (20 - bar_length)

        print(f"{value} | {bar}")

# Example: Generate a bar chart for data
chart_data = [5, 8, 12, 4, 6]
generate_bar_chart(chart_data)

 
181. Right-Angled Triangle Pattern

def generate_right_angled_triangle(height):
    for i in range(1, height + 1):
        stars = '*' * i
        print(stars)

# Example: Generate a right-angled triangle with a height of 5
triangle_height = 5
generate_right_angled_triangle(triangle_height)
 
182. Text-Based Calculator

def text_based_calculator(expression):
    try:
        result = eval(expression)
        print(f"Result: {result}")
    except Exception as error:
        print(f"Error: {error}")

# Example: Evaluate a mathematical expression
user_input = input("Enter a mathematical expression: ")
text_based_calculator(user_input)

 
183. Number Pyramid Generator

def generate_number_pyramid(height):
    for i in range(1, height + 1):
        spaces = ' ' * (height - i)
        numbers = ' '.join(str(num) for num in range(1, i + 1))
        print(spaces + numbers)

# Example: Generate a number pyramid with a height of 4
pyramid_height = 4
generate_number_pyramid(pyramid_height)

 
184. Diamond Pattern Generator

def generate_diamond_pattern(height):
    midpoint = (height + 1) // 2

    for i in range(1, height + 1):
        spaces = abs(midpoint - i)
        stars = '*' * (height - 2 * spaces)
        print(' ' * spaces + stars)

# Example: Generate a diamond pattern with a height of 5
diamond_height = 5
generate_diamond_pattern(diamond_height)

 
185. Hangman Game

import random

def hangman_game():
    words = ["javascript", "hangman", "programming", "developer", "challenge"]
    selected_word = random.choice(words)
    guessed_word = "_" * len(selected_word)
    remaining_attempts = 6
    guessed_letters = []

    print("Welcome to the Hangman Game!")
    print("Try to guess the word.")

    while remaining_attempts > 0:
        print(f"Word: {guessed_word}")
        print(f"Guessed Letters: {', '.join(guessed_letters)}")
        print(f"Attempts Remaining: {remaining_attempts}")

        user_guess = input("Enter a letter: ").lower()

        if not user_guess or not user_guess.isalpha() or len(user_guess) != 1:
            print("Invalid input. Please enter a single letter.")
            continue

        if user_guess in guessed_letters:
            print("You already guessed that letter. Try again.")
            continue

        guessed_letters.append(user_guess)

        if user_guess in selected_word:
            for i in range(len(selected_word)):
                if selected_word[i] == user_guess:
                    guessed_word = guessed_word[:i] + user_guess + guessed_word[i + 1:]

            if "_" not in guessed_word:
                print(f"Congratulations! You guessed the word: {selected_word}")
                break
        else:
            print("Incorrect guess. Try again.")
            remaining_attempts -= 1

            if remaining_attempts == 0:
                print(f"Out of attempts. The word was: {selected_word}")

# Start the Hangman game
hangman_game()

 
186. Countdown Timer
import time

def countdown_timer():
    user_time = input("Enter the countdown time in seconds: ")
    try:
        countdown_time = int(user_time)
        if countdown_time <= 0:
            print("Invalid input. Please enter a positive number.")
            return
    except ValueError:
        print("Invalid input. Please enter a valid number.")
        return

    print(f"Countdown started for {countdown_time} seconds.")

    seconds_remaining = countdown_time

    while seconds_remaining > 0:
        print(f"Time Remaining: {seconds_remaining} seconds")
        time.sleep(1)
        seconds_remaining -= 1

    print("Countdown completed!")

# Start the countdown timer
countdown_timer()

 
187. Mad Libs Game

def mad_libs_game():
    print("Welcome to the Mad Libs Game!")
    print("Let's create a funny story.")

    noun = input("Enter a noun: ")
    verb = input("Enter a verb: ")
    adjective = input("Enter an adjective: ")
    adverb = input("Enter an adverb: ")
    animal = input("Enter an animal: ")
    sound = input("Enter a sound: ")

    print("\nHere's your Mad Libs story:\n")
    print(f"Once upon a time, there was a {adjective} {noun} that loved to {verb} {adverb}.")
    print(f"One day, it met a {animal} that made a {sound} noise.")
    print("Everyone in the neighborhood heard the noise and started to join the fun!")
    print("And they all lived happily ever after.\n")
    print("The end.")

# Start the Mad Libs game
mad_libs_game()

 
188. Guess the Number Game
import random

def guess_the_number_game():
    max_number = 100
    max_attempts = 10
    secret_number = random.randint(1, max_number)

    print("Welcome to the Guess the Number Game!")
    print(f"I've picked a number between 1 and {max_number}. Try to guess it!")

    for attempts in range(1, max_attempts + 1):
        user_guess = input("Enter your guess: ")

        try:
            user_guess = int(user_guess)
        except ValueError:
            print(f"Invalid guess. Please enter a number between 1 and {max_number}.")
            continue

        if user_guess < 1 or user_guess > max_number:
            print(f"Invalid guess. Please enter a number between 1 and {max_number}.")
            continue

        if user_guess == secret_number:
            print(f"Congratulations! You guessed the number in {attempts} attempts.")
            return
        elif user_guess < secret_number:
            print("Too low. Try again!")
        else:
            print("Too high. Try again!")

    print(f"Sorry, you've run out of attempts. The number was {secret_number}.")
# Start the Guess the Number Game
guess_the_number_game()
189. Whack-a-Mole Game
import random

def whack_a_mole_game():
    total_holes = 5
    moles_to_whack = 3
    mole_symbol = "M"
    empty_hole_symbol = "_"

    score = 0
    remaining_attempts = 10

    print("Welcome to the Whack-a-Mole Game!")
    print(f"Try to whack {moles_to_whack} moles within {remaining_attempts} attempts.")

    while remaining_attempts > 0 and moles_to_whack > 0:
        holes = [empty_hole_symbol] * total_holes
        random_mole_index = random.randint(0, total_holes - 1)
        holes[random_mole_index] = mole_symbol

        print("\nHoles:", " ".join(holes))

        user_whack_index = input("Enter the index to whack the mole: ")

        try:
            user_whack_index = int(user_whack_index)
        except ValueError:
            print(f"Invalid input. Please enter a number between 0 and {total_holes - 1}.")
            continue

        if user_whack_index < 0 or user_whack_index >= total_holes:
            print(f"Invalid input. Please enter a number between 0 and {total_holes - 1}.")
            continue

        if holes[user_whack_index] == mole_symbol:
            print("Whack! You got the mole!")
            score += 1
            moles_to_whack -= 1
        else:
            print("Missed! No mole at that hole.")

        remaining_attempts -= 1
        print(f"Score: {score} | Attempts remaining: {remaining_attempts}")

    if moles_to_whack == 0:
        print("Congratulations! You whacked all the moles!")
    else:
        print("Game over. You ran out of attempts.")

# Start the Whack-a-Mole Game
whack_a_mole_game()

 
190. Coin Tossing Game

import random

def coin_tossing_game():
    coin_sides = ["Heads", "Tails"]
    correct_guesses = 0
    total_guesses = 0

    print("Welcome to the Coin Tossing Game!")

    while True:
        player_guess = input("Heads or Tails? ").lower()

        if player_guess not in ["heads", "tails"]:
            print("Invalid input. Please enter 'Heads' or 'Tails'.")
            continue

        coin_result = random.choice(coin_sides)

        print(f"Coin toss result: {coin_result}")

        if player_guess == coin_result.lower():
            print("Correct guess! Well done!")
            correct_guesses += 1
        else:
            print("Wrong guess. Better luck next time!")

        total_guesses += 1

        play_again = input("Do you want to toss the coin again? (yes/no): ").lower()
        if play_again != "yes":
            print(f"Game over. You made {correct_guesses} correct guesses out of {total_guesses} total guesses.")
            break

# Start the Coin Tossing Game
coin_tossing_game()

191. Fibonacci Number Generator

def fibonacci_number_generator():
    limit = int(input("Enter the limit for Fibonacci numbers: "))

    if limit < 1:
        print("Invalid input. Please enter a positive number.")
        return

    fibonacci_numbers = [0, 1]

    for i in range(2, limit + 1):
        fibonacci_numbers.append(fibonacci_numbers[i - 1] + fibonacci_numbers[i - 2])

    print(f"Fibonacci numbers up to {limit}:")
    print(fibonacci_numbers[:limit + 1])

# Start the Fibonacci Number Generator
fibonacci_number_generator()

 
192. Math Quiz Game

import random

def math_quiz_game():
    max_questions = 5
    score = 0

    print("Welcome to the Math Quiz Game!")
    print("Answer the following addition questions:")

    for i in range(max_questions):
        num1 = random.randint(1, 10)
        num2 = random.randint(1, 10)
        correct_answer = num1 + num2

        user_answer = input(f"Question {i + 1}: {num1} + {num2} = ? ")

        if user_answer.isdigit() and int(user_answer) == correct_answer:
            print("Correct! Well done!")
            score += 1
        else:
            print(f"Wrong! The correct answer is: {correct_answer}")

    print(f"Quiz complete! Your final score is: {score} out of {max_questions}")

# Start the Math Quiz Game
math_quiz_game()

 
193. Color Guessing Game

import random

def color_guessing_game():
    colors = ["red", "green", "blue", "yellow", "orange", "purple"]
    max_attempts = 3

    print("Welcome to the Color Guessing Game!")
    print("Guess the color based on the RGB values.")

    for attempts in range(1, max_attempts + 1):
        random_color = random.choice(colors)
        rgb_values = generate_random_rgb_values()

        print(f"RGB: {', '.join(map(str, rgb_values))}")

        user_guess = input("Enter your color guess: ").lower()

        if user_guess not in colors:
            print("Invalid guess. Please enter a valid color.")
            continue

        if user_guess == random_color:
            print("Congratulations! You guessed the correct color!")
            return
        else:
            print(f"Wrong guess. Remaining attempts: {max_attempts - attempts}")

    print("Sorry, you've run out of attempts. The correct color was revealed above.")

def generate_random_rgb_values():
    return [random.randint(0, 255) for _ in range(3)]

# Start the Color Guessing Game
color_guessing_game()

 
194. Word Scramble Game

```
import random

def word_scramble_game():
    words = ["javascript", "programming", "web", "hangman", "developer"]
    max_attempts = 3

    print("Welcome to the Word Scramble Game!")
    print("Unscramble the word and enter your guess.")

    for attempts in range(1, max_attempts + 1):
        random_word = random.choice(words)
        scrambled_word = scramble_word(random_word)

        print(f"Scrambled word: {scrambled_word}")

        user_guess = input("Enter your unscrambled word guess: ").lower()

        if user_guess not in words:
            print("Invalid guess. Please enter a valid word.")
            continue

        if user_guess == random_word:
            print("Congratulations! You unscrambled the word!")
            return
        else:
            print(f"Wrong guess. Remaining attempts: {max_attempts - attempts}")

    print("Sorry, you've run out of attempts. The correct word was revealed above.")

def scramble_word(word):
    return ''.join(random.sample(word, len(word)))

# Start the Word Scramble Game
word_scramble_game()
````

### 195. Country Capital Quiz Game

```
def country_capital_quiz_game():
    country_capital_pairs = [
        {"country": "France", "capital": "Paris"},
        {"country": "Japan", "capital": "Tokyo"},
        {"country": "Brazil", "capital": "Brasília"},
        {"country": "India", "capital": "New Delhi"},
        {"country": "Australia", "capital": "Canberra"}
    ]

    score = 0

    print("Welcome to the Country Capital Quiz Game!")
    print("Match the country with its capital:")

    for pair in country_capital_pairs:
        country = pair["country"]
        capital = pair["capital"]

        print(f"\nCountry: {country}")

        user_capital = input(f"Enter the capital of {country}: ").strip()

        if user_capital.lower() == capital.lower():
            print("Correct! Well done!")
            score += 1
        else:
            print(f"Wrong! The correct capital is: {capital}")

    print(f"Quiz complete! Your final score is: {score} out of {len(country_capital_pairs)}")

# Start the Country Capital Quiz Game
country_capital_quiz_game()
```
 
### 196. Guess the Animal

```
def guess_the_animal_game():
    animals = [
        {"name": "elephant", "clues": ["I have a long trunk.", "I am the largest land animal."]},
        {"name": "giraffe", "clues": ["I have a long neck.", "I am the tallest living terrestrial animal."]},
        {"name": "penguin", "clues": ["I cannot fly.", "I live in cold climates like Antarctica."]}
    ]

    score = 0

    print("Welcome to the Guess the Animal Game!")
    print("Read the clues and guess the correct animal:")

    for animal in animals:
        print("\nAnimal Clues:")
        for clue in animal["clues"]:
            print(clue)

        user_guess = input("Enter your guess:").lower()

        if user_guess == animal["name"]:
            print("Correct! Well done!")
            score += 1
        else:
            print(f"Wrong! The correct answer is: {animal['name']}")

    print(f"Game complete! Your final score is: {score} out of {len(animals)}")

# Start the Guess the Animal Game
guess_the_animal_game()
```
 
### 197. Joke Teller 

```
import random

def joke_teller_program():
    joke_categories = ["knock-knock", "dad", "animal", "puns"]
    selected_category = random.choice(joke_categories)

    print("Welcome to the Joke Teller Program!")
    print(f"Category: {selected_category.upper()}")
    print("Get ready for a good laugh!")

    if selected_category == "knock-knock":
        print("Knock, knock.")
        input("Who's there?")
        print("Tank.")
        input("Tank who?")
        print("You're welcome!")

    elif selected_category == "dad":
        print("Why did the scarecrow win an award?")
        input("I don't know, why?")
        print("Because he was outstanding in his field!")

    elif selected_category == "animal":
        print("Why don't scientists trust atoms?")
        input("I'm not sure. Why?")
        print("Because they make up everything!")

    elif selected_category == "puns":
        print("I used to be a baker because I kneaded dough.")

    else:
        print("Oops! Something went wrong. No joke for you!")

# Start the Joke Teller Program
joke_teller_program()
```

### 198. Shopping List

```
def shopping_list_program():
    shopping_list = []

    print("Welcome to the Shopping List Program!")
    print("You can add items, remove items, and view your current shopping list.")

    while True:
        action = input("Enter 'add' to add an item, 'remove' to remove an item, or 'view' to see your shopping list. Type 'exit' to end the program:").lower()

        if action == "exit":
            print("Exiting the Shopping List Program. Goodbye!")
            break

        elif action == "add":
            new_item = input("Enter the item you want to add:")
            shopping_list.append(new_item)
            print(f"{new_item} added to your shopping list.")

        elif action == "remove":
            if not shopping_list:
                print("Your shopping list is empty. Nothing to remove.")
            else:
                item_to_remove = input("Enter the item you want to remove:")
                if item_to_remove in shopping_list:
                    shopping_list.remove(item_to_remove)
                    print(f"{item_to_remove} removed from your shopping list.")
                else:
                    print(f"{item_to_remove} not found in your shopping list.")

        elif action == "view":
            if not shopping_list:
                print("Your shopping list is empty.")
            else:
                print("Your Shopping List:")
                for item in shopping_list:
                    print(f"- {item}")

        else:
            print("Invalid action. Please enter 'add', 'remove', 'view', or 'exit'.")

# Start the Shopping List Program
shopping_list_program()
```
 
### 199. FizzBuzz Game

```
def fizz_buzz_game():
    print("Welcome to the FizzBuzz Game!")
    print("Let's play FizzBuzz!")

    for i in range(1, 101):
        output = ""

        if i % 3 == 0:
            output += "Fizz"

        if i % 5 == 0:
            output += "Buzz"

        print(output or i)

# Start the FizzBuzz Game
fizz_buzz_game()
```
 
### 200. Swap Pairs of Adjacent Digits

```
def swap_pairs_of_adjacent_digits(number):
    # Convert the number to a string to manipulate individual digits
    number_str = str(number)
    length = len(number_str)

    # Check if the number has an even length
    if length % 2 != 0:
        print("Please enter an integer with an even length.")
        return

    # Swap pairs of adjacent digits
    swapped_number = ""
    for i in range(0, length, 2):
        swapped_number += number_str[i + 1] + number_str[i]

    # Convert the result back to an integer
    result = int(swapped_number)
    print(f"Original Number: {number}")
    print(f"Number with Swapped Pairs of Adjacent Digits: {result}")

# Example: Swap pairs of adjacent digits of the number 123456
swap_pairs_of_adjacent_digits(123456)
```
 
### 201. Capitalization Changer

```
def change_capitalization(input_string):
    result_string = ""

    for char in input_string:
        # Check if the character is uppercase
        if char == char.upper():
            # Convert uppercase to lowercase
            result_string += char.lower()
        else:
            # Convert lowercase to uppercase
            result_string += char.upper()

    print(f"Original String: {input_string}")
    print(f"String with Changed Capitalization: {result_string}")

# Example: Change the capitalization of the string "Hello World"
change_capitalization("Hello World")
```
 
### 202. Array Halves Swapper

```
def swap_array_halves(arr):
    length = len(arr)

    # Check if the array has an even length
    if length % 2 != 0:
        print("Please provide an array with an even length.")
        return

    # Calculate the midpoint of the array
    midpoint = length // 2

    # Swap the two halves of the array
    for i in range(midpoint):
        arr[i], arr[midpoint + i] = arr[midpoint + i], arr[i]

    print("Original Array: " + ", ".join(map(str, arr)))
    print("Array with Swapped Halves: " + ", ".join(map(str, arr)))

# Example: Swap halves of the array [1, 2, 3, 4, 5, 6]
swap_array_halves([1, 2, 3, 4, 5, 6])
```
 
### 203. Sum of Digits in String

```
def sum_of_digits_in_string(input_string):
    digit_sum = 0

    for char in input_string:
        # Check if the character is a digit
        if char.isdigit():
            # Convert the digit character to its numerical value and add to sum
            digit_sum += int(char)

    print(f"Original String: {input_string}")
    print(f"Sum of Digits in the String: {digit_sum}")

# Example: Compute the sum of digits in the string "abc123xyz456"
sum_of_digits_in_string("abc123xyz456")
```
 
### 204. Sum of Cubes
```
def sum_of_cubes(up_to_integer):
    cubes_sum = 0

    for i in range(1, up_to_integer + 1):
        # Calculate the cube of each integer and add to sum
        cubes_sum += i ** 3

    print(f"Sum of Cubes from 1 to {up_to_integer}: {cubes_sum}")

# Example: Compute the sum of cubes up to the integer 5
sum_of_cubes(5)
```
 
### 205. Maximum Integer for Sum

```
def find_max_integer_for_sum(target_sum):
    current_sum = 0
    max_integer = 0

    while current_sum + max_integer + 1 <= target_sum:
        max_integer += 1
        current_sum += max_integer

    print(f"Maximum Integer (n) for Sum <= {target_sum}: {max_integer}")

# Example: Find the maximum integer for the sum <= 15
find_max_integer_for_sum(15)
```
 
### 206. URL Breakdown

```
import re

def break_url(url):
    url_parts = {}
    url_regex = r'^(\w+):\/\/([\w.-]+)(\/.*)?$'
    matches = re.match(url_regex, url)

    if not matches:
        print("Invalid URL format.")
        return

    url_parts['scheme'] = matches.group(1)
    url_parts['domain'] = matches.group(2)
    url_parts['path'] = matches.group(3) or ""

    print("URL Parts:")
    print(url_parts)

# Example: Breakdown the URL "https://www.example.org/page"
break_url("https://www.example.org/page")
```

### 207. Sort Strings by Length

```
def sort_strings_by_length(strings_array):
    sorted_array = sorted(strings_array, key=len)

    print("Original Array of Strings:")
    print(strings_array)
    print("Array of Strings Sorted by Length:")
    print(sorted_array)

# Example: Sort strings by length
sort_strings_by_length(["apple", "banana", "orange", "kiwi", "grape"])
```
 
### 208. Simplify Absolute Path

```
def simplify_absolute_path(path):
    parts = path.split('/')
    simplified_parts = []

    for part in parts:
        if part == '..':
            if simplified_parts:
                simplified_parts.pop()  # Move up one level for '..'
        elif part != '' and part != '.':
            simplified_parts.append(part)

    simplified_path = '/' + '/'.join(simplified_parts)

    print(f"Original Absolute Path: {path}")
    print(f"Simplified Absolute Path: {simplified_path}")

# Example: Simplify an absolute path
simplify_absolute_path('/home/user/../documents/./file.txt')
```
 
### 209. Count Common Elements in Arrays

```
def count_common_elements(arr1, arr2):
    common_elements = [element for element in arr1 if element in arr2]
    number_of_common_elements = len(common_elements)

    print("Array 1:", arr1)
    print("Array 2:", arr2)
    print("Common Elements:", common_elements)
    print("Number of Common Elements:", number_of_common_elements)

# Example: Count common elements between two arrays
count_common_elements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
```
 
### 210. Check Same Digits in a Number
```
def are_all_digits_same(number):
    number_str = str(number)
    first_digit = number_str[0]

    for digit in number_str[1:]:
        if digit != first_digit:
            print(f"Digits in {number} are not all the same.")
            return

    print(f"Digits in {number} are all the same.")

# Example: Check if all digits in the number 22222 are the same
are_all_digits_same(22222)
```
 
### 211. Rightmost Round Number Position

```
def rightmost_round_number_position(arr):
    for i in range(len(arr) - 1, -1, -1):
        if arr[i] % 10 == 0:
            print(f"Rightmost Round Number: {arr[i]}, Position: {i + 1}")
            return

    print("No round numbers found in the array. Position: 0")

# Example: Find the position of the rightmost round number
rightmost_round_number_position([123, 450, 678, 900])
```
 
### 212. Reverse Bits of 16-Bit Unsigned Short Integer

```
def reverse_bits_16_bit_unsigned_short(integer):
    binary_representation = format(integer, '016b')
    reversed_binary = binary_representation[::-1]
    reversed_integer = int(reversed_binary, 2)

    print(f"Original Integer: {integer}")
    print(f"Binary Representation: {binary_representation}")
    print(f"Reversed Binary: {reversed_binary}")
    print(f"Reversed Integer: {reversed_integer}")

# Example: Reverse bits of the 16-bit unsigned short integer 5678
reverse_bits_16_bit_unsigned_short(5678)
```
 
### 213. Greater Than 15 Checker

```
def greater_than_15_checker(number):
    result = number if number > 15 else 15
    print(f"Given Number: {number}")
    print(f"Result: {result}")

# Example: Test whether the number 20 is greater than 15
greater_than_15_checker(20)
```
 
### 214. Replace First Digit with $

```
import re

def replace_first_digit_with_dollar(input_string):
    modified_string = re.sub(r'\d', '$', input_string, count=1)
    print(f"Original String: {input_string}")
    print(f"Modified String: {modified_string}")

# Example: Replace the first digit with $ in the string "abc123xyz456"
replace_first_digit_with_dollar("abc123xyz456")
```

### 215. Prefix Sums

```
def prefix_sums(input_array):
    prefix_sum = 0
    prefix_sum_array = []

    for num in input_array:
        prefix_sum += num
        prefix_sum_array.append(prefix_sum)

    print("Original Array:", input_array)
    print("Prefix Sums Array:", prefix_sum_array)

# Example: Create prefix sums for the array [1, 2, 3, 4, 5]
prefix_sums([1, 2, 3, 4, 5])
```
 
### 216. Next Prime Number

```
def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def next_prime_number(given_number):
    next_number = given_number + 1

    while not is_prime(next_number):
        next_number += 1

    print(f"Given Number: {given_number}")
    print(f"Next Prime Number: {next_number}")

# Example: Find the next prime number greater than 10
next_prime_number(10)
```

### 217. Reverse Order of Bits

```
def reverse_order_of_bits(integer):
    binary_representation = bin(integer)[2:].zfill(8)  # Assuming 8 bits for simplicity
    reversed_binary = binary_representation[::-1]
    reversed_integer = int(reversed_binary, 2)

    print(f"Original Integer: {integer}")
    print(f"Binary Representation: {binary_representation}")
    print(f"Reversed Binary: {reversed_binary}")
    print(f"Reversed Integer: {reversed_integer}")

# Examples: Reverse order of bits for given integers
reverse_order_of_bits(14)
reverse_order_of_bits(56)
reverse_order_of_bits(234)
````
 
### 218. Pyramid
```
def generate_ascii_triangle(height):
    for i in range(1, height + 1):
        spaces = ' ' * (height - i)
        stars = '*' * (i * 2 - 1)
        print(spaces + stars)

triangle_height = 5
generate_ascii_triangle(triangle_height)
```
