

export function formatarData(data) {
    const dataObj = new Date(data);

    if (isNaN(dataObj.getTime())) {
        return "Data inválida";
    }

    const dia = String(dataObj.getUTCDate()).padStart(2, '0');
    const mes = String(dataObj.getUTCMonth() + 1).padStart(2, '0');
    const ano = dataObj.getUTCFullYear();

    return `${dia}/${mes}/${ano}`;
}

export function gerarIdAleatorio(tamanho) {
    tamanho = tamanho || 8; 
    var caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var id = '';
  
    for (let i = 0; i < tamanho; i++) {
      let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      id += caracteres.charAt(indiceAleatorio);
    }
  
    return id;
  }