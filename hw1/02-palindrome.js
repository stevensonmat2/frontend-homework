const elem = document.querySelector('input');
const element = document.querySelector('#validation-message');
const message = document.createElement('p');

function checkForPalindrome(number) {
  const numberString = number.toString();
  const splitString = numberString.split('');
  const reverseSplit = splitString.reverse();
  const reversedString = reverseSplit.join('');

  return numberString === reversedString;
}

function handleInput(e) {
  const input = e.target.value;

  if (input < 0) {
    message.textContent = 'Invalid input! Postive numbers only';
    message.className = 'text-warning';
  } else if (checkForPalindrome(input)) {
    message.textContent = 'This is a palindrome!';
    message.className = 'text-success';
  } else {
    message.textContent = 'This is not a palindrome!';
    message.className = 'text-danger';
  }

  element.append(message);
}

message.textContent = 'No input';
message.classname = 'text-dark';
element.append(message);
elem.addEventListener('input', handleInput);
