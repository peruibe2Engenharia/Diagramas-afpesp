// Captura o número do apartamento pela URL ou define '301' como padrão
const apt = new URLSearchParams(location.search).get('apto') || '301';
document.getElementById('apt-num').textContent = apt;

// Configuração do Botão Diagrama
const btnDiagrama = document.getElementById('download-diagrama');
if (btnDiagrama) {
  // Altera apenas o nome do arquivo final sugerido no download
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
  // Altera apenas o nome do arquivo final sugerido no download
  btnTabela.download = 'tabela-cargas-apto-' + apt + '.pdf';

  btnTabela.addEventListener('click', () => {
    setTimeout(() => {
      alert('Download concluído ou arquivo aberto!');
    }, 500);
  });
}
