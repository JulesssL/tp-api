import jwt from 'jsonwebtoken';

export default class AuthService {
    constructor() {
        this.secretKey = process.env.JWT_SECRET;
        console.log('JWT Secret Key:', this.secretKey);
    }

    login(login, password) {
        const payload = { username: login, role: null };
        if (login === 'admin' && password === 'adminpassword') {
            payload.role = 'admin';

        } else if (login === 'user' && password === 'userpassword') {
            payload.role = 'user';
        } else {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign(payload, this.secretKey, { expiresIn: '1h' });
        return { token };
    }
}