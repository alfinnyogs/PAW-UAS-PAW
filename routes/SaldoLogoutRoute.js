import express from 'express';
import { getSaldologouts, getSaldologoutById, createSaldologout, updateSaldologout, deleteSaldologout } from '../controllers/Saldologout.js';

const router = express.Router();

router.get('/saldologins', getSaldologouts);
router.get('/saldologout/:id', getSaldologoutById);
router.post('/saldologout', createSaldologout);
router.patch('/saldologout/:id', updateSaldologout);
router.delete('/saldologout/:id', deleteSaldologout);

export default router;
