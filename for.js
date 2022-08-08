// 4 formas de percorrer essa lista

let listaDeMercado = ['Arroz', 'Feijão', 'Macarrão', 'Bacon', 'Azeitona', 'Acerola', 'Uva']

let listaDeComponentes = [
  { 'nome-qualidade': 'Arroz', preco: 10 },
  { nome: 'Feijão', preco: 11 },
  { nome: 'Macarrão', preco: 12 },
  { nome: 'Bacon', preco: 13 },
  { nome: 'Azeitona', preco: 14 },
  { nome: 'Acerola', preco: 15 },
  { nome: 'Uva', preco: 16 }
]

for (let item of listaDeComponentes) {
  console.log(item.nome)
  console.log(item['nome-qualidade'])
}

// 1 - for tradicional

for (let i = 0; i < listaDeMercado.length; i++) {
  console.log(listaDeMercado[i])
}

// 2 - for of

for (let item of listaDeMercado) {
  console.log(item)
}

// 3 - for in

for (let item in listaDeMercado) {
  console.log(listaDeMercado[item])
}

// 4 - forEach

listaDeMercado.forEach(function(item, index) {
  console.log(index, item)
})