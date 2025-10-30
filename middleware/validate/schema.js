import { z } from 'zod';

export const ClientCreateSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
    email: z.string().email("L'email n'est pas valide."),
    phone: z.string().optional(),
});

export const ClientPatchSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères.").optional(),
    email: z.string().email("L'email n'est pas valide.").optional(),
    phone: z.string().optional(),
}).refine(
    (data) => Object.keys(data).length > 0,
    { message: "Au moins un champ doit être fourni pour la mise à jour." }
);

export const BookingParamsSchema = z.object({
    idRoom: z.string().min(1, "L'ID de la chambre est requis."),
    idClient: z.string().min(1, "L'ID du client est requis."),
});

export const CancelParamsSchema = z.object({
    idBooking: z.string().min(1, "L'ID de la réservation est requis."),
});
