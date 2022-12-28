import express from 'express';
import { getSaldologins, getSaldologinById, createSaldologin, updateSaldologin, deleteSaldologin } from '../controllers/Saldologin.js';

const router = express.Router();

router.get('/saldologins', getSaldologins);
router.get('/saldologin/:id', getSaldologinById);
router.post('/saldologin', createSaldologin);
router.patch('/saldologin/:id', updateSaldologin);
router.delete('/saldologin/:id', deleteSaldologin);

export default router;
