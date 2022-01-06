//membuat object 

//cara 1 function declaration
// function halo(){
//     console.log('halo')
// }

//cara 2 
// var obj = {}
// obj.halo = function() {
//     console.log('halo')
// }

// obj.halo()

//cara 3 contructor
// function halo (){
//     console.log('halo')
// }
// new halo()

//this 
//this = window
//cara 1 function declaration
// function halo(){
//     console.log(this)
//     console.log('halo')
// }
// this.halo()
//this mengembalikan objeck global

//cara 2 object literal
// var obj = {a: 10, nama : 'anda'}
// obj.halo = function() {
//     console.log(this)
//     console.log('halo')
// }
//this mengembalikan obj yang bersangkutan

//cara 3 contructor
// function halo (){
//     console.log(this)
//     console.log('halo')
// }

// var obj1 = new halo()
// var obj2 = new halo()
//this mengembalikan object yang baru dibuat