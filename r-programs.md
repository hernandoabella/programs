# R Programs
## Basics & Intro
### Hello World

This is the classic first program written in any programming language. It simply displays the message “Hello, World!” on the screen.

```r
# Hello World in R
print("Hello, World!")

# Output:
# [1] "Hello, World!"
```

<details>
  <summary>Explanation</summary>
  
  - `print()` is a built-in function in R used to display output in the console.
  - The string `"Hello, World!"` is passed as an argument to `print()`.
  - When executed, it will print the following output:
    ```
    [1] "Hello, World!"
    ```
  - The `[1]` in the output indicates that it is the first element of a vector, which is R's default way of showing printed values.
</details>

### Print a Variable

This program demonstrates how to store a value in a variable and print it to the console.

```r
# Assign a value to a variable
message <- "Welcome to R programming!"

# Print the variable
print(message)

# Output:
# [1] "Welcome to R programming!"
```

<details>
  <summary>Explanation</summary>
  
  - `message <- "Welcome to R programming!"` assigns a string value to the variable `message`.
  - `print(message)` displays the content of the variable in the console.
  - R prints vectors with an index like `[1]`, indicating the first element of the output.
</details>

### Data Types in R

This program demonstrates various basic data types available in R.

```r
# Numeric
num <- 42.5

# Integer
int <- as.integer(10)

# Character
char <- "R Language"

# Logical
logic <- TRUE

# Complex
comp <- 2 + 3i

# Print all data types
print(paste("Numeric:", num))
print(paste("Integer:", int))
print(paste("Character:", char))
print(paste("Logical:", logic))
print(paste("Complex:", comp))

# Output:
# [1] "Numeric: 42.5"
# [1] "Integer: 10"
# [1] "Character: R Language"
# [1] "Logical: TRUE"
# [1] "Complex: 2+3i"
```

<details>
  <summary>Explanation</summary>
  
  - `num` is assigned a numeric (floating-point) value.
  - `int` uses `as.integer()` to ensure the value is stored as an integer.
  - `char` is a character string.
  - `logic` stores a logical value (Boolean).
  - `comp` is a complex number.
  - `paste()` is used to combine text and variable values into a single string for printing.
</details>

### Check Variable Type

This program shows how to check the data type of different variables in R.

```r
# Variables of different types
a <- 10
b <- "Hello"
c <- TRUE
d <- 3 + 4i

# Check types using class()
print(class(a))  # Output: "numeric"
print(class(b))  # Output: "character"
print(class(c))  # Output: "logical"
print(class(d))  # Output: "complex"

# Output:
# [1] "numeric"
# [1] "character"
# [1] "logical"
# [1] "complex"
```

<details>
  <summary>Explanation</summary>
  
  - `class()` is a built-in R function used to return the data type (or class) of a variable.
  - `a`, `b`, `c`, and `d` are assigned numeric, character, logical, and complex values respectively.
  - The output shows the type of each variable as a string.
</details>

### Type Conversion

This program demonstrates how to convert variables from one data type to another in R.

```r
# Original variables
num <- 42
char <- "123"
logic <- TRUE

# Convert numeric to character
num_to_char <- as.character(num)

# Convert character to numeric
char_to_num <- as.numeric(char)

# Convert logical to numeric
logic_to_num <- as.numeric(logic)

# Print converted values
print(paste("Numeric to Character:", num_to_char))
print(paste("Character to Numeric:", char_to_num))
print(paste("Logical to Numeric:", logic_to_num))

# Output:
# [1] "Numeric to Character: 42"
# [1] "Character to Numeric: 123"
# [1] "Logical to Numeric: 1"
```

<details>
  <summary>Explanation</summary>
  
  - `as.character()`, `as.numeric()`, and other `as.*()` functions are used to convert variable types.
  - `num_to_char` converts the numeric value 42 to a character: `"42"`.
  - `char_to_num` converts the string `"123"` to a numeric value: `123`.
  - `logic_to_num` converts `TRUE` to `1` (in R, `TRUE` is treated as 1 and `FALSE` as 0 when converted).
  - `paste()` is used to format the printed output.
</details>

### Read Input from User

This program demonstrates how to take input from the user in R using `readline()`.

```r
# Take input from the user
name <- readline(prompt = "Enter your name: ")

# Display the input
cat("Hello,", name, "!\n")

# Example Output:
# Enter your name: Alice
# Hello, Alice !
```

<details>
  <summary>Explanation</summary>
  
  - `readline()` is used to read a line of text input from the user.
  - The `prompt` argument shows a message before the user types input.
  - The input is stored in the `name` variable as a string.
  - `cat()` is used to concatenate and display the final greeting message without quotes.
  - Note: `readline()` works in interactive environments like R Console or RStudio terminal.
</details>
### Read Input from User

