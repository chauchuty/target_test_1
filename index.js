import fs from 'fs'

const exercicio1 = () => {
    let indice = 13
    let soma = 0
    let k = 0

    while (k < indice) {
        k = k + 1
        soma = soma + k
    }

    console.log(soma)
}

const exercicio2 = () => {
    const isFibonacci = (num) => {
        let a = 0
        let b = 1

        while (b < num) {
            [a, b] = [b, a + b]
        }
        return b === num || num === 0
    }

    isFibonacci(8)
        ? console.log('É um número de Fibonacci')
        : console.log('Não é um número de Fibonacci')
}

const exercicio3 = () => {
    let faturamentoDiario
    let data

    try {
        data = fs.readFileSync('./files/dados.json', 'utf8')
    } catch (error) {
        console.error('Erro ao ler o arquivo', error)
        return
    }

    faturamentoDiario = JSON.parse(data)

    const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0)

    const valores = diasComFaturamento.map(dia => dia.valor)
    const menorFaturamento = Math.min(...valores)
    const maiorFaturamento = Math.max(...valores)

    const somaFaturamento = valores.reduce((acc, valor) => acc + valor, 0)
    const mediaMensal = somaFaturamento / diasComFaturamento.length

    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length

    console.log(`Menor faturamento: ${menorFaturamento}`)
    console.log(`Maior faturamento: ${maiorFaturamento}`)
    console.log(`Dias acima da média: ${diasAcimaDaMedia}`)
}

const exercicio4 = () => {
    const faturamentoPorEstado = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53,
    };

    const totalMensal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

    for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
        const percentual = (valor / totalMensal) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
}

const exercicio5 = () => {
    const inverterString = (str) => {
        let invertido = '';
        for (let i = str.length - 1; i >= 0; i--) {
            invertido += str[i];
        }
        return invertido;
    }

    console.log(inverterString('Target Sistemas'));
}

(async () => {
    console.log('Exercício 1:')
    exercicio1() // Resposta: 91
    console.log('\nExercício 2:')
    exercicio2() // É um número de Fibonacci
    console.log('\nExercício 3:')
    exercicio3() // Menor faturamento: 10, Maior faturamento: 40, Dias acima da média: 4
    console.log('\nExercício 4:')
    exercicio4() // SP: 42.89%, RJ: 23.20%, MG: 18.48%, ES: 17.21%, Outros: 12.22%
    console.log('\nExercício 5:')
    exercicio5() // sometisaS tregraT
})()