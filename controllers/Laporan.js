import Laporans from '../models/LaporanModel.js';

export const getLaporans = async (req, res) => {
  try {
    const response = await Laporans.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getLaporanByMonth = () => {};
export const createLaporan = () => {};
export const updateLaporan = () => {};
export const deleteLaporan = () => {};
