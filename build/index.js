"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.get("/", (_req, res) => {
    res.send("Express Typescript on Vercel");
});
app.get("/ping", (_req, res) => {
    res.send("pong 🏓");
});
app.get("/api", (_req, res) => {
    res.send("API: Hello World!");
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));
