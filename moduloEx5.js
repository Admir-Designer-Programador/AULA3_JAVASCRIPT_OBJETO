// import PromptSync from "prompt-sync" 

// let prompt = PromptSync()



export function exercicio5() {

    console.log("funcao Exercicio 5 - FOR")

let numeroAnterior = 0
let numeroAtual = 1

console.log(numeroAnterior)
console.log(numeroAtual)


for(let contador = 3; contador <= 10; contador++) {
    let novo = numeroAnterior + numeroAtual

    console.log(novo)

    numeroAnterior = numeroAtual
    numeroAtual = novo
}
}
