import Laporans from "../models/LaporanModel.js";
import Saldologouts from "../models/SaldologoutModel.js";

export const getSaldologouts = async (req, res) => {
  try {
    const response = await Saldologouts.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getSaldologoutById = async (req, res) => {
  const response = await Saldologouts.findOne({
    where: { uuid: req.params.id },
  });
  if (!response) res.status(404).json({ msg: "Data tidak ditemukan" });
};
export const createSaldologout = async (req, res) => {
  const { saldo, userId, item_terjual } = req.body;

  try {
    const waktu = () => {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      return `${yyyy}-${dd}-${mm}`;
    };
    await Saldologouts.create({
      saldo: saldo,
      userId: userId,
      item_terjual: item_terjual,
    });
    await Laporans.create({
      item_terjual: item_terjual,
      hari: waktu(),
      total_penjualan: saldo,
    });
    res.status(201).json({ msg: "Saldo berhasil dibuat" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateSaldologout = async (req, res) => {
  const { saldo, userId } = req.body;
  const saldologout = await Saldologouts.findOne({
    where: { uuid: req.params.id },
  });
  if (!saldologout)
    return res.status(404).json({ msg: "Data penjualan tidak ditemukan" });
  try {
    await Saldologouts.update(
      {
        saldo: saldo,
        userId: userId,
      },
      { where: { uuid: req.params.id } }
    );
    res.status(200).json({ msg: "Data berhasil di update" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteSaldologout = async (req, res) => {
  const saldologout = await Saldologouts.findOne({
    where: { uuid: req.params.id },
  });
  if (!saldologout)
    return res.status(404).json({ msg: "Data penjualan tidak ditemukan" });
  try {
    await Saldologouts.destroy({ where: { uuid: req.params.id } });
    res.status(200).json({ msg: "Data penjualan berhasil di hapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
