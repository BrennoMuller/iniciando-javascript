// ... argumento variado posso passar quantos nomes eu quiser
module.exports = function(...nomes){
    return nomes.map(nome => `Bom dia ${nome}`)//template string
}