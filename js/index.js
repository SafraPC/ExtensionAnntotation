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
  //principal modal elements
  const modal = document.createElement("div");
  modal.classList.add("safraModal");
  modal.id = "safraModal";
  const modalMain = document.createElement("div");
  modalMain.classList.add("safraModalMain");
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("safraModalHeader");
  const modalBody = document.createElement("div");
  modalBody.classList.add("safraModalBody");
  const modalFooter = document.createElement("div");
  modalFooter.classList.add("safraModalFooter");

  //Items
  const modalItemHeader = document.createElement("div");
  modalItemHeader.classList.add("safraModalItem");
  const modalClose = document.createElement("button");
  modalClose.classList.add("safraModalClose");
  modalClose.innerText = "X";

  const modalItemBody = document.createElement("div");
  modalItemBody.classList.add("safraModalItem");

  const modalItemFooter = document.createElement("div");
  modalItemFooter.classList.add("safraModalItem");

  //add items
  //put principal elements in header
  modalMain.appendChild(modalHeader);
  modalMain.appendChild(modalBody);
  modalMain.appendChild(modalFooter);

  //header especifications
  modalHeader.appendChild(modalItemHeader);
  modalItemHeader.appendChild(modalClose);

  //body especifications
  modalBody.appendChild(modalItemBody);
  modalFooter.appendChild(modalItemFooter);

  //create modal
  modal.appendChild(modalMain);

  document.children[0].insertBefore(modal, document.children[0].children[1]);

  const openModal = () => {
    if (modalMain.style.transform !== "scaleY(1)") {
      modalMain.style.transform = "scaleY(1)";
      modal.style.transform = "scaleY(1)";
      document.body.style.overflow = "hidden !important";
    }
  };

  const closeModal = () => {
    if (modalMain.style.transform !== "scaleY(0)") {
      modalMain.style.transform = "scaleY(0)";
      modal.style.transform = "scaleY(0)";
      document.body.style.overflow = "auto";
    }
  };

  const extensionButton = document.getElementsByClassName(
    "safraExtensionButton"
  );
  extensionButton[0].onclick = () => openModal();

  modalClose.onclick = () => closeModal();

  //   modalNiceButton.onclick = () => closeModal();

  modal.onclick = (e) => {
    if (e.target.id === "safraModal") {
      closeModal();
    }
  };
};

start();
