"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.postsRouter = router;
router.get("/", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("No data");
        }
        const posts = yield response.json();
        res.json(posts);
    }
    catch (error) {
        res.status(400).json({ message: "Something went wrong" });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
            throw new Error("No data");
        }
        const post = yield response.json();
        res.json(post);
    }
    catch (error) {
        res.status(400).json({ error });
    }
}));
