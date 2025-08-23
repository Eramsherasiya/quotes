const quotes = {
  motivation: [
    { text: "Push yourself, because no one else will do it for you.", author: "Unknown" },
    { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
    { text: "Don’t stop until you’re proud.", author: "Unknown" }
  ],
  life: [
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "Happiness is not by chance, but by choice.", author: "Jim Rohn" },
    { text: "Enjoy the little things in life.", author: "Robert Breault" }
  ],
  love: [
    { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
    { text: "Where there is love there is life.", author: "Mahatma Gandhi" },
    { text: "We accept the love we think we deserve.", author: "Stephen Chbosky" }
  ],
  fun: [
    { text: "I am on a seafood diet. I see food and I eat it.", author: "Unknown" },
    { text: "I’m not lazy, I’m just on energy-saving mode.", author: "Unknown" },
    { text: "Why don’t scientists trust atoms? Because they make up everything.", author: "Unknown" }
  ]
};

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const categoryEl = document.getElementById("category");
const newQuoteBtn = document.getElementById("newQuote");
const copyBtn = document.getElementById("copy");
const tweetBtn = document.getElementById("tweet");
const autoMode = document.getElementById("autoMode");

let autoInterval;

function getRandomQuote() {
  const category = categoryEl.value;
  const categoryQuotes = quotes[category];
  const random = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
  quoteEl.textContent = `"${random.text}"`;
  authorEl.textContent = `– ${random.author}`;
}

newQuoteBtn.addEventListener("click", getRandomQuote);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${quoteEl.textContent} ${authorEl.textContent}`);
  alert("✅ Quote copied to clipboard!");
});

tweetBtn.addEventListener("click", () => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteEl.textContent + " " + authorEl.textContent)}`;
  window.open(tweetUrl, "_blank");
});

autoMode.addEventListener("change", () => {
  if (autoMode.checked) {
    autoInterval = setInterval(getRandomQuote, 5000);
  } else {
    clearInterval(autoInterval);
  }
});
