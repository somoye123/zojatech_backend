import express from 'express';
import { getEvents } from '../controllers/calendar';

const router = express.Router();

router.get('/events', getEvents);

export default router;