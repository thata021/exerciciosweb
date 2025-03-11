function seguir(){
    alert('Você agora está seguindo Thais')
}

function exe1(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let sub = nro1 - nro2
    document.getElementById("sub").innerText = "O resultado é: " + sub
}

function exe2(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let mult = nro1 * nro2 * nro3
    document.getElementById("mult").innerText = "O resultado é: " + mult
}

function exe3(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let div = nro1 / nro2
    document.getElementById("div").innerText = "O resultado é: " + div
}

function exe4(){
    let nro1 = Number (document.getElementById("nro1").value)
    let nro2 = Number (document.getElementById("nro2").value)
    let media = ((nro1 * 2) + (nro2 * 3)) / (2 + 3)
    document.getElementById("media").innerText = "O resultado é: " + media
}

function exe5(){
    let preco = Number(document.getElementById("preco").value)
    let novoPreco = preco - (preco * 0.10)
    document.getElementById("novoPreco").innerText = "O resultado R$: " + novoPreco.toFixed(2)
}

function exe6(){
    let salarioFixo = Number(document.getElementById("salarioFixo").value)
    let vendas = Number(document.getElementById("vendas").value)
    let comissao = vendas * 0.04
    let salarioFinal = salarioFixo + comissao
    document.getElementById("comissao").innerText = "Comissão: R$ " + comissao.toFixed(2)
    document.getElementById("salarioFinal").innerText = "Salário Final: R$ " + salarioFinal.toFixed(2)
}

function exe7(){
    let peso = Number(document.getElementById("peso").value)
    let pesoEngordar = peso + (peso * 0.15)
    let pesoEmagrecer = peso - (peso * 0.20)
    document.getElementById("pesoEngordar").innerText = "Peso se engordar 15%: " + pesoEngordar.toFixed(2) + "kg"
    document.getElementById("pesoEmagrecer").innerText = "Peso se emagrecer 20%: " + pesoEmagrecer.toFixed(2) + "kg"
}

function exe8(){
    let pesoKG = Number(document.getElementById("pesoKG").value)
    let pesoGramas = pesoKG * 1000
    document.getElementById("pesoGramas").innerText = "Peso em gramas: " + pesoGramas + "g"
}

function exe9(){
    let baseMaior = Number(document.getElementById("baseMaior").value)
    let baseMenor = Number(document.getElementById("baseMenor").value)
    let altura = Number(document.getElementById("altura").value)
    let area = ((baseMaior + baseMenor) * altura) / 2
    document.getElementById("area").innerText = "Área do trapézio: " + area.toFixed(2) + " m²"
}

function exe10(){
    let lado = Number(document.getElementById("lado").value)
    let area = lado * lado
    document.getElementById("area").innerText = "Área do quadrado: " + area.toFixed(2) + " m²"
}