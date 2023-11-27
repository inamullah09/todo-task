import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import { TodoRouter, CompleteRouter, AddRouter } from "./Routes/Routes.js";

mongoose.connect('mongodb+srv://inam54179:inam1234@cluster0.vuyox94.mongodb.net/?retryWrites=true&w=majority');

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(3000, () => console.log("Server running on port 3000!"));


app.use('/get', TodoRouter);
app.use('/add', AddRouter);
app.use('/complete', CompleteRouter);
app.use('/getcompleted', CompleteRouter);



