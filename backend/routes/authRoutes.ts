import express from 'express';
import { signin, signup, forgotPassword, posts } from '../controllers/AuthController'
import validatePayload from '../middlewares/validatePayload';
import PayloadType from '../utils/payloadTypes';

const router = express.Router();

router.post('/signup', validatePayload(PayloadType.SignUp), signup);
router.post('/signin', validatePayload(PayloadType.SignIn), signin);
router.post('/forgot-password', validatePayload(PayloadType.ForgotPassword), forgotPassword);
router.post('/posts', validatePayload(PayloadType.Posts), posts)

export default router;
