const elem = document.querySelector("input");
const element = document.querySelector("#validation-message");
const message = document.createElement("p");
message.textContent = "No input";
message.style.color = "black";
element.append(message);

elem.addEventListener("input", handleInput);

function handleInput(e) {
  let input = e.target.value;

  if (input < 0) {
    message.textContent = "Invalid input! Postive numbers only";
    message.style.color = "black";
  } else {
    if (checkForPalindrome(input)) {
      message.textContent = "This is a palindrome!";
      message.style.color = "green";
    } else {
      message.textContent = "This is not a palindrome!";
      message.style.color = "red";
    }
  }

  element.append(message);
}

function checkForPalindrome(number) {
  let numberString = number.toString();
  let splitString = numberString.split("");
  let reverseSplit = splitString.reverse();
  let reversedString = reverseSplit.join("");

  return numberString == reversedString;
}
