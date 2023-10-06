import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://leokatsuki:leonardo2732@socketio.5db1kwr.mongodb.net/?retryWrites=true&w=majority")

let colectionDocument;

try {
  await client.connect();

  const db = client.db("websockets");

  colectionDocument = db.collection("documents");

  console.log("Conectado ao banco de dados com sucesso!")
} catch (error) {
  console.log(error)
}

export {colectionDocument};