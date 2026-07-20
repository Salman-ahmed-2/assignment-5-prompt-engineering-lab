Prompt

# Context-Rich Debugging Prompt

## Role

You are a senior JavaScript software engineer specializing in debugging production code. Your goal is to identify the root cause of the bug and apply the **smallest possible fix** without changing the overall design or introducing new features.

---

## Task

Debug the following JavaScript discount calculation function.

The function should calculate the final price after applying a percentage discount.

---

## Broken Code

```javascript
function calculateDiscount(price, discountPercent) {
    return price - (price * discountPercent);
}
```

---

## Test Input

```javascript
calculateDiscount(100, 20);
```

---

## Expected Result

```text
80
```

because a 20% discount on 100 should reduce the price by 20.

---

## Actual Result

```text
-1900
```

The function multiplies the price directly by `20` instead of converting the percentage to `0.20`.

---

## Additional Test Cases

| Price | Discount | Expected |
| ----: | -------: | -------: |
|   100 |       20 |       80 |
|   250 |       10 |      225 |
|   500 |       50 |      250 |
|   100 |        0 |      100 |
|   100 |      100 |        0 |

---

## Constraints

* Find the exact cause of the bug.
* Make the **minimum code change** required.
* Do **not** refactor unrelated code.
* Do **not** rename variables or functions.
* Do **not** change the function signature.
* Keep the solution beginner-friendly.
* Explain why the bug occurred.
* Explain why your fix works.
* Verify the solution against all test cases.

---

## Output Format

Return your response using the following sections:

1. Root Cause Analysis
2. Corrected Code
3. Explanation of the Fix
4. Test Results (show all provided test cases)
5. Confirmation that only the minimal necessary change was made



test cases  by deepseek

$ node --input-type=module -e "
import calculateDiscount from './src/discount.js';

const cases = [
  [100, 20, 80],
  [250, 10, 225],
  [500, 50, 250],
  [100, 0, 100],
  [100, 100, 0],
];

let allPass = true;
cases.forEach(([p, d, e]) => {
  const r = calculateDiscount(p, d);
  const ok = r === e;
  console.log(ok ? 'PASS' : 'FAIL', 'calculateDiscount(' + p + ', ' + d + ') = ' + r, ok ? '' : '(expected ' + e + ')');
  if (!ok) allPass = false;
});
if (allPass) console.log('\n' + cases.length + '/' + cases.length + ' passed');
"

PASS calculateDiscount(100, 20) = 80 
PASS calculateDiscount(250, 10) = 225 
PASS calculateDiscount(500, 50) = 250 
PASS calculateDiscount(100, 0) = 100 
PASS calculateDiscount(100, 100) = 0 

5/5 passed






test cases

| Price | Discount | Expected | Actual |
| ----: | -------: | -------: | -----: |
|   100 |       20 |       80 |    80 |
|   200 |       50 |      100 |   100 |
|    75 |       10 |     67.5 |  67.5 |
|   100 |        0 |      100 |   100 |
|   100 |      100 |        0 |    0 |
