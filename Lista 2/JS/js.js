function seguir(){
    alert('Você agora está seguindo Thais')
}

function exe1(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 7){
        document.getElementById("media").innerText = "Aprovado: " + media
    }
    else{
        document.getElementById("media").innerText = "Reprovado: " + media
    }
}

function exe2(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let mediaArit = (nota1 + nota2) / 2
    if (mediaArit >= 0 && mediaArit < 3){
        document.getElementById("mediaArit").innerText = "Reprovado"
    }
    else if (mediaArit >= 3 && mediaArit < 7){
        document.getElementById("mediaArit").innerText = "Exame"
    }
    else if (mediaArit >= 7 && mediaArit <= 10){
        document.getElementById("mediaArit").innerText = "Aprovado"
    }
    else{
        document.getElementById("mediaArit").innerText = "Nota inválida"
    }
}

function exe3(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    if (nro1 < nro2){
        menor = nro1
        document.getElementById("menor").innerText = "O menor número é: " + menor
    }
    else{
    }
    }

function exe4(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    if (nro1 >= nro2 && nro1 >= nro3){
        maior = nro1
        document.getElementById("maior").innerText = "O maior número é: " + maior
    }
    else if (nro2 >= nro1 && nro2 >= nro3){
        maior = nro2
        document.getElementById("maior").innerText = "O maior número é: " + maior
    }
    else if (nro3 >= nro1 && nro3 >= nro2){
        maior = nro3
        document.getElementById("maior").innerText = "O maior número é: " + maior
    }
    else{
        document.getElementById("maior").innerText = "Os números são iguais"
    }
}

function exe5(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)

    switch (selecao){
        case 1: document.getElementById("resultado").innerText = (nro1 + nro2) / 2
        break
        
        case 2: if (nro1 >= nro2){
            document.getElementById("resultado").innerText = nro1 - nro2
        }
        else {
            document.getElementById("resultado").innerText = nro2 - nro1
        }
        break

        case 3: document.getElementById("resultado").innerText = nro1 * nro2
        break

        case 4: if (nro2 != 0){
            document.getElementById("resultado").innerText = nro1 / nro2
        }
        else {
            document.getElementById("resultado").innerText = "Divisão por 0 inválida!"
        }
    }

}

function exe6(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)

    switch (selecao){
        case 1: document.getElementById("resultado").innerHTML = "O resultado é: " + nro1 ** nro2
        break

        case 2: document.getElementById("resultado").innerHTML = "O resultado é: " + Math.sqrt(nro1).toFixed(2) + "<br/> e " + Math.sqrt(nro2).toFixed(2)
        break

        case 3: document.getElementById("resultado").innerHTML = "O resultado é: " + Math.cbrt(nro1).toFixed(2) + "<br/> e " + Math.cbrt(nro2).toFixed(2)
        break
        
    default: document.getElementById("resultado").innerText = "Opção Iválida";
    }

}

function exe7(){
    let salario = Number(document.getElementById("salario").value)

    if (salario < 0){
        document.getElementById("novoSalario").innerText = "Salário inválido!"
    }
    else if (salario <= 500){
        novoSalario = salario * 1.30
        document.getElementById("novoSalario").innerText = "Novo Salário é: " + novoSalario
    }
    else if (salario > 500){
        document.getElementById("novoSalario").innerText = "Não tem direito ao aumento de salário!"
    }
}

function exe8(){
    let salario = Number(document.getElementById("salario").value)

    if (salario < 0){
        document.getElementById("novoSalario").innerHTML = "Salário inválido!"
    }
    else if (salario <= 300){
        novoSalario = salario * 1.35
        document.getElementById("novoSalario").innerHTML = `Novo Salário é: ${novoSalario}`
    }
    else{
        novoSalario = salario * 1.15
        document.getElementById("novoSalario").innerHTML = `Novo Salário é: ${novoSalario.toFixed(2)}`
    }
}

function exe9(){
    let saldo = Number(document.getElementById("saldo").value)
    //calcular o credito
    let credito = 0 //incializa com 0
    if(saldo > 400){
        credito = saldo * 30/100
    }
    else if ((saldo > 300) && (saldo <= 400)){
        credito = saldo * 25/100
    }
    else if ((saldo > 200) && (saldo <= 300)){
        credito = saldo * 20/100
    }
    else if ((saldo >= 0) && (saldo <= 200)){
        credito = saldo * 10/100
    }
    else { //saldo negativo
    document.getElementById("credito").innerHTML = "Saldo não pode ser negativo"
    return // saiu da função
    }
    document.getElementById("credito").innerHTML = `saldo ${saldo} e crédito ${credito}`
}

function exe10(){
    //recupera o custo da fabrica
    let custo = Number(document.getElementById("custo").value)
    let distribuidor =0
    let imposto = 0
    if(custo >= 0 && custo < 12000){
        distribuidor = custo * 5/100
        imposto = 0
    }
    else if (custo >= 12000 && custo <= 25000){
        distribuidor = custo * 10/100
        imposto = custo * 15/100
    }
    else if (custo > 25000){
        distribuidor = custo * 15/100
        imposto = custo * 20/100
    }
    else {
        document.getElementById("consumidor").innerHTML = "custo negativo"
        return // sai da função
    }
    let consumidor = custo + distribuidor + imposto
    document.getElementById("consumidor").innerHTML = `custo da fábrica ${custo} <br/> Distribuidor ${distribuidor} <br/> Imposto ${imposto} <br/> Valor ao consumidor ${consumidor}`

}