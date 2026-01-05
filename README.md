Manual de Utilidade

Calcúlo fundamentalista // ROE = lucro liquido / pelo patrimonio x 100 }

// ojetivo: Análise Fundamentalista      
#Indicadores chave: P/L (Preço/Lucro)   /
#ROE (Rentabilidade) -                  /ok (executada)
#Dividend Yield (Dividendos).           /


ficheiro previsto:
=========================================
      RELATÓRIO TÉCNICO DE ATIVO
=========================================
Ativo:            PETR4
Data da Operação: 04/01/2026 22:01:17
-----------------------------------------
ROE Calculado:    20.67%
Média Referência: 15.00%
Status:           ACIMA DA MÉDIA
=========================================

variavel possivel: para condicionais de 3 opções...
op 1:
let status = roe > MEDIA ? "ACIMA DA MÉDIA" : "ABAIXO DA MÉDIA"

op 2:   
switch (true) {
    case (roe > MEDIA): status = "ACIMA"; break;
    case (roe === MEDIA): status = "NA MÉDIA"; break;
    default: status = "ABAIXO";
}
