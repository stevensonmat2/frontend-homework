// Add your code here
const form = document.querySelector('form');

function handleSubmit(e) {
  e.preventDefault();
  const elementNames = ['full-name', 'email', 'registration-status', 'comments'];
  const formElements = form.elements;
  for (const e in elementNames) {
    const element = formElements[elementNames[e]];
    console.log(`${element.name}: ${element.value}`);
  }

  if (formElements.programmingLanguages) {
    console.log(`${formElements.programmingLanguages.name}: ${formElements.programmingLanguages.checked}`);
  }
  if (formElements.operatingSystems) {
    console.log(`${formElements.operatingSystems.name}: ${formElements.operatingSystems.checked}`);
  }
  if (formElements.fullstackWebdev) {
    console.log(`${formElements.fullstackWebdev.name}: ${formElements.fullstackWebdev.checked}`);
  }
}

form.addEventListener('submit', handleSubmit);
