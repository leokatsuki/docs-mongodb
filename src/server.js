import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

import "./dbConnect.js";

const app = express();
const PORT = process.env.port || 3000;

const route = url.fileURLToPath(import.meta.url);
const publicDir = path.join(route, "../..", "public");
app.use(express.static(publicDir));

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));

const io = new Server(httpServer);

export default io;