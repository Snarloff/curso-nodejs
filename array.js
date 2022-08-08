const frutas = ['Banana', 'Maçã', 'Uva', 'Melancia', 'Pêssego', 'Cereja']

frutas.length // Retorna o tamanho do array

frutas[0] // Retorna o primeiro item do array
frutas[frutas.length - 1] // Retorna o último item do array

frutas.push('Laranja') // Adiciona um item ao array (adiciona no final)
frutas.unshift('Abacaxi') // Adiciona um item no início do array (adiciona no início)

frutas.pop() // Remove o último item do array
frutas.shift() // Remove o primeiro item do array

frutas.indexOf('Uva') // Retorna a posição do item no array
frutas.splice(2, 1) // Remove 1 item do array a partir da posição informada (inicial e quantidade) -> Uva

frutas.sort() // Ordena o array
frutas.reverse() // Inverte o array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ------------------------- Filter ----------------------- //

const numerosMaioresQue5 = numeros.filter((num) => {
  return num >= 5 // Retorna todos os números maior ou igual a 5
})

const numerosPares = numeros.filter((item) => {
  return item % 2 === 0 // Retorna os números pares [2, 4, 6, 8, 10]
})

// ------------------------- Map ------------------------- // 

const numerosMultiplicados = numerosPares.map((item) => {
  return item * 2 // Retorna os números pares multiplicados por 2 [4, 8, 12, 16, 20]
})

// ------------------------- Find ------------------------ // 

let listaDeCompras = [
  { nome: 'Feijão', preco: 11 },
  { nome: 'Macarrão', preco: 12 },
  { nome: 'Bacon', preco: 13 },
  { nome: 'Azeitona', preco: 14 },
  { nome: 'Acerola', preco: 15 },
  { nome: 'Uva', preco: 16 }
]

const compras = listaDeCompras.find((item) => {
  return item.nome === 'Macarrão' // Retorna o item que tem o nome Macarrão
})

// ------------------------- Reduce ------------------------ //

const numerosReduce = numeros.reduce((total, num) => {
  return total + num // Retorna a soma dos números [1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10]
})
