// //inner html dapatkan mengganti semua isi yang yang di tag tersebut
// var judul = document.getElementById('judul')
// judul.innerHTML = '<em>Andriy Shevchenko</em>'

// var sectionA = document.querySelector('section#a')
// sectionA.innerHTML = '<div><p>Hello</p></div>'

// //bila menggunakan query selector jagna lupa pagar atau titik untuk membedakan mana yang class dan id 
// //style
// var judul = document.querySelector('#judul')
// judul.style.color = 'lightblue'
// judul.style.backgroundColor = 'salmon'

//attribute = sesuatu yang menempel pada html
var judul = document.getElementsByTagName('h1')[0]
judul.setAttribute('name','andri')
var a = document.querySelector('section#a a')
a.setAttribute('id','link')
//get attribute untuk mendapatkan isi attribute
///get attribute href dari element a
a.getAttribute('href')
//get attribute id dari element judul
judul.getAttribute('id')
//menghapus attribute
a.removeAttribute('href')

var p2 = document.querySelector('.p2')
//menindih class bila ada class di tag tersebut
// p2.setAttribute('class','label')
//akan menunjukkan ada kelas ada di p2 akan mucul diconsole bila diketik di console
p2.classList
//menambahkan class bernama label pada p2
p2.classList.add('label')
//remove class bernama label pada p2
p2.classList.remove('label')
//akan di cek bila p2 belum punya maka tambahkan bila tidak akan hapus
p2.classList.toggle('label')
//bila dipanggil sekali lagi maka class label akan hilang
p2.classList.toggle('label')
//akan menambahkan class biru-muda pada body 
document.body.classList.toggle('biru-muda')

p2.classList.add('satu')
p2.classList.add('dua')
p2.classList.add('tiga')
//akan mencari class di dalam element tersebut dengan index 2 hanya terlihat di console
p2.classList.item(2)
//ada tidak class yang namanya 2 di p2
p2.classList.contains('dua')
//replace class tiga menjadi empat
p2.classList.replace('tiga','empat')
