![6](https://github.com/user-attachments/assets/40d5ef91-02b7-4408-809c-85d6d70541cc)

### 1. Print Hello World

```
fn main() {
    println!("Hello, World!");
}

// Hello, World!
```
 
### 2. Add Two Numbers

```
use std::io;
use std::f64;

fn main() {
    // Function to read user input and parse it to f64
    fn read_number(prompt: &str) -> f64 {
        loop {
            // Display the prompt
            println!("{}", prompt);

            // Read user input
            let mut input = String::new();
            io::stdin().read_line(&mut input).expect("Failed to read line");

            // Attempt to parse the input to f64
            match input.trim().parse::<f64>() {
                Ok(num) => return num,
                Err(_) => println!("Please enter a valid number."),
            }
        }
    }

    // Read numbers from user
    let num1 = read_number("Enter the first number: ");
    let num2 = read_number("Enter the second number: ");

    // Check for NaN and perform the addition
    if !num1.is_nan() && !num2.is_nan() {
        let sum_result = num1 + num2;
        println!("The sum of {} and {} is: {}", num1, num2, sum_result);
    } else {
        println!("Please enter valid numbers.");
    }
}
```


 
3. Find the Square Root
use std::io;
use std::f64;

fn main() {
    // Function to read user input and parse it to f64
    fn read_number(prompt: &str) -> f64 {
        loop {
            // Display the prompt
            println!("{}", prompt);

            // Read user input
            let mut input = String::new();
            io::stdin().read_line(&mut input).expect("Failed to read line");

            // Attempt to parse the input to f64
            match input.trim().parse::<f64>() {
                Ok(num) => return num,
                Err(_) => println!("Please enter a valid number."),
            }
        }
    }

    // Read a number from user
    let input_number = read_number("Enter a non-negative number: ");

    // Check if the number is non-negative and calculate the square root
    if !input_number.is_nan() && input_number >= 0.0 {
        let square_root = input_number.sqrt();
        println!("The square root of {} is: {}", input_number, square_root);
    } else {
        println!("Please enter a valid non-negative number.");
    }
}

// 3
// The square root of 3 is: 1.7320508075688772

 
4. Calculate the Area of a Triangle
use std::io;
use std::f64;

fn main() {
    // Function to read user input and parse it to f64
    fn read_positive_number(prompt: &str) -> f64 {
        loop {
            // Display the prompt
            println!("{}", prompt);

            // Read user input
            let mut input = String::new();
            io::stdin().read_line(&mut input).expect("Failed to read line");

            // Attempt to parse the input to f64
            match input.trim().parse::<f64>() {
                Ok(num) if num > 0.0 => return num,
                _ => println!("Please enter a valid positive number."),
            }
        }
    }

    // Read base and height from user
    let base = read_positive_number("Enter the base of the triangle: ");
    let height = read_positive_number("Enter the height of the triangle: ");

    // Calculate the area of the triangle
    let area = 0.5 * base * height;
    println!("The area of the triangle with base {} and height {} is: {}", base, height, area);
}

// The area of the triangle with base 3 and height 4 is: 6


 
5. Swap Two Variables
use std::io;

fn main() {
    // Function to read user input
    fn read_input(prompt: &str) -> String {
        // Display the prompt
        println!("{}", prompt);

        // Read user input
        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("Failed to read line");

        // Remove the newline character
        input.trim().to_string()
    }

    // Read variables from user
    let mut variable1 = read_input("Enter the first variable: ");
    let mut variable2 = read_input("Enter the second variable: ");

    println!("Before swapping: Variable1 = {}, Variable2 = {}", variable1, variable2);

    // Swapping the variables
    std::mem::swap(&mut variable1, &mut variable2);

    println!("After swapping: Variable1 = {}, Variable2 = {}", variable1, variable2);
}

// Before swapping: Variable1 = a, Variable2 = b
// After swapping: Variable1 = b, Variable2 = a

 
6. Solve Quadratic Equation
use std::io;

fn read_number(prompt: &str) -> f64 {
    loop {
        println!("{}", prompt);
        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("Failed to read line");
        if let Ok(num) = input.trim().parse() {
            return num;
        }
        println!("Please enter a valid number.");
    }
}

fn main() {
    let a = read_number("Enter the coefficient a: ");
    let b = read_number("Enter the coefficient b: ");
    let c = read_number("Enter the coefficient c: ");
    
    let discriminant = b.powi(2) - 4.0 * a * c;
    
    if a == 0.0 {
        println!("Coefficient 'a' cannot be zero.");
        return;
    }

    if discriminant > 0.0 {
        let sqrt_d = discriminant.sqrt();
        let root1 = (-b + sqrt_d) / (2.0 * a);
        let root2 = (-b - sqrt_d) / (2.0 * a);
        println!("The roots are: {} and {}", root1, root2);
    } else if discriminant == 0.0 {
        let root = -b / (2.0 * a);
        println!("The root is: {}", root);
    } else {
        println!("The equation has complex roots.");
    }
}
7. Convert Kilometers to Miles
use std::io;

fn main() {
    // Function to read user input and parse it to f64
    fn read_number(prompt: &str) -> f64 {
        loop {
            // Display the prompt
            println!("{}", prompt);

            // Read user input
            let mut input = String::new();
            io::stdin().read_line(&mut input).expect("Failed to read line");

            // Attempt to parse the input to f64
            match input.trim().parse::<f64>() {
                Ok(num) => return num,
                Err(_) => println!("Please enter a valid number."),
            }
        }
    }

    // Read distance in kilometers from user
    let kilometers = read_number("Enter the distance in kilometers: ");

    // Conversion factor
    let kilometers_to_miles_conversion_factor = 0.621371;

    // Convert kilometers to miles
    let miles = kilometers * kilometers_to_miles_conversion_factor;
    println!("{} kilometers is approximately {} miles.", kilometers, miles);
}

// 2 kilometers is approximately 1.242742 miles.



 
8. Convert Celsius to Fahrenheit
use std::io;

fn main() {
    // Function to read user input and parse it to f64
    fn read_number(prompt: &str) -> f64 {
        loop {
            // Display the prompt
            println!("{}", prompt);

            // Read user input
            let mut input = String::new();
            io::stdin().read_line(&mut input).expect("Failed to read line");

            // Attempt to parse the input to f64
            match input.trim().parse::<f64>() {
                Ok(num) => return num,
                Err(_) => println!("Please enter a valid number."),
            }
        }
    }

    // Read temperature in Celsius from user
    let celsius = read_number("Enter the temperature in Celsius: ");

    // Convert Celsius to Fahrenheit
    let fahrenheit = (celsius * 9.0) / 5.0 + 32.0;
    println!("{} degrees Celsius is equal to {} degrees Fahrenheit.", celsius, fahrenheit);
}

// 33 degrees Celsius is equal to 91.4 degrees Fahrenheit.


 
9. Generate a Random Number
use rand::Rng;
use std::io;

fn main() {
    // Prompt user for the range
    println!("Enter the minimum value of the range: ");
    let mut min_range = String::new();
    io::stdin().read_line(&mut min_range).expect("Failed to read input");
    let min_range: f64 = min_range.trim().parse().expect("Please enter a valid number");

    println!("Enter the maximum value of the range: ");
    let mut max_range = String::new();
    io::stdin().read_line(&mut max_range).expect("Failed to read input");
    let max_range: f64 = max_range.trim().parse().expect("Please enter a valid number");

    // Check if input is valid
    if min_range < max_range {
        // Generate a random number within the specified range
        let random_number: f64 = rand::thread_rng().gen_range(min_range..=max_range);
        println!("A random number between {} and {} is: {}", min_range, max_range, random_number);
    } else {
        println!("Please enter valid numbers, ensuring that the minimum value is less than the maximum value.");
    }
}

// A random number between 3 and 4 is: 3.990459557841887

 
10. Check if a number is Positive, Negative, or Zero
use std::io;

fn main() {
    // Prompt user for a number
    println!("Enter a number: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");

    // Try to parse the input as a floating-point number
    match input.trim().parse::<f64>() {
        Ok(number) => {
            // Check if the number is positive, negative, or zero
            if number > 0.0 {
                println!("{} is a positive number.", number);
            } else if number < 0.0 {
                println!("{} is a negative number.", number);
            } else {
                println!("The entered number is zero.");
            }
        }
        Err(_) => {
            println!("Please enter a valid number.");
        }
    }
}

// 3 is a positive number.

 
11. Check if a Number is Odd or Even
use std::io;

fn main() {
    // Prompt user for a number
    println!("Enter a number: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");

    // Try to parse the input as an integer
    match input.trim().parse::<i32>() {
        Ok(number) => {
            // Check if the number is odd or even
            if number % 2 == 0 {
                println!("{} is an even number.", number);
            } else {
                println!("{} is an odd number.", number);
            }
        }
        Err(_) => {
            println!("Please enter a valid integer.");
        }
    }
}

// 3 is an odd number.

 
12. Find the Largest Among Three Numbers
use std::io;

fn read_number(prompt: &str) -> f64 {
    println!("{}", prompt);
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");
    input.trim().parse().unwrap_or_else(|_| {
        println!("Please enter a valid number.");
        std::process::exit(1);
    })
}

fn main() {
    let num1 = read_number("Enter the first number:");
    let num2 = read_number("Enter the second number:");
    let num3 = read_number("Enter the third number:");

    let largest_number = num1.max(num2).max(num3);
    println!(
        "The largest number among {}, {}, and {} is: {}",
        num1, num2, num3, largest_number
    );
}

// The largest number among 3, 4, and 3 is: 4

 
13. Check Prime Number
use std::io;

fn main() {
    let mut input = String::new();
    println!("Enter a number: ");
    io::stdin().read_line(&mut input).expect("Failed to read input");

    if let Ok(number) = input.trim().parse::<i32>() {
        if number > 1 && (2..=((number as f64).sqrt() as i32)).all(|i| number % i != 0) {
            println!("{} is a prime number.", number);
        } else {
            println!("{} is not a prime number.", number);
        }
    } else {
        println!("Please enter a valid integer greater than 1.");
    }
}

// 33 is not a prime number.



 
14. Print All Prime Numbers in an Interval
use std::io;

fn read_input(prompt: &str) -> i32 {
    let mut input = String::new();
    println!("{}", prompt);
    io::stdin().read_line(&mut input).expect("Failed to read input");
    input.trim().parse().unwrap_or_else(|_| {
        println!("Please enter a valid integer.");
        std::process::exit(1);
    })
}

fn is_prime(n: i32) -> bool {
    n > 1 && (2..=((n as f64).sqrt() as i32)).all(|i| n % i != 0)
}

fn main() {
    let start = read_input("Enter the starting number of the interval:");
    let end = read_input("Enter the ending number of the interval:");

    if start > 1 && start < end {
        println!("Prime numbers in the interval [{} - {}]:", start, end);
        (start..=end).filter(|&n| is_prime(n)).for_each(|n| println!("{}", n));
    } else {
        println!("Please enter valid integers, ensuring that the starting number is less than the ending number and greater than 1.");
    }
}

// Prime numbers in the interval [33 - 44]:
// 37
// 41
// 43




 
15. Find the Factorial of a Number
use std::io;

fn main() {
    println!("Enter a non-negative integer: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");
    
    // Try to parse the input as a u128 integer
    if let Ok(number) = input.trim().parse::<u128>() {
        // Calculate the factorial, handling larger numbers
        let factorial: u128 = (1..=number).product();
        println!("The factorial of {} is: {}", number, factorial);
    } else {
        println!("Please enter a valid non-negative integer.");
    }
}

// The factorial of 11 is: 39916800


 
16. Display the Multiplication Table
use std::io;

fn main() {
    // Prompt user for a number
    println!("Enter a number for the multiplication table: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");
    
    // Try to parse the input as an integer
    let number: i32 = match input.trim().parse() {
        Ok(n) => n,
        Err(_) => {
            println!("Please enter a valid integer.");
            return;
        }
    };

    // Specify the range for the multiplication table
    let range_val = 10;

    println!("Multiplication table for {} (up to {}):", number, range_val);

    // Display the multiplication table
    for i in 1..=range_val {
        let result = number * i;
        println!("{} x {} = {}", number, i, result);
    }
}
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
use std::io;

fn main() {
    println!("Enter the number of terms in the Fibonacci sequence: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");

    if let Ok(num_terms) = input.trim().parse::<usize>() {
        if num_terms == 0 {
            println!("Please enter a positive integer.");
            return;
        }

        let mut fib = vec![0u128, 1u128];
        fib.resize(num_terms, 0);
        (2..num_terms).for_each(|i| fib[i] = fib[i - 1] + fib[i - 2]);

        println!("{}", fib.iter().take(num_terms).map(|n| n.to_string()).collect::<Vec<_>>().join(", "));
    } else {
        println!("Please enter a valid positive integer.");
    }
}

// 0, 1, 1, 2



 
18. Check Armstrong Number
use std::io;

fn main() {
    println!("Enter a number: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");

    if let Ok(number) = input.trim().parse::<u32>() {
        let digits = number.to_string().len() as u32;
        let sum: u32 = number.to_string()
                             .chars()
                             .map(|d| d.to_digit(10).unwrap().pow(digits))
                             .sum();

        if sum == number {
            println!("{} is an Armstrong number.", number);
        } else {
            println!("{} is not an Armstrong number.", number);
        }
    } else {
        println!("Please enter a valid positive integer.");
    }
}

// 22 is not an Armstrong number.


 
19. Find Armstrong Number in an Interval
use std::io;

fn main() {
    let (start, end) = read_interval();
    if start > 0 && start < end {
        println!("Armstrong numbers in the interval [{}, {}]:", start, end);
        for i in start..=end {
            if is_armstrong(i) {
                println!("{}", i);
            }
        }
    } else {
        println!("Please enter valid positive integers with the starting number less than the ending number.");
    }
}
fn read_interval() -> (u32, u32) {
    let mut input = String::new();
    println!("Enter the starting number: ");
    io::stdin().read_line(&mut input).expect("Failed to read input");
    let start = input.trim().parse().unwrap_or(0);

    input.clear();
    println!("Enter the ending number: ");
    io::stdin().read_line(&mut input).expect("Failed to read input");
    let end = input.trim().parse().unwrap_or(0);

    (start, end)
}

fn is_armstrong(num: u32) -> bool {
    let digits = num.to_string().len() as u32;
    num == num.to_string()
              .chars()
              .map(|d| d.to_digit(10).unwrap().pow(digits))
              .sum()
}
// Armstrong numbers in the interval [22, 33]:
20. Make a Simple Calculator
use std::io;

fn main() {
    let num1 = read_number("Enter the first number: ");
    let num2 = read_number("Enter the second number: ");
    let op = read_operation();

    let result = match (op.as_str(), num2) {
        ("+", _) => num1 + num2,
        ("-", _) => num1 - num2,
        ("*", _) => num1 * num2,
        ("/", 0.0) => {
            println!("Cannot divide by zero.");
            return;
        }
        ("/", _) => num1 / num2,
        _ => {
            println!("Invalid operation.");
            return;
        }
    };

    println!("Result: {} {} {} = {}", num1, op, num2, result);
}

fn read_number(prompt: &str) -> f64 {
    let mut input = String::new();
    println!("{}", prompt);
    io::stdin().read_line(&mut input).expect("Failed to read input");
    input.trim().parse().expect("Invalid number")
}

fn read_operation() -> String {
    let mut op = String::new();
    println!("Enter an operation (+, -, *, /): ");
    io::stdin().read_line(&mut op).expect("Failed to read input");
    op.trim().to_string()
}
21. Find the Sum of Natural Numbers
use std::io;

fn main() {
    // Prompt user for a positive integer
    println!("Enter a positive integer: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");

    // Try to parse the input as an integer
    let n: u64 = match input.trim().parse() {
        Ok(num) if num > 0 => num,
        _ => {
            println!("Please enter a valid positive integer.");
            return;
        }
    };

    // Calculate the sum of natural numbers
    let sum_of_natural_numbers = (n * (n + 1)) / 2;
    println!("The sum of natural numbers from 1 to {} is: {}", n, sum_of_natural_numbers);
}

// The sum of natural numbers from 1 to 12 is: 78


 
22. Check if the Numbers Have the Same Last Digit
use std::io;

fn main() {
    let num1 = read_number("Enter the first number: ");
    let num2 = read_number("Enter the second number: ");

    if num1.abs() % 10 == num2.abs() % 10 {
        println!("The last digit of {} is the same as the last digit of {}.", num1, num2);
    } else {
        println!("The last digit of {} is different from the last digit of {}.", num1, num2);
    }
}

fn read_number(prompt: &str) -> i64 {
    let mut input = String::new();
    println!("{}", prompt);
    io::stdin().read_line(&mut input).expect("Failed to read input");
    input.trim().parse().expect("Please enter a valid integer")
}

// The last digit of 2 is different from the last digit of 3.






 
23. Find HCF or GCD
use std::io;

fn main() {
    let num1 = read_positive_number("Enter the first positive integer: ");
    let num2 = read_positive_number("Enter the second positive integer: ");

    println!("The HCF (GCD) of {} and {} is: {}", num1, num2, gcd(num1, num2));
}

fn read_positive_number(prompt: &str) -> u64 {
    let mut input = String::new();
    println!("{}", prompt);
    io::stdin().read_line(&mut input).expect("Failed to read input");
    input.trim().parse().expect("Please enter a valid positive integer")
}

fn gcd(mut a: u64, mut b: u64) -> u64 {
    while b != 0 {
        let temp = b;
        b = a % b;
        a = temp;
    }
    a
}

// The HCF (GCD) of 22 and 33 is: 11












24. Find LCM

use std::io;

fn main() {
    let num1 = read_positive_number("Enter the first positive integer: ");
    let num2 = read_positive_number("Enter the second positive integer: ");
    
    let lcm = (num1 * num2) / gcd(num1, num2);
    println!("The LCM of {} and {} is: {}", num1, num2, lcm);
}

fn read_positive_number(prompt: &str) -> u64 {
    let mut input = String::new();
    println!("{}", prompt);
    io::stdin().read_line(&mut input).expect("Failed to read input");
    input.trim().parse().expect("Please enter a valid positive integer")
}

fn gcd(mut a: u64, mut b: u64) -> u64 {
    while b != 0 {
        let temp = b;
        b = a % b;
        a = temp;
    }
    a
}

// The LCM of 22 and 22 is: 22


 
25. Find the Factors of a Number
use std::io;

fn main() {
    // Prompt user for a positive integer
    println!("Enter a positive integer: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");

    // Try to parse the input as a positive integer
    let number: u64 = match input.trim().parse() {
        Ok(num) if num > 0 => num,
        _ => {
            println!("Please enter a valid positive integer.");
            return;
        }
    };

    println!("Factors of {}:", number);

    // Find and display the factors
    for i in 1..=number {
        if number % i == 0 {
            println!("{}", i);
        }
    }
}

// Factors of 44:
// 1
// 2
// 4
// 11
// 22
// 44
 
26. Find Sum of Natural Numbers Using Recursion
use std::io;

// Recursive function to calculate the sum of natural numbers
fn sum_of_natural_numbers(n: u64) -> u64 {
    if n == 0 { 0 } else { n + sum_of_natural_numbers(n - 1) }
}

fn main() {
    // Prompt user for a positive integer
    println!("Enter a positive integer: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");

    // Parse input as a positive integer
    let number: u64 = match input.trim().parse() {
        Ok(num) if num > 0 => num,
        _ => {
            println!("Please enter a valid positive integer.");
            return;
        }
    };

    // Display the sum using recursion
    println!("The sum of natural numbers up to {} is: {}", number, sum_of_natural_numbers(number));
}

// The sum of natural numbers up to 33 is: 561








 
27. Guess a Random Number
use rand::Rng;
use std::io;

fn main() {
    let random_number = rand::thread_rng().gen_range(1..=100);
    let mut attempts = 0;

    while let Some(guess) = get_guess() {
        attempts += 1;
        match guess.cmp(&random_number) {
            std::cmp::Ordering::Less => println!("Too low!"),
            std::cmp::Ordering::Greater => println!("Too high!"),
            std::cmp::Ordering::Equal => {
                println!("Congratulations! You guessed {} in {} attempts.", random_number, attempts);
                return;
            }
        }
    }
    println!("Please enter a valid number.");
}

fn get_guess() -> Option<u32> {
    println!("Guess the random number (1-100): ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).ok()?;
    input.trim().parse().ok()
}

// Too high!






 
28. Shuffle Deck of Cards
use rand::seq::SliceRandom;
use rand::thread_rng;

fn create_deck() -> Vec<String> {
    ["Hearts", "Diamonds", "Clubs", "Spades"]
        .iter()
        .flat_map(|&suit| {
            ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
                .iter()
                .map(move |&rank| format!("{} of {}", rank, suit))
        })
        .collect()
}

fn main() {
    let mut deck = create_deck();
    println!("Initial Deck:\n{}", deck.join("\n"));
    
    deck.shuffle(&mut thread_rng());
    println!("\nShuffled Deck:\n{}", deck.join("\n"));
}

// Initial Deck:
// 2 of Hearts
// 3 of Hearts
// 4 of Hearts
// 5 of Hearts
// 6 of Hearts
// 7 of Hearts
// 8 of Hearts
// 9 of Hearts
// 10 of Hearts


 
29. Display Fibonacci Sequence Using Recursion
use std::io;

fn fibonacci(n: u32) -> u32 {
    if n <= 1 { n } else { fibonacci(n - 1) + fibonacci(n - 2) }
}

fn main() {
    let mut input = String::new();
    println!("Enter the number of terms in the Fibonacci sequence: ");
    
    io::stdin().read_line(&mut input).expect("Failed to read input");

    let num_terms: u32 = input.trim().parse().unwrap_or_else(|_| {
        println!("Please enter a valid non-negative integer.");
        std::process::exit(1);
    });

    println!("Fibonacci sequence of {} terms:", num_terms);
    (0..num_terms).for_each(|i| println!("{}", fibonacci(i)));
}

// Fibonacci sequence of 1 terms:
// 0


 
30. Find Factorial of Number Using Recursion
use std::io;
use num_bigint::BigUint;
use num_traits::One;

fn factorial(n: u64) -> BigUint {
    if n == 0 || n == 1 {
        BigUint::one()
    } else {
        BigUint::from(n) * factorial(n - 1)
    }
}

fn main() {
    let mut input = String::new();
    println!("Enter a non-negative integer: ");
    io::stdin().read_line(&mut input).expect("Failed to read input");

    let number: u64 = input.trim().parse().unwrap_or_else(|_| {
        println!("Please enter a valid non-negative integer.");
        std::process::exit(1);
    });

    println!("The factorial of {} is: {}", number, factorial(number));
}

// The factorial of 22 is: 1124000727777607680000





 
31. Convert Decimal to Binary
use std::io;

fn decimal_to_binary(num: u32) -> String {
    if num == 0 { return "0".to_string(); }
    let mut binary = String::new();
    let mut n = num;
    while n > 0 {
        binary.insert(0, char::from_digit(n % 2, 10).unwrap());
        n /= 2;
    }
    binary
}

fn main() {
    println!("Enter a decimal number: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");
    let decimal_number: u32 = input.trim().parse().expect("Please enter a valid non-negative integer.");
    println!("The binary equivalent of {} is: {}", decimal_number, decimal_to_binary(decimal_number));
}

// The binary equivalent of 10 is: 1010

 
32. Find ASCII Value of Character
use std::io;

fn main() {
    // Prompt user for a character
    let mut input = String::new();
    println!("Enter a character: ");
    
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input");

    // Trim whitespace and ensure input is a single character
    let input = input.trim();
    
    if input.len() == 1 {
        // Convert the character to its ASCII value
        let character = input.chars().next().unwrap();
        let ascii_value = character as u8;
        println!("The ASCII value of '{}' is: {}", character, ascii_value);
    } else {
        println!("Please enter a valid single character.");
    }
}

// The ASCII value of 'a' is: 97
 
33. Check Whether a String is Palindrome or Not
use std::io;

fn main() {
    // Prompt user for a string
    let mut input = String::new();
    println!("Enter a string: ");
    
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input");
    
    // Trim whitespace and remove non-alphanumeric characters
    let cleaned_string: String = input
        .trim()
        .chars()
        .filter(|c| c.is_alphanumeric())
        .map(|c| c.to_lowercase().to_string())
        .collect();
    
    // Check if the cleaned string is a palindrome
    if is_palindrome(&cleaned_string) {
        println!("\"{}\" is a palindrome.", input.trim());
    } else {
        println!("\"{}\" is not a palindrome.", input.trim());
    }
}

// Function to check if a string is a palindrome
fn is_palindrome(s: &str) -> bool {
    let rev: String = s.chars().rev().collect();
    s == rev
}

// "asasd" is not a palindrome.


 
34. Sort Words in Alphabetical Order
use std::io;

fn main() {
    // Prompt user for a sentence or a list of words
    let mut input = String::new();
    println!("Enter a sentence or a list of words: ");
    
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input");
    
    // Trim whitespace from the input
    let input = input.trim();

    // Split the input into a list of words
    let mut words_list: Vec<&str> = input.split_whitespace().collect();
    
    // Sort the list of words in alphabetical order
    words_list.sort();

    // Display the sorted words
    println!("Sorted Words:");
    println!("{}", words_list.join(", "));
}

// Enter a sentence or a list of words: 
// Sorted Words:
// ad, d, dwqdwq, qw, qwd, sadasd, wqdwq


 
35. Replace Characters of a String
use std::io;

fn main() {
    let mut input_string = String::new();
    println!("Enter a string: ");
    io::stdin().read_line(&mut input_string).expect("Failed to read input");
    let input_string = input_string.trim();

    if input_string.is_empty() {
        println!("Please enter a valid string.");
        return;
    }

    let target_char = prompt_user("Enter the target character: ");
    let replacement_char = prompt_user("Enter the replacement character: ");

    if target_char.len() == 1 && replacement_char.len() == 1 {
        println!("Modified String: {}", input_string.replace(&target_char, &replacement_char));
    } else {
        println!("Please enter valid single characters for target and replacement.");
    }
}

fn prompt_user(message: &str) -> String {
    println!("{}", message);
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read input");
    input.trim().to_string()
}



 
36. Reverse a String
use std::io;

fn main() {
    // Prompt user for a string
    let mut input_string = String::new();
    println!("Enter a string: ");
    
    io::stdin()
        .read_line(&mut input_string)
        .expect("Failed to read input");
    let input_string = input_string.trim(); // Remove trailing newline

    // Check if input is a valid string
    if !input_string.is_empty() {
        // Reverse the string
        let reversed_string: String = input_string.chars().rev().collect();

        // Display the reversed string
        println!("Reversed String: {}", reversed_string);
    } else {
        println!("Please enter a valid string.");
    }
}

// Reversed String: dsadas




 
37. Check the Number of Occurrences of a Character in the String
use std::io;

fn main() {
    // Prompt user for a string
    let mut input_string = String::new();
    println!("Enter a string: ");
    
    io::stdin()
        .read_line(&mut input_string)
        .expect("Failed to read input");
    let input_string = input_string.trim(); // Remove trailing newline

    // Prompt user for a character to count
    let mut target_char = String::new();
    println!("Enter the character to count: ");
    
    io::stdin()
        .read_line(&mut target_char)
        .expect("Failed to read input");
    let target_char = target_char.trim(); // Remove trailing newline

    // Check if inputs are valid
    if !input_string.is_empty() && target_char.len() == 1 {
        // Count occurrences of the target character
        let count = input_string.chars().filter(|&c| c.to_string() == target_char).count();

        // Display the result
        println!("Number of occurrences of '{}' in '{}': {}", target_char, input_string, count);
    } else {
        println!("Please enter a valid string and a single character.");
    }
}

 
38. Convert the First Letter of a String into UpperCase
use std::io;

fn main() {
    // Prompt user for a string
    let mut input_string = String::new();
    println!("Enter a string: ");
    
    io::stdin()
        .read_line(&mut input_string)
        .expect("Failed to read input");
    let input_string = input_string.trim(); // Remove trailing newline

    // Check if input is a valid string
    if !input_string.is_empty() {
        // Capitalize the first letter
        let result_string = capitalize_first_letter(input_string);

        // Display the result
        println!("Original String: {}", input_string);
        println!("String with First Letter Uppercase: {}", result_string);
    } else {
        println!("Please enter a valid string.");
    }
}

// Function to capitalize the first letter of a string
fn capitalize_first_letter(s: &str) -> String {
    let mut chars = s.chars();
    if let Some(first_char) = chars.next() {
        let capitalized_first_char = first_char.to_uppercase();
        let rest_of_string: String = chars.collect();
        return format!("{}{}", capitalized_first_char, rest_of_string);
    }
    s.to_string() // Return the original string if it's empty
}

// String with First Letter Uppercase: Asd

 
39. Count the Number of Vowels in a String
use std::io;

fn main() {
    // Prompt user for a string
    let mut input_string = String::new();
    println!("Enter a string: ");
    
    io::stdin()
        .read_line(&mut input_string)
        .expect("Failed to read input");
    let input_string = input_string.trim(); // Remove trailing newline

    // Check if input is a valid string
    if !input_string.is_empty() {
        // Call the function and display the result
        let number_of_vowels = count_vowels(input_string);
        println!("Number of vowels in '{}': {}", input_string, number_of_vowels);
    } else {
        println!("Please enter a valid string.");
    }
}

// Function to count vowels in a string
fn count_vowels(s: &str) -> usize {
    let vowels = "aeiouAEIOU";
    s.chars()
        .filter(|&c| vowels.contains(c))
        .count()
}

// Number of vowels in 'asd': 1


 
40. Check Whether a String Starts and Ends with Certain Characters
use std::io;

fn main() {
    let mut input_string = String::new();
    println!("Enter a string: ");
    io::stdin().read_line(&mut input_string).expect("Failed to read input");
    let input_string = input_string.trim();

    if input_string.is_empty() {
        println!("Please enter a valid string.");
        return;
    }

    let start_char = prompt_user("Enter the starting characters: ");
    let end_char = prompt_user("Enter the ending characters: ");

    if input_string.starts_with(&start_char) && input_string.ends_with(&end_char) {
        println!("The string '{}' starts with '{}' and ends with '{}'.", input_string, start_char, end_char);
    } else {
        println!("The string '{}' does not start with '{}' or end with '{}'.", input_string, start_char, end_char);
    }
}

fn prompt_user(message: &str) -> String {
    let mut input = String::new();
    println!("{}", message);
    io::stdin().read_line(&mut input).expect("Failed to read input");
    input.trim().to_string()
}

// The string 'asd' starts with 'a' and ends with 'd'.

 
41. Replace All Occurrences of a String
fn main() {
    // Example string
    let original_string = "Hello world, world!".to_string();

    // String to replace
    let search_string = "world";
    
    // Replacement string
    let replacement_string = "universe";

    // Replace all occurrences of search_string with replacement_string
    let modified_string = original_string.replace(search_string, replacement_string);

    // Display the result
    println!("Original String: {}", original_string);
    println!("Modified String: {}", modified_string);
}

// Original String: Hello world, world!
// Modified String: Hello universe, universe!


 
42. Create Multiline Strings
fn main() {
    // Multiline string using raw string literals
    let multiline_string = r#"
        This is a multiline string.
        It spans multiple lines.
        You can include line breaks and indentation easily.
    "#;

    println!("{}", multiline_string);
}




 
43. Format Numbers as Currency Strings
fn main() {
    // Example number
    let amount: f64 = 1234567.89;

    // Format as currency string with thousands separators
    let formatted_amount = format_currency(amount);

    // Display the formatted currency string
    println!("Formatted Amount: {}", formatted_amount);
}

// Function to format the number as a currency string
fn format_currency(amount: f64) -> String {
    // Split the number into integer and fractional parts
    let integer_part = amount.trunc() as u64; // Get the integer part
    let fractional_part = (amount.fract() * 100.0).round() as u64; // Get the fractional part

    // Manually format the integer part with thousand separators
    let formatted_integer = format_with_thousand_separators(integer_part);

    // Format the final currency string, adding the fractional part
    format!("${}.{:02}", formatted_integer, fractional_part)
}

// Function to add thousand separators to an integer
fn format_with_thousand_separators(mut num: u64) -> String {
    let mut parts = Vec::new();
    while num >= 1000 {
        parts.push(format!("{:03}", num % 1000));
        num /= 1000;
    }
    parts.push(format!("{}", num));
    parts.reverse();
    parts.join(",")
}

// Formatted Amount: $1,234,567.89
44. Generate Random String
use rand::Rng;
use rand::distributions::Alphanumeric;

fn main() {
    // Generate a random string of length 8
    let random_string = generate_random_string(8);

    // Display the random string
    println!("Random String: {}", random_string);
}

// Function to generate a random string of a given length
fn generate_random_string(length: usize) -> String {
    rand::thread_rng()
        .sample_iter(&Alphanumeric)
        .take(length)
        .map(char::from)
        .collect()
}

// Random String: jQmNYWWC

 
45. Check if a String Starts with Another String
fn main() {
    // Example strings
    let main_string = "Hello, World!";
    let search_string = "Hello";

    // Check if main_string starts with search_string
    let starts_with = main_string.starts_with(search_string);

    // Display the result
    println!("Does the string start with '{}'? {}", search_string, starts_with);
}

// Does the string start with 'Hello'? true


 
46. Trim a String
fn main() {
    // Example string with leading and trailing whitespaces
    let string_with_spaces = "   Hello, World!   ";

    // Trim the string
    let trimmed_string = string_with_spaces.trim();

    // Display the result
    println!("Original String: '{string_with_spaces}'");
    println!("Trimmed String: '{trimmed_string}'");
}

// Original String: '   Hello, World!   '
// Trimmed String: 'Hello, World!'

 
47. Check Whether a String Contains a Substring
fn main() {
    // Example string
    let main_string = "Hello, World!";
    let substring_to_check = "World";

    // Check if main_string contains substring_to_check
    let contains_substring = main_string.contains(substring_to_check);

    // Display the result
    println!("Does the string contain '{}'? {}", substring_to_check, contains_substring);
}

// Does the string contain 'World'? true



 
48. Compare Two Strings
fn main() {
    // Example strings
    let string1 = "Hello";
    let string2 = "hello";

    // Case-sensitive comparison
    let case_sensitive_comparison = string1 == string2;

    // Case-insensitive comparison
    let case_insensitive_comparison = string1.to_lowercase() == string2.to_lowercase();

    // Display the results
    println!("Case-sensitive comparison: {}", case_sensitive_comparison);
    println!("Case-insensitive comparison: {}", case_insensitive_comparison);
}

// Case-sensitive comparison: false
// Case-insensitive comparison: true







 
49. Encode a String to Base64
use base64::{engine::general_purpose, Engine};

fn main() {
    // Original string
    let original_string = "Hello, 你好!";

    // Encode the string to Base64 using the STANDARD engine
    let base64_encoded_string = general_purpose::STANDARD.encode(original_string);

    // Display the result
    println!("Original String: {}", original_string);
    println!("Base64 Encoded String: {}", base64_encoded_string);
}

// Original String: Hello, 你好!
// Base64 Encoded String: SGVsbG8sIOS9oOWlvSE=




 
50. Replace all Instances of a Character in a String
fn main() {
    // Example string
    let original_string = "Hello, World!";

    // Character to replace
    let char_to_replace = 'l';

    // Replacement character
    let replacement_char = 'x';

    // Replace all instances of char_to_replace with replacement_char
    let modified_string: String = original_string
        .replace(char_to_replace, replacement_char.to_string().as_str());

    // Display the result
    println!("Original String: {}", original_string);
    println!("Modified String: {}", modified_string);
}

// Original String: Hello, World!
// Modified String: Hexxo, Worxd!


 
51. Replace All Line Breaks with
fn main() {
    // Example string with line breaks
    let string_with_line_breaks = "Hello,\nWorld!\nThis is a new line.";

    // Replacement string
    let replacement_string = "-";

    // Replace all line breaks with the replacement string
    let string_without_line_breaks = string_with_line_breaks.replace('\n', replacement_string);

    // Display the result
    println!("Original String:");
    println!("{}", string_with_line_breaks);
    println!("\nString without Line Breaks:");
    println!("{}", string_without_line_breaks);
}

// Original String:
// Hello,
// World!
// This is a new line.

// String without Line Breaks:
// Hello,-World!-This is a new line.




 
52. Check Leap Year
fn is_leap_year(year: i32) -> bool {
    (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
}

fn main() {
    // Example year to check
    let year_to_check = 2024;

    // Check if the year is a leap year
    if is_leap_year(year_to_check) {
        println!("{} is a leap year.", year_to_check);
    } else {
        println!("{} is not a leap year.", year_to_check);
    }
}

// 2024 is a leap year.

 
53. Format the Date
use chrono::prelude::*;

fn main() {
    // Get the current date and time in UTC
    let current_date = Utc::now();

    // Format the date
    let formatted_date = current_date.format("%A, %B %d, %Y").to_string();

    // Display the result
    println!("Formatted Date: {}", formatted_date);
}

// Formatted Date: Friday, September 20, 2024


 
54. Display Current Date
use chrono::prelude::*;

fn main() {
    // Get the current date and time
    let current_date = Local::now();

    // Format the current date
    let formatted_date = current_date.format("%m/%d/%Y").to_string();

    // Display the result
    println!("Current Date: {}", formatted_date);
}

// Current Date: 09/20/2024

 
55. Compare The Value of Two Dates
use chrono::prelude::*;

fn main() {
    // Parse the example dates
    let date1 = Utc.ymd(2022, 1, 1);
    let date2 = Utc.ymd(2023, 1, 1);

    // Compare dates
    if date1 < date2 {
        println!("{} is earlier than {}", date1, date2);
    } else if date1 > date2 {
        println!("{} is later than {}", date1, date2);
    } else {
        println!("{} is equal to {}", date1, date2);
    }
}

// 2022-01-01 00:00:00 UTC is earlier than 2023-01-01 00:00:00 UTC


 
56. Create Countdown Timer
use chrono::{Local};
use std::{thread::sleep, time::Duration as StdDuration};

fn main() {
    // Establecer la fecha objetivo a 1 minuto a partir de ahora
    let target_date = Local::now() + chrono::Duration::minutes(1);
    
    while let Some(time_diff) = (target_date - Local::now()).to_std().ok() {
        let (days, hours, mins, secs) = (
            time_diff.as_secs() / 86400,
            (time_diff.as_secs() % 86400) / 3600,
            (time_diff.as_secs() % 3600) / 60,
            time_diff.as_secs() % 60,
        );
        println!("Countdown: {}d {}h {}m {}s", days, hours, mins, secs);
        sleep(StdDuration::from_secs(1));
    }
    println!("Countdown expired!");
}

// Countdown: 0d 0h 0m 56s



 
57. Remove Specific Item from an Array
fn main() {
    // Example vector
    let mut original_list = vec![1, 2, 3, 4, 5];
    let item_to_remove = 3;

    // Find the position of the item to remove
    if let Some(pos) = original_list.iter().position(|&x| x == item_to_remove) {
        // Remove the item from the vector
        original_list.remove(pos);
        println!("Original List: {:?}", original_list);
    } else {
        println!("Item not found in the list.");
    }
}

// Original List: [1, 2, 4, 5]



















58. Check if an Array Contains a Specified Value
fn main() {
    // Example vector
    let my_list = vec![1, 2, 3, 4, 5];
    let value_to_check = 3;

    // Check if the vector contains the specified value
    let contains_value = my_list.contains(&value_to_check);

    // Display the result
    println!("Does the list include {}? {}", value_to_check, contains_value);
}

// Does the list include 3? true




 
59. Insert Item in an Array
fn main() {
    // Example vector
    let mut my_list = vec![1, 2, 3, 4, 5];
    let item_to_insert = 6;

    // Insert the item at the end of the vector
    my_list.push(item_to_insert);

    // Display the result
    println!("List after inserting: {:?}", my_list);
}

// List after inserting: [1, 2, 3, 4, 5, 6]


 
60. Get Random Item from an Array
use rand::seq::SliceRandom; 
use rand::thread_rng;       

fn main() {
    // Example vector
    let my_list = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Create a random number generator
    let mut rng = thread_rng();

    // Get a random item from the vector
    if let Some(&random_item) = my_list.choose(&mut rng) {
        // Display the result
        println!("Random Item: {}", random_item);
    } else {
        println!("The list is empty.");
    }
}

// Random Item: 8






 
61. Perform Intersection Between Two Arrays
use std::collections::HashSet;

fn main() {
    // Example vectors
    let list1: Vec<i32> = vec![1, 2, 3, 4, 5];
    let list2: Vec<i32> = vec![3, 4, 5, 6, 7];

    // Create HashSets from the vectors
    let set1: HashSet<_> = list1.into_iter().collect();
    let set2: HashSet<_> = list2.into_iter().collect();

    // Find the intersection of the two HashSets
    let intersection: HashSet<_> = set1.intersection(&set2).cloned().collect();

    // Display the result
    println!("Intersection: {:?}", intersection);
}

// Intersection: {5, 3, 4}


 
62. Split Array into Smaller Chunks
fn chunk_array<T: Clone>(array: &[T], chunk_size: usize) -> Vec<Vec<T>> {
    array.chunks(chunk_size).map(|chunk| chunk.to_vec()).collect()
}

fn main() {
    // Example array
    let my_array = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Split the array into chunks of size 3
    let chunks = chunk_array(&my_array, 3);

    // Display the result
    println!("Original Array: {:?}", my_array);
    println!("Chunks: {:?}", chunks);
}

// Original Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Chunks: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]


 
63. Get File Extension
use std::path::Path;

fn get_file_extension(file_name: &str) -> Option<String> {
    // Create a Path object from the file name
    let path = Path::new(file_name);

    // Get the extension as an Option<&OsStr>
    path.extension()
        .and_then(|ext| ext.to_str()) // Convert to Option<&str>
        .map(|s| s.to_string()) // Convert to Option<String>
}

fn main() {
    // Example file name
    let file_name = "example.txt";

    // Get the file extension
    match get_file_extension(file_name) {
        Some(extension) => println!("File Extension: {}", extension),
        None => println!("No file extension found."),
    }
}

// File Extension: txt


 
64. Check If a Variable Is undefined or null
fn main() {
    // Example variable as an Option
    let variable: Option<i32> = None;

    // Check if the variable is None
    match variable {
        Some(_) => println!("Variable has a value"),
        None => println!("Variable is None"),
    }
}

// Variable is None



 
65. Generate a Random Number Between Two Numbers
use rand::Rng;  // Import the Rng trait for random number generation

fn get_random_number(min_val: u32, max_val: u32) -> u32 {
    let mut rng = rand::thread_rng();  // Create a random number generator
    rng.gen_range(min_val..=max_val)   // Generate a random number in the range [min_val, max_val]
}

fn main() {
    let random_num = get_random_number(1, 100);  // Generate a random number between 1 and 100
    println!("Random Number: {}", random_num);
}

// Random Number: 48


 
66. Longest Daily Streak
fn daily_streak(logins: &[bool]) -> usize {
    let mut max_streak = 0;
    let mut current_streak = 0;

    for &logged_in in logins {
        if logged_in {
            current_streak += 1; // Increase current streak if logged in
            if current_streak > max_streak {
                max_streak = current_streak; // Update max streak if needed
            }
        } else {
            current_streak = 0; // Reset current streak if not logged in
        }
    }

    max_streak // Return the longest streak found
}

fn main() {
    // Test cases
    println!("{}", daily_streak(&[true, true, false, true])); // Outputs: 2
    println!("{}", daily_streak(&[false, false, false]));    // Outputs: 0
    println!("{}", daily_streak(&[true, true, true, false, true, true])); // Outputs: 3
}

// 2
// 0
// 3

 
67. Validate an Email Address
use regex::Regex;

fn validate_email(email: &str) -> bool {
    // Regular expression for basic email validation
    let email_regex = Regex::new(r"^[^\s@]+@[^\s@]+\.[^\s@]+$").unwrap();

    // Test the email against the regular expression
    email_regex.is_match(email)
}

fn main() {
    // Example usage
    let email_to_validate = "example@email.com";
    if validate_email(email_to_validate) {
        println!("Email is valid");
    } else {
        println!("Email is not valid");
    }
}


 
68. Record Temperatures
fn record_temps(record: &mut Vec<[i32; 2]>, current: &[[i32; 2]; 7]) -> Vec<[i32; 2]> {
    for (i, &daily_temps) in current.iter().enumerate() {
        // Update record low if current daily low is lower
        if daily_temps[0] < record[i][0] {
            record[i][0] = daily_temps[0];
        }
        // Update record high if current daily high is higher
        if daily_temps[1] > record[i][1] {
            record[i][1] = daily_temps[1];
        }
    }
    record.to_vec()
}

fn main() {
    let mut records = vec![
        [34, 82], [24, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83],
    ];
    let current_week_temps: [[i32; 2]; 7] = [
        [44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69],
    ];

    let updated_records = record_temps(&mut records, &current_week_temps);
    println!("{:?}", updated_records);
}

// [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]





 
69. Kaprekar Numbers
fn is_kaprekar(n: u64) -> bool {
    if n == 0 || n == 1 {
        return true; // 0 and 1 are Kaprekar numbers
    }

    // Calculate the square of n
    let square = n * n;
    let square_str = square.to_string();
    let len = square_str.len();

    // Split the squared number into left and right parts
    let (left_str, right_str) = if len == 1 {
        (String::new(), square_str) // Only right part
    } else {
        let split_index = len / 2;
        let left_str = square_str[..len - split_index].to_string();
        let right_str = square_str[len - split_index..].to_string();
        (left_str, right_str)
    };

    // Convert left and right parts to numbers
    let left = left_str.parse::<u64>().unwrap_or(0);
    let right = right_str.parse::<u64>().unwrap_or(0);

    // Check if the sum of left and right equals n
    left + right == n
}

fn main() {
    // Test cases
    println!("is_kaprekar(3) ➞ {}", is_kaprekar(3));  // false
    println!("is_kaprekar(5) ➞ {}", is_kaprekar(5));  // false
    println!("is_kaprekar(297) ➞ {}", is_kaprekar(297)); // true
}



 
70. Pass Parameter to a threading.Timer Function
use std::thread;
use std::time::Duration;

fn my_function(parameter: &str) {
    println!("Parameter received: {}", parameter);
}

fn main() {
    // Define the parameter
    let my_parameter = "Hello, world!".to_string();

    // Define a function to be executed after a delay
    let delayed_execution = move || {
        thread::sleep(Duration::from_secs(1)); // Delay for 1 second
        my_function(&my_parameter);
    };

    // Create a new thread to run the delayed_execution function
    let handle = thread::spawn(delayed_execution);

    // Wait for the thread to finish
    handle.join().unwrap();
}


 
71. Generate a Range of Numbers and Characters
fn generate_number_range(start: u32, end: u32) -> Vec<u32> {
    (start..=end).collect()
}

fn generate_char_range(start: char, end: char) -> Vec<char> {
    (start as u8..=end as u8)
        .map(|c| c as char)
        .collect()
}

fn main() {
    // Generate numbers from 1 to 5
    let number_range = generate_number_range(1, 5);
    println!("Number Range: {:?}", number_range);

    // Generate characters from 'a' to 'e'
    let char_range = generate_char_range('a', 'e');
    println!("Character Range: {:?}", char_range);
}

// Number Range: [1, 2, 3, 4, 5]
// Character Range: ['a', 'b', 'c', 'd', 'e']

 
72. Perform Function Overloading
fn example_function() {
    println!("No arguments");
}

fn example_function_number(n: i32) {
    println!("One number argument: {}", n);
}

fn example_function_string_and_number(s: &str, n: i32) {
    println!("String and number arguments: {}, {}", s, n);
}

fn main() {
    example_function();
    example_function_number(42);
    example_function_string_and_number("Hello", 7);
    // Note: The following line will not compile due to type mismatch:
    // example_function("world", 7);
}

// No arguments
// One number argument: 42
// String and number arguments: Hello, 7


 
73. Reverse Image
fn reverse_image(image: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    image.into_iter()
        .map(|row| row.into_iter().map(|pixel| 1 - pixel).collect())
        .collect()
}

fn main() {
    let image1 = vec![
        vec![1, 0, 0],
        vec![0, 1, 0],
        vec![0, 0, 1],
    ];
    let reversed1 = reverse_image(image1);
    println!("{:?}", reversed1); // ➞ [[0, 1, 1], [1, 0, 1], [1, 1, 0]]

    let image2 = vec![
        vec![1, 1, 1],
        vec![0, 0, 0],
    ];
    let reversed2 = reverse_image(image2);
    println!("{:?}", reversed2); // ➞ [[0, 0, 0], [1, 1, 1]]

    let image3 = vec![
        vec![1, 0, 0],
        vec![1, 0, 0],
    ];
    let reversed3 = reverse_image(image3);
    println!("{:?}", reversed3); // ➞ [[0, 1, 1], [0, 1, 1]]
}

// [[0, 1, 1], [1, 0, 1], [1, 1, 0]]
// [[0, 0, 0], [1, 1, 1]]
// [[0, 1, 1], [0, 1, 1]]





74. No Yelling
fn no_yelling(sentence: &str) -> String {
    let trimmed = sentence.trim_end_matches('!').trim_end_matches('?');
    let last_char = sentence.chars().last();

    match last_char {
        Some('!') => format!("{}!", trimmed),
        Some('?') => format!("{}?", trimmed),
        _ => sentence.to_string(),
    }
}

fn main() {
    println!("{}", no_yelling("What went wrong?????????")); // ➞ "What went wrong?"
    println!("{}", no_yelling("Oh my goodness!!!")); // ➞ "Oh my goodness!"
    println!("{}", no_yelling("I just!!! can!!! not!!! believe!!! it!!!")); // ➞ "I just!!! can!!! not!!! believe!!! it!"
    println!("{}", no_yelling("Oh my goodness!")); // ➞ "Oh my goodness!"
    println!("{}", no_yelling("I just cannot believe it.")); // ➞ "I just cannot believe it."
}


 
75. Check if a Number is Float or Integer
fn check_number_type<T: std::fmt::Debug + std::fmt::Display>(number: T) {
    // Check if the number is an integer
    if let Ok(_) = number.to_string().parse::<i32>() {
        println!("{} is an integer.", number);
    } else if let Ok(_) = number.to_string().parse::<f64>() {
        println!("{} is a float.", number);
    } else {
        println!("{} is not a valid number.", number);
    }
}

fn main() {
    check_number_type(5);         // Outputs: 5 is an integer.
    check_number_type(3.14);      // Outputs: 3.14 is a float.
    check_number_type(7.0);       // Outputs: 7.0 is a float.
    check_number_type(-2.5);      // Outputs: -2.5 is a float.
    check_number_type("abc");     // Outputs: abc is not a valid number.
}





 
76. Pass a Function as Parameter
// Define a function type alias for operations
type Operation = fn(i32, i32) -> i32;

// Function that takes another function as a parameter
fn operate_on_numbers(a: i32, b: i32, operation: Operation) -> i32 {
    operation(a, b) // Call the passed function with the provided arguments
}

// Example functions to be passed as parameters
fn add(x: i32, y: i32) -> i32 {
    x + y
}

fn multiply(x: i32, y: i32) -> i32 {
    x * y
}

fn main() {
    // Example usage
    let result1 = operate_on_numbers(3, 5, add);
    println!("Result of addition: {}", result1);  // Outputs: 8

    let result2 = operate_on_numbers(3, 5, multiply);
    println!("Result of multiplication: {}", result2);  // Outputs: 15
}




 
77. Slidey Numbers
fn is_slidey(n: i32) -> bool {
    let digits: Vec<i32> = n.to_string().chars()
        .filter_map(|d| d.to_digit(10).map(|d| d as i32))
        .collect();
    
    // All single-digit numbers are considered slidey
    if digits.len() <= 1 {
        return true;
    }

    // Check the absolute difference between consecutive digits
    for i in 0..digits.len() - 1 {
        if (digits[i] - digits[i + 1]).abs() != 1 {
            return false; // Not slidey if the difference is not 1
        }
    }

    true // If all checks pass, it's slidey
}

fn main() {
    // Test cases
    println!("{}", is_slidey(123454321)); // Outputs: true
    println!("{}", is_slidey(54345));     // Outputs: true
    println!("{}", is_slidey(987654321)); // Outputs: true
    println!("{}", is_slidey(1123));      // Outputs: false
    println!("{}", is_slidey(1357));      // Outputs: false
}





 
78. Remove All Whitespaces from a Text
use regex::Regex;

fn remove_whitespaces(input_text: &str) -> String {
    // Crear una expresión regular para coincidir con todos los espacios en blanco
    let re = Regex::new(r"\s").unwrap();
    // Reemplazar todos los espacios en blanco con una cadena vacía
    re.replace_all(input_text, "").to_string()
}

fn main() {
    let text_with_whitespaces = "This is a text with spaces";
    let text_without_whitespaces = remove_whitespaces(text_with_whitespaces);

    println!("Original Text: {}", text_with_whitespaces);
    println!("Text without Whitespaces: {}", text_without_whitespaces);
}



 
79. Write to Console
fn main() {
    // Escribir un mensaje en la consola
    println!("Hello, world!");

    // También puedes imprimir variables o expresiones
    let number = 42;
    println!("The answer is: {}", number);

    // Varios valores pueden ser impresos en una sola declaración
    let first_name = "John";
    let last_name = "Doe";
    println!("Full Name: {} {}", first_name, last_name);
}


 
80. Convert Date to Number
use std::time::{SystemTime, UNIX_EPOCH};

fn main() {
    // Get the current date and time
    let start = SystemTime::now();

    // Convert to milliseconds from the Unix Epoch
    let since_the_epoch = start.duration_since(UNIX_EPOCH)
        .expect("Time went backwards");
    let milliseconds_since_epoch = since_the_epoch.as_millis();

    // Print the current date in seconds and its numerical representation in milliseconds
    println!("Current Time in milliseconds since Unix Epoch: {}", milliseconds_since_epoch);
}

// Current Time in milliseconds since Unix Epoch: 1726202472472

 
81. Find the Average of Two Numbers
fn find_average(num1: f64, num2: f64) -> f64 {
    // Calculate the sum of the two numbers
    let total = num1 + num2;

    // Calculate the average by dividing the sum by 2
    let average = total / 2.0;

    average
}

fn main() {
    let number1 = 10.0;
    let number2 = 20.0;

    let result = find_average(number1, number2);

    println!("The average of {} and {} is: {}", number1, number2, result);
}

// The average of 10 and 20 is: 15



 
82. Calculate the Area of a Circle
use std::f64::consts::PI;

fn calculate_circle_area(radius: f64) -> Result<f64, &'static str> {
    // Check if the radius is a valid number
    if radius <= 0.0 {
        return Err("Invalid radius. Please provide a positive number.");
    }

    // Calculate the area
    let area = PI * radius.powi(2);

    Ok(area)
}

fn main() {
    let radius = 5.0;

    match calculate_circle_area(radius) {
        Ok(area) => println!("The area of a circle with radius {} is: {}", radius, area),
        Err(e) => println!("{}", e),
    }
}

// The area of a circle with radius 5 is: 78.53981633974483






 
83. Numbered Alphabet
fn alph_num(s: &str) -> String {
    s.chars()
        .map(|c| {
            // Convert each character to uppercase and calculate its position in the alphabet
            let index = c.to_ascii_uppercase() as u8 - b'A';
            index.to_string()
        })
        .collect::<Vec<String>>()
        .join(" ")
}

fn main() {
    let examples = ["XYZ", "ABCDEF", "JAVASCRIPT"];
    
    for example in examples.iter() {
        let result = alph_num(example);
        println!("{} ➞ {}", example, result);
    }
}
// XYZ ➞ 23 24 25
// ABCDEF ➞ 0 1 2 3 4 5
// JAVASCRIPT ➞ 9 0 21 0 18 2 17 8 15 19


 
84. Check if a String is Empty
fn is_empty_string(string: &str) -> bool {
    string.is_empty()
}

fn main() {
    let empty_string = "";
    let non_empty_string = "Hello, world!";

    println!("Is empty_string empty? {}", is_empty_string(empty_string)); 
    println!("Is non_empty_string empty? {}", is_empty_string(non_empty_string)); 
}

// Is empty_string empty? true
// Is non_empty_string empty? false

 
85. Capitalize the First Letter of a String
fn capitalize_first_letter(string: &str) -> String {
    if string.is_empty() {
        return "Empty string".to_string();
    }

    let mut chars = string.chars();
    let first_char = chars.next().unwrap().to_uppercase().to_string();
    let rest: String = chars.collect();

    first_char + &rest
}

fn main() {
    let original_string = "hello, world!";
    let capitalized_string = capitalize_first_letter(original_string);

    println!("Original String: {}", original_string);
    println!("Capitalized String: {}", capitalized_string);
}

// Original String: hello, world!
// Capitalized String: Hello, world!






 
86. Find the Maximum Element in an Array
fn find_max_element(arr: &[i32]) -> Option<i32> {
    // Check if the array is not empty
    if arr.is_empty() {
        return None;
    }

    // Use the iter().max() function to find the maximum element
    arr.iter().cloned().max()
}

fn main() {
    let numbers = vec![5, 2, 9, 1, 7];
    match find_max_element(&numbers) {
        Some(max_number) => {
            println!("Array: {:?}", numbers);
            println!("Maximum Element: {}", max_number);
        }
        None => println!("Empty array"),
    }
}

// Array: [5, 2, 9, 1, 7]
// Maximum Element: 9


 
87. Reverse an Array
fn reverse_array(arr: &mut [i32]) {
    arr.reverse();
}

fn main() {
    let  original_array = vec![1, 2, 3, 4, 5];
    let mut reversed_array = original_array.clone();

    reverse_array(&mut reversed_array);

    println!("Original Array: {:?}", original_array);
    println!("Reversed Array: {:?}", reversed_array);
}

// Original Array: [1, 2, 3, 4, 5]
// Reversed Array: [5, 4, 3, 2, 1]



 
88. Calculate the Power of a Number
fn calculate_power_with_powf(base: f64, exponent: f64) -> f64 {
    base.powf(exponent)
}

fn calculate_power_with_integer_exponent(base: i32, exponent: u32) -> i32 {
    base.pow(exponent)
}

fn main() {
    let base_number_f64 = 2.0;
    let exponent_number_f64 = 3.0;

    let result_with_powf = calculate_power_with_powf(base_number_f64, exponent_number_f64);

    println!(
        "{} to the power of {} using f64::powf(): {}",
        base_number_f64, exponent_number_f64, result_with_powf
    );

    let base_number_i32 = 2;
    let exponent_number_u32 = 3;

    let result_with_integer_pow = calculate_power_with_integer_exponent(base_number_i32, exponent_number_u32);

    println!(
        "{} to the power of {} using the integer pow() method: {}",
        base_number_i32, exponent_number_u32, result_with_integer_pow
    );
}

// 2 to the power of 3 using f64::powf(): 8
// 2 to the power of 3 using the integer pow() method: 8


 
89. Find the Minimum Element in an Array
fn find_min_element(arr: &[i32]) -> Option<i32> {
    // Check if the array is not empty
    if arr.is_empty() {
        return None;
    }

    // Find the minimum element using the `iter().min()` function
    arr.iter().cloned().min()
}

fn main() {
    let numbers = [5, 2, 9, 1, 7];
    match find_min_element(&numbers) {
        Some(min_number) => {
            println!("List: {:?}", numbers);
            println!("Minimum Element: {}", min_number);
        },
        None => println!("Empty list"),
    }
}

// List: [5, 2, 9, 1, 7]
// Minimum Element: 1


 
90. Convert Minutes to Hours and Minutes
fn convert_minutes_to_hours_and_minutes(total_minutes: u32) -> String {
    // Calculate hours and remaining minutes
    let hours = total_minutes / 60;
    let minutes = total_minutes % 60;

    // Construct the result string
    format!("{} hours and {} minutes", hours, minutes)
}

fn main() {
    let total_minutes = 135;
    let converted_time = convert_minutes_to_hours_and_minutes(total_minutes);

    println!("{} minutes is equivalent to: {}", total_minutes, converted_time);
}

// 135 minutes is equivalent to: 2 hours and 15 minutes





 
91. Find the Sum of Digits in a Number
fn sum_of_digits(number: u32) -> u32 {
    number.to_string()
        .chars()
        .filter_map(|c| c.to_digit(10))
        .sum()
}

fn main() {
    let input_number = 12345;
    let result = sum_of_digits(input_number);

    println!("The sum of digits in {} is: {}", input_number, result);
}

// The sum of digits in 12345 is: 15



 
92. Like vs. Dislkes
fn like_or_dislike(buttons: &[&str]) -> &'static str {
    let mut state = "Nothing";

    for &button in buttons {
        state = match (state, button) {
            ("Nothing", "Like") => "Like",
            ("Nothing", "Dislike") => "Dislike",
            ("Like", "Like") => "Nothing",
            ("Like", "Dislike") => "Dislike",
            ("Dislike", "Like") => "Like",
            ("Dislike", "Dislike") => "Nothing",
            _ => state,
        };
    }

    state
}

fn main() {
    let test_cases = [
        vec!["Dislike"],
        vec!["Like", "Like"],
        vec!["Dislike", "Like"],
        vec!["Like", "Dislike", "Dislike"],
    ];

    for buttons in test_cases {
        println!("Final state: {}", like_or_dislike(&buttons));
    }
}

// Final state: Dislike
// Final state: Nothing
// Final state: Like
// Final state: Nothing


 
93. Is a Valid Number?
fn is_valid_phone_number(phone_number: &str) -> bool {
    // Check length
    if phone_number.len() != 14 {
        return false;
    }

    // Check format
    phone_number.chars().enumerate().all(|(i, c)| {
        match i {
            0 => c == '(',
            1..=3 => c.is_digit(10),
            4 => c == ')',
            5 => c == ' ',
            6..=8 => c.is_digit(10),
            9 => c == '-',
            10..=13 => c.is_digit(10),
            _ => false,
        }
    })
}

fn main() {
    let test_numbers = [
        "(123) 456-7890",
        "1111)555 2345",
        "098) 123 4567",
    ];

    for number in test_numbers.iter() {
        println!("Is '{}' a valid phone number? {}", number, is_valid_phone_number(number));
    }
}

// Is '(123) 456-7890' a valid phone number? true
// Is '1111)555 2345' a valid phone number? false
// Is '098) 123 4567' a valid phone number? false 
94. Calculate Simple Interest
fn calculate_simple_interest(principal: f64, rate: f64, time: f64) -> Result<f64, &'static str> {
    // Check if the inputs are valid positive numbers
    if principal <= 0.0 || rate <= 0.0 || time <= 0.0 {
        return Err("Invalid inputs. Please provide valid positive numbers.");
    }

    // Calculate simple interest
    let simple_interest = (principal * rate * time) / 100.0;

    Ok(simple_interest)
}

