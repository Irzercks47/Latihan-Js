//high order function
//function bisa digunakan sebagai param dan return value function yang seperti ini disebut sebagai callback function
//maka kerjakanTugas disebut sebagai Higher order function
//selesai merupakan callback function 
// function kerjakanTugas(matkul,selesai) {
//     console.log(`Mulai mengerjakan tugas ${matkul}`)
//     selesai()
// }

// function selesai() {  
//     alert('selesai mengerjakan tugas')
// }
// kerjakanTugas('Pemrograman web', selesai)

//filter map reduce
// const angka = [1,2,3,4,5,6,7,8,9,10,100,1000,69,141,47]

//filter
//mencari angka >=3
//for
// const newAngka = []
// for(let i = 0; angka.length;i++){
//     if (angka[i] >= 3){
//         newAngka.push(angka[i])
//     }
// }
// console.log(newAngka)

//filter
//memfilter array sesuai yang kita inginkan
// const newAngka = angka.filter( a => a >= 3)

//map
//memetakan semua elemen di array
//kali semua angka dengan 2
// const newAngka = angka.map(a => a * 2)

//reduce
//melakukan sesuatu kepada elemen yang ada di array
//reduce punya 2 param maka harus butuh () lagi
//accu hasil dari proses currVal berisi element array yg sedang di loop
//yang 0 merupakan nilai awal nilai default merupakan 0
//0+1+2+3+4+5+6+7+8+9+10+100+1000+69+141+47
//bila diisi 5 maka 
//5+1+2+3+4+5+6+7+8+9+10+100+1000+69+141+47
// const newAngka = angka.reduce((accu,currVal) => accu + currVal, 0)


//chaining 
//kita bisa menggabungkan fungsi" yang ada di higher order function dalam 1 kali eksekusi
//cari angka  > 5 lalu kali 3 kemudian dijumlahkan

// const hasil = angka.filter(a => a > 5).map(a => a * 3).reduce((accu,currVal) => accu + currVal, 0)
