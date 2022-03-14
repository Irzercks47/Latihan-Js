// var p3  = document.querySelector('.p3')

// // p3.addEventListener("click", () => {
// //     toBlue()
// // })


// function toBlue(p){
//     p.style.backgroundColor = "lightblue"
// }//penjelasan dibawah

// //salah satu cara menambahkan DOM adalah dengan menambah di HTML namun cara ini tidak di rekomendasikan 
// //karena bisa mencampur js dan html nya salah satu caranya adalah menambah onClick pada element HTML nya

// var p2 = document.querySelector('.p2')
// p2.onclick = toBlue(p2)//penjelasan di bawah

// //bisa menggunakan event handler namun tidak direklomendasikan karena bila banyak function yang dipake
// //akan menutupi function yang lama dengan yang baru contoh ada di line 31 - 38

// var p4 = document.querySelector('section#b p')
// p4.addEventListener('click', () =>{
//     var ul = document.querySelector('section#b ul')
//     var liBaru = document.createElement('li')
//     var teksLiBaru = document.createTextNode('item baru')
//     toBlue(p4)
//     liBaru.appendChild(teksLiBaru)
//     ul.appendChild(liBaru)
// })

var p3  = document.querySelector('.p3')
// p3.onclick = function() {
//     p3.style.backgroundColor = "lightblue"
// }

// p3.onclick = function() {
//     p3.style.color = "red"
// }

// p3.addEventListener('click', () =>{
//     p3.style.backgroundColor = "lightblue"
//     p3.style.color = "red"
// })

//event ada banyak bisa dilihat dokumentasinya di https://developer.mozilla.org/en-US/docs/Web/Events

p3.addEventListener('mouseenter', () =>{
    p3.style.backgroundColor = "lightblue"
})

p3.addEventListener('mouseleave', () =>{
    p3.style.backgroundColor = "lightgreen"
})