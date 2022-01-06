//obj angkot
function Angkot (sopir, trayek, penumpang, kas){
    this.sopir = sopir
    this.trayek = trayek
    this.penumpang = penumpang
    this.kas = kas

    this.penNaik = function(namaPenumpang) {
        if (this.penumpang.length == 0) {
            return this.penumpang.push(namaPenumpang)
        }
        else{
            for(let i = 0; i < this.penumpang.length; i++){
                if(this.penumpang[i] == namaPenumpang){
                    console.log('Penumpang sudah ada')
                    return false;
                }
                else if (this.penumpang[i] == undefined) {
                    return this.penumpang[i] = namaPenumpang
                }
                else if(i == this.penumpang.length - 1){
                    return this.penumpang.push(namaPenumpang)
                }
            }
        }
    }

    this.penumTurun = function(namaPenumpang, bayar){
        if (this.penumpang.length == 0 ){
            console.log('angkot kosong')
            //return false agar keluar
            return false
        }
        else{
            for (let i = 0; i < this.penumpang.length; i++ )
            {
                if (this.penumpang[i] == namaPenumpang) {
                    if(i = this.penumpang.length - 1 ){
                        this.kas += bayar
                        return this.penumpang.pop()
                    }
                    else{
                        this.kas += bayar
                        return this.penumpang[i] = undefined
                    }
                }
                else if(i == this.penumpang.length - 1){
                    console.log(namaPenumpang + 'tidak ada di dalam angkot')
                    return false
                }
            }
        }
    }

}

var angkot1 = new Angkot('eko', ['arjosari','gadang'], [], 0)
var angkot2 = new Angkot('andi', ['kalimosodo','bunul'], [], 0)