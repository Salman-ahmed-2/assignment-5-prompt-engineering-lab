## Prompt 

## Context-Rich Refactoring Prompt

You are a senior JavaScript engineer reviewing an existing codebase.

The following JavaScript code is intentionally written with poor coding practices for a refactoring exercise. It contains bad variable names, repeated logic, inconsistent formatting, unnecessary temporary variables, and difficult-to-read control flow.

### Your Task

Refactor the code while **preserving its exact behavior**.

### Requirements

- Do **not** add any new features.
- Do **not** change the program's functionality.
- Do **not** modify the inputs or outputs.
- Keep the same public API (function names, parameters, and return values) unless a change is absolutely necessary for readability.
- Remove duplicated logic where appropriate.
- Improve variable and function names.
- Simplify complex conditionals.
- Improve formatting and code organization.
- Eliminate unnecessary temporary variables.
- Keep the implementation easy to read and maintain.
- Preserve all existing edge-case behavior.

### Output Format

Provide your response in the following format:

1. **Refactored Code**
   - Return the complete refactored JavaScript file.

2. **Summary of Changes**
   - List the improvements that were made.

3. **Behavior Verification**
   - Explain why the refactoring does not change the program's behavior.

4. **Potential Future Improvements**
   - Suggest improvements that could be made in the future **without implementing them**, since adding new features is outside the scope of this task.

### Code to Refactor

```javascript
// Paste the contents of src/textAnalyzer.js here
```



## BEFORE:


var data = [
  { n: "Apple", p: 1.5, q: 3, t: "f" },
  { n: "Shirt", p: 25.0, q: 1, t: "c" },
  { n: "Book", p: 12.0, q: 2, t: "b" }
];
var total = 0;
var temp = "";

function DO_THINGS_WITH_STUFF_AND_DATA() {  for (var i = 0; i < data.length; i++) {
    if (data[i].t == "f") {
      var a = data[i].p * data[i].q;
      var b = a * 0.05; 
      var c = a + b;
      total = total + c;
      temp += data[i].n + ": $" + c.toFixed(2) + "\n";
    }
  }

 
  for (var j = 0; j < data.length; j++) {
    if (data[j].t == "c") {
      var x = data[j].p * data[j].q;
      var y = x * 0.10; 
      var z = x + y;
      total = total + z;
      temp += data[j].n + ": $" + z.toFixed(2) + "\n";
    }
  }

  for (var k = 0; k < data.length; k++) {
    if (data[k].t == "b") {
      var q = data[k].p * data[k].q;
      var w = q + 0;
      total = total + w;
      temp += data[k].n + ": $" + w.toFixed(2) + "\n";
    }
  }

 
  if (total > 50) {
    if (total < 100) {
      
      var d = total * 0.05;
      total = total - d;
      temp += "Discount: -$" + d.toFixed(2) + "\n";
    } else {
     
      var d2 = total * 0.10;
      total = total - d2;
      temp += "Discount: -$" + d2.toFixed(2) + "\n";
    }
  } else {
    if (total == 50) {
      
      total = total - 1;
      temp += "Lucky $1 Discount!\n";
    } else {
     
      total = total;
    }
  }

  
  console.log("--- RECEIPT ---");
  console.log(temp);
  console.log("TOTAL IS: $" + total.toFixed(2));
  console.log("---------------");
}

DO_THINGS_WITH_STUFF_AND_DATA();

## AFTER

var items = [
  { name: "Apple", price: 1.5, quantity: 3, type: "f" },
  { name: "Shirt", price: 25.0, quantity: 1, type: "c" },
  { name: "Book", price: 12.0, quantity: 2, type: "b" }
];

var TAX_RATES = {
  f: 0.05,
  c: 0.10,
  b: 0.00
};

function printReceipt() {
  var total = 0;
  var receipt = "";

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var subtotal = item.price * item.quantity;
    var taxRate = TAX_RATES[item.type];
    var tax = subtotal * taxRate;
    var itemTotal = subtotal + tax;

    total += itemTotal;
    receipt += item.name + ": $" + itemTotal.toFixed(2) + "\n";
  }

  if (total > 50) {
    if (total < 100) {
      var discount = total * 0.05;
      total -= discount;
      receipt += "Discount: -$" + discount.toFixed(2) + "\n";
    } else {
      var discount = total * 0.10;
      total -= discount;
      receipt += "Discount: -$" + discount.toFixed(2) + "\n";
    }
  } else if (total == 50) {
    total -= 1;
    receipt += "Lucky $1 Discount!\n";
  }

  console.log("--- RECEIPT ---");
  console.log(receipt);
  console.log("TOTAL IS: $" + total.toFixed(2));
  console.log("---------------");
}

printReceipt();



## 2. Summary of Changes

| Original Code Problem | Refactored Solution |
| :--- | :--- |
| `DO_THINGS_WITH_STUFF_AND_DATA` | Renamed to `printReceipt` for clarity and intent. |
| Cryptic properties (`data`, `n`, `p`, `q`, `t`) | Renamed to semantic names (`items`, `name`, `price`, `quantity`, `type`). |
| Single-letter math variables (`a`, `b`, `c`, `x`, `y`, `z`, `q`, `w`) | Renamed to descriptive variables (`subtotal`, `tax`, `itemTotal`). |
| Verbose reassignment (`total = total - c`) | Shortened using the compound assignment operator (`total -= discount`). |
| Three identical loops over the same array | Merged into a single pass using a `TAX_RATES` lookup object. |
| Redundant addition math (`q + 0` for books) | Cleanly handled implicitly by mapping `TAX_RATES.b = 0.00`. |
| Unscoped string chunking (`temp`) | Renamed to localized `receiptText` (or `receipt`). |
| Deeply nested `if/else` with a useless `total = total` no-op | Flattened into a clean `else if` chain, eliminating the redundant branch. |
| Runaway formatting and missing indentation | Standardized with a clean, consistent 2-space indentation style. |