const propertiesModel = require('../models/propertiesModel');

function getAll(req, res) {
  const { kota } = req.query;

  const properties = propertiesModel.getAll(kota);

  res.status(200).json(properties);
}

function getById(req, res) {
  const id = parseInt(req.params.id);

  const property = propertiesModel.getById(id);

  if (!property) {
    return res.status(404).json({
      status: 'error',
      message: 'Property tidak ditemukan'
    });
  }

  res.status(200).json(property);
}

function create(req, res) {
  const { judul, tipe, kota, luasM2, harga } = req.body;

  if (!judul || !tipe || !kota || luasM2 === undefined || harga === undefined) {
    return res.status(400).json({
      status: 'error',
      message: 'Data property tidak lengkap'
    });
  }

  const property = propertiesModel.create({
    judul,
    tipe,
    kota,
    luasM2,
    harga
  });

  res.status(201).json(property);
}

function update(req, res) {
  const id = parseInt(req.params.id);

  const property = propertiesModel.update(id, req.body);

  if (!property) {
    return res.status(404).json({
      status: 'error',
      message: 'Property tidak ditemukan'
    });
  }

  res.status(200).json(property);
}

function remove(req, res) {
  const id = parseInt(req.params.id);

  const deleted = propertiesModel.remove(id);

  if (!deleted) {
    return res.status(404).json({
      status: 'error',
      message: 'Property tidak ditemukan'
    });
  }

  res.status(204).send();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};