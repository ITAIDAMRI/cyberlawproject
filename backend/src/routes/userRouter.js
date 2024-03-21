import { Router } from 'express';
import { login } from '../middleware/authMiddleware.js';
const router = Router();


router.get("/", login)

// router.post('/signup', signup);

// router.post('/login', login);

export default router;
