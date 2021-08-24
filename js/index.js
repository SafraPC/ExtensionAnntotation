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
  document.body.insertBefore(principalButton, document.body.firstChild);
};

const createModal = () => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.id = "modal";
  const modalMain = document.createElement("div");
  modalMain.classList.add("modalMain");
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modalHeader");
  const modalItem = document.createElement("div");
  modalItem.classList.add("modalItem");
  const modalBody = document.createElement("div");
  modalBody.classList.add("modalBody");
  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modalFooter");

  //add items
  modalMain.appendChild(modalHeader);
  modalMain.appendChild(modalBody);
  modalMain.appendChild(modalFooter);
  modalHeader.appendChild(modalItem);
  modalBody.appendChild(modalItem);
  modalFooter.appendChild(modalItem);
  modal.appendChild(modalMain);
  document.body.insertBefore(modal, document.body.firstChild);

  const openModal = () => {
    modalMain.style.transform = "scaleY(1)";
    modal.style.transform = "scaleY(1)";
    document.body.style.overflow = "hidden";
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
    if (e.target.id === "modal") {
      closeModal();
    }
  };
  /*
  <div class="modal" id="modal">
      <div class="modalMain" id="modalMain">
        <div class="modalHeader">
          <div class="modalItem">
            <h2>Modal title</h2>
          </div>
          <button class="modalClose" id="closeButton">X</button>
        </div>
        <div class="modalBody">
          <div class="modalItem">
            <h3>Modal body</h3>
          </div>
        </div>
        <div class="modalFooter">
          <div class="modalItem" style="align-items: center">
            <button
              class="button"
              id="modalNiceButton"
              style="margin-top: 0; margin-left: auto"
            >
              Nice!
            </button>
          </div>
        </div>
      </div>
    </div>
*/
};

start();
