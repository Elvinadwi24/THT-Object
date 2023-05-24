console.log('KAMPUS POLITEKNIK NEGERI MEDAN');
const mahasiswa = {
    namaMahasiswa: 'elvina',
    nim: '2109876554',
    prodi: 'teknikk telekomunukasii',
    angkatan: '21', 
};

const fakultas = [
    { jumlahFakultas: '3', namaFakultas: 'teknik, elektro,teknik telekomunikasi,teknik mesin '},
    { jumlahGedung: '18', namataman: 'taman teknik, taman tataniaga'},
];


const perpustkaan = {
    jumlahPerpus: 5,
    letak: 'sebelah kantin, reuleut',
    jumlahpegawai: 20,
    warnaGedung: 'ungu,abu, , putih',
    jarak: ['2km' , '200km']
};

const makananKantin = {
    namaMakanan: ['mie goreng', 'siomay', 'bakso', 'mie ayam'],
    harga: 10000,
    hitungPembayaran: function (nilai) {
        console.log('dari sebuah object', nilai)
        return nilai;
    },
    pemilik: {
        nama: 'bg jaja',
        alamat: '',
        lamaJualan: '10 tahun',
    }
};

const jurusan = {
    jumlahJurusan: 26,
    jurusanTertua: 'perbangkan',
    lamaberdiri: '40 tahun',
    jurusanBaru: 10,
    namaJurusan: ['ekonomi', 'teknik eletro', 'teknik sipil', 'telkom', 'teknik mesin', 'dll'],
}

console.log(mahasiswa);
console.log(fakultas[0].jumlahFakultas);
console.log(perpustkaan.jarak[1]);
console.log(makananKantin.namaMakanan[0]);
console.log(jurusan.namaJurusan[2]);