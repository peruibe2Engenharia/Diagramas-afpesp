// Captura o número do apartamento pela URL ou define '301' como padrão
const apt = new URLSearchParams(location.search).get('apto') || '301';
document.getElementById('apt-num').textContent = apt;

// Configuração do Botão Diagrama
const btnDiagrama = document.getElementById('download-diagrama');
if (btnDiagrama) {
  // Deixamos o href do HTML agir livremente, apenas ouvimos o clique para o alerta
  btnDiagrama.addEventListener('click', () => {
    setTimeout(() => {
      alert('Download concluído ou arquivo aberto!');
    }, 500);
  });
}

// Configuração do Botão Tabela
const btnTabela = document.getElementById('download-tabela');
if (btnTabela) {
  // Deixamos o href do HTML agir livremente, apenas ouvimos o clique para o alerta
  btnTabela.addEventListener('click', () => {
    setTimeout(() => {
      alert('Download concluído ou arquivo aberto!');
    }, 500);
  });
}