fn main() {
    let principal_amount = 1000.0;
    let interest_rate = 5.0;  // 5%
    let investment_time = 2.0;  // 2 years

    match calculate_simple_interest(principal_amount, interest_rate, investment_time) {
        Ok(interest_amount) => {
            println!("Principal Amount: ${:.2}", principal_amount);
            println!("Interest Rate: {:.2}%", interest_rate);
            println!("Investment Time: {:.2} years", investment_time);
            println!("Simple Interest: ${:.2}", interest_amount);
        }
        Err(e) => println!("{}", e),
    }
}

// Principal Amount: $1000.00
// Interest Rate: 5.00%
// Investment Time: 2.00 years
// Simple Interest: $100.00



 
95. Mini Sudoku
fn is_mini_sudoku(square: [[u32; 3]; 3]) -> bool {
    // Use a HashSet to keep track of numbers seen
    let mut seen = std::collections::HashSet::new();
    
    // Flatten the 2D array into a single iterator
    for &num in square.iter().flat_map(|row| row.iter()) {
        // Check if the number is within the valid range
        if num < 1 || num > 9 {
            return false;
        }
        // Check for duplicates
        if !seen.insert(num) {
            return false;
        }
    }
    
    // If all numbers are seen exactly once and are in range, return true
    true
}

