import express from 'express';
import { Router } from 'express';
import {signup,login} from "../controller/user.controller.js"

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;