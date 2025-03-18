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