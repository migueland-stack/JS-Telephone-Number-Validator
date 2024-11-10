const validate = () => {
  // Variable Elements
  const inputEl = document.getElementById("user-input");
  const result = document.getElementById("results-div");
  const pattern = /^(?:\+1|1)?\s*(?:\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  // Check if the input field is empty
  if (inputEl.value === "") {
    alert("Please provide a phone number");  // Updated alert message to match the requirement
    return;
  }

  // Check if the input matches the pattern
  if (pattern.test(inputEl.value)) {
    // Valid US number
    result.innerHTML = "Valid US Number: " + inputEl.value;
  } else {
    // Invalid US number
    result.innerHTML = "Invalid US Number: " + inputEl.value;
  }

  // Clean input
  inputEl.value = "";
};

// Clear function
const erase = () => {
  const inputEl = document.getElementById("user-input");
  const result = document.getElementById("results-div");

  // Clear the input value
  inputEl.value = "";

  // Clear the results div content
  result.innerHTML = "";  // Clears the result display as well
};
