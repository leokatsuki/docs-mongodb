import { insertDocumentLink, removeDocumentLink } from "./index.js";

const socket = io();

socket.emit("getDocument", (documents) => {
  documents.forEach((document) => {
    insertDocumentLink(document.name);
  })
});

function emitEAddDocument(name){
  socket.emit("addDocument", name);
}

socket.on("addDocument_interface", (name) => {
  insertDocumentLink(name);
})

socket.on("existingDocument", (name) => {
  alert(`O document ${name} ja existe!`)
})

socket.on("deleteDocumentSuccess", (name) => {
  removeDocumentLink(name);
})

export {emitEAddDocument}