import { addDocument, updateDocument, findDocument, deleteDocument, getDocuments } from "./documentsDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
  socket.on("getDocument", async (returnDocuments) => {
    const documents = await getDocuments();
    
    returnDocuments(documents);
  });

  socket.on("addDocument", async (name) => {
    const ExistingDocument = (await findDocument(name)) !== null;

    if(ExistingDocument) {
      socket.emit("existingDocument", name)
    }else{
      const result = await addDocument(name);
    
      if(result.acknowledged){
        io.emit("addDocument_interface", name)
      }
    }
  })

  socket.on("selectDocument", async (documentName, returnText) => {
    socket.join(documentName);

    const document = await findDocument(documentName);

    if(document){
      returnText(document.text);
    }
  })

  socket.on("text_editor", async ({ text, documentName }) => {
    const update = await updateDocument(documentName, text);

    if(update.modifiedCount){
      socket.to(documentName).emit("clientTextEditor", text);
    }
  });

  socket.on("deleteDocument", async (name) => {
    const result = await deleteDocument(name);

    if(result.deletedCount){
      io.emit("deleteDocumentSuccess", name);
    }
  })
})

