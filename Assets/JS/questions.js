const levels = [
  // Level 1 (4 options)
  [
    {
      question: "Siapa proklamator kemerdekaan Indonesia?",
      options: [
        { text: "Soekarno", image: "Assets/Img/soekarno.jpg" },
        { text: "Hatta", image: "Assets/Img/hatta.jpg" },
        { text: "Soeharto", image: "Assets/Img/soeharto.jpeg" },
        { text: "Jokowi", image: "Assets/Img/jokowi.jpeg" }
      ],
      answer: "Soekarno"
    },
    {
      question: "Siapakah wakil presiden pertama Indonesia?",
      options: [
        { text: "Hatta", image: "Assets/Img/hatta.jpg" },
        { text: "Soeharto", image: "Assets/Img/soeharto.jpeg" },
        { text: "Gus Dur", image: "Assets/Img/Gusdur.jpeg" },
        { text: "Megawati", image: "Assets/Img/Megawati.jpeg" }
      ],
      answer: "Hatta"
    }
  ],
  // Level 2 (5 options)
  [
    {
      question: "Apa nama kerajaan Hindu pertama di Indonesia?",
      options: [
        { text: "Majapahit", image: "Assets/Img/Majapahit.jpeg" },
        { text: "Sriwijaya", image: "Assets/Img/Sriwijaya.jpeg" },
        { text: "Kutai", image: "Assets/Img/Kutai.jpeg" },
        { text: "Tarumanegara", image: "Assets/Img/Tarumanegara.jpeg" },
        { text: "Singasari", image: "Assets/Img/Singasari.jpeg" }
      ],
      answer: "Kutai"
    },
    {
      question: "Siapa penulis kitab Sutasoma?",
      options: [
        { text: "Mpu Tantular", image: "Assets/Img/Mpu Tantular.jpeg" },
        { text: "Mpu Gandring", image: "Assets/Img/Mpu Gandring.jpeg" },
        { text: "Mpu Sedah", image: "Assets/Img/Mpu Sedah.jpg" },
        { text: "Mpu Prapanca", image: "Assets/Img/Mpu Prapanca.jpeg" },
        { text: "Mpu Kanwa", image: "Assets/Img/Mpu Kanwa.jpeg" }
      ],
      answer: "Mpu Tantular"
    }
  ],
  // Level 3 (6 options)
  [
    {
      question: "Siapa tokoh pahlawan nasional yang dikenal dengan 'Pejuang Kemerdekaan Aceh'?",
      options: [
        { text: "Cut Nyak Dien", image: "Assets/Img/Cut Nyak Dien.jpeg" },
        { text: "Teuku Umar", image: "Assets/Img/Teuku Umar.jpeg" },
        { text: "Pangeran Diponegoro", image: "Assets/Img/Pangeran Diponegoro.jpeg" },
        { text: "Si Pitung", image: "Assets/Img/Si Pitung.jpeg" },
        { text: "Sudirman", image: "Assets/Img/Sudirman.jpeg" },
        { text: "Sisingamangaraja", image: "Assets/Img/Sisingamangraja.jpeg" }
      ],
      answer: "Teuku Umar"
    },
    
    {
      question: "Apa nama bendera perjuangan Indonesia yang digunakan pada masa pergerakan nasional?",
      options: [
        { text: "Merah Putih", image: "Assets/Img/Merah Putih.jpeg" },
        { text: "Bintang Kejora", image: "Assets/Img/Bintang Kejora.jpg" },
        { text: "Bendera Merah", image: "Assets/Img/Merah.jpeg" },
        { text: "Bendera Kuning", image: "Assets/Img/Kuning.jpeg" },
        { text: "Bendera Garuda", image: "Assets/Img/Garuda.png" },
        { text: "Bendera Belanda", image: "Assets/Img/Belanda.jpeg" }
      ],
      answer: "Merah Putih"
    }
  ],
  // Level 4 (7 options)
  [
    {
      question: "Siapakah presiden Indonesia yang pertama?",
      options: [
        { text: "Soekarno", image: "Assets/Img/soekarno.jpg" },
        { text: "Soeharto", image: "Assets/Img/soeharto.jpeg" },
        { text: "Habibie", image: "Assets/Img/Habibie.jpeg" },
        { text: "Gus Dur", image: "Assets/Img/Gusdur.jpeg" },
        { text: "Megawati", image: "Assets/Img/Megawati.jpeg" },
        { text: "Jokowi", image: "Assets/Img/jokowi.jpeg" },
        { text: "SBY", image: "Assets/Img/SBY.jpeg" }
      ],
      answer: "Soekarno"
    },
    {
      question: "Siapakah presiden Indonesia yang memerintah pada tahun 1998?",
      options: [
        { text: "Soekarno", image: "Assets/Img/soekarno.jpg" },
        { text: "Soeharto", image: "Assets/Img/soeharto.jpeg" },
        { text: "BJ Habibie", image: "Assets/Img/Habibie.jpeg" },
        { text: "Abdurrahman Wahid (Gus Dur)", image: "Assets/Img/Gusdur.jpeg" },
        { text: "Megawati Soekarnoputri", image: "Assets/Img/Megawati.jpeg" },
        { text: "Susilo Bambang Yudhoyono (SBY)", image: "Assets/Img/SBY.jpeg" },
        { text: "Joko Widodo (Jokowi)", image: "Assets/Img/jokowi.jpeg" }
      ],
      answer: "BJ Habibie"
    },
    
  ],
  // Level 5 (8 options)
  [
    {
      question: "Apa nama kerajaan Islam pertama di Indonesia?",
      options: [
        { text: "Demak", image: "Assets/Img/Demak.jpeg" },
        { text: "Mataram", image: "Assets/Img/Mataram.jpeg" },
        { text: "Majapahit", image: "Assets/Img/Majapahit.jpeg" },
        { text: "Sriwijaya", image: "Assets/Img/Sriwijaya.jpeg" },
        { text: "Aceh", image: "Assets/Img/Aceh.jpeg" },
        { text: "Banten", image: "Assets/Img/Banten.jpeg" },
        { text: "Cirebon", image: "Assets/Img/Cirbon.jpeg" },
        { text: "Malaka", image: "Assets/Img/Malaka.jpeg" }
      ],
      answer: "Demak"
    },
    {
      question: "Siapa pendiri Kerajaan Majapahit?",
      options: [
        { text: "Hayam Wuruk", image: "Assets/Img/Hayam Wuruk.jpeg" },
        { text: "Gajah Mada", image: "Assets/Img/Gajah Mada.jpeg" },
        { text: "Raden Wijaya", image: "Assets/Img/Raden Wijaya.jpeg" },
        { text: "Brawijaya", image: "Assets/Img/Brawijaya.jpg" },
        { text: "Kertanegara", image: "Assets/Img/Kartanegara.jpeg" },
        { text: "Jayanegara", image: "Assets/Img/Jayanegara.jpeg" },
        { text: "Suhita", image: "Assets/Img/Suhita.jpeg" },
        { text: "Rajasa", image: "Assets/Img/Rajasa.jpeg" }
      ],
      answer: "Raden Wijaya"
    }
  ],
  // Level 6 (9 options)
  [
    {
      question: "Siapakah pahlawan nasional wanita yang berasal dari Aceh?",
      options: [
        { text: "R.A. Kartini", image: "Assets/Img/Kartini.jpeg" },
        { text: "Cut Nyak Dien", image: "Assets/Img/Cut Nyak Dien.jpeg" },
        { text: "Martha Christina Tiahahu", image: "Assets/Img/Martha.jpeg" },
        { text: "Dewi Sartika", image: "Assets/Img/Sartika.jpeg" },
        { text: "Nyi Ageng Serang", image: "Assets/Img/Nyi Ageng Serang.jpeg" },
        { text: "Tjut Meutia", image: "Assets/Img/Tjut Meutia.jpeg" },
        { text: "Fatmawati", image: "Assets/Img/Fatmawati.jpeg" },
        { text: "Maria Walanda Maramis", image: "Assets/Img/Maria Welanda Maramis.jpeg" },
        { text: "Siti Hartinah", image: "Assets/Img/Siti Hartinah.jpeg" }
      ],
      answer: "Cut Nyak Dien"
    },
    {
      question: "Siapakah yang dikenal sebagai Bapak Pendidikan Nasional?",
      options: [
        { text: "Soekarno", image: "Assets/Img/soekarno.jpg" },
        { text: "Ki Hajar Dewantara", image: "Assets/Img/Ki Hajar Dewantara.jpeg" },
        { text: "Sudirman", image: "Assets/Img/Sudirman.jpeg" },
        { text: "Soeharto", image: "Assets/Img/soeharto.jpeg" },
        { text: "Hatta", image: "Assets/Img/hatta.jpg" },
        { text: "Bung Tomo", image: "Assets/Img/Bung Tomo.jpeg" },
        { text: "Mohammad Yamin", image: "Assets/Img/Moh Yamin.jpeg" },
        { text: "Pattimura", image: "Assets/Img/Pattimura.jpeg" },
        { text: "Djuanda Kartawidjaja", image: "Assets/Img/Djuanda Kartawidjaja.jpeg" }
      ],
      answer: "Ki Hajar Dewantara"
    }
  ]
];

