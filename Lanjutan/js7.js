//for..of
// const mhs = ['bayu','ayu','erik']

// for(let i = 0; i < mhs.length; i++){
//     console.log(mhs[i])
// }
//for each khusu untuk array
// mhs.forEach(m => console.log(m));
// for( const m of mhs){
//     console.log(m)
// }

//string
// const nama = 'bayu'
// for(const n of nama){
//     console.log(n)
// }
//for each memiliki 2 param param pertama hasil looping sedang kan param kedua merupakan index
// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i+1}`));
// for(const [i,m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i+1}`)
// }

//nodelist
//ada bbrp browser yang tidak support jadi harus diubah ke array murni
// const liNama = document.querySelectorAll('.nama')

// liNama.forEach(n => console.log(n.textContent))
// for(n of liNama){
//     console.log(n.textContent)
// }

//argument
// function jumlah(){
//     console.log(arguments)
//     let jum = 0
//     for(a of arguments) jum += a
//     return jum
// }

// console.log(jumlah(1,2,3,4,5,6,7,8,9,10))

//for..in
//looping properti dari obj menggunakan for in
//mengulang isi array dan iterable array menggunakn for of
const mhs = {
    nama: 'bayu',
    umur: 33,
    email:'bayu@gg.gg'
}

for (m in mhs){
    console.log(m)
    console.log(mhs[m])
}

