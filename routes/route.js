import express from 'express';
import { register } from '../controller/usercontroller.js';

const router = express.Router();

router.post('/register', register)

export default router;