This program demonstrates how to take input from the user in R using `readline()`.

```r
# Take input from the user
name <- readline(prompt = "Enter your name: ")

# Display the input
cat("Hello,", name, "!\n")

# Example Output:
# Enter your name: Alice
# Hello, Alice !
```

<details>
  <summary>Explanation</summary>
  
  - `readline()` is used to read a line of text input from the user.
  - The `prompt` argument shows a message before the user types input.
  - The input is stored in the `name` variable as a string.
  - `cat()` is used to concatenate and display the final greeting message without quotes.
  - Note: `readline()` works in interactive environments like R Console or RStudio terminal.
</details>

### Arithmetic Operations

This program performs basic arithmetic operations such as addition, subtraction, multiplication, division, and modulus.

```r
# Define two numbers
a <- 15
b <- 4

# Perform operations
add <- a + b
sub <- a - b
mul <- a * b
div <- a / b
mod <- a %% b
exp <- a ^ b

# Display results
cat("Addition:", add, "\n")
cat("Subtraction:", sub, "\n")
cat("Multiplication:", mul, "\n")
cat("Division:", div, "\n")
cat("Modulus:", mod, "\n")
cat("Exponentiation:", exp, "\n")

# Output:
# Addition: 19 
# Subtraction: 11 
# Multiplication: 60 
# Division: 3.75 
# Modulus: 3 
# Exponentiation: 50625 
```

<details>
  <summary>Explanation</summary>
  
  - `+`, `-`, `*`, `/`, `%%`, and `^` are arithmetic operators in R.
  - `a %% b` returns the remainder of division (modulus).
  - `a ^ b` performs exponentiation (a raised to the power of b).
  - `cat()` is used to print multiple values cleanly.
</details>

### Relational Operators

This program demonstrates the use of relational operators to compare values.

```r
# Define two numbers
x <- 10
y <- 5

# Perform comparisons
cat("x == y:", x == y, "\n")   # Equal to
cat("x != y:", x != y, "\n")   # Not equal to
cat("x > y:", x > y, "\n")     # Greater than
cat("x < y:", x < y, "\n")     # Less than
cat("x >= y:", x >= y, "\n")   # Greater than or equal to
cat("x <= y:", x <= y, "\n")   # Less than or equal to

# Output:
# x == y: FALSE 
# x != y: TRUE 
# x > y: TRUE 
# x < y: FALSE 
# x >= y: TRUE 
# x <= y: FALSE 
```

<details>
  <summary>Explanation</summary>
  
  - `==`: checks if two values are equal.
  - `!=`: checks if two values are not equal.
  - `>`, `<`: greater than, less than.
  - `>=`, `<=`: greater than or equal to, less than or equal to.
  - `cat()` prints the results for readability.
  - The result of each comparison is a logical value: `TRUE` or `FALSE`.
</details>

### Logical Operators

This program demonstrates the use of logical operators: AND (`&`), OR (`|`), and NOT (`!`) in R.

```r
# Define logical values
x <- TRUE
y <- FALSE

# Apply logical operators
cat("x & y:", x & y, "\n")     # Logical AND
cat("x | y:", x | y, "\n")     # Logical OR
cat("!x:", !x, "\n")           # Logical NOT

# Output:
# x & y: FALSE 
# x | y: TRUE 
# !x: FALSE 
```

<details>
  <summary>Explanation</summary>
  
  - `&`: Returns `TRUE` only if both values are `TRUE`.
  - `|`: Returns `TRUE` if at least one value is `TRUE`.
  - `!`: Negates the logical value.
  - `x` is `TRUE`, `y` is `FALSE` in this example.
  - `cat()` is used for clean and clear output.
</details>

### Use of cat() and paste()

This program demonstrates how to use `cat()` for formatted output and `paste()` for string concatenation in R.

```r
# Variables
name <- "Alice"
age <- 25

# Using paste()
greeting <- paste("Hello,", name, "you are", age, "years old.")
print(greeting)

# Using cat()
cat("Hello,", name, "you are", age, "years old.\n")

# Output:
# [1] "Hello, Alice you are 25 years old."
# Hello, Alice you are 25 years old.
```

<details>
  <summary>Explanation</summary>
  
  - `paste()` joins strings with spaces by default and returns a single string.
  - `print()` is used to show the result of `paste()`.
  - `cat()` outputs text directly to the console with more control, like adding newline `\n`.
  - `cat()` doesn’t add quotes or line breaks unless you explicitly include them.
</details>

### Rounding Numbers

This program demonstrates how to round numbers using `round()`, `ceiling()`, and `floor()` in R.

