let thumb = document.querySelectorAll(".thumb")
let jumbo = document.querySelector('.jumbo')
let container = document.querySelector('.container')

//bila tidak menggunakan container
// for (let i = 0; i < thumb.length; i++){
//     thumb[i].addEventListener('click', () => {
//         let path = thumb[i].src
//         jumbo.src = path
//         thumb[i].stopPropagation();
//     })
// }

//bila menggunakan container
container.addEventListener('click', (e) => {
    // console.log(e.target)
    if(e.target.className == 'thumb') {
        jumbo.src = e.target.src
        jumbo.classList.add('fade')
        setTimeout(function(){
            jumbo.classList.remove('fade')
        },500)
        thumb.forEach(function(thumbs){
            // if(thumbs.classList.contains('active'){
            //     thumbs.classList.remove('active')
            // })
            thumbs.classname = 'thumb'
        })
        e.target.classList.add('active')
    }
})