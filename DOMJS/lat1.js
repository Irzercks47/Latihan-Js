var butt = document.querySelector('button')

butt.addEventListener('click', () =>{
    butt.parentElement.style.backgroundColor='blueviolet'
})

// butt.addEventListener('click', () =>{
//     butt.parentElement.classList.toggle('blue-violet')
// })

//bikin tombol dengan manipulasi node
//menggunakna cara createElement
var tomb = document.createElement('button')
//createTextNode fungsinya membuat teks
var teksTomb = document.createTextNode('acak warna')
//teksTomb ditambahkan di tomb
tomb.appendChild(teksTomb)
//menambahkan attribute pada buttonnya
tomb.setAttribute('type','button')
butt.after(tomb)

tomb.addEventListener('click', () => {
    var r = Math.round(Math.random() * 255 + 1)
    var g = Math.round(Math.random() * 255 + 1)
    var b = Math.round(Math.random() * 255 + 1)
    tomb.parentElement.style.backgroundColor='rgb('+ r +','+ g +','+ b +')'
})

//mengambil element yang hanya mempunayi name
var slidRed = document.querySelector('input[name=slidRed]')
var slidGreen = document.querySelector('input[name=slidGreen]')
var slidBlue = document.querySelector('input[name=slidBlue]')


//kalau slider event menggunakan change
//namun kalau mau mnegambil value secara realtime menggunakan input
slidRed.addEventListener('input', () =>{
    var r = slidRed.value
    slidRed.parentElement.style.backgroundColor='rgb('+ r + ', 100, 100)'
    document.querySelector('.res').textContent = 'Red = ' + slidRed.value + '     Green = 100   Blue = 100' 
})

slidGreen.addEventListener('input', () =>{
    var r = slidRed.value
    var g = slidGreen.value
    slidGreen.parentElement.style.backgroundColor='rgb('+ r + ','+ g +', 100)'
    document.querySelector('.res').textContent = 'Red = ' + slidRed.value + '     Green = ' + slidGreen.value + '   Blue = 100' 
})

slidBlue.addEventListener('input', () =>{
    var r = slidRed.value
    var g = slidGreen.value
    var b = slidBlue.value
    slidBlue.parentElement.style.backgroundColor='rgb('+ r + ','+ g +','+ b +')'
    document.querySelector('.res').textContent = 'Red = ' + slidRed.value + '     Green = ' + slidGreen.value + '   Blue = ' + slidBlue.value
})


//menggunakan mouse
document.addEventListener('mousemove', ()=> {
    let xSumb = parseInt((event.clientX/window.innerWidth) * 255)
    let ySumb = parseInt((event.clientY/window.innerHeight) * 255)
    document.body.style.backgroundColor='rgb(' + xSumb +',' + ySumb + ', 0 )'
})
