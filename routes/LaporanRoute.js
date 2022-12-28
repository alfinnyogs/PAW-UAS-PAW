import express from 'express';
import { getLaporans, getLaporanByMonth, createLaporan, updateLaporan, deleteLaporan } from '../controllers/Laporan.js';

const router = express.Router();

router.get('/laporans', getLaporans);
router.get('/laporan/:id', getLaporanByMonth);
router.post('/laporan', createLaporan);
router.patch('/laporan/:id', updateLaporan);
router.delete('/laporan/:id', deleteLaporan);

export default router;
