function calculateTip() {
    // Get the bill amount and tip percentage
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    
    // Calculate the tip amount
    var tipAmount = billAmount * tipPercentage;
    
    // Display the tip amount
    document.getElementById("tipAmount").textContent = "Tip Amount: $" + tipAmount.toFixed(2);
}
