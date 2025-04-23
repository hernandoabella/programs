# R Programs

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

### Swap Two Numbers

This program swaps the values of two variables without using a temporary third variable.

```r
# Swap two numbers
a <- 10
b <- 5

# Before swapping
cat("Before swapping: a =", a, "b =", b, "\n")

# Swap values
a <- a + b
b <- a - b
a <- a - b

# After swapping
cat("After swapping: a =", a, "b =", b, "\n")

# Output:
# Before swapping: a = 10 b = 5 
# After swapping: a = 5 b = 10
```

<details>
  <summary>Explanation</summary>
  
  - `a <- 10` and `b <- 5` assign initial values to the variables `a` and `b`.
  - We print the values of `a` and `b` before swapping using `cat()`, which combines and prints the strings and values.
  - The swapping logic uses arithmetic operations:
    - `a <- a + b` stores the sum of `a` and `b` in `a`.
    - `b <- a - b` calculates the original value of `a` (since `a + b - b = a`).
    - `a <- a - b` now calculates the original value of `b` (since `a + b - a = b`).
  - Finally, the values of `a` and `b` are printed after the swap.

  The output will show:
  ```
  Before swapping: a = 10 b = 5 
  After swapping: a = 5 b = 10
  ```
</details>
