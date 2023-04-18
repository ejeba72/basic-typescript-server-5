"use strict";
// I perceive it is redundant to explicitly indicate the types in an express server, but I'm doing so for the sake of learning TypeScript as well as deepen my understanding of the various data types.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Application } from 'express';
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dev_route_1 = __importDefault(require("./routes/dev.route"));
dotenv_1.default.config();
// const app: Application = express();
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT);
app.use('/dev', dev_route_1.default);
app.listen(PORT, () => {
    console.log(`Server is attentively listening for requests @ http://127.0.0.1:${PORT}`);
});
