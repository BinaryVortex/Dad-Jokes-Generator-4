const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// Function to fetch and display a joke
const generateJoke = async () => {
  const config = {
    headers: { Accept: "application/json" },
  };

  try {
    const res = await fetch("https://icanhazdadjoke.com/", config);
    
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    jokeEl.textContent = data.joke;
  } catch (error) {
    jokeEl.textContent = 'Oops! Something went wrong. Please try again later.';
    console.error('Error fetching joke:', error);
  }
};

// Generate a joke on page load
generateJoke();

// Add event listener to button with debouncing to prevent multiple clicks
let debounceTimeout;
jokeBtn.addEventListener("click", () => {
  if (debounceTimeout) clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(generateJoke, 300); // 300ms debounce time
});
