"use strict";

// Helper function to get elements by selector
const $ = (selector) => document.querySelector(selector);

// Function to process entries
const processEntries = () => {
  const subtotal = parseFloat($("#subtotal").value);
  const taxRate = parseFloat($("#taxRate").value);

  // Validation
  if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
    alert("Subtotal must be > 0 and < 10000");
    $("#subtotal").focus();
    return;
  }

  if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
    alert("Tax Rate must be > 0 and < 12");
    $("#taxRate").focus();
    return;
  }

  // Calculation
  const salesTax = subtotal * (taxRate / 100);
  const total = subtotal + salesTax;

  // Display results
  $("#salesTax").value = salesTax.toFixed(2);
  $("#total").value = total.toFixed(2);

  // Move cursor back to Subtotal
  $("#subtotal").focus();
};

// Function to clear all inputs
const clearEntries = () => {
  $("#subtotal").value = "";
  $("#taxRate").value = "";
  $("#salesTax").value = "";
  $("#total").value = "";
  $("#subtotal").focus();
};

// Clear individual fields on focus
const clearField = (field) => {
  $(field).value = "";
};

// Event handlers
document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#clear").addEventListener("click", clearEntries);

  $("#subtotal").addEventListener("focus", () => clearField("#subtotal"));
  $("#taxRate").addEventListener("focus", () => clearField("#taxRate"));

  // Set initial focus
  $("#subtotal").focus();
});
