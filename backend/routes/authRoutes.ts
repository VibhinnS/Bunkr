import express from 'express';
import { signin, signup, forgotPassword } from '../controllers/AuthController'
import validatePayload from '../middlewares/validatePayload';

const router = express.Router();

router.post('/signup', validatePayload('signup'), signup);
router.post('/signin', validatePayload('signin'), signin);
router.post('/forgot-password', validatePayload('forgotPassword'), forgotPassword);

export default router;
