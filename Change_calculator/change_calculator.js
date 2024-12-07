// Shortcut for getting elements by ID
const $ = (id) => document.getElementById(id);

// Function to validate input and process change
const processEntry = () => {
    const changeDue = parseInt($("changeDue").value);

    // Validation
    if (isNaN(changeDue) || changeDue < 0 || changeDue > 99) {
        alert("Please enter a valid amount between 0 and 99.");
        return;
    }

    // Calculate change
    makeChange(changeDue);
};

// Function to calculate quarters, dimes, nickels, and pennies
const makeChange = (amount) => {
    const quarters = Math.floor(amount / 25);
    amount %= 25;

    const dimes = Math.floor(amount / 10);
    amount %= 10;

    const nickels = Math.floor(amount / 5);
    amount %= 5;

    const pennies = amount;

    // Display results
    $("quarters").value = quarters;
    $("dimes").value = dimes;
    $("nickels").value = nickels;
    $("pennies").value = pennies;
};

// Add event listener on button click
document.addEventListener("DOMContentLoaded", () => {
    $("calculate").addEventListener("click", (e) => {
        e.preventDefault(); // Prevent form submission
        processEntry();
    });
});
