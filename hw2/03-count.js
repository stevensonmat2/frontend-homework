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
    `<mark class='font-weight-normal' style='background-color: yellow;'>${searchValue}</mark>`,
  );
  textArea.innerHTML = highlightedText;
}

input.addEventListener('input', handleKeyDown);
