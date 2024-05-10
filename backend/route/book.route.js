import { Router } from "express";
import { getBook, getFreeBooks } from "../controller/book.controller.js";

const route = Router();

route.get('/', getBook);
route.get('/freebooks', getFreeBooks);

export default route;