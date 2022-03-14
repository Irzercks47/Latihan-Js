// //document.querySelector() -> element
// //dia akan mengambil p yang ada di dalam id b
// //cara pemilihan sama seperti css
//bila ada kasus yang dimana kita tidak boleh mengubah struktur HTML maka bisa menggunakan ini dan yang all
// const p4 = document.querySelector('#b p')
// p4.style.color = 'green'
// p4.style.fontSize = '30px'

// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = 'orange'

// //karena hanya mengembalikan element jadi yang diambil hanya yang p pertama yang ditemukan
// //jadi p lain tidak terpengaruh
// const p = document.querySelector('p')
// p.innerHTML = 'Ini diubah dari js'

// //document.querySelectorAll()
// //untuk memilih semua yang p
// //-> nodelist jadi sama seperti yang HTML collection harus pilih index
// const psemua = document.querySelectorAll('p')
// for(let i = 0; i < psemua.length; i++){
//     psemua[i].style.backgroundColor = 'lightblue'
// }

// //secara performa get id dan tagname lebih cepat jadi usahakan untuk didahulukan 
// //kalau tidak bisa menggunakan 2 itu bisa menggunakan classname,selector,dan selector all

//mengubah node root
// const p4 = document.getElementsByTagName('p')
// p4[3].style.backgroundColor = 'lightblue'
//bisa menggunakan yang diatas namun kita bisa mengganti rootnya dengan mempersempit pencarian
const sectionB = document.querySelector('section#b')
//sehingga sudah tidak menggunakan document
const p4 = sectionB.getElementsByTagName('p')[0]
p4.style.backgroundColor = 'orange'
//ps : bisa menggunakan berbagai cara
