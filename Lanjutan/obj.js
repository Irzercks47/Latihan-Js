//cara membuat obj

//1. obj literal
// const mhs = {
//     nama: 'bayu',
//     energi: 10,
//     makan: function makan(porsi) {
//         this.energi = this.energi + porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//         return this.energi
//     }
// }
//kelemahan pada teknik ini adalah kalau membuat obj baru 
//kita harus membuat variabel yang baru dan nama tidak boleh sama meskipun isi obj beda

//2.function declaration
// function Mahasiswa(nama, energi) {
//     const mhs = {}
//     mhs.nama = nama
//     mhs.energi = energi

//     mhs.makan = function (porsi) { 
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//         return this.energi
//     }

//     mhs.main = function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//         return this.energi
//     }

//     return mhs
// }

// let bayu = Mahasiswa('bayu', 20)
//beda dengan literal ini harus di instansi
//cara menggunakan method bayu.main
//
//cara lainnya adalah memisah method dengan obj nya contoh:
// const methodMhs = {
//     makan : function (porsi) { 
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//         return this.energi
//     },

//     main : function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//         return this.energi
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2
//         console.log(`Halo ${this.nama}, selamat tidur!`)
//     }
// }

// function Mahasiswa(nama, energi) {
//     const mhs = {}
//     mhs.nama = nama
//     mhs.energi = energi
//     mhs.makan = methodMhs.makan
//     mhs.main = methodMhs.main
//     mhs.tidur = methodMhs.tidur
//     return mhs
// }
//masih ada kekurangan yaitu 
//bila menambah method baru maka kita harus daftarkan juga di function Mahasiswa
//bila dihapus method nya maka harus dihapus juga

//3.constructor
// function Mahasiswa(nama, energi) {
//     this.nama = nama
//     this.energi = energi

//     this.makan = function (porsi) { 
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//         return this.energi
//     }

//     this.main = function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//         return this.energi
//     }
// }

// let bayu = new Mahasiswa('bayu', 20)
//bedanya dengan function adalah kita tidak usah declare array dan return 
//untuk menggantinya kita menggunakan this kemudian saat membuat instance kita harus beri new

//4.object.create()
//function declaration harus tau bahwa bahwa method yang kita bikin di object punya mahasiswa
//jadi kita harus menggunakan object.create dimana dia bisa menyimpan param ke parent obj nya
//memiliki efektivitas memory namun kita harus mengelola 2 buah object
// const methodMhs = {
//     makan : function (porsi) { 
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//         return this.energi
//     },

//     main : function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//         return this.energi
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2
//         console.log(`Halo ${this.nama}, selamat tidur!`)
//     }
// }

// function Mahasiswa(nama, energi) {
//     //jadi memmbuat object sambil ikut membawa properti dan method methodMhs
//     //sama seperti inheritence
//     const mhs = Object.create(methodMhs)
//     mhs.nama = nama
//     mhs.energi = energi

//     return mhs
// }
//kekurangannya adalah kita harus membuat object untuk support obj utama 
//untuk mengatasi ini kita bisa menggunakan prototype

//5. prototype
//dengan menggunakan this maka js akan membuat obj this dan return this
// function Mahasiswa(nama, energi) {
//     //dia akan membuat 
//     // let mhs = {} atau
//     // let mhs = Object.create(Mahasiswa.prototype) merupakan default
//     //maka kita tidak perlu membuat obj baru
//     this.nama = nama
//     this.energi = energi

//     return mhs
// }

// //untuk membuat method maka kita bisa memanfaatkan protoype
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi
//     return `Halo ${this.nama}, selamat makan!
//     Current energi = ${this.energi}
//     `
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam
//     return `Halo ${this.nama}, selamat bermain!
//     Current energi = ${this.energi}
//     `
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2
//     return `Halo ${this.nama}, selamat tidur!
//     Current energi = ${this.energi}
//     `
// }

// let bayu = new Mahasiswa('bayu', 20)
//kita juga bisa mengubahnya dalam bentuk class

class Mahasiswa {
    constructor(nama,energi){
        this.nama = nama
        this.energi = energi
    }
    makan (porsi) {
        this.energi += porsi
        return `Halo ${this.nama}, selamat makan!
        Current energi = ${this.energi}
        `
    }

    main (jam) {
        this.energi -= jam
        return `Halo ${this.nama}, selamat bermain!
        Current energi = ${this.energi}
        `
    }

    tidur (jam) {
        this.energi += jam * 2
        return `Halo ${this.nama}, selamat tidur!
        Current energi = ${this.energi}
        `
    }
}

let bayu = new Mahasiswa('bayu', 20)
//array ini pasti ada prototype karena dia membawa object array