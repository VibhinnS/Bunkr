import express from 'express';
import { signin, signup, forgotPassword, posts } from '../controllers/AuthController'
import validatePayload from '../middlewares/validatePayload';

const router = express.Router();

router.post('/signup', validatePayload('signup'), signup);
router.post('/signin', validatePayload('signin'), signin);
router.post('/forgot-password', validatePayload('forgotPassword'), forgotPassword);
router.post('/posts', validatePayload('posts'), posts)

export default router;
