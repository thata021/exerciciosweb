function exe1(){
    let numeros = []
    for (let i = 0; i < 6; i++){
        numeros.push(Number(prompt(`Digite o numero: ${i+1}`)))
    }
    let pares = []
    let impares = []
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 == 0){
            pares.push(numeros[i])
        } else {
            impares.push(numeros[i])
        }
    }
    alert(`Os números pares são: ${pares}\nOs números ímpares são: ${impares}`)
}

function exe2(){
    let numeros = []
    for (let i = 0; i < 7; i++){
        numeros.push(Number(prompt(`Digite o numero: ${i+1}`)))
    }
    let multiplos2 = []
    let multiplos3 = []
    let multiplos2e3 = []
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 == 0 && numeros[i] % 3 == 0){
            multiplos2e3.push(numeros[i])
        } else if (numeros[i] % 2 == 0){
            multiplos2.push(numeros[i])
        } else if (numeros[i] % 3 == 0){
            multiplos3.push(numeros[i])
        }
    }
    alert(`Os números múltiplos de 2 são: ${multiplos2}\nOs números múltiplos de 3 são: ${multiplos3}\nOs números múltiplos de 2 e 3 são: ${multiplos2e3}`)
}

function exe3(){
    let codigos = [], estoque = []
    for (let i = 0; i < 3; i++){
        codigos.push(prompt(`Digite o código do produto: ${i+1}`))
        estoque.push(Number(prompt(`Digite a quantidade do produto: ${i+1}`)))
    }
    let cliente = Number(prompt(`Digite o código do cliente: `))
    do {
    let codigo = prompt(`Digite o código do produto: `)
    let quantidade = Number(prompt(`Digite a quantidade que quer: `))
    let posicao = codigos.indexOf(codigo)
    if (posicao == -1){
        alert(`Produto não encontrado!`)
    } else if (estoque[posicao] < quantidade){
        alert(`Quantidade insuficiente!`)
    } else {
        estoque[posicao] = estoque[posicao] - quantidade
        alert(`Venda realizada com sucesso!\nCódigo do cliente: ${cliente}\nCódigo do produto: ${codigo}\nQuantidade: ${quantidade}`)
    }
    cliente = Number(prompt(`Digite o código do novo cliente: (Digite 0 para encerrar) `))
}
    while (cliente !== 0)
    alert(`Estoque atualizado:\n${codigos}\n${estoque}`)
    
}

function exe4(){
    // declaração do vetor
    let vetor = []
    // usuário informa 15 números
    for(let i=0;i<15;i++){
        vetor.push(Number(prompt(`Informe o ${i+1}o. número `)))
    }
    // verifica os número iguais a 30 e mostrar a posição onde estão
    let posicoes = []
    for(let i=0;i<15;i++){
        if (vetor[i] == 30){
            posicoes.push(i)
        }
    }
    alert(`Número 30 encontrado nas posições ${posicoes}`)
}

function exe5(){
    // declaração dos vetores
    let logica = [], linguagem = []
    // entrada de dados
    for(let i=0;i<15;i++){
        logica.push(Number(prompt(`Informe o ${i+1}o. aluno que faz a disciplina Lógica`)))
    }
    for(let i=0;i<10;i++){
        linguagem.push(Number(prompt(`Informe o ${i+1}o. aluno que faz a disciplina Linguagem`)))
    }
    // encontrar a intersecção
    let interseccao = []
    
    for(let i=0;i<15;i++){ // percorre o vetor logica
        // indexOf() percorre o vetor linguagem e procura por logica[i]
        let posicao = linguagem.indexOf(logica[i])
        if (posicao != -1){ // caso encontrou
            interseccao.push(logica[i])
        }
    }
    alert(`Alunos que fazem Lógica e Linguagem ${interseccao}`)
}

