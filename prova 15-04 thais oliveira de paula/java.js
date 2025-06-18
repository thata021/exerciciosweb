function prova() {
    let idade, altura, peso, raca, corpelo
    let racaL = 0, qst1 = 0, media = 0, qst2 = 0, qst3 = 0, somaIdadesQst2 = 0

    for (let i = 1; i <= 10; i++) {
        do {
            raca = prompt("Digite a raça do animal: V (Vira Lata), L (Labrador) ou P (Poodle)").toUpperCase()
            idade = prompt("Digite a idade do animal (em anos): ")
            altura = prompt("Digite a altura do animal (em metros): ")
            peso = prompt("Digite o peso do animal (em KG): ")
            corpelo = prompt("Digite a cor do pelo do animal: P (Preto), C (Castanho), L (Loiro) ou B (Branco)").toUpperCase()
        } while (
            (raca != 'L' && raca != 'V' && raca != 'P') && (idade <= 0) && (altura <= 0) && (peso <= 0) && (corpelo != 'P' && corpelo != 'C' && corpelo != 'L' && corpelo != 'B')
        )

        if (raca == 'L') {
            racaL++
        }

        if (idade >= 10 && peso <= 10) {
            qst1++
        }

        if (altura <= 0.5) {
            qst2++
            somaIdadesQst2 += Number(idade)
        }

        if (corpelo == 'B' && raca != 'V') {
            qst3++
        }
    }
    media = somaIdadesQst2 / qst2

    document.getElementById("resultado").innerHTML = `Animais com mais de 10 anos e menos de 10KG: ${qst1} <br/>
        Média das idades dos animais com altura inferior a 0.5 metros: ${media} <br/>
        Labradores: ${racaL} <br/>
        Animais com pelo branco e diferentes de Vira-Lata: ${qst3}`
}

