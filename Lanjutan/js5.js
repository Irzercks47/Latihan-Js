//template literal
//menggunakan ``(backtick)
// let nama = 'jiji'
// let umur = 22

// console.log(`Halo bang ${nama}, dan anda berumur ${umur}`)

//embedded expressions
// console.log(`${1 + 1}`)
//kita juga bisa memanggil fungsi 
// console.log(`${alert('halo!')}`)
// const x = 10
// console.log(`${(x % 2 == 0)? 'genap' : 'ganjil'}`)


//html fragments
// const mhs = {
//     nama: 'bayu',
//     umur: 33,
//     nim: '11111',
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nim}</span>
// </div>`

//html fragments
// const mhs = {
//     nama: 'bayu',
//     umur: 33,
//     nim: '11111',
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nim}</span>
// </div>`

//2.looping
// const mhs = [
//     {
//         nama : 'bayu',
//         nim: '1111'
//     },
//     {
//         nama : 'bayu',
//         nim: '2222'
//     },
//     {
//         nama : 'bayu',
//         nim: '3333'
//     }
// ]

//bila menampilkan array maka ada . di html nya untuk menghilangkan menggunakan .join('')
// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.nim}</li>
// </ul>`).join('')}
// </div>`


//consitionals
//ternary
// const lagu = {
//     judul: 'aqua terrarium',
//     penyanyi: "yanagi nagi",
//     feat: "depapepe"
// }

// const el = `<div class="mhs">
//     <h2>${lagu.penyanyi}</h2>
//     <span class="lagu">${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</span>
// </div>`


//nested
//HTML fragments bersarang
// const mhs = {
//     nama: 'bayu',
//     smt: 5,
//     matkul: [
//         'oop',
//         'cyber sec',
//         'web'
//     ]
// }

// function cetak(matkul){
//     return `
//     <ol>
//         ${matkul.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>
//     `
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="smt">${mhs.smt}</span>
//     <h4>Mata Kuliah: </h4>
//     ${cetak(mhs.matkul)}
// </div>`

// document.body.innerHTML = el

//tagged templates
//akan di return array tag templates akan memecah tiap string yang ada di dalamnya dan ekpression tidak masuk di array tsb
// const nama = 'bayu'
// const umur = 33

// function coba(str) {
//     return str
// }

// const str = coba `Halo, saya ${nama}, umur saya ${umur} tahun`
// console.log(str)

//saat kita mengambil dari API kita tidak tahu ada berapa ekpression nya maka kita bisa menggunakan rest
//rest berupa  ...(titik tiga)
//contoh:
// const nama = 'bayu'
// const umur = 33
// //...args ini akan menjadi array yang menampung semua ekpression yang ada di template literal
// //untuk menggabungkan string dengan ekspression agar tidak jadi array kita bisa menggunakan for each 
// //jangan menggunakan map karena kita tidak mau return berupa array
// function coba(str, ...args) {
//     // let strings = ''
//     // str.array.forEach((str, i) => {
//     //     //menggunakan || untuk kalo args tidak ada isinya maka tampilkan string kosong
//     //     strings += `${str}${args[i] || ''}`
//     // });
//     // return strings
//     //kalau menggunakan string tidak menggunakan 0 tapi menggunakan ''
//     return str.reduce((strings, str, i) => `${strings}${str}${args[i] || ''}`, '')
// }

// const str = coba `Halo, saya ${nama}, umur saya ${umur} tahun`
// console.log(str)

//highlight
// const nama = 'bayu'
// const umur = 33
// const email = 'bayu@asd.com'

// function highlight(str, ...args) {
//     return str.reduce((strings, str, i) => `${strings}${str}<span class="hl">${args[i] || ''}</span>`, '')
// }

// const str = highlight `Halo, saya ${nama}, umur saya ${umur} tahun dan email saya : ${email}`

// document.body.innerHTML = str