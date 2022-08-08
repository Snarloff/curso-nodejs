const frase = ' Isso é uma frase '
const numberToString = 10
 
const fraseLength = frase.trim().length // Remove os espaços em branco antes e depois da frase (trim, trimStart, trimEnd)

const fraseArray = frase.split(' ') // Divide a frase em um array de palavras (String -> Array)
const fraseString = fraseArray.join(' ') // Junta o array de palavras em uma frase (Array -> String)

const fraseLower = frase.toLowerCase() // Converte a frase para letras minúsculas
const fraseUpper = frase.toUpperCase() // Converte a frase para letras maiúsculas

const fraseReplace = frase.replace('é', 'não é').replace('frase', 'dica') // Substitui uma palavra por outra

if (frase.trim().startsWith('Isso')) { // Verifica se a frase começa com a palavra
  console.log('Começa com Isso')
}

if (frase.trim().endsWith('frase')) { // Verifica se a frase termina com a palavra
  console.log('Termina com frase')
}

const fraseIndex = frase.indexOf('Isso') // Verifica a posição da palavra na frase
const fraseChar = frase.charAt(2) // Verifica o caracter da posição informada

const fraseConcat = frase.concat('muito legal!') // Concatena a frase com um caracter
const fraseSlice = frase.slice(0, 10) // Corta a frase a partir da posição informada (inicial e final)

const fraseIncludes = frase.includes('isso') // Verifica se a frase contém a palavra (true ou false)

console.log(numberToString.toFixed(2)) // Arredonda o número para duas casas decimais
console.log(numberToString.toString()) // Converte um número para string
console.log(String(numberToString)) // Converte um número para string