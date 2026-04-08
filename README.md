Approach

##Q1 
-  Go through every number from L to R.
-  For each one, check if it’s divisible by K, has no 0, and its digit sum is prime.
-  Count the numbers that pass all checks.
-  Complexity:
  Loop from L to R → ~(R - L) iterations
  Digit operations take log₁₀(n)
  Time: O(n log n)
##Q2 
-  Start with N and update it 3 times using the given rules.
-  After that, see if it’s a 3-digit number.
-  Check if the middle digit matches the seed to decide YES or NO.
##Q3 Palindrome + Divisibility
-  Keep increasing X from 0 onwards.
-  Each time, check if N + X is a palindrome and divisible by K.
-  Stop at the first valid X, otherwise return -1.
##Q4 Fare Calculator
-  First calculate the basic fare using base and distance.
-  Then apply extra charges or adjustments based on conditions.
-  Finally round the result up to the nearest multiple of 5.
##Q5 Skipping Numbers
-  Keep adding numbers starting from 1.
-  Skip numbers that are divisible by (seed + 2).
-  Stop when the sum reaches at least N and report the result.
##Q6 Contest Score Judge
-  Calculate the score using the formula given.
-  Fix it if it goes negative and apply penalty if needed.
-  Then decide PASS or FAIL based on the final score.
