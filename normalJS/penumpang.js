//array
var penumpang = ['dika','dida','dila'];
//fungsi tambah penumpang
var tambahPenum = function (nama, penumpang) {
    //ketika array kosong
    if (penumpang.length == 0 ){
        penumpang.push(nama);
        return penumpang;
    }
    else{
        //loop untuk iterasi array
        for (let i = 0; i < penumpang.length ; i++ ) {
            //ketika isi ada yang undefined
            if(penumpang[i] == nama){
                console.log(nama + 'Sudah ada di dalam angkot');
                return penumpang;
            }
            else if(penumpang[i] == undefined){ 
                return penumpang[i] = nama;
            }
            //bila semua kursi terisi
            else if(i == penumpang.length - 1){
                return penumpang.push(nama);
            }
        }
    }
}

//fungsi hapus penumpang
var hapusPenum = function (nama, penumpang) {
    //ketika angkot kosong
    if (penumpang.length == 0 ){
        console.log('Tidak ada orang di angkot');
        return penumpang;
    } 
    else{
        //iterasi array
        for (let i = 0; i < penumpang.length; i++) {
            //ketika nama ada di array
            if(penumpang[i] == nama){
                //ketika nama yang ada di array berada di index terakhir
                if(i == penumpang.length - 1){
                    return penumpang.pop();
                }
                //ketika nama yang ada di array namun tidak di index terakhir
                else{
                    return penumpang[i] = undefined;
                }
            }
            //ketika tidak ada di array
            else if (i == penumpang.length - 1){
                console.log(nama + ' ' +'Tidak ada di dalam angkot');
                return penumpang;
            }
        }
    }
}
