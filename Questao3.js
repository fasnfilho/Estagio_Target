const fs = require('fs');

// Função para ler e processar o arquivo JSON
function processarFaturamento(caminhoArquivo) {
    // Leitura do arquivo JSON
    const data = fs.readFileSync(caminhoArquivo);
    const json = JSON.parse(data);

    // Extrair o array de faturamento
    const faturamento = json.faturamento;

    // Filtrar apenas os dias com faturamento
    const valores = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);

    if (valores.length === 0) {
        console.log("Não há dados de faturamento disponíveis.");
        return;
    }

    // Calcular o menor e o maior valor de faturamento
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);

    // Calcular a média mensal
    const soma = valores.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = soma / valores.length;

    // Contar quantos dias têm faturamento superior à média mensal
    const diasAcimaMedia = valores.filter(valor => valor > mediaMensal).length;

    // Exibir os resultados
    console.log(`Menor valor de faturamento: ${menorValor}`);
    console.log(`Maior valor de faturamento: ${maiorValor}`);
    console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaMedia}`);
}

// Chamar a função passando o caminho do arquivo JSON
processarFaturamento('faturamento.json');
