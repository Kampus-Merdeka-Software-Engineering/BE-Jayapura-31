const Konseling = require("../models/konseling.model");
const transporter = require('../config/nodemailer.config');

// CREATE: untuk menambahkan data ke tabel konseling
exports.create = (req, res) => {
  // validate request
  if (!req.body.nama_lengkap) {
    return res.status(400).send({
      message: "nama tidak boleh kosong",
    });
  } else if (!req.body.email) {
    return res.status(400).send({
      message: "email tidak boleh kosong",
    });
  } else if (!req.body.nomor_whatsapp) {
    return res.status(400).send({
      message: "no whatsapp tidak boleh kosong",
    });
  } else if (!req.body.usia) {
    return res.status(400).send({
      message: "umur tidak boleh kosong",
    });
  } else if (!req.body.tanggal_konseling) {
    return res.status(400).send({
      message: "tanggal konseling tidak boleh kosong",
    });
  } else if (!req.body.layanan) {
    return res.status(400).send({
      message: "jenis layanan tidak boleh kosong",
    });
  }
  
  //konselor decision
  if (req.body.layanan == "Individual") {
    konselor =  "Floriane Cheryl Hendarsah"
  } else if (req.body.layanan == "Family" ){
    konselor =  "Fiqih Pavita Andharluana" 
  } else if (req.body.layanan == "Depression" ){
    konselor =  "Nadhir Rotun Nikmah" 
  } else if (req.body.layanan == "Anxiety" ){
    konselor =  "Dila Jumrotin Fadhila" 
  }
  // mengambil data yang dikirimkan oleh client
  const konseling = {
    nama_lengkap: req.body.nama_lengkap,
    email: req.body.email,
    nomor_whatsapp: req.body.nomor_whatsapp,
    usia: req.body.usia,
    tanggal_konseling: req.body.tanggal_konseling,
    layanan: req.body.layanan,
  };
  const dataEmail = {
    from: 'talkspace34@gmail.com',
    to: req.body.email,
    subject: 'Hallo, TalkSpace Member!',
    text: `
    Selamat Datang Di TalkSpace!


    Terimakasih telah melakukan pemesanan konseling di Talk Space. Sesi konsultasi akan dilakukannya melalui WhatsApp dan konselor akan menghubungi sesuai jadwal yang telah ditentukan.
    Berikut informasi diri anda 

    Nama Lengkap: ${konseling.nama_lengkap}
    Usia : ${konseling.usia}
    Tanggal Konsultasi : ${konseling.tanggal_konseling}
    Jenis Layanan : ${konseling.layanan}
    Konselor : ${konselor} 
    
    Selamat menjadi lebih baik!
    Tim TalkSpace.`, // Email body
  };
  //check existing tanggal konseling
  const tanggal_konseling = konseling.tanggal_konseling
  Konseling.findOne({ where: { tanggal_konseling } })
  .then((checkTanggal) => {
    if (checkTanggal) {
      return res.status(400).json({ error: 'Tanggal konseling duplikat, silahkan pilih tanggal lain' });
    }

    // proses menyimpan kedalam database
    Konseling.create(konseling)
    .then((data) => {
      transporter.sendMail(dataEmail, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.json({
        message: "Konseling berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Maaf ada kesalahan saat input data",
        data: null,
      });
    });

  })
  .catch((error) => {
    console.error('error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  });
};

// READ: menampilkan semua konseling
exports.findAll = (req, res) => {
  Konseling.findAll()
    .then((konseling) => {
      res.json({
        message: "Data konseling berhasil didapatkan.",
        data: konseling,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Maaf ada kesalahan saat mengambil data",
        data: null,
      });
    });
};
