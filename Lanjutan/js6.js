//destructuring
//array destructuring menggunakan [] 
// const coba = ['satu','dua','tiga']

// const [a,b,c] = coba
// console.log(a)
// console.log(b)
// console.log(c)

//object destructuring menggunakan {}
// const mhs = {
//     nama: 'bayu',
//     umur: 33,
//     email: "bayu@gmail.com"
// }

// const {nama,umur,email} = mhs
// console.log(nama)
// console.log(umur)
// console.log(email)

// const perkenalan = ['halo','nama','saya','bayu']

// const salam = perkenalan[0]
// const jeneng = perkenalan[1]
// const saya = perkenalan [2]
// const bayu = perkenalan[3]

// console.log(`${salam} ${jeneng} ${saya} ${bayu}`)
// const [salam,satu,dua,tiga] = perkenalan

//kemudian bisa kita skip juga
// const [salam, , ,tiga] = perkenalan
// console.log(tiga)

//swap item
// var a = 1;
// var b = 2;
// console.log(a);
// console.log(b);
// //bila mengalami error tambah semicolon di depon swapnya
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return value pada function
// function coba(){
//     return [1,2]
// }

// const [a,b] = coba()
// console.log(a)
// console.log(b)

//rest parameter
//yang 1 masuk ke a sedangkan sisanya masuk ke args
// const [a, ...args] = [1,2,3,4,5,6,7,8]
// console.log(a)
// console.log(args)

//distructuring obj
// const mhs = {
//     nama: 'bayu',
//     umur: 33,
//     email: "bayu@gmail.com"
// }

// //nama harus sama
// const {nama,umur,email} = mhs
// console.log(nama)

//assignment tanpa deklarasi object
// ({nama,umur,email} = {nama: 'bayu',umur: 33,email: "bayu@gmail.com"})
// console.log(nama)

//assign ke variabel baru
// const mhs = {
//     nama: 'bayu',
//     umur: 33,
//     email: "bayu@gmail.com"
// }

// const {nama: n,umur: u,email: e} = mhs
// console.log(n)

//memberi default value
// const mhs = {
//     nama: 'bayu',
//     umur: 33,
//     email: "bayu@gmail.com"
// }

// const {nama,umur,email = 'email@default.com'} = mhs
// console.log(email)

//memberi nilai default dan assign ke variable baru
// const mhs = {
//     nama: 'bayu',
//     umur: 33,
//     email: "bayu@gmail.com"
// }

// const {nama: n,umur: u,email: e = 'email@default.com'} = mhs
// console.log(e)

//rest parameter
// const mhs = {
//     nama: 'bayu',
//     umur: 33,
//     email: "bayu@gmail.com"
// }

// const {nama: n, ...args} = mhs
// console.log(args)

//mengambil field pada obj setelah dikrim sebagai parameter untuk function
// const mhs = {
//     id: 1234,
//     nama: 'bayu',
//     umur: 33,
//     email: "bayu@gmail.com"
// }

// function getId({id}) {  
//     return id 
// }

// console.log(getId(mhs))

//destructuring function
// function kalkulasi(a,b){
//     return [a + b, a - b, a * b, a / b]
// }

// const jumlah = penjumPerk(2,3)[0]
// const kali = penjumPerk(2,3)[1]

// function kalkulasi(a,b){
//     return {
//         tambah: a + b, 
//         kurang: a - b, 
//         kali: a * b, 
//         bagi: a / b
//     }
// }

// const {tambah, kurang, kali, bagi} = kalkulasi(2,3)
// console.log(tambah)

//destructuring function arguments
const mhs = {
    id: 1234,
    nama: 'bayu',
    umur: 33,
    email: "bayu@gmail.com",
    nilai:{
        tugas: 80,
        uts: 85,
        uas:75
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama ${nama} umur saya ${umur} tahun`
// }

// console.log(cetakMhs(mhs))

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
    return `Halo, nama ${nama} umur saya ${umur} tahun, dan nilai uas adalah ${uas}`
}

console.log(cetakMhs(mhs))