fn main() {
    let valid_sudoku = [[1, 3, 2], [9, 7, 8], [4, 5, 6]];
    let invalid_sudoku_1 = [[1, 1, 3], [6, 5, 4], [8, 7, 9]];
    let invalid_sudoku_2 = [[0, 1, 2], [6, 4, 5], [9, 8, 7]];
    let valid_sudoku_2 = [[8, 9, 2], [5, 6, 1], [3, 7, 4]];

    println!("is_mini_sudoku(valid_sudoku) = {}", is_mini_sudoku(valid_sudoku)); // true
    println!("is_mini_sudoku(invalid_sudoku_1) = {}", is_mini_sudoku(invalid_sudoku_1)); // false
    println!("is_mini_sudoku(invalid_sudoku_2) = {}", is_mini_sudoku(invalid_sudoku_2)); // false
    println!("is_mini_sudoku(valid_sudoku_2) = {}", is_mini_sudoku(valid_sudoku_2)); // true
}

 
96. Check if a Number is a Perfect Number
fn is_perfect_number(number: u32) -> bool {
    if number < 2 {
        return false; // 1 and below cannot be perfect numbers
    }

    // Calculate the sum of proper divisors
    let mut sum_of_divisors = 1; // Start with 1, as 1 is a divisor of any number
    let sqrt = (number as f64).sqrt() as u32;

    for i in 2..=sqrt {
        if number % i == 0 {
            sum_of_divisors += i;
            if i != number / i {
                sum_of_divisors += number / i;
            }
        }
    }

    // Check if the sum of the divisors equals the original number
    sum_of_divisors == number
}

