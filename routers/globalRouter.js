//말그대로 global 전체통용
import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

export const globalRouter = express.Router();

globalRouter.get(routes.home,home);
globalRouter.get(routes.search,search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login,login);
globalRouter.get(routes.logout,logout);


export default globalRouter;