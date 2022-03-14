var pilihan = document.querySelectorAll("li img");
var imgComp = document.querySelector(".img-komputer");
var info = document.querySelector(".info");

function getPilihanComp(){
    var comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getResult(comp, player){
    if( player == comp ) return 'SERI!'; 
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putar(){
    let gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    var mulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - mulai > 1000 ){
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'asset/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    },100)
}


info.innerHTML = "LOADING...";
for(let i = 0; i < pilihan.length; i++){
    pilihan[i].addEventListener('click', () => {
        var pilComp = getPilihanComp();
        var pilPlayer = pilihan[i].className;
        var result = getResult(pilComp, pilPlayer);
        putar();
        setTimeout(function() {
            imgComp.setAttribute('src', 'asset/' + pilComp + '.png');
            info.innerHTML = result;
        },1000)    
    });
}