"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  const phonePattern = /^\d{3}-\d{3}-\d{4}$|^\d{10}$/; 

  $("#arrival-date").focus();

  $("#reservation-form").addEventListener("submit", (event) => {
    let isValid = true;

    clearErrors();

    const arrivalDate = $("#arrival-date").value.trim();
    const nights = $("#nights").value.trim();
    const email = $("#email").value.trim();
    const phone = $("#phone").value.trim();

    console.log("Validating form...");

    if (arrivalDate === "") {
      showError("#arrival-date", "Arrival date is required.");
      isValid = false;
    } else if (!datePattern.test(arrivalDate)) {
      showError("#arrival-date", "Date must be in MM/DD/YYYY format.");
      isValid = false;
    }

    if (nights === "") {
      showError("#nights", "Number of nights is required.");
      isValid = false;
    } else if (isNaN(nights)) {
      showError("#nights", "Must be numeric.");
      isValid = false;
    }

    if (email === "") {
      showError("#email", "Email is required.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      showError("#email", "Must be a valid email address.");
      isValid = false;
    }

    if (phone === "" || !phonePattern.test(phone)) {
        showError("#phone", "Phone number must be in the format 999-999-9999 or 9999999999.");
        isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  const showError = (selector, message) => {
    console.log(`Showing error for: ${selector}`);
    const field = $(selector);
    if (field) {
      const error = document.createElement("span");
      error.className = "error";
      error.textContent = "* " + message;
      field.insertAdjacentElement("afterend", error);
    } else {
      console.error(`Field not found for selector: ${selector}`);
    }
  };

  const clearErrors = () => {
    const errors = document.querySelectorAll(".error");
    console.log("Clearing errors...");
    errors.forEach((error) => {
      console.log("Removing error:", error.textContent);
      error.remove();
    });
  };
});
