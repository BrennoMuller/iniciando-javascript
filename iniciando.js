//comentario de uma linha 
/*comentarios de
 multiplas linhas */

/* 
 *comentarios alinhados
 *
 * 
 * 
 */


 /*===================>variaveis e constantes<====================*/

 /*=========declarando uma variavel===============*/


  //diferença entre var e let: let é uma variavel para escopo, var é uma variavel globals
 var a = 3;
 let b = 4;

 //constante não é possivel atribuir outro valor
 const c = 30;

 /*==============tipagem fraca/dinamica ==============*/
 //tipagem fraca significa que a variavel pode mudar para multiplos tipos
let qualquer = 'qualquer';
//console.log(qualquer);
//imprimindo o tipo da variavel "typeof"
//console.log(typeof(qualquer));
qualquer = 3.14;
//console.log(typeof(qualquer));
 /*============== number ==============*/
//tipo number poder ser inteiro ou flutuante
//verificar se é um numero inteiro "Number.isInterger(variavel ou numero)"
//tirar casas decimais "variavel.toFixed(quantidade de casas decimais desejada)"
//convertendo valor numerico para string toString()
//convertendo valor numerico para binario toString(2)

 /*============== cuidados com numeros ==============*/
// console.log(7 / 0) vai retornar um valor infinito
// em JS se tentar "10" dividido por 2 vai resultar 5 a linguagem converte 
// para fazer calculos podemos usar o objeto MATH do proprio JS Math.PI, Math.pow....

 /*============== String ==============*/

 var palavra = "brenno0"
 var palavra2 = "muller0"
 //retorna o caractere por index
 //console.log(palavra.charAt(3))
 //console.log(palavra.charCodeAt(1)) // ASCII CODE
 //console.log(palavra.concat(palavra2))// concatena
 //console.log(palavra2.indexOf(0)) // fala o index onde se encontra o char que vc quer
 //console.log(palavra.search('n'))// finds the first substring match in a regular expression search.
 //console.log(palavra.substring(2, 3))// ele mostra somente a partir do indice que vc quer e vai até 3
 //console.log(palavra.replace('b', 'z'))// onde tiver b troca por z
 //console.log(palavra.split('e'))// separa onde tiver e, e cria um array


 // o template string adicionado em 2015 permite escrever textos completos 
 //e exibilos da maneiro que vc escreveu
 const br = "brenno"
 var template = `
    brenno
    muito legal
    ${palavra}
 `

//console.log(template.toUpperCase())//tudo em letra maiuscula

 /*============== array: vetor ==============*/
// em javascript o array é heterogenio
// o array não tem tamanho fixo

// declarando um array

const valor = [1, 2 , 4, 5, 'b']

console.log(valor[2])

//tamanho do array
console.log(valor.length)

 //*===========objeto=========*//
 // é um conjuto de pares chave valor
 //declarando
 var obj = {}
 // o atributo nome é criado dinamicamente 
 obj.nome = "objeto"
 obj.preco = 13.00
 obj['descricao'] = 'bom'
 // um objeto em javascript ele gera sempre um par chave e valor
console.log(obj)

//outra forma de tratar objetos
var pessoa = {
   nome: 'brenno',
   cpf:  1223231313,
   codigo: 124444
}

var lista = [pessoa, obj]

for(var i = 0; i < lista.length; i++){
      if(lista[i].nome == 'brenno'){
         console.log(lista[i])
      }
}

//underfined: significa que não tem nada na variavel, não foi inicializada
//null ausência de valor, ela foi inicializada porem não aponta para nenhum objeto na memorias
// use o nulo para zerar o valor de um variavel
//not define: a variavel não existe
// para negar algo use !
// NaN NOT A NUMBER

// em javascript quase tudo é uma funçao


 /*============== funções ==============*/

 function soma(a, b){
    let soma = a + b
    console.log(soma)
 }

 soma(10, 5)
 // fuja do escopo global
 // para var so existe escopo a função 
 // evitar variavel var global pois todas vão para o window
 //var dentro de função so funciona dentro de função


 /*============== hoisting ==============*/
 // jogar para cima
 console.log("a = ", a)
 var a = 2
 //javascript coloca a variavel var a em cima do codigo
 // a variavel let não tem hoisting

 // objeto é uma instancia de uma função em JS
 //contexto lexico: é p contexto que a const ou variavel foi definida
 //contexto = bloco

 //o ponto em javascrip é a forma de acessar os membros, acessar atributos

 // atribuição aditiva: b += a 
 // atribuição subtrativa: b-= a
 // atribuição multiplicativa: b *= a
 //atribuição divisiva: b /= a
 // atribuição modular: b %= a = b % a


  /*============== destructuring ==============*/

  //desestruturação
  //adicionada no ECMA2015
  //objeto {} array []
  pessoa = {
      nome: "brenno",
      idade: 14,
      cpf: 212121212121
  }

  const {nome, idade} = pessoa

  console.log(nome, idade)

  // operadores logicos

  // e = &&
  // ou = ||
  // ou exclusivo = !=
  // negação logica = !

  // operadores unarios
  // var++
  //var--

  // operadores ternario
  // ?
  // função arrw
  // => funão
  const result = valor => valor == 7 ? "aprovado" : "reprovado" 

  console.log(result(7))

  //padrao observer

  // for in 

  const w = [1, 2, 3, 4, 5]

  for(i in w){
      console.log(w[i])
  }