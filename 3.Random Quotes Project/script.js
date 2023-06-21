// List of quotes
const quotes = [
    "The only true wisdom is in knowing you know nothing.",
    "An unexamined life is not worth living.",
    "I cannot teach anybody anything. I can only make them think.",
    "The unexamined life is not worth living.",
    "To find yourself, think for yourself.",
    "Wisdom begins in wonder.",
    "I know that I am intelligent because I know that I know nothing.",
    "True knowledge exists in knowing that you know nothing.",
    "Education is the kindling of a flame, not the filling of a vessel.",
    "He who is not a good servant will not be a good master.",
  ];
  
  // Function to generate a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Display a random quote when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = getRandomQuote();
  });
  
  // Event listener for the "New Quote" button
  const newQuoteButton = document.getElementById('new-quote');
  newQuoteButton.addEventListener('click', function() {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = getRandomQuote();
  });
  