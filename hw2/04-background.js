// Add your code here
const input = document.querySelector('#interval-input');
const button = document.querySelector('#start-stop');
button.classList.add('start');
const bodyElement = document.querySelector('body');
const maxValue = 255;
let intervalID = NaN;
bodyElement.style.backgroundColor = 'rgb(108 97 219)';

function changeBackgroundColor() {
  const red = Math.floor(Math.random() * maxValue);
  const green = Math.floor(Math.random() * maxValue);
  const blue = Math.floor(Math.random() * maxValue);
  const randomColor = `rgba(${red}, ${green}, ${blue}, 0.5)`;

  bodyElement.style.backgroundColor = randomColor;
}

function handleButtonClick(event) {
  const interval = input.value;
  const buttonClasses = button.classList;

  if (!interval) {
    event.preventDefault();
    alert('Enter integer values only!!!');
    return;
  }
  clearInterval(intervalID);
  if (buttonClasses.contains('btn-primary')) {
    intervalID = setInterval(changeBackgroundColor, interval * 1000);
    buttonClasses.remove('btn-primary');
    buttonClasses.add('btn-danger');
    button.textContent = 'Stop';
  } else {
    buttonClasses.add('btn-primary');
    buttonClasses.remove('btn-danger');
    button.textContent = 'Start';
  }
}

window.addEventListener('load', () => {
  intervalID = setInterval(changeBackgroundColor, 3000);
});
button.addEventListener('click', handleButtonClick);
