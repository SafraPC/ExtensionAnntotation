const start = () => {
  createButton();
  createModal();
};

//create fixed button element
const createButton = () => {
  const principalButton = document.createElement("div");
  const buttonText = document.createElement("span");
  buttonText.innerText = "Anotações";
  principalButton.classList.add("safraExtensionButton");
  principalButton.appendChild(buttonText);
  //put principal button element in screen
  document.children[0].insertBefore(
    principalButton,
    document.children[0].children[1]
  );
};

const createModal = () => {
  const modal = document.createElement("div");
  modal.classList.add("safraModal");
  modal.id = "safraModal";
  const modalMain = document.createElement("div");
  modalMain.classList.add("safraModalMain");
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("safraModalHeader");
  const modalItem = document.createElement("div");
  modalItem.classList.add("safraModalItem");
  const modalBody = document.createElement("div");
  modalBody.classList.add("safraModalBody");
  const modalFooter = document.createElement("div");
  modalFooter.classList.add("safraModalFooter");

  //add items
  modalMain.appendChild(modalHeader);
  modalMain.appendChild(modalBody);
  modalMain.appendChild(modalFooter);
  modalHeader.appendChild(modalItem);
  modalBody.appendChild(modalItem);
  modalFooter.appendChild(modalItem);
  modal.appendChild(modalMain);
  document.children[0].insertBefore(modal, document.children[0].children[1]);
  const openModal = () => {
    modalMain.style.transform = "scaleY(1)";
    modal.style.transform = "scaleY(1)";
    document.body.style.overflow = "hidden !important";
  };

  const closeModal = () => {
    modalMain.style.transform = "scaleY(0)";
    modal.style.transform = "scaleY(0)";
    document.body.style.overflow = "auto";
  };

  const extensionButton = document.getElementsByClassName(
    "safraExtensionButton"
  );
  console.log(extensionButton);
  extensionButton[0].onclick = () => openModal();
  //   modalButton.onclick = () => openModal();

  //   closeButton.onclick = () => closeModal();

  //   modalNiceButton.onclick = () => closeModal();

  modal.onclick = (e) => {
    if (e.target.id === "safraModal") {
      closeModal();
    }
  };
};

start();