fn main() {
    let test_number = 28;
    let result = is_perfect_number(test_number);

    println!("Is {} a perfect number? {}", test_number, result);
}

// Is 28 a perfect number? true


 
97. Calculate the Volume of a Cylinder
use std::f64::consts::PI;

fn calculate_cylinder_volume(radius: f64, height: f64) -> Result<f64, &'static str> {
    // Check if the inputs are valid positive numbers
    if radius <= 0.0 || height <= 0.0 {
        return Err("Invalid inputs. Please provide valid positive numbers.");
    }

    // Calculate the volume of the cylinder
    let volume = PI * radius.powi(2) * height;

    Ok(volume)
}

fn main() {
    let cylinder_radius = 5.0;
    let cylinder_height = 10.0;

    match calculate_cylinder_volume(cylinder_radius, cylinder_height) {
        Ok(volume) => println!("Cylinder Volume: {:.2} cubic units", volume),
        Err(e) => println!("{}", e),
    }
}

// Cylinder Volume: 785.40 cubic units


 
98. Get Student Top Notes
struct Student {
    id: u32,
    name: String,
    notes: Vec<u32>,
}

fn get_student_top_notes(students: &[Student]) -> Vec<u32> {
    students
        .iter()
        .map(|s| s.notes.iter().copied().max().unwrap_or(0))
        .collect()
}

fn main() {
    let students = vec![
        Student { id: 1, name: "Jacek".to_string(), notes: vec![5, 3, 4, 2, 5, 5] },
        Student { id: 2, name: "Ewa".to_string(), notes: vec![2, 3, 3, 3, 2, 5] },
        Student { id: 3, name: "Zygmunt".to_string(), notes: vec![2, 2, 4, 4, 3, 3] },
    ];

    let top_notes = get_student_top_notes(&students);
    println!("Top notes: {:?}", top_notes);
}

// Top notes: [5, 5, 4]


 
99. Find the Intersection of Two Arrays
use std::collections::HashSet;

fn find_intersection(vec1: &[i32], vec2: &[i32]) -> Vec<i32> {
    // Convert the first vector into a set for efficient membership testing
    let set1: HashSet<_> = vec1.iter().cloned().collect();

    // Use an iterator to filter elements from the second vector that are present in the set
    vec2.iter()
        .filter(|&&element| set1.contains(&element))
        .cloned()
        .collect()
}

fn main() {
    let vec1 = vec![1, 2, 3, 4, 5];
    let vec2 = vec![3, 4, 5, 6, 7];

    let intersection = find_intersection(&vec1, &vec2);

    println!("Intersection of Vectors: {:?}", intersection);
}

// Intersection of Vectors: [3, 4, 5]







 
100. Convert Feet to Meters
fn feet_to_meters(feet: f64) -> f64 {
    // Converts feet to meters
    feet * 0.3048
}

fn main() {
    let feet_value = 10.0;
    let meters_value = feet_to_meters(feet_value);

    println!("{:.2} feet is equal to {:.2} meters", feet_value, meters_value);
}

// 10.00 feet is equal to 3.05 meters



 
101. Convert Days to Years, Months, and Days
fn convert_days_to_years_months_days(days: u32) -> (u32, u32, u32) {
    // Calculate years
    let years = days / 365;

    // Calculate remaining days after years
    let remaining_days_after_years = days % 365;

    // Calculate months
    let months = remaining_days_after_years / 30;

    // Calculate remaining days after months
    let remaining_days_after_months = remaining_days_after_years % 30;

    (years, months, remaining_days_after_months)
}

fn main() {
    let total_days = 1000;
    let (years, months, days) = convert_days_to_years_months_days(total_days);

    println!("{} days is approximately {} years, {} months, and {} days.", total_days, years, months, days);
}

// 1000 days is approximately 2 years, 9 months, and 0 days.




 
102. Find the Median of an Array
fn find_median(mut arr: Vec<i32>) -> f64 {
    // Check if the list is valid
    if arr.is_empty() {
        panic!("Invalid input. Please provide a non-empty list.");
    }

    // Sort the list
    arr.sort();

    let len = arr.len();
    let middle_index = len / 2;

    // Calculate the median
    if len % 2 == 0 {
        // If the list has an even number of elements, return the average of the two middle elements
        let median = (arr[middle_index - 1] as f64 + arr[middle_index] as f64) / 2.0;
        median
    } else {
        // If the list has an odd number of elements, return the middle element
        arr[middle_index] as f64
    }
}

fn main() {
    let numbers = vec![5, 2, 8, 1, 7, 3];
    let median = find_median(numbers);

    println!("Median: {}", median);
}

// Median: 4





103. Calculate the Distance Between Two Points
use std::f64;

fn calculate_distance(x1: f64, y1: f64, x2: f64, y2: f64) -> f64 {
    // Calculate the distance using the distance formula
    let distance = ((x2 - x1).powi(2) + (y2 - y1).powi(2)).sqrt();
    distance
}

fn main() {
    let x1 = 1.0;
    let y1 = 2.0;
    let x2 = 4.0;
    let y2 = 6.0;

    let result = calculate_distance(x1, y1, x2, y2);

    println!(
        "The distance between ({}, {}) and ({}, {}) is {:.2}",
        x1, y1, x2, y2, result
    );
}

// The distance between (1, 2) and (4, 6) is 5.00




 
104. Check if a Number is a Perfect Square
fn is_perfect_square(number: f64) -> bool {
    // Verificar si el número es un valor no negativo
    if number < 0.0 {
        return false;
    }

    // Calcular la raíz cuadrada del número
    let square_root = number.sqrt();

    // Verificar si el cuadrado de la parte entera de la raíz cuadrada es igual al número original
    square_root.fract() == 0.0
}

fn main() {
    let test_number = 25.0;

    let result = is_perfect_square(test_number);

    println!(
        "Is {} a perfect square? {}",
        test_number,
        result
    );
}

// Is 25 a perfect square? true



 
105. Find the Area of a Rectangle
fn calculate_rectangle_area(length: f64, width: f64) -> f64 {
    // Verificar si los inputs son números válidos y positivos
    if length <= 0.0 || width <= 0.0 {
        println!("Invalid inputs. Please provide valid positive numbers for length and width.");
        return 0.0;
    }

    // Calcular el área del rectángulo
    length * width
}

fn main() {
    let rectangle_length = 5.0;
    let rectangle_width = 8.0;

    let result = calculate_rectangle_area(rectangle_length, rectangle_width);

    println!(
        "The area of the rectangle with length {} and width {} is {:.2}",
        rectangle_length,
        rectangle_width,
        result
    );
}

// The area of the rectangle with length 5 and width 8 is 40.00


 
106. Convert Binary to Decimal
fn binary_to_decimal(binary_string: &str) -> Result<u32, &'static str> {
    // Check if the input string contains only '0' and '1'
    if !binary_string.chars().all(|c| c == '0' || c == '1') {
        return Err("Invalid input. Please provide a valid binary string.");
    }

    // Convert binary string to decimal
    match u32::from_str_radix(binary_string, 2) {
        Ok(decimal_value) => Ok(decimal_value),
        Err(_) => Err("Error converting binary to decimal."),
    }
}

fn main() {
    let binary_number = "1101";
    match binary_to_decimal(binary_number) {
        Ok(decimal_result) => println!(
            "The decimal equivalent of binary {} is {}",
            binary_number,
            decimal_result
        ),
        Err(e) => println!("{}", e),
    }
}

// The decimal equivalent of binary 1101 is 13



 
107. Count the Number of Words in a Sentence
fn count_words(sentence: &str) -> Result<usize, &'static str> {
    // Check if the input is a valid non-empty string
    if !sentence.trim().is_empty() {
        // Count the words in the sentence
        let word_count = sentence.split_whitespace().count();
        Ok(word_count)
    } else {
        Err("Invalid input. Please provide a valid sentence.")
    }
}

fn main() {
    let sentence = "This is a sample sentence.";
    match count_words(sentence) {
        Ok(word_count) => println!(
            "The sentence \"{}\" has {} words.",
            sentence,
            word_count
        ),
        Err(e) => println!("{}", e),
    }
}

// The sentence "This is a sample sentence." has 5 words.



 
108. Find the Union of Two Arrays
use std::collections::HashSet;

fn find_union<T: Eq + std::hash::Hash + Clone>(arr1: &[T], arr2: &[T]) -> HashSet<T> {
    // Create a HashSet to store the union of both arrays
    let mut union_set = HashSet::new();

    // Insert elements of both arrays into the HashSet
    union_set.extend(arr1.iter().cloned());
    union_set.extend(arr2.iter().cloned());

    union_set
}

fn main() {
    let array1 = [1, 2, 3, 4, 5];
    let array2 = [3, 4, 5, 6, 7];

    // Get the union of both arrays
    let union_result = find_union(&array1, &array2);

    // Display the result
    println!("Union of Arrays: {:?}", union_result);
}

// Union of Arrays: {3, 2, 7, 4, 1, 5, 6}



 
109. Scoring System
use std::collections::HashMap;

fn calculate_scores(score_string: &str) -> [usize; 3] {
    // Initialize the scores for Andy (A), Ben (B), and Charlotte (C)
    let mut scores = HashMap::new();
    scores.insert('A', 0);
    scores.insert('B', 0);
    scores.insert('C', 0);
    
    // Count occurrences of each letter in the string
    for char in score_string.chars() {
        if let Some(count) = scores.get_mut(&char) {
            *count += 1;
        }
    }

    // Return the scores in the order: Andy (A), Ben (B), Charlotte (C)
    [
        *scores.get(&'A').unwrap_or(&0),
        *scores.get(&'B').unwrap_or(&0),
        *scores.get(&'C').unwrap_or(&0),
    ]
}

fn main() {
    // Example usage
    println!("{:?}", calculate_scores("A"));        
    println!("{:?}", calculate_scores("ABC"));      
    println!("{:?}", calculate_scores("ABCBACC"));  
}

// [1, 0, 0]
// [1, 1, 1]
// [2, 2, 3]

 
110. Check if a Number is a Strong Number
fn calculate_factorial(n: u32) -> u32 {
    let mut result = 1;
    for i in 2..=n {
        result *= i;
    }
    result
}

fn is_strong_number(num: u32) -> bool {
    // Convert the number to a vector of its digits
    let digits: Vec<u32> = num.to_string()
        .chars()
        .filter_map(|d| d.to_digit(10))
        .collect();
    
    // Calculate the sum of the factorial of each digit
    let digit_factorial_sum: u32 = digits.iter()
        .map(|&digit| calculate_factorial(digit))
        .sum();
    
    // Check if the sum equals the original number
    digit_factorial_sum == num
}

fn main() {
    let test_number = 145;
    let result = is_strong_number(test_number);

    println!("{} is a strong number: {}", test_number, result);
}

// 145 is a strong number: true


 
111. Check if a Number is a Narcissistic Number
fn is_narcissistic_number(num: u32) -> bool {
    // Convert the number to a string
    let num_str = num.to_string();
    let num_digits = num_str.len() as u32;

    // Calculate the sum of each digit raised to the power of the number of digits
    let total: u32 = num_str.chars()
        .map(|d| d.to_digit(10).unwrap().pow(num_digits))
        .sum();

    // Check if the total equals the original number
    total == num
}

fn main() {
    let test_number = 1634;
    let result = is_narcissistic_number(test_number);

    println!("{} is a Narcissistic Number: {}", test_number, result);
}

// 1634 is a Narcissistic Number: true


 
112. Count the Number of Consonants in a String
fn count_consonants(input_str: &str) -> usize {
    // Define a set of consonant characters
    let consonants = "bcdfghjklmnpqrstvwxyz";

    // Convert the input string to lowercase and filter out non-consonant characters
    input_str
        .to_lowercase()
        .chars()
        .filter(|c| consonants.contains(*c))
        .count()
}

fn main() {
    let test_string = "Hello World";
    let result = count_consonants(test_string);
    
    println!("The number of consonants in '{}' is: {}", test_string, result);
}

// The number of consonants in 'Hello World' is: 7



 
113. Check if a Number is a Triangular Number
fn is_triangular_number(num: u32) -> bool {
    // Check if the input is a non-negative integer
    if num == 0 {
        return false; // Zero is not considered a triangular number in this context
    }

    let mut total = 0;
    let mut n = 1;

    // Iterate through natural numbers until the sum exceeds or equals the input number
    while total < num {
        total += n;
        n += 1;
    }

    // Check if the input number is equal to a triangular number
    total == num
}

