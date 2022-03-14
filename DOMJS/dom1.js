//DOM selection
//document.getElementsById() -> element
const judul = document.getElementById('judul')
//otomatis menambahkan inline css
judul.style.color = 'red'
judul.style.backgroundColor = '#ccc'
//mennganti isi
judul.innerHTML = 'Sandhika Galih'


//document.getElementsByTagName() 
//-> HTML collections -> dia array dalam console
const p = document.getElementsByTagName('p')
// p.style.backgroundColor = 'blue' -> tidak bisa set backcolor dari array harus pilih index
//yang bisa hanya element
//supaya bisa apply banyak bisa menggunakan looping
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue'
}
//ambil h1 dengan index 0
const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px'

//document.getElementsByClassName() 
//-> HTML collection sama seperti TagName
const p1 = document.getElementsByClassName('p1')
//p[0] bisa disini atau di variabel nya
p[0].innerHTML = 'Ini diubah dari js'