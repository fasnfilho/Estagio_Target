let string = prompt("Digite aqui a palavra a ser invertida: ")

let stringInvertida = ''

for(let i = string.length - 1; i > 0; i--){
    stringInvertida += string[i]
}

return stringInvertida