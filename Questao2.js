let a = 0, b = 1, aux = 0

var n = prompt("Digite um numero: ")

while(n > b){
    if(n == b){
        return("Este numero esta na sequencia de Fibonacci!")
    }
    aux = b
    b = a + b
    a = aux
}

return("Este numero nao esta na sequencia de Fibonacci!")