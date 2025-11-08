import express from 'express';
import passport from 'passport';
import { configurePassport } from '../config/passport.js';
import { register, login, refresh, logout, googleCallback  } from '../controllers/auth.controller.js';

configurePassport();

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', logout);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  googleCallback
);

export default router;