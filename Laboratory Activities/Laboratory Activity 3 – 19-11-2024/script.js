const textInput = document.getElementById("textInput");
const wordCountDisplay = document.getElementById("wordCount");
const sentenceCountDisplay = document.getElementById("sentenceCount");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();

  const words = text.split(/\s+/).filter(word => word !== "");
  const wordCount = words.length;

  const sentences = text.split(/[.!?]+\s/).filter(sentence => sentence !== "");
  const sentenceCount = sentences.length;

  wordCountDisplay.textContent = `Words: ${wordCount}`;
  sentenceCountDisplay.textContent = `Sentences: ${sentenceCount}`;
});
