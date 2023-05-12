// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const section = document.querySelector('section');
section.classList.add('d-flex', 'flex-row', 'flex-wrap', 'justify-content-around', 'mt-4');

function addCharacters(characters) {
  characters.forEach((character) => {
    const charCard = document.createElement('div');
    const image = document.createElement('img');
    const textBox = document.createElement('div');
    const fullName = document.createElement('h2');
    const title = document.createElement('p');

    charCard.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center', 'p-2');
    charCard.addEventListener('mouseenter', (event) => {
      const element = event.target;
      element.style.color = 'white';
      element.style.backgroundColor = '#00435b';
    });
    charCard.addEventListener('mouseleave', (event) => {
      const element = event.target;
      element.style.color = 'black';
      element.style.backgroundColor = '#17a2b8';
    });
    charCard.style.width = '242px';
    charCard.style.height = '450px';

    textBox.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center');
    textBox.style.width = '200px';
    textBox.style.height = '150px';

    image.src = character.imageUrl;
    image.alt = `${character.fullName}`;
    image.style.width = '225px';
    image.style.height = '240px';

    fullName.textContent = character.fullName;
    title.textContent = character.title;
    title.style.textAlign = 'center';

    charCard.append(image);
    textBox.append(fullName);
    textBox.append(title);
    charCard.append(textBox);
    section.appendChild(charCard);
  });
}

function getCharacters() {
  fetch(url)
    .then((response) => response.json())
    .then((characters) => {
      addCharacters(characters);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

getCharacters();