fn main() {
    let test_number = 10;
    let result = is_triangular_number(test_number);

    println!("{} is a triangular number: {}", test_number, result);
}

// 10 is a triangular number: true



 
114. Find the Area of a Trapezoid
fn trapezoid_area(base1: f64, base2: f64, height: f64) -> Result<f64, &'static str> {
    // Check if the inputs are valid numbers
    if base1 <= 0.0 || base2 <= 0.0 || height <= 0.0 {
        return Err("Invalid input. Please provide valid positive numbers.");
    }

    // Calculate the area of the trapezoid
    let area = 0.5 * height * (base1 + base2);
    
    Ok(area)
}

fn main() {
    let base1_length = 5.0;
    let base2_length = 9.0;
    let trapezoid_height = 4.0;

    match trapezoid_area(base1_length, base2_length, trapezoid_height) {
        Ok(result) => println!("The area of the trapezoid is: {:.2}", result),
        Err(e) => println!("{}", e),
    }
}

// The area of the trapezoid is: 28.00


 
115. Abbreviations Unique?
use std::collections::HashMap;

fn unique_abbrev(abbreviations: &[&str], words: &[&str]) -> bool {
    // Create a map where each abbreviation maps to the words it can represent
    let mut abbrev_map = HashMap::new();
    
    for word in words {
        let abbrev = &word[0..1]; // Use first character as abbreviation
        abbrev_map.entry(abbrev).or_insert_with(Vec::new).push(word);
    }

    // Check that each abbreviation is unique
    abbreviations.iter().all(|&abbrev| abbrev_map.get(abbrev).map_or(false, |words| words.len() == 1))
}

fn main() {
    let abbreviations1 = vec!["ho", "h", "ha"];
    let words1 = vec!["house", "hope", "happy"];
    println!("unique_abbrev([\"ho\", \"h\", \"ha\"], [\"house\", \"hope\", \"happy\"]) ➞ {}", unique_abbrev(&abbreviations1, &words1));

    let abbreviations2 = vec!["s", "t", "v"];
    let words2 = vec!["stamina", "television", "vindaloo"];
    println!("unique_abbrev([\"s\", \"t\", \"v\"], [\"stamina\", \"television\", \"vindaloo\"]) ➞ {}", unique_abbrev(&abbreviations2, &words2));

    let abbreviations3 = vec!["bi", "ba", "bat"];
    let words3 = vec!["big", "bard", "battery"];
    println!("unique_abbrev([\"bi\", \"ba\", \"bat\"], [\"big\", \"bard\", \"battery\"]) ➞ {}", unique_abbrev(&abbreviations3, &words3));

    let abbreviations4 = vec!["mo", "ma", "me"];
    let words4 = vec!["moment", "many", "mean"];
    println!("unique_abbrev([\"mo\", \"ma\", \"me\"], [\"moment\", \"many\", \"mean\"]) ➞ {}", unique_abbrev(&abbreviations4, &words4));
}
116. Check if a Number is a Fibonacci Number
fn is_fibonacci_number(num: u64) -> bool {
    // Helper function to check if a number is a perfect square
    fn is_perfect_square(n: u64) -> bool {
        let sqrt = (n as f64).sqrt() as u64;
        sqrt * sqrt == n
    }

    // A number is a Fibonacci number if and only if one of (5 * num^2 + 4) or (5 * num^2 - 4) is a perfect square
    let num_squared = num * num;
    is_perfect_square(5 * num_squared + 4) || is_perfect_square(5 * num_squared - 4)
}

fn main() {
    let test_number = 8;
    let result = is_fibonacci_number(test_number);

    println!("{} is a Fibonacci number: {}", test_number, result);
}

// 8 is a Fibonacci number: true



 
117. Find the Perimeter of a Rectangle
fn rectangle_perimeter(length: f64, width: f64) -> Result<f64, &'static str> {
    // Check if the inputs are valid numbers
    if length <= 0.0 || width <= 0.0 {
        return Err("Invalid input. Please provide valid positive numbers.");
    }

    // Calculate the perimeter of the rectangle
    let perimeter = 2.0 * (length + width);

    Ok(perimeter)
}

fn main() {
    let length = 5.0;
    let width = 8.0;

    match rectangle_perimeter(length, width) {
        Ok(perimeter) => println!("The perimeter of the rectangle is: {}", perimeter),
        Err(e) => println!("{}", e),
    }
}

// The perimeter of the rectangle is: 26




 
118. Club Entry
fn club_entry(word: &str) -> Option<u32> {
    // Find the doubled letter
    let mut doubled_letter = None;
    let mut chars = word.chars().peekable();

    while let Some(c) = chars.next() {
        if let Some(&next_c) = chars.peek() {
            if c == next_c {
                doubled_letter = Some(c);
                break;
            }
        }
    }

    // Ensure that a doubled letter was found
    let letter = match doubled_letter {
        Some(c) => c,
        None => return None, // No doubled letter found
    };

    // Calculate the position of the letter in the alphabet
    let position = (letter as u32) - ('a' as u32) + 1;
    // Multiply the position by 4
    let result = position * 4;

    Some(result)
}

fn main() {
    let words = ["hill", "apple", "bee"];
    for &word in &words {
        match club_entry(word) {
            Some(number) => println!("club_entry(\"{}\") ➞ {}", word, number),
            None => println!("club_entry(\"{}\") ➞ No doubled letter found", word),
        }
    }
}
119. Check if a String is Anagram of Another String
use std::collections::HashMap;

fn are_anagrams(str1: &str, str2: &str) -> bool {
    // Function to clean and count characters
    fn clean_and_count(s: &str) -> HashMap<char, usize> {
        let mut count = HashMap::new();
        for c in s.chars() {
            if c.is_alphabetic() {
                let c = c.to_lowercase().next().unwrap();
                *count.entry(c).or_insert(0) += 1;
            }
        }
        count
    }

    // Get character counts for both strings
    let count1 = clean_and_count(str1);
    let count2 = clean_and_count(str2);

    // Compare the two frequency counts
    count1 == count2
}

fn main() {
    let string1 = "listen";
    let string2 = "silent";

    let result = are_anagrams(string1, string2);
    println!("{} and {} are anagrams: {}", string1, string2, result);
}

// listen and silent are anagrams: true



 
120. Generate Pascal's Triangle
fn generate_pascals_triangle(num_rows: usize) -> Vec<Vec<u32>> {
    if num_rows == 0 {
        return vec![];
    }

    let mut triangle = vec![vec![1]; num_rows];

    for i in 1..num_rows {
        triangle[i] = vec![1; i + 1];
        for j in 1..i {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }

    triangle
}

fn main() {
    let number_of_rows = 5;
    let triangle = generate_pascals_triangle(number_of_rows);

    println!("Pascal's Triangle with {} rows:", number_of_rows);
    for row in &triangle {
        println!("{:?}", row);
    }
}

// Pascal's Triangle with 5 rows:
// [1]
// [1, 1]
// [1, 2, 1]
// [1, 3, 3, 1]
// [1, 4, 6, 4, 1]

 
121. Convert Decimal to Roman Numerals
fn decimal_to_roman(num: u32) -> Result<String, &'static str> {
    if num == 0 || num > 3999 {
        return Err("Invalid input. Please provide a valid positive integer within the range 1 to 3999.");
    }

    let roman_symbols = [
        (1000, "M"), (900, "CM"), (500, "D"), (400, "CD"),
        (100, "C"), (90, "XC"), (50, "L"), (40, "XL"),
        (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I")
    ];

    let mut num = num;
    let mut result = String::new();

    for &(value, symbol) in roman_symbols.iter() {
        while num >= value {
            result.push_str(symbol);
            num -= value;
        }
    }

    Ok(result)
}

fn main() {
    let decimal_number = 1984;

    match decimal_to_roman(decimal_number) {
        Ok(roman_numeral) => println!("The Roman numeral representation of {} is: {}", decimal_number, roman_numeral),
        Err(e) => println!("{}", e),
    }
}

// The Roman numeral representation of 1984 is: MCMLXXXIV


122. Find the Area of a Parallelogram
fn parallelogram_area(base: f64, height: f64) -> Result<f64, &'static str> {
    if base > 0.0 && height > 0.0 {
        Ok(base * height)
    } else {
        Err("Invalid input. Please provide valid positive numbers.")
    }
}

fn main() {
    let base = 6.0;
    let height = 8.0;

    match parallelogram_area(base, height) {
        Ok(area) => println!("The area of the parallelogram is: {}", area),
        Err(e) => println!("{}", e),
    }
}

