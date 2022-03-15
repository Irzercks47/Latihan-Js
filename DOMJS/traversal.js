//hanya untuk menghilangkan yang pertama karena menggunakan query selector

// var hapus = document.querySelector('.close');
// hapus.addEventListener('click', () => {
//     hapus.parentElement.style.display = 'none';
// })

//DOM traversal
var hapus = document.querySelectorAll('.close');
var cards = document.querySelectorAll('.card');
//menggunakan for
// for (let i = 0; i < hapus.length; i++) {
//     hapus[i].addEventListener('click', (e) => {
//         e.target.parentElement.style.display = 'none';
//     })
// }

//menggunakan foreach
// hapus.forEach(function(del){
//     del.addEventListener('click', (e) => {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         //bubbling
//         //menghilangkan event bubbling pada element 
//         e.stopPropagation();
//     })
// })

// for bubbling
// cards.forEach(function(card) {
//     card.addEventListener('click', ()=>{
//         alert('ok');
//     })
// })

//jenis traversal
/* 
parentnode
parentelemnt
nextSibling
nextElementSibling
previousSibling
previousElementSibling
*/

//bubbling
let container = document.querySelector('.container')

container.addEventListener('click', (e) =>{
    if(e.target.className == 'close') {
        e.target.parentElement.style.display= 'none'
    }
})