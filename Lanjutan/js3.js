//Arrow Function
//membuta arrow function
//kalau param cuma 1 tidak ush pake kurung tidak papa
// const tampilNama = nama => {
//     return `Halo, ${nama}`
// }
// console.log(tampilNama('Bayu'))
//kalau lebih dari 1 paramnya wajib pakai kurung
// const tampilNama = (nama,waktu) => {
//     return `Halo, ${nama}, Selamat ${waktu}`
// }
// console.log(tampilNama('Bayu','siang'))
//bisa juga
//kalau isi fungsi hanya return
//implisit return
// const tampilNama = nama => `Halo, ${nama}`
// console.log(tampilNama('Bayu'))
//kalau tidak ada param wajib pakai kurung

//map
//untuk traveling array maka array tersebut akan di map kan kemudian di travel
//dia akan dikembalikan sebagai array
// let mhs = ['bayu',"andra",'dia','angga']
// let jumlahHuruf = mhs.map(function(nama){
//     return nama.length
// })
// console.log(jumlahHuruf)
//bila menggunakan arrow function
// let mhs = ['bayu',"andra",'dia','angga']
// let jumlahHuruf = mhs.map(nama =>nama.length)
// console.log(jumlahHuruf)
//bila dikembalikan sebagai object kurung kurawal harus dibungkus kurung
// let mhs = ['bayu',"andra",'dia','angga']
// let jumlahHuruf = mhs.map(nama =>({nama : nama, jmlhHrf : nama.length}) )
// console.table(jumlahHuruf)
//bisa juga
// let mhs = ['bayu',"andra",'dia','angga']
// let jumlahHuruf = mhs.map(nama =>({ nama, jmlhHrf : nama.length}) )
// console.table(jumlahHuruf)

//konsep this pada arrow function

//constructor function
// const mhs = function () {
//     this.nama = "bayu"
//     this.umur = 33
//     this.sayHello = function() {
//         console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`)
//     }   
// }

// const bayu = new mhs()

//arrow function
//constructor tidak bisa menggunakan arrow function kalau method bisa
//arrow function tidak memiliki this karena this return ke window bukan return obj
// const mhs = function () {
//     this.nama = "bayu"
//     this.umur = 33
//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`)
//     }   
// }

// const bayu = new mhs()

//obj literal
// const mhs1 = {
//     nama = "bayu",
//     umur = 33,
//     sayHello : () => {
//         console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`)
//     }   
// }

//constructor function
// const mhs = function () {
//     this.nama = "bayu"
//     this.umur = 33
//     this.sayHello = function() {
//         console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`)
//     }  

//     setInterval(() => {
//         console.log(this.umur++)
//     },500)
// }

// const bayu = new mhs()
//dom dengan menggunakan arrow function
const box = document.querySelector('.box')
//tidak menggunakan arrow function karena this akan ke window bukan ke parent element
//kita membutuhkan div untuk dimanipulasi domnya sehingga bisa mengarah ke divnya
//bila di eventlistener menggunakan arrow function maka this akan mengambil window karena 
//**INGAT line 108** hoisting sehingga this akan mengambil window
box.addEventListener('click', function () {
    let satu = 'size'
    let dua = 'caption'
    console.log(this)

    //isi akan ditukar
    if (this.classList.contains(satu)){
        [satu,dua] = [dua,satu]
    }
    this.classList.toggle(satu)
    //nunggu bbrp detik baru dijalankan fungsinya
    //pada setTimeout ini menggunakan arrow function karena bila menggunakna function
    //maka akan ambil window 
    //**INGAT** hoisting jadi function dan var akan diambil terlebih dahulu ke global var akan tanpa isi
    //jadi this di setTimeout ini akan mengambil window 
    setTimeout(() => {
        this.classList.toggle('caption')
    },600)
})
//note kita harus memperhatikan hoistingnya dalam pemrogramman js

