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
