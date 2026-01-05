function gerarRelatorioROE(ticker, lucro, patrimonio) {
    let roe = (lucro / patrimonio) * 100;

    // 2. Pegando a data atual formatada (dia/mês/ano)
    let dataAtual = new Date().toLocaleDateString('pt-BR');

    // 3. Lógica de análise (Condicional)
    let status = roe > 15 ? "EXCELENTE" : "ABAIXO DA MÉDIA";

    // 4. Retorno usando Template Strings (Crasis) para facilitar a concatenação
    return `--- RELATÓRIO DE ANÁLISE ---
Ativo: ${ticker}
Data da Análise: ${dataAtual}
ROE Calculado: ${roe.toFixed(2)}%
Status: ${status}
---------------------------`;
}

// TESTANDO: (Exemplo com números fictícios de lucro e patrimônio)
console.log(gerarRelatorioROE("PETR4", 31000, 150000));
