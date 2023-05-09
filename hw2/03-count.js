const input = document.querySelector('#text-input');
const textArea = document.querySelector('#searchable-text');
const searchableText = textArea.textContent;

function handleKeyDown() {
  const searchValue = input.value;
  if (searchValue === '') {
    textArea.textContent = searchableText;
    return;
  }
  const highlightedText = searchableText.replaceAll(
    searchValue,
    `<span style='background-color: yellow;'>${searchValue}</span>`,
  );
  textArea.innerHTML = highlightedText;
}

input.addEventListener('input', handleKeyDown);
