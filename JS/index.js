let spaghetti;
let ulei;
let usturoi;
let ardei;
let numarportii;

document.getElementById("butoningrediente").onclick = function(){
    let numarportii = document.getElementById("numarportii").value;
    spaghetti = 450 * numarportii;
    ulei = 60 * numarportii;
    usturoi = 6 * numarportii;
    ardei = 1 * numarportii;

    document.getElementById("cantitati").textContent = `Vei avea nevoie de ${spaghetti}gm, ${ulei}ml de ulei, ${usturoi} usturoi, ${ardei} ardei si sare`
}