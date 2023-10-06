import { emitDeleteDocument, emitTextEditor, selectDocument } from "./socket-front-documento.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get("name");

const textEdit = document.getElementById("textEditor");
const documentTitle = document.getElementById("documentTitle");
const deleteButton = document.getElementById("deleteDocument");

documentTitle.textContent = documentName || "Documento sem titulo";

selectDocument(documentName);

textEdit.addEventListener("keyup", () => {
  emitTextEditor({
    text: textEdit.value, 
    documentName
  });
});

function updateTextEditor(text){
  textEdit.value = text;
}

deleteButton.addEventListener("click", () => {
  emitDeleteDocument(documentName);
});

function alertERedirect(name){
  if(name === documentName){
    alert(`Documento ${name} foi excluido!`);
    window.location.href = "/";
  }
}

export { updateTextEditor, alertERedirect };