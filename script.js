const fecha = new Date("2026-10-06 00:00:00").getTime();

function actualizar(){
const ahora = new Date().getTime();
const diff = fecha - ahora;

if(diff <= 0){
document.getElementById("contador").innerHTML = "🎉 ¡Feliz cumpleaños Mamita ❤️!";
return;
}

let dias = Math.floor(diff / (1000*60*60*24));
let horas = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
let minutos = Math.floor((diff % (1000*60*60))/(1000*60));
let segundos = Math.floor((diff % (1000*60))/1000);

document.getElementById("contador").innerHTML =
`⏳ ${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizar,1000);
actualizar();