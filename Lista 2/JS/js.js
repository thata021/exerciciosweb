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
        nro2 = menor
        document.getElementById("menor").innerText = "O menor número é: " + menor
    }
}