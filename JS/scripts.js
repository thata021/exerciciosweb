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