// Get the necessary elements from the HTML
const rangeInput = document.getElementById('range');
const generateBtn = document.getElementById('generateBtn');
const resultDiv = document.getElementById('result');

// Add an event listener to the button
generateBtn.addEventListener('click', generateRandomNumber);

// Function to generate a random number
function generateRandomNumber() {
  const range = rangeInput.value;

  // Split the range input into minimum and maximum values
  const [min, max] = range.split('-');

  // Convert the values to integers
  const minValue = parseInt(min);
  const maxValue = parseInt(max);

  // Generate the random number within the range
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  // Display the random number
  resultDiv.textContent = `Generated Random Number: ${randomNumber}`;
}
