import Product from '../models/ProductModel.js';
import Kategori from '../models/KategoriModel.js';

export const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll({ attributes: ['uuid', 'nama_produk', 'harga', 'stok' ], include: { all: true, attributes: ['nama_produk'] } });
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({ attributes: ['uuid', 'nama_produk', 'harga', 'stok'], where: { uuid: req.params.id }, include: { all: true, attributes: ['nama_produk'] } });
    if (!response) return res.status(404).json({ msg: 'Produk tidak ditemukan' });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
export const createProduct = async (req, res) => {
  if (req.files === null) return res.status(400).json({ msg: 'Tidak ada file yang di upload' });
  const { nama_produk, harga, stok, kategoriId } = req.body;
  try {
    await Product.create({
      nama_produk: nama_produk,
      harga: harga,
      stok: stok,
      kategoriId: kategoriId,
    });
    res.status(201).json({ msg: 'Produk berhasil dibuat' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateProduct = async (req, res) => {
  const product = await Product.findOne({ where: { uuid: req.params.id } });
  if (!product) return res.status(404).json({ msg: 'Produk tidak ditemukan' });
  const { nama_produk, harga, stok, kategoriId } = req.body;
  try {
    await Product.update(
      { nama_produk: nama_produk, harga: harga, stok: stok, kategoriId: kategoriId },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: `${product.nama_produk} berhasil diupdate` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteProduct = async (req, res) => {
  const product = await Product.findOne({ where: { uuid: req.params.id } });
  if (!product) return res.status(404).json({ msg: 'Produk tidak ditemukan' });
  try {
    await Product.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ msg: `${product.nama_produk} berhasil di delete` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};