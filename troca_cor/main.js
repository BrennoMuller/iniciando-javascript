
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "B", "C", "D", "E", "F"];

var btn = document.getElementById("btn");
var cor = document.getElementById("cor");

btn.addEventListener('click', function(){
    cor.textContent = gerar_hex(hex);
    document.body.style.backgroundColor = gerar_hex(hex);
})


function gerar_hex(hex){
    let gerado_hex = "#";
    

    for(let i =0; i<6; i++){
        gerado_hex += hex[Math.floor(Math.random() * hex.length)]
    }

    return gerado_hex;
}