```r
# Define a number
num <- 7.65

# Rounding functions
rounded <- round(num)      # Round to the nearest whole number
rounded_1 <- round(num, 1) # Round to 1 decimal place
up <- ceiling(num)         # Round up to the nearest whole number
down <- floor(num)         # Round down to the nearest whole number

# Display results
cat("Original number:", num, "\n")
cat("Rounded (no digits):", rounded, "\n")
cat("Rounded (1 digit):", rounded_1, "\n")
cat("Ceiling:", up, "\n")
cat("Floor:", down, "\n")

# Output:
# Original number: 7.65 
# Rounded (no digits): 8 
# Rounded (1 digit): 7.6 
# Ceiling: 8 
# Floor: 7 
```

<details>
  <summary>Explanation</summary>
  
  - `round(x)`: Rounds `x` to the nearest whole number.
  - `round(x, digits)`: Rounds `x` to a specified number of decimal places.
  - `ceiling(x)`: Rounds `x` up to the next highest integer.
  - `floor(x)`: Rounds `x` down to the next lowest integer.
  - `cat()` displays the results on separate lines.
</details>

### Simple Interest Calculator

This program calculates simple interest using the formula:  
**SI = (P * R * T) / 100**

Where:
- P = Principal amount
- R = Rate of interest
- T = Time in years

```r
# Define the variables
principal <- 1000  # Principal amount
rate <- 5          # Rate of interest
time <- 3          # Time in years

# Calculate Simple Interest
simple_interest <- (principal * rate * time) / 100

# Calculate Total Amount (Principal + Interest)
total_amount <- principal + simple_interest

# Display results
cat("Principal:", principal, "\n")
cat("Rate of Interest:", rate, "%\n")
cat("Time (years):", time, "\n")
cat("Simple Interest:", simple_interest, "\n")
cat("Total Amount:", total_amount, "\n")

# Output:
# Principal: 1000 
# Rate of Interest: 5 %
# Time (years): 3 
# Simple Interest: 150 
# Total Amount: 1150 
```

<details>
  <summary>Explanation</summary>
  
  - The formula for simple interest is **SI = (P * R * T) / 100**.
  - `principal`, `rate`, and `time` are variables representing the principal amount, interest rate, and time in years.
  - The simple interest is calculated and added to the principal to get the total amount.
  - `cat()` is used to print the results clearly.
</details>

### Compound Interest Calculator

This program calculates compound interest using the formula:  
**A = P * (1 + R/n)^(n*T)**  
Where:
- A = Total amount after interest
- P = Principal amount
- R = Rate of interest per period
- T = Time the money is invested or borrowed for (in years)
- n = Number of times interest is compounded per year

```r
# Define the variables
principal <- 1000   # Principal amount
rate <- 5           # Annual rate of interest in percentage
time <- 3           # Time in years
n <- 4              # Number of times interest is compounded per year (quarterly)

# Convert rate to a decimal
rate_decimal <- rate / 100

# Calculate Compound Interest
amount <- principal * (1 + rate_decimal / n)^(n * time)

# Calculate Compound Interest Earned
compound_interest <- amount - principal

# Display results
cat("Principal:", principal, "\n")
cat("Rate of Interest:", rate, "%\n")
cat("Time (years):", time, "\n")
cat("Compound Interest:", compound_interest, "\n")
cat("Total Amount after Compound Interest:", amount, "\n")

# Output:
# Principal: 1000 
# Rate of Interest: 5 %
# Time (years): 3 
# Compound Interest: 161.1122 
# Total Amount after Compound Interest: 1161.112 
```

<details>
  <summary>Explanation</summary>
  
  - The compound interest formula is **A = P * (1 + R/n)^(n*T)** where `A` is the total amount after interest, `P` is the principal amount, `R` is the interest rate, `n` is the number of times interest is compounded per year, and `T` is the number of years.
  - `rate` is divided by 100 to convert it into a decimal form.
  - The compound interest is the total amount minus the principal.
  - `cat()` is used for clear output.
</details>

### Convert Celsius to Fahrenheit

This program converts a given temperature from Celsius to Fahrenheit using the formula:  
**F = (C * 9/5) + 32**

Where:
- C = Temperature in Celsius
- F = Temperature in Fahrenheit

```r
# Define the temperature in Celsius
celsius <- 25

# Convert to Fahrenheit
fahrenheit <- (celsius * 9/5) + 32

# Display result
cat(celsius, "Celsius is equal to", fahrenheit, "Fahrenheit.\n")

# Output:
# 25 Celsius is equal to 77 Fahrenheit.
```

<details>
  <summary>Explanation</summary>
  
  - The formula for converting Celsius to Fahrenheit is **F = (C * 9/5) + 32**.
  - The program takes a value in Celsius (`25` in this case), applies the formula, and outputs the result in Fahrenheit.
  - `cat()` is used to combine and display the result.
</details>

### Convert Fahrenheit to Celsius

This program converts a given temperature from Fahrenheit to Celsius using the formula:  
**C = (F - 32) * 5/9**

