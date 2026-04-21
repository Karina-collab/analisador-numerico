let lista = document.getElementById('lista')

let valores = [];

function adicionar(){

let numero = Number(document.getElementById('numero').value);


let encontrado = false;


if(numero >= 1 && numero <= 100){

    for(let i = 0; i < valores.length; i++){
    
    if(valores[i]===numero){
    encontrado= true;
    alert('Valor já foi adicionado!')
    return
    }
    
}

valores.push(numero)

let item = document.createElement('option')
    item.text = `Valor ${numero} adicionado`
    lista.appendChild(item)

}else if (numero === 0){
alert('Valor inválido, digite um número!')

}else if(numero > 100 || numero < 0){
alert('Digite um número entre 1 e 100!')
}


}


function finalizar(){

let res = document.getElementById('res')

            
            

    if(valores.length === 0){
       alert('Adicione números à lista!') 
       return
        
   }

   let soma = 0
   let maior = valores[0]
   let menor = valores[0]

   for(let i = 0; i < valores.length; i++){

            soma = soma + valores[i]

            if(valores[i] > maior){
                maior = valores[i] }
            
            if(valores[i] < menor){
               menor = valores[i] }
   }



    let media = soma / valores.length

    res.innerHTML = ''
    res.innerHTML = '<h1 class="h2">Resultado da Análise</h1>'
    res.innerHTML+= `A soma total dos valores é ${soma} <br>`
    res.innerHTML+= `O maior valor da lista é ${maior} <br>`
    res.innerHTML+= `O menor valor da lista é ${menor} <br>`
    res.innerHTML+= `A média dos valores é ${media.toFixed(1)} <br>`

}

    
    


