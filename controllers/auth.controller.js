import AuthService from '../services/auth.service.js';

export default class AuthController {
    constructor() {
        this.authService = new AuthService();
    }

    signin(req, res) {
        const { login, password } = req.body;
        try {
            const result = this.authService.login(login, password);
            res.status(200).json(result).send();
        } catch (error) {
            res.status(401).json({ message: error.message }).send();
        }
    }
}