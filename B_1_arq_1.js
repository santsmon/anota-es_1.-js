function gerarRelatorioROE(ticker, lucro, patrimonio) {
   
    let roe = (lucro / patrimonio) * 100;
    const MEDIA = 15;
    
    // 2. Data e Horário da Operação (Formato: DD/MM/AAAA HH:MM:SS)
    let dataHora = new Date().toLocaleString('pt-BR');

    // 3. Lógica com 3 condições (Acima, Na Média, Abaixo)
    let status;
    if (roe > MEDIA) {
        status = "ACIMA DA MÉDIA";
    } else if (roe === MEDIA) {
        status = "NA MÉDIA";
    } else {
        status = "ABAIXO DA MÉDIA";
    }

    // 4. Retorno do relatório organizado
    return `
=========================================
      RELATÓRIO TÉCNICO DE ATIVO
=========================================
Ativo:            ${ticker}
Data da Operação: ${dataHora}
-----------------------------------------
ROE Calculado:    ${roe.toFixed(2)}%
Média Referência: ${MEDIA.toFixed(2)}%
Status:           ${status}
=========================================
`;
}

// TESTANDO:
console.log(gerarRelatorioROE("PETR4", 31000, 150000));
