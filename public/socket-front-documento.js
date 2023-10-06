import { alertERedirect, updateTextEditor } from "./document.js";

const socket = io();

function selectDocument(name){
  socket.emit("selectDocument", name, (text) => {
    updateTextEditor(text);
  });
}

function emitTextEditor(data){
  socket.emit("text_editor", data);
}

socket.on("clientTextEditor", (text) => {
  updateTextEditor(text);
});

function emitDeleteDocument(name){
  socket.emit("deleteDocument", name);
}

socket.on("deleteDocumentSuccess", (name) => {
  alertERedirect(name);
})

export {emitTextEditor, selectDocument, emitDeleteDocument}