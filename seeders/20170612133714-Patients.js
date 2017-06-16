'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Patients', [{
      nama: 'Andi',
      alamat: 'Jl Raya Pondok Indah no. 14, Jakarta Selatan',
      diagnosis: 'sakit perut',
      gender: 'pria',
      tanggal_lahir: new Date('1998-01-11'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Budi',
      alamat: 'Jl Pal Batu 3 Tebet Jakarta Selatan',
      diagnosis: 'sakit gigi',
      gender: 'pria',
      tanggal_lahir: new Date('1977-12-11'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Chandra',
      alamat: 'Jl Jatinegara timur 3, Jakarta Timur',
      diagnosis: 'sakit kepala',
      gender: 'pria',
      tanggal_lahir: new Date('1997-06-21'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Doni',
      alamat: 'Jl Anggur, Jakarta Utara',
      diagnosis: 'sakit kepala',
      gender: 'pria',
      tanggal_lahir: new Date('2000-03-17'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Dina',
      alamat: 'Jl Pete, Jakarta Timur',
      diagnosis: 'sakit gigi',
      gender: 'wanita',
      tanggal_lahir: new Date('1990-07-16'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Dini',
      alamat: 'Jl Jend. Sudirman, Jakarta Pusat',
      diagnosis: 'sakit hati',
      gender: 'wanita',
      tanggal_lahir: new Date('1961-01-21'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Dicky',
      alamat: 'Jl Kacang Polong, Jakarta Barat',
      diagnosis: 'sakit tenggorokan',
      gender: 'pria',
      tanggal_lahir: new Date('1978-04-14'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Susi',
      alamat: 'Jl Suaka, Jakarta Pusat',
      diagnosis: 'sakit encok',
      gender: 'wanita',
      tanggal_lahir: new Date('1988-03-10'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Clara',
      alamat: 'Jl Panglima Polim, Jakarta Selatan',
      diagnosis: 'sakit sariawan',
      gender: 'wanita',
      tanggal_lahir: new Date('1979-07-17'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Ngatiyem',
      alamat: 'Jl Tebet timur dalam, Jakarta Selatan',
      diagnosis: 'sakit perut',
      gender: 'wanita',
      tanggal_lahir: new Date('1990-02-18'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Wendy',
      alamat: 'Jl Kober Kecil, Jakarta Timur',
      diagnosis: 'sakit perut',
      gender: 'pria',
      tanggal_lahir: new Date('2000-05-11'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Surti',
      alamat: 'Jl Cassablanka no. 14, Jakarta Selatan',
      diagnosis: 'sakit jiwa',
      gender: 'wanita',
      tanggal_lahir: new Date('1993-01-11'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Tejo',
      alamat: 'Jl Rasuna Said, Jakarta Selatan',
      diagnosis: 'sakit gigi',
      gender: 'pria',
      tanggal_lahir: new Date('1999-08-18'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Parmin',
      alamat: 'Jl Pemuda 3, Jakarta Timur',
      diagnosis: 'sakit tenggorokan',
      gender: 'pria',
      tanggal_lahir: new Date('1986-07-18'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Arif',
      alamat: 'Jl Sembako, Jakarta Utara',
      diagnosis: 'sakit kepala',
      gender: 'pria',
      tanggal_lahir: new Date('1990-04-21'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Warsimin',
      alamat: 'Jl Rambutan, Jakarta Timur',
      diagnosis: 'sakit jiwa',
      gender: 'pria',
      tanggal_lahir: new Date('1968-11-11'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Ponori',
      alamat: 'Jl Gatot Subroto, Jakarta Selatan',
      diagnosis: 'sakit kepala',
      gender: 'pria',
      tanggal_lahir: new Date('1978-07-07'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Dimas',
      alamat: 'Jl Karet Belakang, Jakarta Selatan',
      diagnosis: 'sakit kepala',
      gender: 'pria',
      tanggal_lahir: new Date('1996-06-16'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Susi',
      alamat: 'Jl Karet Tengsin, Jakarta Pusat',
      diagnosis: 'sakit hati',
      gender: 'wanita',
      tanggal_lahir: new Date('2001-12-12'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Widmer',
      alamat: 'Jl Gajah Mada, Jakarta Barat',
      diagnosis: 'sakit gigi',
      gender: 'pria',
      tanggal_lahir: new Date('1991-03-13'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Warsinah',
      alamat: 'Jl Gotong Royong, Jakarta Selatan',
      diagnosis: 'sakit hati',
      gender: 'wanita',
      tanggal_lahir: new Date('2003-09-11'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Suroso',
      alamat: 'Jl Ciputat Raya, Jakarta Selatan',
      diagnosis: 'sakit perut',
      gender: 'pria',
      tanggal_lahir: new Date('1998-08-19'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Tugiyem',
      alamat: 'Jl Permata, Jakarta Selatan',
      diagnosis: 'sakit perut',
      gender: 'wanita',
      tanggal_lahir: new Date('1977-06-15'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Anto',
      alamat: 'Jl Tebet Barat Tebet Jakarta Selatan',
      diagnosis: 'sakit hati',
      gender: 'pria',
      tanggal_lahir: new Date('1962-08-11'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Lilis',
      alamat: 'Jl Kehakiman, Jakarta Timur',
      diagnosis: 'sakit perut',
      gender: 'pria',
      tanggal_lahir: new Date('1984-11-11'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Umar',
      alamat: 'Jl Pepaya, Jakarta Utara',
      diagnosis: 'sakit kepala',
      gender: 'pria',
      tanggal_lahir: new Date('1958-01-15'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Lastri',
      alamat: 'Jl Umang, Jakarta Timur',
      diagnosis: 'sakit kepala',
      gender: 'pria',
      tanggal_lahir: new Date('1964-04-04'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Laras',
      alamat: 'Jl Menteng, Jakarta Pusat',
      diagnosis: 'sakit hati',
      gender: 'wanita',
      tanggal_lahir: new Date('1956-01-21'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Sariyem',
      alamat: 'Jl Manggis, Jakarta Barat',
      diagnosis: 'sakit hati',
      gender: 'wanita',
      tanggal_lahir: new Date('1978-11-25'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Andreana',
      alamat: 'Jl Posko, Jakarta Pusat',
      diagnosis: 'sakit encok',
      gender: 'pria',
      tanggal_lahir: new Date('1951-06-27'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Warsinah',
      alamat: 'Jl Protokol, Jakarta Selatan',
      diagnosis: 'sakit sariawan',
      gender: 'wanita',
      tanggal_lahir: new Date('1990-09-11'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Tumijan',
      alamat: 'Jl Tebet timur barat, Jakarta Selatan',
      diagnosis: 'sakit perut',
      gender: 'pria',
      tanggal_lahir: new Date('1959-02-12'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'Irfan',
      alamat: 'Jl Kober Kecil, Jakarta Timur',
      diagnosis: 'sakit perut',
      gender: 'pria',
      tanggal_lahir: new Date('1978-10-10'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Wanda',
        alamat: 'Jl Raya Bekatul no. 14, Jakarta Selatan',
        diagnosis: 'sakit gigi',
        gender: 'wanita',
        tanggal_lahir: new Date('1967-11-13'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Ederson',
        alamat: 'Jl Permata Tebet Jakarta Selatan',
        diagnosis: 'sakit paru-paru',
        gender: 'pria',
        tanggal_lahir: new Date('1980-05-15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Vicky',
        alamat: 'Jl Perkasa, Jakarta Timur',
        diagnosis: 'sakit hati',
        gender: 'pria',
        tanggal_lahir: new Date('1998-01-11'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Shinta',
        alamat: 'Jl Medioker, Jakarta Utara',
        diagnosis: 'sakit gigi',
        gender: 'wanita',
        tanggal_lahir: new Date('1977-12-11'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Putu',
        alamat: 'Jl Gede, Jakarta Timur',
        diagnosis: 'sakit sariawan',
        gender: 'pria',
        tanggal_lahir: new Date('1992-01-21'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Erni',
        alamat: 'Jl Semut Merah, Jakarta Pusat',
        diagnosis: 'sakit kepala',
        gender: 'wanita',
        tanggal_lahir: new Date('1978-06-24'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Santoso',
        alamat: 'Jl Widuri, Jakarta Barat',
        diagnosis: 'sakit kepala',
        gender: 'pria',
        tanggal_lahir: new Date('1964-05-17'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Gaga',
        alamat: 'Jl Veteran, Jakarta Pusat',
        diagnosis: 'sakit encok',
        gender: 'pria',
        tanggal_lahir: new Date('1970-04-14'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Fitri',
        alamat: 'Jl Panglima Polim, Jakarta Selatan',
        diagnosis: 'sakit sariawan',
        gender: 'wanita',
        tanggal_lahir: new Date('1958-09-09'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Rinaldo',
        alamat: 'Jl Pembangunan, Jakarta Selatan',
        diagnosis: 'sakit perut',
        gender: 'pria',
        tanggal_lahir: new Date('1975-07-13'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Rasyid',
        alamat: 'Jl Kober Kecil, Jakarta Timur',
        diagnosis: 'sakit perut',
        gender: 'pria',
        tanggal_lahir: new Date('1951-12-27'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Himawan',
        alamat: 'Jl Cassablanka, Jakarta Selatan',
        diagnosis: 'sakit jiwa',
        gender: 'pria',
        tanggal_lahir: new Date('1963-09-01'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Nugroho',
        alamat: 'Jl Pembangunan, Jakarta Selatan',
        diagnosis: 'sakit gigi',
        gender: 'pria',
        tanggal_lahir: new Date('1973-02-19'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Elsa',
        alamat: 'Jl Bangkit, Jakarta Timur',
        diagnosis: 'sakit tenggorokan',
        gender: 'wanita',
        tanggal_lahir: new Date('1976-12-21'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Afla',
        alamat: 'Jl Pluit, Jakarta Utara',
        diagnosis: 'sakit kepala',
        gender: 'wanita',
        tanggal_lahir: new Date('1983-02-21'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Robinho',
        alamat: 'Jl Pakuan, Jakarta Timur',
        diagnosis: 'sakit jiwa',
        gender: 'pria',
        tanggal_lahir: new Date('1993-12-12'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Ronaldo',
        alamat: 'Jl Gatot Subroto, Jakarta Selatan',
        diagnosis: 'sakit kepala',
        gender: 'pria',
        tanggal_lahir: new Date('1965-11-21'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Icardi',
        alamat: 'Jl manggis, Jakarta Selatan',
        diagnosis: 'sakit kepala',
        gender: 'pria',
        tanggal_lahir: new Date('1973-10-23'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Dybala',
        alamat: 'Jl Flamboyan, Jakarta Pusat',
        diagnosis: 'sakit hati',
        gender: 'pria',
        tanggal_lahir: new Date('1993-12-21'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Kroos',
        alamat: 'Jl Paris, Jakarta Barat',
        diagnosis: 'sakit gigi',
        gender: 'pria',
        tanggal_lahir: new Date('1990-06-08'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Rangga',
        alamat: 'Jl Pemuda, Jakarta Selatan',
        diagnosis: 'sakit hati',
        gender: 'pria',
        tanggal_lahir: new Date('1979-04-22'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Deni',
        alamat: 'Jl Jeruk, Jakarta Selatan',
        diagnosis: 'sakit perut',
        gender: 'pria',
        tanggal_lahir: new Date('1974-06-27'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Reza',
        alamat: 'Jl Kucing, Jakarta Selatan',
        diagnosis: 'sakit perut',
        gender: 'pria',
        tanggal_lahir: new Date('1973-03-12'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Halim',
        alamat: 'Jl Bangau, Jakarta Selatan',
        diagnosis: 'sakit hati',
        gender: 'pria',
        tanggal_lahir: new Date('1948-05-15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Katamso',
        alamat: 'Jl Kebagusan, Jakarta Timur',
        diagnosis: 'sakit perut',
        gender: 'pria',
        tanggal_lahir: new Date('1999-09-19'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Pretty',
        alamat: 'Jl Buaya, Jakarta Utara',
        diagnosis: 'sakit kepala',
        gender: 'wanita',
        tanggal_lahir: new Date('1956-04-14'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Tio',
        alamat: 'Jl Diponegoro, Jakarta Timur',
        diagnosis: 'sakit kepala',
        gender: 'pria',
        tanggal_lahir: new Date('1998-01-11'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Milan',
        alamat: 'Jl Milano, Jakarta Pusat',
        diagnosis: 'sakit hati',
        gender: 'pria',
        tanggal_lahir: new Date('1979-08-28'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Zizid',
        alamat: 'Jl Pluit, Jakarta Utara',
        diagnosis: 'sakit hati',
        gender: 'wanita',
        tanggal_lahir: new Date('1977-03-19'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Ani',
        alamat: 'Jl Tunas Merdeka, Jakarta Pusat',
        diagnosis: 'sakit encok',
        gender: 'wanita',
        tanggal_lahir: new Date('1974-04-14'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Uni',
        alamat: 'Jl Pegangsaan Dua, Jakarta Utara',
        diagnosis: 'sakit sariawan',
        gender: 'wanita',
        tanggal_lahir: new Date('1971-06-21'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Robert',
        alamat: 'Jl Cabe, Jakarta Selatan',
        diagnosis: 'sakit perut',
        gender: 'pria',
        tanggal_lahir: new Date('1976-07-18'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nama: 'Harun',
        alamat: 'Jl Flamboyan, Jakarta Timur',
        diagnosis: 'sakit perut',
        gender: 'pria',
        tanggal_lahir: new Date('1977-03-21'),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Shely',
        alamat: 'Jl Beo, Jakarta Timur',
        diagnosis: 'sakit hati',
        gender: 'wanita',
        tanggal_lahir: new Date('1997-11-27'),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Patients', null, {});
  }
};
