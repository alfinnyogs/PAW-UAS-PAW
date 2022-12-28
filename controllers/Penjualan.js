import Kategoris from '../models/KategoriModel.js';
import Laporans from '../models/LaporanModel.js';
import Penjualans from '../models/PenjualanModel.js';
import Products from '../models/ProductModel.js';
import { QueryTypes, Sequelize } from 'sequelize';

export const getPenjualans = async (req, res) => {
  try {
    const response = await Penjualans.findAll({ include: { model: Products, include: { model: Kategoris } } });
     res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getPenjualanById = async (req, res) => {
  try {
    const penjualan = await Penjualans.findOne({ where: { uuid: req.params.id } });
    if (!penjualan) return res.status(404).json({ msg: 'Data penjualan tidak ditemukan' });
    res.status(200).json(penjualan);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const createPenjualan = async (req, res) => {

  const { jumlah, produk_id, total_penjualan } = req.body;

  try {
    await Penjualans.create({ jumlah: jumlah, produk_id: produk_id, total_penjualan: total_penjualan });
    res.status(201).json({ msg: 'Penjualan berhasil dibuat' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updatePenjualan = async (req, res) => {
  const { jumlah, produk_id, total_penjualan } = req.body;
  const penjualan = await Penjualans.findOne({ where: { uuid: req.params.id } });
  if (!penjualan) return res.status(404).json({ msg: 'Data penjualan tidak ditemukan' });
  try {
    await Penjualans.update(
      {
        jumlah: jumlah,
        produk_id,
        total_penjualan,
      },
      { where: { uuid: req.params.id } }
    );
    res.status(200).json({ msg: 'Data berhasil di update' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deletePenjualan = async (req, res) => {
  const penjualan = await Penjualans.findOne({ where: { uuid: req.params.id } });
  if (!penjualan) return res.status(404).json({ msg: 'Data penjualan tidak ditemukan' });
  try {
    await Penjualans.destroy({ where: { uuid: req.params.id } });
    res.status(200).json({ msg: 'Data penjualan berhasil di hapus' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
