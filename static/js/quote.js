async function fetchQuote() {
  try {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    document.getElementById('quote-container').innerText = `"${data.content}"`;
    document.getElementById('author').innerText = `— ${data.author}`;
  } catch (e) {
    document.getElementById('quote-container').innerText = "Sorry, couldn't fetch a quote right now.";
  }
}
fetchQuote();

