import express from 'express';
import { getPenjualans, getPenjualanById, createPenjualan, updatePenjualan, deletePenjualan } from '../controllers/Penjualan.js';

const router = express.Router();

router.get('/penjualans', getPenjualans);
router.get('/penjualan/:id', getPenjualanById);
router.post('/penjualans', createPenjualan);
router.patch('/penjualan/:id', updatePenjualan);
router.delete('/penjualan/:id', deletePenjualan);

export default router;
