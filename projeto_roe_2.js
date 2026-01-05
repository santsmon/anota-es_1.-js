function gerarRelatorioROE(ticker, lucro, patrimonio) {
    // 1. Cálculos Base
    let roe = (lucro / patrimonio) * 100;
    const MEDIA = 15;
    let diferenca = roe - MEDIA;
    let sinal = diferenca > 0 ? "+" : "";

    // 2. Data e Hora atual formatada
    let dataHora = new Date().toLocaleString('pt-BR');

    // 3. Lógica de Status usando Switch (True)
    let status;
    switch (true) {
        case (roe > MEDIA):
            status = "ACIMA DA MÉDIA";
            break;
        case (roe === MEDIA):
            status = "NA MÉDIA";
            break;
        default:
            status = "ABAIXO DA MÉDIA";
    }

    // 4. Return com Concatenação (Template Strings)
    return `
=========================================
      RELATÓRIO DE COTAÇÕES (ROE)
=========================================
Data/Hora:    ${dataHora}
Ativo:        ${ticker}
-----------------------------------------
ROE:          ${roe.toFixed(2)}%
Referência:   ${MEDIA.toFixed(2)}%
Diferença:    ${sinal}${diferenca.toFixed(2)}%
Status:       ${status}
=========================================`;
}

// Executando o teste no console
console.log(gerarRelatorioROE("PETR4", 31000, 150000));