function exe6(){
    let vendas = [], percentuais = [], nomes = [], comissao = []
    for(let i=0;i<5;i++){
        nomes.push(prompt(`Informe nome do ${i+1}o vendedor`))
        vendas.push(Number(prompt(`Informe total vendido pelo ${i+1}o vendedor`)))
        percentuais.push(Number(prompt(`Informe percentual de vendas do ${i+1}o vendedor`)))
        comissao.push(vendas[i] * percentuais[i] / 100)
    }
    let relatorio = ''
    for(let i=0;i<5;i++){
        relatorio += `Vendedor: ${nomes[i]} vai receber R$ ${comissao[i]}\n`
    }
    alert(relatorio)
    let somavendas = 0
    for(let i=0;i<5;i++){
        somavendas += vendas[i]
    }
    alert(`Total vendido: R$ ${somavendas.toFixed(2)}`)
    let maior = comissao[0]
    let menor = comissao[0]
    for(let i=0;i<5;i++){
        if (comissao[i] > maior){
            maior = comissao[i]
        }
        if (comissao[i] < menor){
            menor = comissao[i]
        }
    }
    alert(`${nomes[comissao.indexOf(maior)]} teve a maior comissão de R$ ${maior.toFixed(2)}\n${nomes[comissao.indexOf(menor)]} teve a menor comissão de R$ ${menor.toFixed(2)}`)
}

function exe7(){
    let numeros = []
    for (let i = 0; i < 10; i++){
        numeros.push(Number(prompt(`Digite o numero: ${i+1}`)))
    }
    let conta = 0
    let soma = 0
    for (let i = 0; i < 10; i++){
        if (numeros[i] < 0){
            conta++
        }
        else{
            soma += numeros[i]
        }
    }
    alert(`A soma dos números positivos é: ${soma}\nA quantidade de números negativos é: ${conta}`)
}

function exe8(){
    let nomes = [], medias = []
    for (let i = 0; i < 7; i++){
        nomes.push(prompt(`Digite o nome do aluno: ${i+1}`))
        medias.push(Number(prompt(`Digite a média do aluno: ${i+1}`)))
    }
    let maior = medias[0]
    for (let i = 0; i < 7; i++){
        if (medias[i] > maior){
            maior = medias[i]
        }
    }
    let pos = medias.indexOf(maior)
    alert(`O aluno com a maior média é: ${nomes[pos]} com média ${maior}`)
    for (let i = 0; i < 6; i++){
        if (medias[i] < 7){
            alert(`O aluno ${nomes[i]} precisa tirar ${10 - medias[i]} para passar`)
        }
    }
}

function exe9(){
    let nomes = [], codigos = [], precos = []
    for(let i=0;i<10;i++){
        nomes.push(prompt(`Informe nome do produto ${i+1}`))
        codigos.push(Number(prompt(`Informe código do produto ${i+1}`)))
        precos.push(Number(prompt(`Informe preço do produto ${i+1}`)))
        // let x = (int) (Math.random() * 10)
    }
    // gerar o relatório com os novos preços
    for(let i=0;i<10;i++){
        let novo
        if (codigos[i] % 2 == 0 && precos[i] > 1000){
            novo = precos[i] + precos[i] * 20/100
        }
        else if (codigos[i] % 2 == 0){
            novo = precos[i] + precos[i] * 15/100
        }
        else if (precos[i] > 100){
            novo = precos[i] + precos[i] * 10/100
        }
        else {
            novo = precos[i]
        }
        alert(`${nomes[i]} - ${codigos[i]} - ${precos[i]} - ${novo}`)
    }
}

function exe10(){
    let vetor1 = [], vetor2 = []
    let vetorr1 = [], vetorr2 = []
    //entrada de dados
    for(let i=0;i<10;i++){
        vetor1.push(Number(prompt(`informe o ${i+1}o. elemento do vetor 1`)))
    }
    for(let i=0;i<5;i++){
        vetor2.push(Number(prompt(`informe o ${i+1}o. elemento do vetor 2`)))
    }
    //calcular o vetor resultante 1
    //calcular a soma dos elementos do vetor1
    let somaVet2 = 0
    for(let i=0;i<5;i++){
        somaVet2 += vetor2[i]
    }
    //criar o vetor resultante 1
    for(let i=0;i<5;i++){
        if (vetor1[i] % 2 == 0){
            vetorr1.push(vetor1[i] + somaVet2)
        }
    }
    alert(`Vetor Resultante 1 ${vetorr1}`)
    //calcular vetor resultante 2
    for(let i=0;i<10;i++){ //para cada elemento de vetor 1
        if (vetor1[i] % 2 == 1){ //verifica se elemento é impar
            let qtdeDivisores = 0
            for(let j=0;j<5;j++){ //para cada elemento de vetor 2
                if (vetor1[i] % vetor2[j] == 0){
                    qtdeDivisores++
                }
            }
        }
       vetorr2.push(qtdeDivisores)
    }
    alert(`Vetor Resultante 2 ${vetorr2}`)
}