// The area of the parallelogram is: 48


 
123. Superheroes
fn superheroes<'a>(names: &'a [&'a str]) -> Vec<&'a str> {
    let mut filtered: Vec<&'a str> = names
        .iter()
        .filter(|&&name| name.ends_with("man"))
        .cloned()
        .collect();
    
    filtered.sort();
    filtered
}

fn main() {
    let heroes = ["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"];
    let result = superheroes(&heroes);
    println!("{:?}", result); // Output: ["Batman", "Spider-man", "Superman"]
    
    let heroes = ["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"];
    let result = superheroes(&heroes);
    println!("{:?}", result); // Output: ["Aquaman"]

    let heroes = ["Wonder-Woman", "Catwoman", "Invisible-Woman"];
    let result = superheroes(&heroes);
    println!("{:?}", result); // Output: []
}

// ["Batman", "Spider-man", "Superman", "Wonder-Woman"]
// ["Aquaman", "Catwoman"]
// ["Catwoman", "Invisible-Woman", "Wonder-Woman"]

 
124. Applying Discounts
fn get_discounts(prices: &[f64], discount: &str) -> Vec<f64> {
    // Extract the discount percentage as a float
    let discount_percentage: f64 = discount.trim_end_matches('%').parse().unwrap_or(0.0);
    let discount_factor = discount_percentage / 100.0;

    // Calculate discounted prices
    prices.iter()
        .map(|&price| price * (1.0 - discount_factor))
        .collect()
}

fn main() {
    // Example usage
    let prices1 = [2.0, 4.0, 6.0, 11.0];
    let discount1 = "50%";
    let discounted_prices1 = get_discounts(&prices1, discount1);
    println!("{:?}", discounted_prices1); // Output: [1.0, 2.0, 3.0, 5.5]

    let prices2 = [10.0, 20.0, 40.0, 80.0];
    let discount2 = "75%";
    let discounted_prices2 = get_discounts(&prices2, discount2);
    println!("{:?}", discounted_prices2); // Output: [7.5, 15.0, 30.0, 60.0]

    let prices3 = [100.0];
    let discount3 = "45%";
    let discounted_prices3 = get_discounts(&prices3, discount3);
    println!("{:?}", discounted_prices3); // Output: [55.0]
}



 
125. Check if a Number is a Smith Number
fn is_prime(num: u64) -> bool {
    if num < 2 { return false; }
    (2..=(num as f64).sqrt() as u64).all(|i| num % i != 0)
}

fn sum_of_digits(num: u64) -> u64 {
    num.to_string().chars().map(|d| d.to_digit(10).unwrap() as u64).sum()
}

fn prime_factors(mut num: u64) -> Vec<u64> {
    let mut factors = Vec::new();
    for i in 2..=(num as f64).sqrt() as u64 {
        while num % i == 0 {
            factors.push(i);
            num /= i;
        }
    }
    if num > 1 { factors.push(num); }
    factors
}

fn is_smith_number(num: u64) -> bool {
    let original_sum = sum_of_digits(num);
    let prime_factor_sum: u64 = prime_factors(num).iter().map(|&f| sum_of_digits(f)).sum();
    original_sum != prime_factor_sum && !is_prime(num)
}

fn main() {
    let number = 728;
    println!("Is {} a Smith number? {}", number, is_smith_number(number));
}

// Is 728 a Smith number? false


 
126. Basic Chessboard
fn generate_chessboard() -> String {
    let size = 8; // Size of the chessboard (8x8)
    let mut chessboard = String::new();

    for row in 0..size {
        let mut current_row = String::new();

        for col in 0..size {
            // Use 'X' for black squares and ' ' for white squares
            let is_black = (row + col) % 2 == 1;
            let square = if is_black { 'X' } else { ' ' };
            current_row.push(square);
            current_row.push(' '); // Adding a space between squares
        }

        // Add the current row to the chessboard and add a newline
        chessboard.push_str(&current_row.trim_end()); // Trim trailing space
        chessboard.push('\n');
    }

    chessboard
}

fn main() {
    let chessboard = generate_chessboard();
    print!("{}", chessboard);
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
use std::collections::HashMap;

fn unique(numbers: &[i32]) -> i32 {
    let mut counts = HashMap::new();

    for &num in numbers {
        *counts.entry(num).or_insert(0) += 1;
    }

    *counts.iter().find(|&(_, &v)| v == 1).unwrap().0
}

fn main() {
    let numbers1 = [3, 3, 3, 7, 3, 3];
    let numbers2 = [0, 0, 77, 0, 0];
    let numbers3 = [0, 1, 1, 1, 1, 1, 1, 1];

    println!("Unique number in array 1: {}", unique(&numbers1));
    println!("Unique number in array 2: {}", unique(&numbers2));
    println!("Unique number in array 3: {}", unique(&numbers3));
}

// Unique number in array 1: 7
// Unique number in array 2: 77
// Unique number in array 3: 0




 
128. Find the Discount
fn find_discount(original_price: f64, discount_percentage: u8) -> f64 {
    let discount = original_price * (discount_percentage as f64 / 100.0);
    original_price - discount
}

fn main() {
    // Example usage
    println!("{:.2}", find_discount(1500.0, 50)); 
    println!("{:.2}", find_discount(89.0, 20));  
    println!("{:.2}", find_discount(100.0, 75)); 
}

// 750.00
// 71.20
// 25.00


 
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

 
130. Coaxial Cable Impedance
fn impedance_calculator(d_d: f64, d_c: f64, e_r: f64) -> f64 {
    // Calculate the impedance using the formula
    let log_term = (d_d / d_c).log10();
    let impedance = 60.0 / (e_r.sqrt()) * log_term;
    impedance
}

fn main() {
    // Example usage
    println!("{:.1}", impedance_calculator(20.7, 2.0, 4.0)); 
    println!("{:.1}", impedance_calculator(5.3, 1.2, 2.2));  
    println!("{:.1}", impedance_calculator(4.48, 1.33, 2.2));
}

// 30.4
// 26.1
// 21.3

 
131. Censor Words Longer Than Four Characters
fn censor(text: &str) -> String {
    // Split the text into words
    let words: Vec<&str> = text.split_whitespace().collect();
    
    // Transform each word, replacing those longer than four characters
    let censored_words: Vec<String> = words
        .into_iter()
        .map(|word| {
            if word.len() > 4 {
                "*".repeat(word.len())
            } else {
                word.to_string()
            }
        })
        .collect();
    
    // Join the censored words back into a single string
    censored_words.join(" ")
}

fn main() {
    // Example usage
    println!("{}", censor("The code is fourty")); 
    println!("{}", censor("Two plus three is five")); 
    println!("{}", censor("aaaa aaaaa 1234 12345")); 
}

// The code is ******
// Two plus ***** is five
// aaaa ***** 1234 *****


 
132. Find the Area of an Ellipse
use std::f64::consts::PI;

fn calculate_ellipse_area(semi_major_axis: f64, semi_minor_axis: f64) -> f64 {
    PI * semi_major_axis * semi_minor_axis
}

fn main() {
    let semi_major_axis = 5.0; // Replace with the semi-major axis length
    let semi_minor_axis = 3.0; // Replace with the semi-minor axis length

    let ellipse_area = calculate_ellipse_area(semi_major_axis, semi_minor_axis);
    println!("The area of the ellipse is: {:.2}", ellipse_area);
}

// The area of the ellipse is: 47.12


 
133. Check if a Number is a Palindrome in Binary
fn is_binary_palindrome(number: u32) -> bool {
    let binary_representation = format!("{:b}", number); // Convert to binary representation
    let reversed_binary: String = binary_representation.chars().rev().collect(); // Reverse the binary representation
    
    binary_representation == reversed_binary // Check if it is a palindrome
}

fn main() {
    let number_to_check = 9; // Replace with the number you want to check

    if is_binary_palindrome(number_to_check) {
        println!("{} is a binary palindrome! 🎉", number_to_check);
    } else {
        println!("{} is not a binary palindrome. 😢", number_to_check);
    }
}

// 9 is a binary palindrome! 🎉


 
134. Find the Area of a Rhombus
fn calculate_rhombus_area(diagonal1: f64, diagonal2: f64) -> f64 {
    (diagonal1 * diagonal2) / 2.0
}

fn main() {
    let diagonal1_length = 8.0; // Length of the first diagonal
    let diagonal2_length = 6.0; // Length of the second diagonal

    let rhombus_area = calculate_rhombus_area(diagonal1_length, diagonal2_length);
    println!("The area of the rhombus is: {:.2}", rhombus_area);
}

// The area of the rhombus is: 24.00


 
135. Check if a Number is a Catalan Number
fn binomial_coefficient(n: u64, k: u64) -> u64 {
    let mut result = 1;
    let mut k = k;
    let mut n = n;
    if k > n - k {
        k = n - k;
    }
    for i in 0..k {
        result *= n;
        result /= i + 1;
        n -= 1;
    }
    result
}

fn is_catalan_number(num: u64) -> bool {
    let mut i = 0;
    while let Some(catalan) = binomial_coefficient(2 * i, i).checked_div(i + 1) {
        if catalan == num {
            return true;
        } else if catalan > num {
            return false;
        }
        i += 1;
    }
    false
}

fn main() {
    let number_to_check = 42; // Replace with the number you want to check
    if is_catalan_number(number_to_check) {
        println!("{} is a Catalan number! 🎉", number_to_check);
    } else {
        println!("{} is not a Catalan number. 😢", number_to_check);
    }
}
// 42 is a Catalan number! 🎉
136. Find the Luhn Algorithm Check Digit
fn calculate_luhn_check_digit(input: u64) -> u8 {
    let digits: Vec<u8> = input
        .to_string()
        .chars()
        .map(|c| c.to_digit(10).unwrap() as u8)
        .collect();

    let total_sum: u32 = digits.iter().enumerate().map(|(i, &d)| {
        if i % 2 == digits.len() % 2 {
            let mut doubled = d * 2;
            if doubled > 9 { doubled -= 9; }
            doubled as u32
        } else {
            d as u32
        }
    }).sum();

    // Convert the result to u8 before returning
    ((10 - (total_sum % 10)) % 10) as u8
}

fn main() {
    let partial_number: u64 = 123456789; // Replace with the partial number
    let check_digit = calculate_luhn_check_digit(partial_number);
    let full_number = format!("{}{}", partial_number, check_digit);

    println!("Partial Number: {}", partial_number);
    println!("Check Digit: {}", check_digit);
    println!("Full Number with Check Digit: {}", full_number);
}

// Partial Number: 123456789
// Check Digit: 3
// Full Number with Check Digit: 1234567893

 
137. ATM Pin Validator
fn is_valid_pin(pin: &str) -> bool {
    // Check if the length is either 4 or 6
    if pin.len() != 4 && pin.len() != 6 {
        return false;
    }

    // Check if all characters are digits
    pin.chars().all(|c| c.is_digit(10))
}

fn main() {
    // Example usage
    let pins = ["1234", "12345", "a234", "", "123456"];
    for pin in &pins {
        println!("PIN '{}' is valid: {}", pin, is_valid_pin(pin));
    }
}

// PIN '1234' is valid: true
// PIN '12345' is valid: false
// PIN 'a234' is valid: false
// PIN '' is valid: false
// PIN '123456' is valid: true


 
138. Check if a Year is a Magic Year
fn is_magic_year(year: u32) -> bool {
    let year_str = year.to_string();
    if year_str.len() != 6 {
        return false;
    }

    let month: u32 = year_str[0..2].parse().unwrap();
    let day: u32 = year_str[2..4].parse().unwrap();
    let result: u32 = year_str[4..6].parse().unwrap();

    month * day == result
}

fn main() {
    // Example usage
    let year_to_check = 1978; // Replace with the year you want to check
    if is_magic_year(year_to_check) {
        println!("{} is a Magic Year! 🎉", year_to_check);
    } else {
        println!("{} is not a Magic Year. 😢", year_to_check);
    }
}

// 1978 is not a Magic Year. 😢


 
139. Enharmonic Equivalents
use std::collections::HashMap;

fn get_equivalent(note: &str) -> &str {
    // Define the mapping of notes to their enharmonic equivalents
    let mut enharmonic_map = HashMap::new();
    enharmonic_map.insert("C#", "Db");
    enharmonic_map.insert("Db", "C#");
    enharmonic_map.insert("D#", "Eb");
    enharmonic_map.insert("Eb", "D#");
    enharmonic_map.insert("F#", "Gb");
    enharmonic_map.insert("Gb", "F#");
    enharmonic_map.insert("G#", "Ab");
    enharmonic_map.insert("Ab", "G#");
    enharmonic_map.insert("A#", "Bb");
    enharmonic_map.insert("Bb", "A#");
    // Notes without enharmonic equivalents map to themselves
    enharmonic_map.insert("C", "C");
    enharmonic_map.insert("D", "D");
    enharmonic_map.insert("E", "E");
    enharmonic_map.insert("F", "F");
    enharmonic_map.insert("G", "G");
    enharmonic_map.insert("A", "A");
    enharmonic_map.insert("B", "B");

    // Return the enharmonic equivalent from the map, default to "Invalid note"
    enharmonic_map.get(note).unwrap_or(&"Invalid note")
}

fn main() {
    // Example usage
    println!("{}", get_equivalent("D#"));  // Output: Eb
    println!("{}", get_equivalent("Gb"));  // Output: F#
    println!("{}", get_equivalent("Bb"));  // Output: A#
}


 
140. Find the Area of a Regular Polygon
use std::f64::consts::PI;

// Function to calculate the area of a regular polygon
fn calculate_regular_polygon_area(n: u32, s: f64) -> f64 {
    let numerator = 1.0 / 4.0 * (n as f64) * s.powi(2);
    let denominator = (PI / (n as f64)).tan();
    let area = numerator / denominator;
    area
}

fn main() {
    let number_of_sides = 6; // Replace with the number of sides of your polygon
    let side_length = 5.0;  // Replace with the length of each side of your polygon

    let polygon_area = calculate_regular_polygon_area(number_of_sides, side_length);
    println!("The area of the regular polygon is: {:.2}", polygon_area);
}

// The area of the regular polygon is: 64.95


 
141. Check if a Number is an Abundant Number
// Function to calculate the sum of proper divisors
fn get_proper_divisors_sum(number: u32) -> u32 {
    let mut divisor_sum = 0;
    let limit = number / 2;
    for i in 1..=limit {
        if number % i == 0 {
            divisor_sum += i;
        }
    }
    divisor_sum
}

// Function to check if a number is an abundant number
fn is_abundant_number(number: u32) -> bool {
    let divisors_sum = get_proper_divisors_sum(number);
    divisors_sum > number
}

fn main() {
    let number_to_check = 12; // Replace with the number you want to check
    
    if is_abundant_number(number_to_check) {
        println!("{} is an Abundant Number! 🎉", number_to_check);
    } else {
        println!("{} is not an Abundant Number. 😢", number_to_check);
    }
}

// 12 is an Abundant Number! 🎉


 
142. Wash Your Hands
fn wash_hands(n: u32, nm: u32) -> String {
    // Total seconds spent washing hands
    let total_seconds = n * nm * 21;
    
    // Convert seconds to minutes and seconds
    let minutes = total_seconds / 60;
    let seconds = total_seconds % 60;
    
    format!("{} minutes and {} seconds", minutes, seconds)
}

fn main() {
    // Example usage
    println!("{}", wash_hands(8, 7));  // Output: "588 minutes and 0 seconds"
    println!("{}", wash_hands(0, 0));  // Output: "0 minutes and 0 seconds"
    println!("{}", wash_hands(7, 9));  // Output: "661 minutes and 30 seconds"
}


 
143. Calculate the Euler's Totient Function
fn euler_totient_function(mut n: u32) -> u32 {
    if n == 0 {
        panic!("Input must be a positive integer.");
    }

    let mut result = n; // Initialize result with n
    let mut p = 2;

    // Iterate through all prime factors of n
    while p * p <= n {
        if n % p == 0 {
            // If p divides n, divide n by p as many times as possible
            while n % p == 0 {
                n /= p;
            }
            result -= result / p; // Apply the formula for prime factors
        }
        p += 1;
    }

    // If n is a prime number greater than 1
    if n > 1 {
        result -= result / n;
    }

    result // Return the result
}

fn main() {
    // Example usage
    let n = 12;  // Replace this with the number you want to calculate the totient function for
    let result = euler_totient_function(n);
    println!("Euler's Totient Function for {} is: {}", n, result);
}

// Euler's Totient Function for 12 is: 4

144. Who’s The Oldest?
use std::collections::HashMap;

fn oldest(people: HashMap<&str, u32>) -> &str {
    let mut oldest_name = "";
    let mut max_age = 0;

    for (name, &age) in people.iter() {
        if age > max_age {
            max_age = age;
            oldest_name = name;
        }
    }

    oldest_name
}

fn main() {
    // Example usage
    let mut people1 = HashMap::new();
    people1.insert("Emma", 71);
    people1.insert("Jack", 45);
    people1.insert("Amy", 15);
    people1.insert("Ben", 29);
    
    println!("The oldest person is: {}", oldest(people1));

    let mut people2 = HashMap::new();
    people2.insert("Max", 9);
    people2.insert("Josh", 13);
    people2.insert("Sam", 48);
    people2.insert("Anne", 33);

    println!("The oldest person is: {}", oldest(people2));
}

 
145. Digital Cipher
fn digital_cipher(message: &str, key: u32) -> Vec<u32> {
    let key_digits: Vec<u32> = key.to_string().chars().map(|d| d.to_digit(10).unwrap()).collect();
    
    message.chars().enumerate().map(|(i, c)| {
        let letter_value = (c as u32) - ('a' as u32) + 1;
        letter_value + key_digits[i % key_digits.len()]
    }).collect()
}

fn main() {
    // Ejemplos de uso
    let encoded_message1 = digital_cipher("scout", 1939);
    let encoded_message2 = digital_cipher("hernando", 1990);
    let encoded_message3 = digital_cipher("abella", 100);

    println!("{:?}", encoded_message1); // [20, 12, 18, 30, 21]
    println!("{:?}", encoded_message2); // [9, 14, 27, 14, 2, 23, 13, 15]
    println!("{:?}", encoded_message3); // [2, 2, 5, 13, 12, 1]
}

 
146. Chocolate Dilemma
fn test_fairness(sister1: Vec<(i32, i32)>, sister2: Vec<(i32, i32)>) -> bool {
    // Function to calculate total area of the chocolate pieces
    fn total_area(pieces: Vec<(i32, i32)>) -> i32 {
        pieces.iter().map(|&(l, w)| l * w).sum()
    }

    // Compare the total area of both sisters' chocolate pieces
    total_area(sister1) == total_area(sister2)
}

fn main() {
    // Example usage
    let agatha = vec![(4, 3), (2, 4), (1, 2)];
    let bertha = vec![(6, 2), (4, 2), (1, 1), (1, 1)];

    println!("{}", test_fairness(agatha, bertha));  // true

    let agatha2 = vec![(1, 2), (2, 1)];
    let bertha2 = vec![(2, 2)];
    println!("{}", test_fairness(agatha2, bertha2));  // true

    let agatha3 = vec![(1, 2), (2, 1)];
    let bertha3 = vec![(2, 2), (4, 4)];
    println!("{}", test_fairness(agatha3, bertha3));  // false

    let agatha4 = vec![(2, 2), (2, 2), (2, 2), (2, 2)];
    let bertha4 = vec![(4, 4)];
    println!("{}", test_fairness(agatha4, bertha4));  // true

    let agatha5 = vec![(1, 5), (6, 3), (1, 1)];
    let bertha5 = vec![(7, 1), (2, 2), (1, 1)];
    println!("{}", test_fairness(agatha5, bertha5));  // false
}


 
147. Calculate the Area of a Hexagon
fn calculate_hexagon_area(side_length: f64) -> f64 {
    // Area of a hexagon formula: (3 * sqrt(3) / 2) * side_length^2
    (3.0 * (3.0_f64).sqrt() / 2.0) * side_length.powi(2)
}

fn main() {
    // Example usage
    let side_length = 5.0; // Replace with the length of a side of your hexagon
    let hexagon_area = calculate_hexagon_area(side_length);
    
    println!("The area of the hexagon is: {:.2}", hexagon_area);
}

// The area of the hexagon is: 64.95

 
148. Check if a Number is a Pronic Number
fn is_pronic_number(number: i32) -> bool {
    for i in 0..=number {
        if i * (i + 1) == number {
            return true;
        }
    }
    false
}

fn main() {
    // Example usage
    let pronic_number = 6; // Replace with the number you want to check

    if is_pronic_number(pronic_number) {
        println!("{} is a Pronic Number!", pronic_number);
    } else {
        println!("{} is not a Pronic Number.", pronic_number);
    }

    let pronic_number2 = 7; // Another example
    if is_pronic_number(pronic_number2) {
        println!("{} is a Pronic Number!", pronic_number2);
    } else {
        println!("{} is not a Pronic Number.", pronic_number2);
    }
}

// 6 is a Pronic Number!
// 7 is not a Pronic Number.


 
149. Virtual DAC
fn v_dac(digital_value: u16) -> f64 {
    // Convert the digital value to the corresponding voltage level
    (digital_value as f64 / 1023.0) * 5.0
}

fn main() {
    // Example usage
    println!("{:.2}", v_dac(0));    
    println!("{:.2}", v_dac(1023)); 
    println!("{:.2}", v_dac(400)); 
}

// 0.00
// 5.00
// 1.96

 
150. Find the Area of a Pentagon
fn calculate_pentagon_area(side_length: f64) -> f64 {
    let sqrt_5 = 5.0f64.sqrt();
    let area = (1.0 / 4.0) * (5.0 * (5.0 + 2.0 * sqrt_5)).sqrt() * side_length.powi(2);
    area
}

fn main() {
    let side_length = 4.0; // Example side length
    let pentagon_area = calculate_pentagon_area(side_length);
    println!("The area of the pentagon is: {:.2}", pentagon_area);
}

// The area of the pentagon is: 27.53



 
151. Check if a Number is a Cube Number
fn is_cube_number(number: i64) -> bool {
    let cube_root = (number as f64).cbrt().round() as i64;
    cube_root.pow(3) == number
}

fn main() {
    let number_to_check = 27; 
    if is_cube_number(number_to_check) {
        println!("{} is a Cube Number! 🎲", number_to_check);
    } else {
        println!("{} is not a Cube Number. 😢", number_to_check);
    }
}

// 27 is a Cube Number! 🎲


 
152. Weekly Salary Calculation
fn weekly_salary(hours: [u32; 7]) -> u32 {
    let mut total_salary = 0;

    for (i, &hour) in hours.iter().enumerate() {
        if i < 5 {  // Monday to Friday
            if hour > 8 {
                total_salary += 8 * 10; // 8 hours at $10 per hour
                total_salary += (hour - 8) * 15; // Overtime hours at $15 per hour
            } else {
                total_salary += hour * 10; // All hours at $10 per hour
            }
        } else {  // Saturday and Sunday
            if hour > 8 {
                total_salary += 8 * 20; // 8 hours at $20 per hour
                total_salary += (hour - 8) * 30; // Overtime hours at $30 per hour
            } else {
                total_salary += hour * 20; // All hours at $20 per hour
            }
        }
    }

    total_salary
}

fn main() {
    let hours = [8, 8, 8, 8, 8, 0, 0]; // Example input
    let salary = weekly_salary(hours);
    println!("Total weekly salary: ${}", salary);
}

// Total weekly salary: $400


 
153. Find the Area of a Cube
fn calculate_cube_surface_area(side_length: f64) -> f64 {
    6.0 * side_length.powi(2)
}

fn main() {
    let side_length = 4.0;  // Replace with the length of a side of your cube
    let cube_surface_area = calculate_cube_surface_area(side_length);
    println!("The surface area of the cube is: {:.2}", cube_surface_area);
}

// The surface area of the cube is: 96.00


 
154. Find the Area of a Cone
use std::f64::consts::PI;

fn calculate_cone_surface_area(radius: f64, slant_height: f64) -> f64 {
    PI * radius * (radius + slant_height)
}

fn main() {
    let radius = 3.0;  // Replace with the radius of the cone's base
    let slant_height = 5.0;  // Replace with the slant height of the cone

    let surface_area = calculate_cone_surface_area(radius, slant_height);
    println!("The surface area of the cone is: {:.2}", surface_area);
}

// The surface area of the cone is: 75.40


 
155. Check if a Number is a Happy Number
use std::collections::HashSet;

fn is_happy_number(number: u32) -> bool {
    let mut seen_numbers = HashSet::new();
    let mut num = number;

    while num != 1 && !seen_numbers.contains(&num) {
        seen_numbers.insert(num);
        num = sum_of_squared_digits(num);
    }

    num == 1
}

fn sum_of_squared_digits(number: u32) -> u32 {
    number
        .to_string()
        .chars()
        .map(|digit| digit.to_digit(10).unwrap() as u32)
        .map(|digit| digit * digit)
        .sum()
}

fn main() {
    let number = 19;  // Replace with the number you want to check

    if is_happy_number(number) {
        println!("{} is a Happy Number! 😃", number);
    } else {
        println!("{} is not a Happy Number. 😢", number);
    }
}

// 19 is a Happy Number! 😃


 
156. Calculate the Area of a Triangular Prism
use std::f64;

// Function to calculate the area of a triangular prism
fn calculate_triangular_prism_surface_area(a: f64, b: f64, c: f64, height: f64) -> f64 {
    // Calculate the semi-perimeter
    let s = (a + b + c) / 2.0;

    // Calculate the area of the triangular base using Heron's formula
    let base_area = (s * (s - a) * (s - b) * (s - c)).sqrt();

    // Calculate the perimeter of the triangular base
    let perimeter = a + b + c;

    // Calculate the surface area of the triangular prism
    let surface_area = base_area + perimeter * height;
    surface_area
}

fn main() {
    let side_a = 3.0; // Replace with the length of side A of the triangular base
    let side_b = 4.0; // Replace with the length of side B of the triangular base
    let side_c = 5.0; // Replace with the length of side C of the triangular base
    let prism_height = 6.0; // Replace with the height of the triangular prism

    let surface_area = calculate_triangular_prism_surface_area(side_a, side_b, side_c, prism_height);
    println!("The surface area of the triangular prism is: {:.2}", surface_area);
}

// The surface area of the triangular prism is: 78.00



157. Find ASCII Charcode of Inverse Case Character
fn counterpart_char_code(c: char) -> u32 {
    if c.is_uppercase() {
        // Convert uppercase to lowercase
        let lower = c.to_ascii_lowercase();
        lower as u32
    } else if c.is_lowercase() {
        // Convert lowercase to uppercase
        let upper = c.to_ascii_uppercase();
        upper as u32
    } else {
        // Return the ASCII code of the character if it's not an alphabet
        c as u32
    }
}

fn main() {
    let test_cases = ['A', 'a', '1', '#'];

    for &test in &test_cases {
        println!("Char: {}, ASCII Code: {}", test, counterpart_char_code(test));
    }
}

// Char: A, ASCII Code: 97
// Char: a, ASCII Code: 65
// Char: 1, ASCII Code: 49
// Char: #, ASCII Code: 35

 
158. Solve a Linear Equation
fn solve_equation(equation: &str) -> i32 {
    let parts: Vec<&str> = equation.split('=').collect();
    let left_side = parts[0].trim();
    let right_side: i32 = parts[1].trim().parse().unwrap();

    let (op, num) = if left_side.contains('+') {
        let left_parts: Vec<&str> = left_side.split('+').collect();
        ('+', left_parts[1].trim().parse::<i32>().unwrap())
    } else {
        let left_parts: Vec<&str> = left_side.split('-').collect();
        ('-', left_parts[1].trim().parse::<i32>().unwrap())
    };

    match op {
        '+' => right_side - num,
        '-' => right_side + num,
        _ => panic!("Unsupported operation"),
    }
}

fn main() {
    println!("{}", solve_equation("x + 43 = 50"));  
    println!("{}", solve_equation("x - 9 = 10"));   
    println!("{}", solve_equation("x + 300 = 100"));  
}

// 7
// 19
// -200


 
159. Factorize a Number
fn factorize(n: u32) -> Vec<u32> {
    let mut factors = Vec::new();
    let sqrt_n = (n as f64).sqrt() as u32;

    for i in 1..=sqrt_n {
        if n % i == 0 {
            factors.push(i);
            if i != n / i {
                factors.push(n / i);
            }
        }
    }

    factors.sort();
    factors
}

fn main() {
    let num = 12;
    println!("{:?}", factorize(num));  
}

// [1, 2, 3, 4, 6, 12]


 
160. Check if a Number is an Automorphic Number
fn is_automorphic_number(number: u64) -> bool {
    let square = number * number;
    let number_str = number.to_string();
    let square_str = square.to_string();

    square_str.ends_with(&number_str)
}

fn main() {
    let automorphic_number = 25; // Replace with the number you want to check

    if is_automorphic_number(automorphic_number) {
        println!("{} is an Automorphic Number!", automorphic_number);
    } else {
        println!("{} is not an Automorphic Number.", automorphic_number);
    }
}

// 25 is an Automorphic Number!


 
161. Calculate the Area of a Pyramid
fn calculate_pyramid_surface_area(side_length: f64, slant_height: f64) -> f64 {
    let base_area = side_length.powi(2);
    let lateral_area = 4.0 * side_length * slant_height / 2.0; // Each triangular face has area (base * slant_height) / 2
    base_area + lateral_area
}

fn main() {
    let side_length = 4.0;  // Length of a side of the pyramid's base
    let slant_height = 5.0; // Slant height of the pyramid
    
    let pyramid_surface_area = calculate_pyramid_surface_area(side_length, slant_height);
    println!("The surface area of the pyramid is: {:.2}", pyramid_surface_area);
}

// The surface area of the pyramid is: 56.00

 
162. Check if a Number is a Smith–Morra Gambit Number
fn digit_sum(n: u32) -> u32 {
    n.to_string().chars().map(|d| d.to_digit(10).unwrap()).sum()
}

fn prime_factorization(mut n: u32) -> Vec<u32> {
    let mut factors = Vec::new();
    let mut i = 2;
    while i * i <= n {
        while n % i == 0 {
            factors.push(i);
            n /= i;
        }
        i += 1;
    }
    if n > 1 {
        factors.push(n);
    }
    factors
}

fn is_smith_morra_gambit_number(number: u32) -> bool {
    let factors = prime_factorization(number);
    let sum_of_digits_of_factors: u32 = factors.iter().map(|&factor| digit_sum(factor)).sum();
    sum_of_digits_of_factors == digit_sum(number)
}

fn main() {
    let number = 22; // Example number
    println!("Is {} a Smith–Morra Gambit Number? {}", number, is_smith_morra_gambit_number(number));
}

// Is 22 a Smith–Morra Gambit Number? true


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
fn tower_of_hanoi(n: u32, source: char, auxiliary: char, target: char) {
    if n == 1 {
        println!("Move disk 1 from {} to {}", source, target);
        return;
    }

    tower_of_hanoi(n - 1, source, target, auxiliary);
    println!("Move disk {} from {} to {}", n, source, target);
    tower_of_hanoi(n - 1, auxiliary, source, target);
}

fn main() {
    let number_of_disks = 3;
    let source_peg = 'A';
    let auxiliary_peg = 'B';
    let target_peg = 'C';

    println!("Tower of Hanoi solution for {} disks:", number_of_disks);
    tower_of_hanoi(number_of_disks, source_peg, auxiliary_peg, target_peg);
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
use std::f64::consts::PI;

fn surface_area_of_frustum(r1: f64, r2: f64, l: f64) -> f64 {
    let surface_area = PI * (r1 + r2) * l + PI * r1.powi(2) + PI * r2.powi(2);
    surface_area
}

fn main() {
    let r1 = 4.0; // Top radius
    let r2 = 8.0; // Bottom radius
    let l = 6.0;  // Slant height

    let area = surface_area_of_frustum(r1, r2, l);
    println!("Surface Area of the frustum is: {:.2}", area);
}

// Surface Area of the frustum is: 477.52


























166. Check if a Number is a Motzkin Number
fn is_motzkin_number(number: usize) -> bool {
    if number == 0 {
        return true;
    }
    
    let mut motzkin_numbers = vec![1.0, 1.0];
    
    for n in 2..=number {
        let next_motzkin = ((2.0 * n as f64 + 1.0) * motzkin_numbers[n - 1] + 
                            (3.0 * n as f64 - 3.0) * motzkin_numbers[n - 2]) / 
                            (n as f64 + 2.0);
        motzkin_numbers.push(next_motzkin);
    }
    
    motzkin_numbers.contains(&(number as f64))
}

fn main() {
    let test_numbers = vec![1, 2, 5, 6, 11];
    
    for &number in &test_numbers {
        if is_motzkin_number(number) {
            println!("{} is a Motzkin Number!", number);
        } else {
            println!("{} is not a Motzkin Number.", number);
        }
    }
}

// 1 is a Motzkin Number!
// 2 is a Motzkin Number!
// 5 is not a Motzkin Number.
// 6 is not a Motzkin Number.
// 11 is not a Motzkin Number.

 
167. Swapping Two by Two
fn swap_two(s: &str) -> String {
    let mut result = String::new();
    let chars: Vec<char> = s.chars().collect();

    let mut i = 0;
    while i + 3 < chars.len() {
        result.push(chars[i + 2]);
        result.push(chars[i + 3]);
        result.push(chars[i]);
        result.push(chars[i + 1]);
        i += 4;
    }

    result.push_str(&s[i..]);
    result
}

fn main() {
    let examples = vec![
        "ABCDEFGH",
        "AABBCCDDEEFF",
        "munchkins",
        "FFGGHHI",
    ];

    for example in examples {
        println!("Original: {}, Swapped: {}", example, swap_two(example));
    }
}

// Original: ABCDEFGH, Swapped: CDABGHEF
// Original: AABBCCDDEEFF, Swapped: BBAADDCCFFEE
// Original: munchkins, Swapped: ncmuinhks
// Original: FFGGHHI, Swapped: GGFFHHI


 
168. Extract a Word From a Sentence
fn remove_word(sentence: &str, word: &str) -> String {
    sentence
        .split_whitespace() // Split sentence into words
        .filter(|&w| w != word) // Filter out the word to be removed
        .collect::<Vec<&str>>() // Collect the remaining words into a vector
        .join(" ") // Join the words back into a single string
}

fn main() {
    let sentence1 = "One two three four";
    let word1 = "two";
    let result1 = remove_word(sentence1, word1);
    println!("{}", result1); // Output: "One three four"

    let sentence2 = "Bob has a kid";
    let word2 = "kid";
    let result2 = remove_word(sentence2, word2);
    println!("{}", result2); // Output: "Bob has a"
}

// One three four
// Bob has a

 
169. Basic Chatbot
use std::io::{self, Write};

fn chatbot(message: &str) -> &str {
    match message.to_lowercase().as_str() {
        _ if message.contains("hello") => "Hello! How can I help you?",
        _ if message.contains("how are you") => "I am just a computer program, but thanks for asking!",
        _ if message.contains("bye") => "Goodbye!",
        _ => "I didn't understand that. Can you please rephrase?",
    }
}

fn main() {
    println!("Chatbot: Hello! How can I help you today?");
    
    loop {
        print!("You: ");
        io::stdout().flush().unwrap();

        let mut user_input = String::new();
        io::stdin().read_line(&mut user_input).unwrap();
        let user_input = user_input.trim();

        if user_input.is_empty() {
            continue;
        }
        
        if user_input.eq_ignore_ascii_case("bye") {
            println!("Chatbot: Goodbye!");
            break;
        }

        println!("Chatbot: {}", chatbot(user_input));
    }
}


 
170. Backspace Attack
fn erase(input: &str) -> String {
    let mut result = String::new();
    
    for c in input.chars() {
        if c == '#' {
            result.pop(); // Remove the last character if it exists
        } else {
            result.push(c); // Append the current character
        }
    }

    result
}

fn main() {
    let examples = [
        "he##l#hel#llo",
        "major# spar##ks",
        "si###t boy",
        "####",
    ];

    for example in &examples {
        println!("Input: '{}', Output: '{}'", example, erase(example));
    }
}

// Input: 'he##l#hel#llo', Output: 'hello'
// Input: 'major# spar##ks', Output: 'majo spks'
// Input: 'si###t boy', Output: 't boy'
// Input: '####', Output: ''

 
171. Counter
struct Counter {
    count: i32,
}

impl Counter {
    fn new() -> Self {
        Counter { count: 0 }
    }

    fn increment(&mut self) {
        self.count += 1;
        println!("Counter: {}", self.count);
    }

    fn decrement(&mut self) {
        self.count -= 1;
        println!("Counter: {}", self.count);
    }

    fn reset(&mut self) {
        self.count = 0;
        println!("Counter reset to 0");
    }
}

fn main() {
    let mut counter = Counter::new();

    counter.increment();
    counter.increment();
    counter.decrement();
    counter.reset();
}

// Counter: 1
// Counter: 2
// Counter: 1
// Counter reset to 0 
172. Phone Number Word Decoder
use std::collections::HashMap;

fn text_to_num(phone: &str) -> String {
    let map = HashMap::from([
        ('A', '2'), ('B', '2'), ('C', '2'),
        ('D', '3'), ('E', '3'), ('F', '3'),
        ('G', '4'), ('H', '4'), ('I', '4'),
        ('J', '5'), ('K', '5'), ('L', '5'),
        ('M', '6'), ('N', '6'), ('O', '6'),
        ('P', '7'), ('Q', '7'), ('R', '7'), ('S', '7'),
        ('T', '8'), ('U', '8'), ('V', '8'),
        ('W', '9'), ('X', '9'), ('Y', '9'), ('Z', '9'),
    ]);

    phone.chars()
        .map(|c| map.get(&c).copied().unwrap_or(c))
        .collect()
}

fn main() {
    let examples = [
        "123-647-EYES",
        "(325)444-TEST",
        "653-TRY-THIS",
        "435-224-7613",
    ];

    for example in &examples {
        println!("{}", text_to_num(example));
    }
}

// 123-647-3937
// (325)444-8378
// 653-879-8447
// 435-224-7613

173. Coin Co-Operation
fn get_coin_balances(p1_choices: &[&str], p2_choices: &[&str]) -> (i32, i32) {
    let mut coins_p1 = 3;
    let mut coins_p2 = 3;

    for (&c1, &c2) in p1_choices.iter().zip(p2_choices.iter()) {
        match (c1, c2) {
            ("share", "share") => {
                coins_p1 += 2;
                coins_p2 += 2;
            }
            ("share", "steal") => {
                coins_p1 -= 1;
                coins_p2 += 3;
            }
            ("steal", "share") => {
                coins_p1 += 3;
                coins_p2 -= 1;
            }
            _ => {}
        }
    }

    (coins_p1, coins_p2)
}

fn main() {
    let p1_choices = ["share", "share", "share"];
    let p2_choices = ["steal", "share", "steal"];

    let (p1_balance, p2_balance) = get_coin_balances(&p1_choices, &p2_choices);

    println!("Person 1 balance: {}", p1_balance);
    println!("Person 2 balance: {}", p2_balance);
}

// Person 1 balance: 3
// Person 2 balance: 11
 
  174. Validate PIN
use regex::Regex;

fn validate(pin: &str) -> bool {
    let re = Regex::new(r"^\d{4}(\d{2})?$").unwrap();
    re.is_match(pin)
}

fn main() {
    // Test cases
    println!("{}", validate("121317")); 
    println!("{}", validate("1234"));  
    println!("{}", validate("45135"));  
    println!("{}", validate("89abc1"));
    println!("{}", validate("900876")); 
    println!("{}", validate(" 4983"));
}

// true
// true
// false
// false
// true
// false

 
175. Random Number Generator
use rand::Rng;

fn generate_random_number(min_val: i32, max_val: i32) -> i32 {
    let mut rng = rand::thread_rng();
    rng.gen_range(min_val..=max_val)
}

fn main() {
    let random_number = generate_random_number(1, 10);
    println!("Random Number: {}", random_number);
}

// Random Number: 1


 
176. Seven Boom!
fn seven_boom(numbers: &[i32]) -> &str {
    for &num in numbers {
        if num.to_string().contains('7') {
            return "Boom!";
        }
    }
    "there is no 7 in the array"
}

fn main() {
    // Test examples
    let examples = [
        vec![1, 2, 3, 4, 5, 6, 7],
        vec![8, 6, 33, 100],
        vec![2, 55, 60, 97, 86],
    ];

    for numbers in examples {
        println!("{}", seven_boom(&numbers));
    }
}

// Boom!
// there is no 7 in the array
// Boom!

 
177. Capitalize the Last Letter
fn cap_last(input: &str) -> String {
    input.split_whitespace()  // Split the input string into words
        .map(|word| {
            let mut chars: Vec<char> = word.chars().collect(); // Convert each word to a vector of chars
            if let Some(last_char) = chars.pop() { // Remove and get the last character
                chars.push(last_char.to_ascii_uppercase()); // Capitalize the last character
            }
            chars.into_iter().collect() // Reassemble the characters into a word
        })
        .collect::<Vec<String>>() // Collect words into a vector of strings
        .join(" ") // Join the words with a space
}

fn main() {
    let examples = [
        "hello",
        "My Name Is Example",
        "HELp THe LASt LETTERs CAPITALISe",
    ];

    for example in examples.iter() {
        println!("{}", cap_last(example));
    }
}

// hellO
// MY NamE IS ExamplE
// HELP THE LAST LETTERS CAPITALISE

 
178. Dice Rolling Simulator
use rand::Rng;  

fn roll_dice() {
    let result = rand::thread_rng().gen_range(1..=6);  
    // Generate a random number between 1 and 6
    println!("You rolled a {}", result);
}

fn main() {
    roll_dice();  // Simulate rolling the dice
}

// You rolled a 3


 
179. Seconds to Time Converter
fn convert_seconds_to_time(seconds: u32) {
    let hours = seconds / 3600;
    let minutes = (seconds % 3600) / 60;
    let remaining_seconds = seconds % 60;

    println!("Time: {} hours, {} minutes, {} seconds", hours, minutes, remaining_seconds);
}

fn main() {
    let input_seconds = 3665;
    convert_seconds_to_time(input_seconds);
}

// Time: 1 hours, 1 minutes, 5 seconds


 
180. Bar Chart Generator
fn generate_bar_chart(data: Vec<i32>) {
    if data.is_empty() {
        println!("No data to display.");
        return;
    }

    let max_value = *data.iter().max().unwrap();

    for &value in &data {
        let bar_length = ((value as f64 / max_value as f64) * 20.0).round() as usize;
        let bar = "█".repeat(bar_length) + &" ".repeat(20 - bar_length);

        println!("{} | {}", value, bar);
    }
}

fn main() {
    let chart_data = vec![5, 8, 12, 4, 6];
    generate_bar_chart(chart_data);
}

// 5 | ████████            
// 8 | █████████████       
// 12 | ████████████████████
// 4 | ███████             
// 6 | ██████████ 

 
181. Right-Angled Triangle Pattern
fn generate_right_angled_triangle(height: usize) {
    for i in 1..=height {
        let stars = "*".repeat(i);
        println!("{}", stars);
    }
}

fn main() {
    let triangle_height = 5; // Example height
    generate_right_angled_triangle(triangle_height);
}

// *
// **
// ***
// ****
// *****
 
182. Positive Count / Negative Sum
fn count_positives_sum_negatives(numbers: Vec<i32>) -> Vec<i32> {
    let mut count_positives = 0;
    let mut sum_negatives = 0;

    for &num in &numbers {
        if num > 0 {
            count_positives += 1;
        } else if num < 0 {
            sum_negatives += num;
        }
    }

    if count_positives == 0 && sum_negatives == 0 {
        Vec::new()
    } else {
        vec![count_positives, sum_negatives]
    }
}

fn main() {
    let example1 = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let example2 = vec![92, 6, 73, -77, 81, -90, 99, 8, -85, 34];
    let example3 = vec![91, -4, 80, -73, -28];
    let example4: Vec<i32> = Vec::new();

    println!("{:?}", count_positives_sum_negatives(example1)); 
    println!("{:?}", count_positives_sum_negatives(example2)); 
    println!("{:?}", count_positives_sum_negatives(example3)); 
    println!("{:?}", count_positives_sum_negatives(example4)); 
}

// [10, -65]
// [7, -252]
// [2, -105]
// []

 
183. Number Pyramid Generator
fn generate_number_pyramid(height: usize) {
    for i in 1..=height {
        let spaces = " ".repeat(height - i);
        let numbers = (1..=i)
            .map(|num| num.to_string())
            .collect::<Vec<String>>()
            .join(" ");
        println!("{}{}", spaces, numbers);
    }
}

fn main() {
    let pyramid_height = 4;
    generate_number_pyramid(pyramid_height);
}

//    1
//   1 2
//  1 2 3
// 1 2 3 4


 
184. Diamond Pattern Generator
fn generate_diamond_pattern(height: usize) {
    if height % 2 == 0 || height < 1 {
        println!("Height must be an odd positive integer.");
        return;
    }

    let midpoint = (height + 1) / 2;

    for i in 1..=height {
        let spaces = (midpoint as isize - i as isize).abs() as usize;
        let stars = height - 2 * spaces;

        println!("{:width$}{}", "", "*".repeat(stars), width = spaces);
    }
}

fn main() {
    generate_diamond_pattern(5);
}

//   *
//  ***
// *****
//  ***
//   *

 
185. Check If the Brick Fits through the Hole
fn does_brick_fit(a: u32, b: u32, c: u32, w: u32, h: u32) -> bool {
    // Function to check if brick dimensions fit through the hole dimensions
    fn fits(brick_w: u32, brick_h: u32, hole_w: u32, hole_h: u32) -> bool {
        (brick_w <= hole_w && brick_h <= hole_h) || (brick_w <= hole_h && brick_h <= hole_w)
    }

    // Check all possible orientations of the brick
    fits(a, b, w, h) || fits(a, c, w, h) || fits(b, c, w, h)
}

fn main() {
    // Test cases
    println!("{}", does_brick_fit(1, 1, 1, 1, 1)); 
    println!("{}", does_brick_fit(1, 2, 1, 1, 1)); 
    println!("{}", does_brick_fit(1, 2, 2, 1, 1)); 
}

// true
// true
// false



 
186. Countdown Timer
use std::{thread::sleep, time::Duration, io::stdin};

fn main() {
    let mut input = String::new();
    println!("Enter countdown time in seconds: ");
    stdin().read_line(&mut input).expect("Failed to read");
    
    if let Ok(mut time) = input.trim().parse::<u64>() {
        while time > 0 {
            println!("Time Remaining: {} seconds", time);
            sleep(Duration::from_secs(1));
            time -= 1;
        }
        println!("Countdown completed!");
    } else {
        println!("Invalid input.");
    }
}

// Enter countdown time in seconds: 
// Time Remaining: 3 seconds
// Time Remaining: 2 seconds
// Time Remaining: 1 seconds
// Countdown completed!


 
187. State Names and Abbreviations
fn filter_state_names(states: Vec<&str>, category: &str) -> Vec<String> {
    let full_state_names = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
        "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
        "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
        "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
        "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
        "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    states.into_iter().filter(|s| match category {
        "abb" => s.len() == 2,
        "full" => full_state_names.contains(&s),
        _ => false,
    }).map(|s| s.to_string()).collect()
}

fn main() {
    let states1 = vec!["Arizona", "CA", "NY", "Nevada"];
    let states2 = vec!["MT", "NJ", "TX", "ID", "IL"];
    
    println!("{:?}", filter_state_names(states1, "abb")); // ➞ ["CA", "NY"]
    println!("{:?}", filter_state_names(states1, "full")); // ➞ ["Arizona", "Nevada"]
    println!("{:?}", filter_state_names(states2, "abb")); // ➞ ["MT", "NJ", "TX", "ID", "IL"]
    println!("{:?}", filter_state_names(states2, "full")); // ➞ []
}

 
188. Functioninator 8000
fn inator_inator(word: &str) -> String {
    // Helper function to check if a character is a consonant
    fn is_consonant(c: char) -> bool {
        c.is_alphabetic() && !"aeiouAEIOU".contains(c)
    }

    let last_char = word.chars().last().unwrap_or(' '); // Get the last character or default to a space

    // Determine the suffix based on the last character
    let suffix = if is_consonant(last_char) {
        "inator"
    } else {
        "-inator"
    };

    // Calculate the length and format it
    let length_suffix = format!("{}000", word.len());

    // Combine the parts into the final string
    format!("{}{} {}", word, suffix, length_suffix)
}

fn main() {
    let test_cases = ["Shrink", "Doom", "EvilClone"];

    for &word in test_cases.iter() {
        println!("{}", inator_inator(word));
    }
}

// Shrinkinator 6000
// Doominator 4000
// EvilClone-inator 9000


 
189. Pages in a Book
fn is_perfect_square(x: i64) -> bool {
    let s = (x as f64).sqrt() as i64;
    s * s == x
}

fn pages_in_book(total: i64) -> bool {
    if total <= 0 {
        return false;
    }

    let discriminant = 1 + 8 * total;
    if !is_perfect_square(discriminant) {
        return false;
    }

    let sqrt_disc = (discriminant as f64).sqrt() as i64;
    let n = (sqrt_disc - 1) / 2;

    // Verify that n is a positive integer and satisfies the original condition
    n > 0 && n * (n + 1) / 2 == total
}

fn main() {
    let test_cases = [5, 4005, 9453];

    for &total in test_cases.iter() {
        println!("Total pages {}: {}", total, pages_in_book(total));
    }
}

// Total pages 5: false
// Total pages 4005: true
// Total pages 9453: true


 
190. Highest Digit
fn highest_digit(n: u32) -> u32 {
    n.to_string()
        .chars()
        .filter_map(|c| c.to_digit(10))
        .max()
        .unwrap_or(0)
}

fn main() {
    let test_cases = [4666, 544, 379, 2, 377401];
    
    for &case in test_cases.iter() {
        println!("Highest digit in {}: {}", case, highest_digit(case));
    }
}

// Highest digit in 4666: 6
// Highest digit in 544: 5
// Highest digit in 379: 9
// Highest digit in 2: 2
// Highest digit in 377401: 7




 
191. Video Length in Seconds
fn minutes_to_seconds(video_length: &str) -> i32 {
    let parts: Vec<&str> = video_length.split(':').collect();
    
    if parts.len() != 2 {
        return -1; // Invalid format
    }
    
    let minutes: i32 = match parts[0].parse() {
        Ok(val) => val,
        Err(_) => return -1, // Invalid minutes value
    };
    
    let seconds: i32 = match parts[1].parse() {
        Ok(val) => val,
        Err(_) => return -1, // Invalid seconds value
    };
    
    if seconds >= 60 {
        return -1; // Invalid seconds value
    }
    
    minutes * 60 + seconds
}

fn main() {
    let test_cases = ["01:00", "13:56", "10:60", "121:49", "invalid"];
    
    for &case in test_cases.iter() {
        println!("Video Length '{}': {} seconds", case, minutes_to_seconds(case));
    }
}

// Video Length '01:00': 60 seconds
// Video Length '13:56': 836 seconds
// Video Length '10:60': -1 seconds
// Video Length '121:49': 7309 seconds
// Video Length 'invalid': -1 seconds
192. Count Letters in a Word Search
fn letter_counter(grid: &[Vec<&str>], letter: &str) -> usize {
    grid.iter()
        .flat_map(|row| row.iter())
        .filter(|&&ch| ch == letter)
        .count()
}

fn main() {
    let grid = vec![
        vec!["D", "E", "Y", "H", "A", "D"],
        vec!["C", "B", "Z", "Y", "J", "K"],
        vec!["D", "B", "C", "A", "M", "N"],
        vec!["F", "G", "G", "R", "S", "R"],
        vec!["V", "X", "H", "A", "S", "S"],
    ];

    let letter = "D";
    println!("The letter '{}' appears {} times.", letter, letter_counter(&grid, letter));

    let letter = "H";
    println!("The letter '{}' appears {} times.", letter, letter_counter(&grid, letter));
}

// The letter 'D' appears 3 times.
// The letter 'H' appears 2 times.


 
193. Find the Other Two Side Lengths
const SQRT_3: f64 = 1.7320508075688772;

fn other_sides(shortest_side: f64) -> [f64; 2] {
    let hypotenuse = 2.0 * shortest_side;
    let other_side = shortest_side * SQRT_3;
    // Rounding to 2 decimal places
    [((hypotenuse * 100.0).round() / 100.0), ((other_side * 100.0).round() / 100.0)]
}

fn main() {
    let test_cases = [1.0, 12.0, 2.0, 3.0];

    for &side in test_cases.iter() {
        let [longest, medium] = other_sides(side);
        println!("Shortest Side: {:.1}, Longest Side: {:.2}, Medium Side: {:.2}", side, longest, medium);
    }
}

// Shortest Side: 1.0, Longest Side: 2.00, Medium Side: 1.73
// Shortest Side: 12.0, Longest Side: 24.00, Medium Side: 20.78
// Shortest Side: 2.0, Longest Side: 4.00, Medium Side: 3.46
// Shortest Side: 3.0, Longest Side: 6.00, Medium Side: 5.20



 
194. War of Numbers
fn war_of_numbers(numbers: &[i32]) -> i32 {
    let (even_sum, odd_sum) = numbers.iter().fold((0, 0), |(even, odd), &num| {
        if num % 2 == 0 {
            (even + num, odd)
        } else {
            (even, odd + num)
        }
    });

    (even_sum - odd_sum).abs()
}

fn main() {
    let examples = [
        vec![2, 8, 7, 5],
        vec![12, 90, 75],
        vec![5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243],
    ];

    for numbers in examples.iter() {
        println!("{}", war_of_numbers(numbers));
    }
}

// 2
// 27
// 168


 
195. Make a Circle with OOP
use std::f64::consts::PI;

struct Circle(f64);

impl Circle {
    fn new(radius: f64) -> Self { Self(radius) }
    fn get_area(&self) -> f64 { PI * self.0.powi(2) }
    fn get_perimeter(&self) -> f64 { 2.0 * PI * self.0 }
}

fn main() {
    let circles = [11.0, 4.44];
    for radius in circles {
        let circle = Circle::new(radius);
        println!("Radius: {:.2} - Area: {:.6}, Perimeter: {:.6}", radius, circle.get_area(), circle.get_perimeter());
    }
}

// Radius: 11.00 - Area: 380.132711, Perimeter: 69.115038
// Radius: 4.44 - Area: 61.932101, Perimeter: 27.897343


 
196. Find the nth Tetrahedral Number
fn tetra(n: u64) -> u64 {
    n * (n + 1) * (n + 2) / 6
}

fn main() {
    println!("{}", tetra(2));  
    println!("{}", tetra(5));  
    println!("{}", tetra(6));  
}

// 4
// 35
// 56


 
197. Joke Teller 
use rand::seq::SliceRandom;
use std::io::{self, Write};

fn joke_teller_program() {
    let categories = ["knock-knock", "dad", "animal", "puns"];
    let (setup, punchline1, punchline2) = match categories.choose(&mut rand::thread_rng()).unwrap() {
        &"knock-knock" => ("Knock, knock.", "Tank.", "You're welcome!"),
        &"dad" => ("Why did the scarecrow win an award?", "", "Because he was outstanding in his field!"),
        &"animal" => ("Why don't scientists trust atoms?", "", "Because they make up everything!"),
        _ => ("I used to be a baker because I kneaded dough.", "", ""),
    };

    if !setup.is_empty() { println!("{}", setup); }
    if !punchline1.is_empty() { let _ = prompt_user(punchline1); }
    println!("{}", punchline2);
}

fn prompt_user(prompt: &str) {
    print!("{} ", prompt);
    io::stdout().flush().unwrap();
    let _ = io::stdin().read_line(&mut String::new());
}

fn main() {
    joke_teller_program();
}

// Why did the scarecrow win an award?
// Because he was outstanding in his field!



 
198. Which Generation Are You?
fn generation(x: i32, y: char) -> &'static str {
    match (x, y) {
        (-3, 'm') => "great grandfather",
        (-3, 'f') => "great grandmother",
        (-2, 'm') => "grandfather",
        (-2, 'f') => "grandmother",
        (-1, 'm') => "father",
        (-1, 'f') => "mother",
        (0,  _)   => "me!",
        (1,  'm') => "son",
        (1,  'f') => "daughter",
        (2,  'm') => "grandson",
        (2,  'f') => "granddaughter",
        (3,  'm') => "great grandson",
        (3,  'f') => "great granddaughter",
        _ => "unknown"
    }
}

