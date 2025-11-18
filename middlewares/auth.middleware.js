import jwt from "jsonwebtoken";



const UNAUTHORIZED_MSG = { error: "Unauthorized" };
const FORBIDDEN_MSG = { error: "Forbidden: insufficient role" };

export function requireToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json(UNAUTHORIZED_MSG);
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (err) {
        return res.status(401).json(UNAUTHORIZED_MSG);
    }
}

export function requireRole(requiredRole) {
    return (req, res, next) => {
        // on part du principe que le middleware requireToken est passé avant
        if (!req.user) {
            return res.status(401).json(UNAUTHORIZED_MSG);
        }

        if (req.user.role !== requiredRole) {
            return res.status(403).json(FORBIDDEN_MSG);
        }

        next();
    };
}