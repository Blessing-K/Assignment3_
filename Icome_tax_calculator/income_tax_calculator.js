"use strict"; // Enable strict mode

// Utility function to select DOM elements
const $ = (selector) => document.querySelector(selector);

// Attach event listener after the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = $("#calculate");
    const taxableIncomeInput = $("#taxableIncome");
    const taxOwedInput = $("#taxOwed");

    // Add a click event listener to the Calculate button
    calculateButton.addEventListener("click", () => {
        const taxableIncome = parseFloat(taxableIncomeInput.value.trim());

        // Validate input
        if (isNaN(taxableIncome) || taxableIncome <= 0) {
            taxOwedInput.value = "Invalid input. Enter a valid income.";
            taxableIncomeInput.focus();
            return;
        }

        // Calculate tax and display the result
        const taxOwed = calculateTax(taxableIncome);
        taxOwedInput.value = `${taxOwed.toFixed(2)}`;

        // Return focus to the income input field
        taxableIncomeInput.focus();
    });
});

// Function to calculate tax based on the 2020 federal tax brackets
function calculateTax(income) {
    if (income <= 9875) {
        return income * 0.10; // 10% for income up to $9,875
    } else if (income <= 40125) {
        return 987.50 + (income - 9875) * 0.12; // 12% for income between $9,875 and $40,125
    } else if (income <= 85525) {
        return 4617.50 + (income - 40125) * 0.22; // 22% for income between $40,125 and $85,525
    } else if (income <= 163300) {
        return 14605.50 + (income - 85525) * 0.24; // 24% for income between $85,525 and $163,300
    } else if (income <= 207350) {
        return 33271.50 + (income - 163300) * 0.32; // 32% for income between $163,300 and $207,350
    } else if (income <= 518400) {
        return 47367.50 + (income - 207350) * 0.35; // 35% for income between $207,350 and $518,400
    } else {
        return 156235.00 + (income - 518400) * 0.37; // 37% for income over $518,400
    }
}
