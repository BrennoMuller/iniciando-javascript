/*============herança============*/

// em javascript herança é diferente

// vamos supor que eu pedi alguma coisa dentro da função caso ele não achar ele vai buscar no seu prototipo
// é isso que herança em js faz ele define um prototipo para o objeto buscar caso ele n ache
// desse modo o progroma consegue reutilizar codigo
// ou seja JS opera com uma cadeia de prototipo

//fazendo uma cadeia de prototipos

const pessoa = {
    nome: null,
    idade: null,
    sexo: null,

    construir(nome, idade, sexo){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
}


const policial = {
    __proto__: pessoa,
    arma: null,
    altura: null, 

    construir(nome, idade, sexo, arma, altura){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
        this.arma = arma
        this.altura = altura
    }
}

pessoa.construir('brenno', 10, 'masculino')
policial.construir('brenno', 10, 'masculino', 38, 1.70)

console.log(policial.arma)
console.log(pessoa)


// a palavra super é para referenciar o prototipo
//Object.setprototypeOf // é equivalente a colocar __proto__: pessoa,
// o interpretador do javascript no browser é o V8
