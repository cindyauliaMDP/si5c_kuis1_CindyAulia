let properties = [
  {
    id: 1,
    judul: 'Rumah Minimalis 2 Lantai',
    tipe: 'rumah',
    kota: 'Surabaya',
    luasM2: 120,
    harga: 1250000000
  },
  {
    id: 2,
    judul: 'Apartemen Modern',
    tipe: 'apartemen',
    kota: 'Jakarta',
    luasM2: 45,
    harga: 850000000
  },
  {
    id: 3,
    judul: 'Ruko Strategis',
    tipe: 'ruko',
    kota: 'Bandung',
    luasM2: 100,
    harga: 1500000000
  }
];

let nextId = 4;

function getAll(kota) {
  if (kota) return properties.filter((p) => p.kota === kota);
  return properties;
}

function getById(id) {
  return properties.find((p) => p.id === id);
}

function create(data) {
  const baru = { id: nextId++, ...data };
  properties.push(baru);
  return baru;
}

function update(id, data) {
  const index = properties.findIndex((p) => p.id === id);

  if (index === -1) return null;

  properties[index] = { ...properties[index], ...data, id };

  return properties[index];
}

function remove(id) {
  const index = properties.findIndex((p) => p.id === id);

  if (index === -1) return false;

  properties.splice(index, 1);

  return true;
}

module.exports = { getAll, getById, create, update, remove };