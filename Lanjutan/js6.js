//destructuring
//array destructuring menggunakan [] 
// const coba = ['satu','dua','tiga']

// const [a,b,c] = coba
// console.log(a)
// console.log(b)
// console.log(c)

//object destructuring menggunakan {}
// const mhs = {
//     nama: 'bayu',
//     umur: 33,
//     email: "bayu@gmail.com"
// }

// const {nama,umur,email} = mhs
// console.log(nama)
// console.log(umur)
// console.log(email)

// const perkenalan = ['halo','nama','saya','bayu']

// const salam = perkenalan[0]
// const jeneng = perkenalan[1]
// const saya = perkenalan [2]
// const bayu = perkenalan[3]

// console.log(`${salam} ${jeneng} ${saya} ${bayu}`)
// const [salam,satu,dua,tiga] = perkenalan

//kemudian bisa kita skip juga
// const [salam, , ,tiga] = perkenalan
// console.log(tiga)

//swap item
// var a = 1;
// var b = 2;
// console.log(a);
// console.log(b);
// //bila mengalami error tambah semicolon di depon swapnya
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return value pada function
// function coba(){
//     return [1,2]
// }

// const [a,b] = coba()
// console.log(a)
// console.log(b)

//rest parameter
//yang 1 masuk ke a sedangkan sisanya masuk ke args
// const [a, ...args] = [1,2,3,4,5,6,7,8]
// console.log(a)
// console.log(args)

//distructuring obj
