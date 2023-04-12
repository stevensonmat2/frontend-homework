const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

function handleInput(e) {
    let input = e.target.value;
    console.log(input)
    let element = document.querySelector("#validation-message");
    let message = document.createElement("p");

    if (input < 0) {
        message.textContent = "Invalid input! Postive numbers only"
        message.style.color = "black";
    }

    else {
        if (checkForPalindrome(input)) {
            message.textContent = "This is a palindrome!"
            message.style.color = "green";
        }

        else {
            message.textContent = "This is not a palindrome!"
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