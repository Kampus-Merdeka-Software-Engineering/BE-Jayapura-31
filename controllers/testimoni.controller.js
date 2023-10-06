const Testimoni = require("../models/testimoni.model");

// CREATE: untuk menambahkan data ke tabel testimoni
exports.create = (req, res) => {
  // validate request
  if (!req.body.review) {
    return res.status(400).send({
      message: "review tidak boleh kosong",
    });
  }

  // mengambil data yang dikirimkan oleh client
  const testimoni = {
    nama_lengkap: req.body.nama_lengkap,
    email: req.body.email,
    layanan: req.body.layanan,
    review: req.body.review,
  };

  // proses menyimpan kedalam database
  Testimoni.create(testimoni)
    .then((data) => {
      res.json({
        message: "Testimoni berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Maaf ada kesalahan saat input data",
        data: null,
      });
    });
};

// READ: menampilkan semua testimoni
exports.findAll = (req, res) => {
  Testimoni.findAll()
    .then((testimoni) => {
      res.json({
        message: "Data testimoni berhasil didapatkan.",
        data: testimoni,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Maaf ada kesalahan saat mengambil data",
        data: null,
      });
    });
};