fn main() {
    println!("{}", generation(2, 'f'));  
    println!("{}", generation(-3, 'm')); 
    println!("{}", generation(1, 'f')); 
}

// granddaughter
// great grandfather
// daughter


 
199. FizzBuzz Game
fn fizz_buzz_game() {
    println!("Welcome to the FizzBuzz Game!");
    println!("Let's play FizzBuzz!");

    for i in 1..=100 {
        let mut output = String::new();

        if i % 3 == 0 {
            output.push_str("Fizz");
        }

        if i % 5 == 0 {
            output.push_str("Buzz");
        }

        // Print the output or the number itself
        if output.is_empty() {
            println!("{}", i);
        } else {
            println!("{}", output);
        }
    }
}

fn main() {
    fizz_buzz_game();
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
fn swap_pairs_of_adjacent_digits(number: u32) {
    let number_str = number.to_string();
    let length = number_str.len();

    // Check if the number has an even length
    if length % 2 != 0 {
        println!("Please enter an integer with an even length.");
        return;
    }

    // Swap pairs of adjacent digits
    let mut swapped_number = String::new();
    let chars: Vec<char> = number_str.chars().collect();

    for i in (0..length).step_by(2) {
        if i + 1 < length {
            swapped_number.push(chars[i + 1]);
            swapped_number.push(chars[i]);
        }
    }

    // Convert the result back to an integer
    let result: u32 = swapped_number.parse().unwrap();
    println!("Original Number: {}", number);
    println!("Number with Swapped Pairs of Adjacent Digits: {}", result);
}

fn main() {
    let number = 123456;
    swap_pairs_of_adjacent_digits(number);
}

// Original Number: 123456
// Number with Swapped Pairs of Adjacent Digits: 214365


 
201. Capitalization Changer
fn change_capitalization(input_string: &str) -> String {
    let mut result_string = String::new();

    for char in input_string.chars() {
        // Check if the character is uppercase
        if char.is_uppercase() {
            // Convert uppercase to lowercase
            result_string.push(char.to_lowercase().next().unwrap());
        } else {
            // Convert lowercase to uppercase
            result_string.push(char.to_uppercase().next().unwrap());
        }
    }

    println!("Original String: {}", input_string);
    println!("String with Changed Capitalization: {}", result_string);

    result_string
}

fn main() {
    let input = "Hello World";
    change_capitalization(input);
}

// Original String: Hello World
// String with Changed Capitalization: hELLO wORLD



 
202. Array Halves Swapper
fn swap_array_halves(arr: &mut Vec<i32>) {
    let length = arr.len();

    // Check if the array has an even length
    if length % 2 != 0 {
        println!("Please provide an array with an even length.");
        return;
    }

    // Calculate the midpoint of the array
    let midpoint = length / 2;

    // Swap the two halves of the array
    for i in 0..midpoint {
        arr.swap(i, midpoint + i);
    }

    println!("Array with Swapped Halves: {:?}", arr);
}

fn main() {
    let mut array = vec![1, 2, 3, 4, 5, 6];
    swap_array_halves(&mut array);
}

// Array with Swapped Halves: [4, 5, 6, 1, 2, 3]



 
203. Sum of Digits in String
fn sum_of_digits_in_string(input_string: &str) {
    let mut digit_sum = 0;

    for char in input_string.chars() {
        // Check if the character is a digit
        if char.is_digit(10) {
            // Convert the digit character to its numerical value and add to sum
            if let Some(digit) = char.to_digit(10) {
                digit_sum += digit;
            }
        }
    }

    println!("Original String: {}", input_string);
    println!("Sum of Digits in the String: {}", digit_sum);
}

fn main() {
    sum_of_digits_in_string("abc123xyz456");
}

// Original String: abc123xyz456
// Sum of Digits in the String: 21

 
204. Sum of Cubes
fn sum_of_cubes(up_to_integer: u32) {
    let mut cubes_sum = 0;

    for i in 1..=up_to_integer {
        // Calculate the cube of each integer and add to sum
        cubes_sum += i.pow(3);
    }

    println!("Sum of Cubes from 1 to {}: {}", up_to_integer, cubes_sum);
}

fn main() {
    sum_of_cubes(5);
}

// Sum of Cubes from 1 to 5: 225

 
205. Maximum Integer for Sum
fn find_max_integer_for_sum(target_sum: u32) {
    let mut current_sum = 0;
    let mut max_integer = 0;

    while current_sum + max_integer + 1 <= target_sum {
        max_integer += 1;
        current_sum += max_integer;
    }

    println!("Maximum Integer (n) for Sum <= {}: {}", target_sum, max_integer);
}

fn main() {
    find_max_integer_for_sum(15);
}

// Maximum Integer (n) for Sum <= 15: 5

 
206. URL Breakdown
use regex::Regex;
use std::collections::HashMap;

fn break_url(url: &str) {
    let url_regex = Regex::new(r"^(\w+):\/\/([\w.-]+)(\/.*)?$").unwrap();
    let mut url_parts = HashMap::new();

    if let Some(captures) = url_regex.captures(url) {
        url_parts.insert("scheme", captures.get(1).map_or("", |m| m.as_str()));
        url_parts.insert("domain", captures.get(2).map_or("", |m| m.as_str()));
        url_parts.insert("path", captures.get(3).map_or("", |m| m.as_str()));
    } else {
        println!("Invalid URL format.");
        return;
    }

    println!("URL Parts:");
    for (key, value) in &url_parts {
        println!("{}: {}", key, value);
    }
}

fn main() {
    break_url("https://www.example.org/page");
}

// URL Parts:
// path: /page
// scheme: https
// domain: www.example.org

 
207. Sort Strings by Length
fn sort_strings_by_length(strings_array: &[&str]) {
    let mut sorted_array: Vec<&str> = strings_array.to_vec();
    sorted_array.sort_by_key(|s| s.len());

    println!("Original Array of Strings:");
    println!("{:?}", strings_array);
    println!("Array of Strings Sorted by Length:");
    println!("{:?}", sorted_array);
}

fn main() {
    sort_strings_by_length(&["apple", "banana", "orange", "kiwi", "grape"]);
}

// Original Array of Strings:
// ["apple", "banana", "orange", "kiwi", "grape"]
// Array of Strings Sorted by Length:
// ["kiwi", "apple", "grape", "banana", "orange"]

 
208. Simplify Absolute Path
fn simplify_absolute_path(path: &str) {
    let parts: Vec<&str> = path.split('/').collect();
    let mut simplified_parts = Vec::new();

    for part in parts {
        match part {
            ".." => {
                if !simplified_parts.is_empty() {
                    simplified_parts.pop(); // Move up one level for '..'
                }
            }
            "" | "." => {} // Ignore empty parts and current directory '.'
            _ => simplified_parts.push(part),
        }
    }

    let simplified_path = format!("/{}", simplified_parts.join("/"));

    println!("Original Absolute Path: {}", path);
    println!("Simplified Absolute Path: {}", simplified_path);
}

fn main() {
    simplify_absolute_path("/home/user/../documents/./file.txt");
}

// Original Absolute Path: /home/user/../documents/./file.txt
// Simplified Absolute Path: /home/documents/file.txt
 
209. Count Common Elements in Arrays
use std::collections::HashSet;

fn count_common_elements(arr1: &[i32], arr2: &[i32]) {
    let set1: HashSet<i32> = arr1.iter().cloned().collect();
    let set2: HashSet<i32> = arr2.iter().cloned().collect();

    let common_elements: Vec<i32> = set1.intersection(&set2).cloned().collect();
    let number_of_common_elements = common_elements.len();

    println!("Array 1: {:?}", arr1);
    println!("Array 2: {:?}", arr2);
    println!("Common Elements: {:?}", common_elements);
    println!("Number of Common Elements: {}", number_of_common_elements);
}

fn main() {
    count_common_elements(&[1, 2, 3, 4, 5], &[3, 4, 5, 6, 7]);
}

// Array 1: [1, 2, 3, 4, 5]
// Array 2: [3, 4, 5, 6, 7]
// Common Elements: [5, 3, 4]
// Number of Common Elements: 3

 
210. Check Same Digits in a Number
fn are_all_digits_same(number: u32) {
    let number_str = number.to_string();
    let first_digit = number_str.chars().next().unwrap();

    for digit in number_str.chars().skip(1) {
        if digit != first_digit {
            println!("Digits in {} are not all the same.", number);
            return;
        }
    }

    println!("Digits in {} are all the same.", number);
}

fn main() {
    are_all_digits_same(22222);
}

// Digits in 22222 are all the same.


 
211. Rightmost Round Number Position
fn rightmost_round_number_position(arr: &[i32]) {
    for (i, &num) in arr.iter().enumerate().rev() {
        if num % 10 == 0 {
            println!("Rightmost Round Number: {}, Position: {}", num, i + 1);
            return;
        }
    }
    println!("No round numbers found in the array. Position: 0");
}

fn main() {
    rightmost_round_number_position(&[123, 450, 678, 900]);
}

// Rightmost Round Number: 900, Position: 4


 
212. Reverse Bits of 16-Bit Unsigned Short Integer
fn reverse_bits_16_bit_unsigned_short(integer: u16) {
    let binary_representation = format!("{:016b}", integer);
    let reversed_binary: String = binary_representation.chars().rev().collect();
    let reversed_integer = u16::from_str_radix(&reversed_binary, 2).unwrap();

    println!("Original Integer: {}", integer);
    println!("Binary Representation: {}", binary_representation);
    println!("Reversed Binary: {}", reversed_binary);
    println!("Reversed Integer: {}", reversed_integer);
}

fn main() {
    reverse_bits_16_bit_unsigned_short(5678);
}

// Original Integer: 5678
// Binary Representation: 0001011000101110
// Reversed Binary: 0111010001101000
// Reversed Integer: 29800


 
213. Greater Than 15 Checker
fn greater_than_15_checker(number: i32) {
    let result = if number > 15 { number } else { 15 };
    println!("Given Number: {}", number);
    println!("Result: {}", result);
}

fn main() {
    greater_than_15_checker(20); 
}

// Given Number: 20
// Result: 21


 
214. Replace First Digit with $
fn replace_first_digit_with_dollar(input_string: &str) {
    let mut found_digit = false;
    let modified_string: String = input_string
        .chars()
        .map(|c| {
            if c.is_digit(10) && !found_digit {
                found_digit = true;
                '$'
            } else {
                c
            }
        })
        .collect();

    println!("Original String: {}", input_string);
    println!("Modified String: {}", modified_string);
}

fn main() {
    replace_first_digit_with_dollar("abc123xyz456");
}

// Original String: abc123xyz456
// Modified String: abc$23xyz456


 
215. Prefix Sums
fn prefix_sums(input_array: &[i32]) {
    let mut prefix_sum = 0;
    let mut prefix_sum_array = Vec::new();

    for &num in input_array {
        prefix_sum += num;
        prefix_sum_array.push(prefix_sum);
    }

    println!("Original Array: {:?}", input_array);
    println!("Prefix Sums Array: {:?}", prefix_sum_array);
}

fn main() {
    prefix_sums(&[1, 2, 3, 4, 5]);
}

// Original Array: [1, 2, 3, 4, 5]
// Prefix Sums Array: [1, 3, 6, 10, 15]

 
216. Next Prime Number
fn is_prime(num: u32) -> bool {
    if num < 2 {
        return false;
    }
    for i in 2..=((num as f64).sqrt() as u32) {
        if num % i == 0 {
            return false;
        }
    }
    true
}

fn next_prime_number(given_number: u32) {
    let mut next_number = given_number + 1;

    while !is_prime(next_number) {
        next_number += 1;
    }

    println!("Given Number: {}", given_number);
    println!("Next Prime Number: {}", next_number);
}

fn main() {
    next_prime_number(10);
}

// Given Number: 10
// Next Prime Number: 11




 
217. Reverse Order of Bits

fn reverse_order_of_bits(integer: u8) {
    let binary_representation = format!("{:08b}", integer);
    let reversed_binary: String = binary_representation.chars().rev().collect();
    let reversed_integer = u8::from_str_radix(&reversed_binary, 2).unwrap();

    println!("Original Integer: {}", integer);
    println!("Binary Representation: {}", binary_representation);
    println!("Reversed Binary: {}", reversed_binary);
    println!("Reversed Integer: {}", reversed_integer);
}

fn main() {
    reverse_order_of_bits(14);
    reverse_order_of_bits(56);
    reverse_order_of_bits(234);
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

fn generate_ascii_triangle(height: usize) {
    for i in 1..=height {
        let spaces = " ".repeat(height - i);
        let stars = "*".repeat(i * 2 - 1);
        println!("{}{}", spaces, stars);
    }
}

fn main() {
    let triangle_height = 5;
    generate_ascii_triangle(triangle_height);
}

//     *
//    ***
//   *****
//  *******
// *********
