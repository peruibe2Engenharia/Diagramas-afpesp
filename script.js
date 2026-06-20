// Captura o número do apartamento enviado pelo HTML
const apt = document.getElementById('apt-num').textContent.trim();

// Configuração do Botão Diagrama
const btnDiagrama = document.getElementById('download-diagrama');
if (btnDiagrama) {
  // Força o nome do download usando o número que veio do HTML
  btnDiagrama.download = 'diagrama-apto-' + apt + '.pdf';

  btnDiagrama.addEventListener('click', () => {
    setTimeout(() => {
      alert('Download concluído ou arquivo aberto!');
    }, 500);
  });
}

// Configuração do Botão Tabela
const btnTabela = document.getElementById('download-tabela');
if (btnTabela) {
  // Força o nome do download usando o número que veio do HTML
  btnTabela.download = 'tabela-cargas-apto-' + apt + '.pdf';

  btnTabela.addEventListener('click', () => {
    setTimeout(() => {
      alert('Download concluído ou arquivo aberto!');
    }, 500);
  });
}
