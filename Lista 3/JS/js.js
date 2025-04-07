function seguir(){
    alert('Você agora está seguindo Thais')
}

function exe1(){
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    let d = Number(document.getElementById("d").value)

    let i = 1 //variável quje conta quantas vezes o loop vai se repetir
    let aux //será utilizada nas trocas das variáveis a, b, c, d

    while (i <= 3){
        if (a > b){ //se a for maior que b
            aux = a //guarda o valor de a na variável auxiliar
            a = b //a recebe o valor de b
            b = aux //b recebe o valor da variável auxiliar (que é o valor de a)
        }
        if (b > c){ //se b for maior que c
            aux = b //guarda o valor de b na variável auxiliar
            b = c //b recebe o valor de c
            c = aux //c recebe o valor da variável auxiliar (que é o valor de b)
        }
        if (c > d){
            aux = c //guarda o valor de c na variável auxiliar
            c = d //c recebe o valor de d
            d = aux //d recebe o valor da variável auxiliar (que é o valor de c)
        }
        i ++ //incrementa o valor de i em 1
}
    document.getElementById("ordenada").innerHTML = `Os números em ordem crescente são: ${a}, ${b}, ${c}, ${d} e ordem decrescente são: ${d}, ${c}, ${b}, ${a}`
}

function exe2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro
    let saida = ""
    while (preco >= 1.0){
        lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td>${despesa} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
    }
    document.getElementById("tabela").innerHTML = saida
}

function exe3(){
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0
    // estrutura de repetição for
    // let i = 1 será executado uma única vez, logo no início do loop
    // i <= 8 enquanto a condição for verdadeira, o loop continua
    // i++ incrementa o valor de i em 1 a cada iteração do loop
    // o loop vai de 1 a 8, ou seja, 8 iterações
    for (let i = 1; i <= 8; i++){
        idade = Number(prompt(`Digite a idade ${i}`)) //solicita a idade do usuário e converte para número
        //verifica se a idade está dentro dos limites estabelecidos
        if (idade >= 0 && idade <= 15){
            faixa1++ //incrementa o valor de faixa1 em 1
        }
        else if (idade > 15 && idade <= 30){
            faixa2++ //incrementa o valor de faixa2 em 1
        }
        else if (idade > 30 && idade <= 45){
            faixa3++ //incrementa o valor de faixa3 em 1
        }
        else if (idade > 45 && idade <= 60){
            faixa4++ //incrementa o valor de faixa4 em 1
        }
        else if (idade > 60){
            faixa5++ //incrementa o valor de faixa5 em 1
        }
        else{
            alert("Idade inválida")
        }
    }
    document.getElementById("resultado").innerHTML = `F1: ${faixa1} <br/> F2: ${faixa2} <br/> F3: ${faixa3}<br/> F4: ${faixa4} <br/> F5: ${faixa5}`
}

function exe4(){
    let numero = Number(document.getElementById("numero").value);
    let resultado = "<table border='1'><tr><th>Multiplicação</th><th>Resultado</th></tr>"; // Inicia a tabela com cabeçalho
    for(let i = 1; i <= 10; i++){
        resultado += `<tr><td>${numero} x ${i}</td><td>${numero * i}</td></tr>`; // Adiciona cada linha da tabuada
    }
    resultado += "</table>"; // Fecha a tabela
    document.getElementById("resultado").innerHTML = resultado; // Exibe a tabela na página
}

function exe5(){
    let resultado = "" // Variável para armazenar o resultado
    // Loop para gerar a tabuada de 1 a 10
    for(let numero = 1; numero <= 10; numero++){
        resultado += `Tabuada do ${numero} <br/>`
        for(let i = 1; i <= 10; i++){
            resultado += `${numero} x ${i} = ${numero * i} <br/>` // Adiciona cada linha da tabuada
        }
    }
    document.getElementById("resultado2").innerHTML = resultado // Exibe a tabela na página
}