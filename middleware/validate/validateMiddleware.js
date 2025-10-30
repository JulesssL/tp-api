import { ZodError } from 'zod';

export const validate = (schema, source = 'body') => (req, res, next) => {
    try {
        schema.parse(req[source]);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            const errors = error.errors.map(err => ({
                path: err.path.join('.'),
                message: err.message,
                code: err.code,
            }));
            return res.status(400).json({
                message: "Erreur de validation des données de la requête.",
                errors: errors,
            });
        }
        next(error);
    }
};
