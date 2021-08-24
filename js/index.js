const start = () => {
  createButton();
};

//create fixed button element
const createButton = () => {
  const principalButton = document.createElement("div");
  const buttonText = document.createElement("span");
  buttonText.innerText = "Anotações";
  principalButton.classList.add("safraExtensionButton");
  principalButton.appendChild(buttonText);
  //put principal button element in screen
  document.body.insertBefore(principalButton, document.body.firstChild);
};

const handleModal = () => {};

start();
