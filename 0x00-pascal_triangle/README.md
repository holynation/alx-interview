# 0x00. Pascal's Triangle

## Tasks

### 0. Pascal's Triangle

mandatory

Score:  0.0%  (Checks completed: 0.0%)

Create a function  `def pascal_triangle(n):`  that returns a list of lists of integers representing the Pascal’s triangle of  `n`:

-   Returns an empty list if  `n <= 0`
-   You can assume  `n`  will be always an integer

```
guillaume@ubuntu:~/0x00$ cat 0-main.py
#!/usr/bin/python3
"""
0-main
"""
pascal_triangle = __import__('0-pascal_triangle').pascal_triangle

def print_triangle(triangle):
    """
    Print the triangle
    """
    for row in triangle:
        print("[{}]".format(",".join([str(x) for x in row])))


if __name__ == "__main__":
    print_triangle(pascal_triangle(5))

guillaume@ubuntu:~/0x00$ 
guillaume@ubuntu:~/0x00$ ./0-main.py
[1]
[1,1]
[1,2,1]
[1,3,3,1]
[1,4,6,4,1]
guillaume@ubuntu:~/0x00$ 

```

**Repo:**

-   GitHub repository:  `alx-interview`
-   Directory:  `0x00-pascal_triangle`
-   File:  `0-pascal_triangle.py`

Done?  Help  Check your code  Ask for a new correction  QA Review


![pascal](https://user-images.githubusercontent.com/44834632/143431774-a28ac101-d89a-4b79-83ae-749f4e0d57f9.gif)

(***Image courtesy of wikipedia***)

## Algorithm

This is how i implemented it:

START

  Step  1 - Create an empty list to store results
  
  Step  2 - Return same list if N is 0 or less than 0.
  
  Step  3 - Append a list with `1` to list created in step 1
  
  Step  4 - Take number of rows to be printed, n.
  
  Step  3 - Make outer iteration I for n times to print rows
  
  Step  4 - Make inner iteration for J to row I (N - 1)
  
  Step  5 - Add the two numbers in the current row and store it in the next row (N - 1)
  
  Step  6 - Append the row to the initial list
  
  Step  7 - Close inner loop
  
  Step  8 - Close outer loop
  
  Step  9 - Return list created in Step 1
  
STOP

Copyright © 2023 ALX, All rights reserved.
