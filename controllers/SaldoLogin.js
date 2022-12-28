import Saldologins from '../models/SaldologinModel.js';

export const getSaldologins = async (req, res) => {
  try {
    const response = await Saldologins.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getSaldologinById = async (req, res) => {
  const response = await Saldologins.findOne({ where: { uuid: req.params.id } });
  if (!response) res.status(404).json({ msg: 'Data tidak ditemukan' });
};
export const createSaldologin = async (req, res) => {
  const { saldo, userId } = req.body;
  try {
    await Saldologins.create({ saldo: saldo, userId: userId });
    res.status(201).json({ msg: 'Saldo berhasil dibuat' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateSaldologin = async (req, res) => {
  const { saldo, userId } = req.body;
  const saldologin = await Saldologins.findOne({ where: { uuid: req.params.id } });
  if (!saldologin) return res.status(404).json({ msg: 'Data penjualan tidak ditemukan' });
  try {
    await Saldologins.update(
      {
        saldo: saldo,
        userId: userId,
      },
      { where: { uuid: req.params.id } }
    );
    res.status(200).json({ msg: 'Data berhasil di update' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteSaldologin = async (req, res) => {
  const saldologin = await Saldologins.findOne({ where: { uuid: req.params.id } });
  if (!saldologin) return res.status(404).json({ msg: 'Data penjualan tidak ditemukan' });
  try {
    await Saldologins.destroy({ where: { uuid: req.params.id } });
    res.status(200).json({ msg: 'Data penjualan berhasil di hapus' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
