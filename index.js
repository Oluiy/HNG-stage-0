"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, {Request, Response} from 'express';
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const luxon_1 = require("luxon");
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT || "8080", 10);
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    const responseData = {
        email: "akinboyewaiyanuoluwa15@gmail.com",
        current_datetime: luxon_1.DateTime.utc().toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'"),
        github_url: "https://github.com/Oluiy/HNG-stage-0",
    };
    res.status(200).json(responseData);
});
app.listen(PORT, "0.0.0.0", () => {
    console.log(`server is running on ${PORT}`);
    console.log(`go to http://localhost:${PORT}`);
});
