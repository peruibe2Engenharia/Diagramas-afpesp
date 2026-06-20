// O JS agora PEGA o número que já está escrito no próprio HTML
const apt = document.getElementById('apt-num').textContent.trim();


// Configuração do Botão Diagrama (Pega o PDF do HTML e força o download)
const btnDiagrama = document.getElementById('download-diagrama');

if (btnDiagrama) {
  // Força o navegador a baixar em vez de abrir
  btnDiagrama.download = 'diagrama-apto-' + apt + '.pdf';

  btnDiagrama.addEventListener('click', () => {
    setTimeout(() => {
      alert('Download concluído ou arquivo aberto!');
    }, 500);
  });
}


// Configuração do Botão Tabela (Pega o PDF do HTML e força o download)
const btnTabela = document.getElementById('download-tabela');

if (btnTabela) {
  // Força o navegador a baixar em vez de abrir
  btnTabela.download = 'tabela-cargas-apto-' + apt + '.pdf';

  btnTabela.addEventListener('click', () => {
    setTimeout(() => {
      alert('Download concluído ou arquivo aberto!');
    }, 500);
  });
}
