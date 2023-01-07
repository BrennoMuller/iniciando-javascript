const dado = [
    {
        id: 0,
        img: "img/p1.jpg",
        name: "Julius",
        text: "rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,o when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        id: 1,
        img: "img/p2.jpg",
        name: "julia",
        text: "rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,o when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        id: 2,
        img: "img/p3.jpg",
        name: "Jully",
        text: "re Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,o when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]


var id = 1; //pode ser um rand

window.addEventListener("DOMContentLoaded", function (){
    mostrar_review(id);
})


var nome = document.getElementById("name");
var img = document.getElementById("foto");
var text = document.getElementById("text");
var btndir = document.getElementById("dir");
var btnesq = document.getElementById("esq");

function mostrar_review(id){
    const user = dado[id];
    img.src = user.img;
    nome.textContent = user.name;
    text.textContent =  user.text;   
}



btndir.addEventListener("click", function(){
    id++;

    if(id > dado.length-1){
        id = dado.length - dado.length;
    }

    mostrar_review(id);

})

btnesq.addEventListener("click", function(){
    id--;

    if(id < 0){
        id = dado.length-1;
    }

   
        mostrar_review(id);
    


})