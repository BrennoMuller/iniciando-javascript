// praticamente tudo em JS é uma função
console.log(typeof(Map))
console.log(typeof(Math))
console.log(typeof(Object))

// JS trata a função como um dado: cidadão de primeira linha
// fist class object (citizens)
// função de alta ordem
// uma função pode ou não retornar um valor
// vc pode amazenar uma função numa variavel, array e objetos
// podemos passar uma função como parametro
// parametros e retornos são opcionais

// toda function tem um array disponivel chamado arguments
// quando a função n tem nenhum parametro e passamos algum parametro é adicionado na função

function soma(){
    soma = 0
    for(i in arguments){
        soma += arguments[i]
    }

    return soma
}

// this ou self: referenciar o objeto atual dessa função, por exemplo se for executado no browser
// ele vai se referenciar ao window
// this varia da forma como vc chama a função
// motivos para criar arrow function 
// para diminuir a sintaxe
// porque o this não varia numa arrow function

/*============== function bind==============*/
//objeto
const pessoa = {
    comprimentar: "bom dia",

    //nova forma de declarar metodo ECMA2015
    falar() {
        //neste caso this se refere ao dono da função no caso 'pessoa'
        console.log(this.comprimentar)
    }
}

//pessoa.falar()

//o bind vc passa o objeto que vc deseja que o this referencie

const oi = pessoa.falar.bind(pessoa)

oi()

//setInterval: dispara uma função num determinado tempo

/*============== function arrow ==============*/
// arrow sempre é uma função anonima, uma funação anonima é uma função sem nome
// => : função 


let dobro = function (a){
    return 2*a
}

//estrutura:  nome da funçã = (parametros) => {corpo da funçaõ} 
dobro = (a) => {
    return 2 * a
}

//tirando o corpo, eu tenho o retorno implicito

dobro = (a) => 2 * a


console.log(dobro(2))

//Parâmetro é a variável que irá receber um valor em uma função (ou método)
// enquanto que um argumento é o valor (que pode originar de uma variável ou expressão) 
//que você passa para a função (ou método). Você não passa parâmetros,
// você passa argumentos. Você recebe argumentos também, mas recebe em parâmetros

/*============== function callback ==============*/

//é uma função que é passada para outra função como argumento, então é invocada dentro da função

const nomes = ['brenno', 'zeca', 'aldebaran']

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`); // template string
}


nomes.forEach(imprimir)//callback

/*============== function construtora ==============*/

/*============== formas de declarar funções ==============*/

//tradicional 
// quando declarada desse tipo posso chamar ela em qualquer momento do codigo, o interpretador do javascript 
// le primeiro todas as funções e carrega elas no programa
function nomear(){
    return b + c
}

//function expression, a variavel recebe a função

const nomear = function () {
    return v + x
}

//nemed function expression, mistura os dois tipos antioriores

const nomear = function mult() {
    return v + x
}

//*============== closure ==============*/
//closure: é o escopo criado quando a função foi declarada, esse escopo permite manipular e acessar as variaveis externas a função 
//a função carrega onde ela foi definida no arquivo


//*============== função factory ==============*/

// factory é uma função que retorna um objeto

function criarCarro(nome, placa){
    return{
        nome: nome,
        placa: placa
    }
}