Where:
- F = Temperature in Fahrenheit
- C = Temperature in Celsius

```r
# Define the temperature in Fahrenheit
fahrenheit <- 77

# Convert to Celsius
celsius <- (fahrenheit - 32) * 5/9

# Display result
cat(fahrenheit, "Fahrenheit is equal to", celsius, "Celsius.\n")

# Output:
# 77 Fahrenheit is equal to 25 Celsius.
```

<details>
  <summary>Explanation</summary>
  
  - The formula for converting Fahrenheit to Celsius is **C = (F - 32) * 5/9**.
  - The program takes a value in Fahrenheit (`77` in this case), applies the formula, and outputs the result in Celsius.
  - `cat()` is used to combine and display the result.
</details>

### Check if Number is Positive, Negative, or Zero

This program checks if a given number is positive, negative, or zero.

```r
# Define the number
number <- -5

# Check if the number is positive, negative, or zero
if (number > 0) {
  result <- "positive"
} else if (number < 0) {
  result <- "negative"
} else {
  result <- "zero"
}

# Display result
cat("The number", number, "is", result, ".\n")

# Output:
# The number -5 is negative.
```

<details>
  <summary>Explanation</summary>
  
  - The program checks if the number is greater than zero, less than zero, or equal to zero using `if`, `else if`, and `else`.
  - It assigns the result (`"positive"`, `"negative"`, or `"zero"`) to the variable `result`.
  - `cat()` is used to display the result.
</details>

### Swap Two Numbers

This program swaps the values of two numbers using a temporary variable.

```r
# Define two numbers
a <- 5
b <- 10

# Display values before swapping
cat("Before swapping: a =", a, "b =", b, "\n")

# Swap the numbers
temp <- a
a <- b
b <- temp

# Display values after swapping
cat("After swapping: a =", a, "b =", b, "\n")

# Output:
# Before swapping: a = 5 b = 10 
# After swapping: a = 10 b = 5 
```

<details>
  <summary>Explanation</summary>
  
  - A temporary variable `temp` is used to hold the value of `a` so that the value of `b` can be assigned to `a` without losing it.
  - Then, the value in `temp` (which was originally `a`) is assigned to `b`.
  - `cat()` is used to print the values before and after swapping.
</details>

### Check Leap Year

This program checks whether a given year is a leap year. A year is a leap year if:
- It is divisible by 4, and
- It is not divisible by 100, unless it is also divisible by 400.

```r
# Define the year
year <- 2024

# Check if the year is a leap year
if ((year %% 4 == 0 && year %% 100 != 0) || (year %% 400 == 0)) {
  result <- "Leap Year"
} else {
  result <- "Not a Leap Year"
}

# Display result
cat(year, "is", result, ".\n")

# Output:
# 2024 is Leap Year.
```

<details>
  <summary>Explanation</summary>
  
  - The program uses modulus (`%%`) to check divisibility.
  - If the year is divisible by 4 and not by 100, or if it is divisible by 400, it is a leap year.
  - The result is stored in the `result` variable and displayed using `cat()`.
</details>

### Convert Seconds to Hours and Minutes

This program converts a given number of seconds into hours, minutes, and remaining seconds.

```r
# Define the number of seconds
seconds <- 3671

# Convert to hours, minutes, and remaining seconds
hours <- seconds %/% 3600
minutes <- (seconds %% 3600) %/% 60
remaining_seconds <- seconds %% 60

# Display result
cat(seconds, "seconds is equal to", hours, "hours", minutes, "minutes", remaining_seconds, "seconds.\n")

# Output:
# 3671 seconds is equal to 1 hours 1 minutes 11 seconds.
```

<details>
  <summary>Explanation</summary>
  
  - `seconds %/% 3600` calculates the number of full hours in the given number of seconds.
  - `(seconds %% 3600) %/% 60` calculates the number of full minutes from the remaining seconds after extracting the hours.
  - `seconds %% 60` gives the remaining seconds after extracting the hours and minutes.
  - `cat()` is used to display the result in a readable format.
</details>

### BMI Calculator

This program calculates Body Mass Index (BMI) using the formula:  
**BMI = weight (kg) / height² (m²)**

Where:
- weight = your weight in kilograms
- height = your height in meters

```r
# Define weight (in kg) and height (in meters)
weight <- 70
height <- 1.75

# Calculate BMI
bmi <- weight / (height^2)

# Display result
cat("Your BMI is:", round(bmi, 2), "\n")

# Output:
# Your BMI is: 22.86
```

<details>
  <summary>Explanation</summary>
  
  - The formula used to calculate BMI is **BMI = weight / height²**.
  - `weight` is the body weight in kilograms, and `height` is in meters.
  - The result is rounded to two decimal places using `round()`.
  - `cat()` is used to print the final BMI value.
</details>
