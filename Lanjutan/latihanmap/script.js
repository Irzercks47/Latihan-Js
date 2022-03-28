//ambil semua elemen data
//array from mengubah nodelist dari querySelectorAll menjadi array
const videos = Array.from(document.querySelectorAll('[data-duration]'))

//pilih yang hanya js lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

//ambil durasi masing" video
    .map(item => item.dataset.duration)

//ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu =>{
        //10:30 -> [10, 30] split
        const parts = waktu.split(':').map(part => parseFloat(part))
        return (parts[0] * 60) + parts[1]
    })
//jumlah semua detiknya
    .reduce((total, detik) => total + detik)

//ubah format jadi jam menit detik
//untuk jam ambil pembulatan kebawah pake Math.floor kalau lipat keatas pakai Math.ceil

let jam = Math.floor(jsLanjut/3600)
jsLanjut = jsLanjut - jam * 3600
let menit = Math.floor(jsLanjut/60)
let detik = jsLanjut - menit * 60



//simpan DOM
const pDurasi = document.querySelector('.total-durasi')
const jumVideo = document.querySelector('.jumlah-video')
pDurasi.textContent = `${jam} jam ${menit} menit ${detik} detik`
const jmlVid = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
jumVideo.textContent = `${jmlVid}`

console.log(jsLanjut)