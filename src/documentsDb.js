import { colectionDocument } from "./dbConnect.js";

function getDocuments(){
  const documents = colectionDocument.find().toArray();
  return documents;
}

function addDocument(name){
  const result = colectionDocument.insertOne({
    name,
    text: ""
  })

  return result;
}

function findDocument(name){
  const document = colectionDocument.findOne({
    name
  })

  return document;
}

function updateDocument(name, text){
  const update = colectionDocument.updateOne({
    name
  },{
    $set: {
      text
    }
  });

  return update;
}

function deleteDocument(name){
  const result = colectionDocument.deleteOne({
    name
  });

  return result;
}

export {findDocument, updateDocument, getDocuments, addDocument, deleteDocument}