import AuthController from "../controllers/auth.controller.js";
import { Router } from "express";

export default class AuthRoutes {
    constructor() {
        this.authController = new AuthController();
        this.router = Router();
        this.loadRoutes();
    }

    loadRoutes() {
        this.router.post("/signin", (req, res) => {
            this.authController.signin(req, res);
        });
    }
}