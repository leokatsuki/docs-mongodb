import { emitEAddDocument } from "./socket-front-index.js";

const listDocuments = document.getElementById("documentList");
const form = document.getElementById("documentForm");
const inputDocument = document.getElementById("documentInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emitEAddDocument(inputDocument.value);
  inputDocument.value = "";
})

function insertDocumentLink(documentName){
  listDocuments.innerHTML += `
    <div class="flex column">
      <a href="document.html?name=${documentName}" class="recentCard" id="document-${documentName}">
        <img class="recentCardImg" src="../assets/letter.png" alt="">
        <div class="recentCardFooter flex column">
          <span>${documentName}</span>
          <div class="flex-center mt-1">
            <img src="../assets/docs.png" alt="">
            <span class="time">Aberto há 2 horas</span>
            <img src="../assets/three-dots-menu-svgrepo-com.svg" alt="" class="dot2 ml-1">
          </div>
        </div>
      </a>
    </div>
  `
}

function removeDocumentLink(documentName){
  const document = document.getElementById(`document-${documentName}`);

  listDocuments.removeChild(document)
}

export {insertDocumentLink, removeDocumentLink};