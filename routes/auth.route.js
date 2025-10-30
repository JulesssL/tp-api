import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = "FzyOYW0i/WM4bNHTZTjZIP990Oj0i3c12vWo0PStQvb3o3iNlXdm4jkK3KpLX8/S" ; 

export default class AuthRoute {
    constructor() {
        this.router = express.Router();

        this.router.post("/login", (req, res) => {
            const { username, password } = req.body;

            if (username === "username" && password === "password") {
                const payload = { 
                    id: 101, 
                    username: username,
                    roles: ["client", "user"]
                };

                const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

                return res.status(200).json({ 
                    message: "Token récupéré", 
                    token: token 
                });
            } else {
                return res.status(401).json({ message: "Erreur, body invalide (username=username, password=password)" });
            }
        });
    }
}
