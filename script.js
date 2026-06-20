// Captura o número do apartamento pela URL ou define '301' como padrão
const apt = new URLSearchParams(location.search).get('apto') || '101';
document.getElementById('apt-num').textContent = apt;


// O HTML manda o arquivo, o JS apenas força o download do Diagrama
const btnDiagrama = document.getElementById('download-diagrama');

if (btnDiagrama) {
  // ATENÇÃO: É essa linha abaixo que força o navegador a BAIXAR em vez de abrir!
  btnDiagrama.download = 'diagrama-apto-' + apt + '.pdf';

  btnDiagrama.addEventListener('click', () => {
    setTimeout(() => {
      alert('Download concluído ou arquivo aberto!');
    }, 500);
  });
}


// O HTML manda o arquivo, o JS apenas força o download da Tabela
const btnTabela = document.getElementById('download-tabela');

if (btnTabela) {
  // ATENÇÃO: É essa linha abaixo que força o navegador a BAIXAR em vez de abrir!
  btnTabela.download = 'tabela-cargas-apto-' + apt + '.pdf';

  btnTabela.addEventListener('click', () => {
    setTimeout(() => {
      alert('Download concluído ou arquivo aberto!');
    }, 500);
  });
}
