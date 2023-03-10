import express from 'express';


const router = express.Router();

import * as auth from '../controllers/auth.js';
//get post put delete CRUD
router.get("/", auth.welcome );

export default router;