//execution context, hoisting & scope 
//jadi ketika pembuatan variabel akan terjadi creation phase pada global context
// jadi dia akan mencari kata kunci seperti var yang berisi undefined
//kemudian mencari kata kunci function yang berisi function 
//namanya hoisting jadi function dan var tersebut akan naik posisinya
//kemudian js mendefinisikan window = global object
//kemudian this = window

//execution phase
//maka js akan melakukan eksekusi code dari yang plaing atas


//untuk function 
//jadi function akan membuat local execution context
//yang di dalamnya ada creation dan exec phase
//bisa akses window
//bisa akses argument
//hoisting

//closure
//merupakan closure karena menggunakan lexical scopenya
//lexical scope adalah ketika di localnya tidak ada variabel tersebut dan dia harus mencari
//variabel diatas dengan nama variabel yang sama
//ringkasnya closure itu ketika variabel di dalam membutuhkan variabel dari luar
// function init() {
//     let nama = "bayu"
//     let umur = 1
//     function tampilNama() {
//         console.log(nama)
//         console.log(umur)
//     }
//     tampilNama()
// }
// init()

//tips: agar tidak error menggunakan closure bisa function nya di assign ke variable 
//atau kita bisa menggunakan immidiately invike function
let add = (function (){
    let counter = 0
    return function() {
        return ++counter
    }
})()

console.log(add())
console.log(add())
console.log(add())
