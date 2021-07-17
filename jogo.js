const alphabeto = "abcdeáfghijklmnopqrstuvwxyzãó";

const words = [ 
  'Inócuo', 'Jocoso', 'Fera', 'Odiento', 'Ósculo',
  'Rufião', 'chá', 'Aprestos', 'Corifeu', 'Guapo',
  'Ínsua', 'Menorá', 'Mote', 'Chuva', 'Honra',
  'Mãe', 'Paz', 'diligência', 'prolixo', 'néscio'
];

const linhas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function gerarLetra() {
  let letra = alphabeto.charAt( Math.floor( Math.random() * alphabeto.length ));
  return letra;
}

function gerarLinha() {
  let linha = linhas[Math.floor(Math.random() * linhas.length)];
  return linha;
}

function sortearPalavras() {
  // 3 palavras aleatorias
  let palavras = []
  let palavra = "";
  for (let i = 0; palavras.length < 3; i++) {
    palavra = words[Math.floor(Math.random() * words.length)];
    palavra = palavra.toLowerCase();
    if (palavras.length == 0) {
      palavras.push(palavra);
    } else {
      let confere = "false";
      for (let j = 0; j < palavras.length; j++) {
        if (palavras[j] == palavra) {
          confere = "true";
        }
      }
      if (confere != "true") {
        palavras.push(palavra);
      }
    }
  }
  return palavras;
}

// a posição tem que estar em uma linha aleatória
function sortearLinhas() {
  
  let posicoes = [];
  let linha = "";
  for (let i = 0; posicoes.length < 3; i++) {
    // a posição tem que estar em uma linha aleatória
    linha = gerarLinha();
    if (posicoes.length == 0) {
      posicoes.push(linha);
    } else {
      let confirmacao = "false";
      for (let j = 0; j < posicoes.length; j++) {
        if (posicoes[j] == linha) {
          confirmacao = "true";
        }
      }
      if (confirmacao != true) {
        posicoes.push(linha);
      }
    }
  }
  return posicoes;
}

// tem que receber um calculo assim: (10 - (tamanho da palavra))
// e sortear a posição de inicio
function sortearColunas(palavras) {
  let colunas = [];
  let coluna = 0;
  for (i = 0; colunas.length < 3; i++) {
    coluna = Math.floor(Math.random() * (10 - palavras[i].length)) + 1;
    if (colunas.length == 0) {
      colunas.push(coluna);
    } else {
      let confirmacao = "false";
      for (j = 0; j < colunas.length; j++) {
        if (colunas[j] == coluna) {
          confirmacao = "true";
        }
        if (confirmacao != "true") {
          colunas.push(coluna);
        }
      }
      }
  }
  //return colunas;
  console.log(colunas);
}

function popularAleatorio() {
  for (let i = 1; i <= 100; i++) {
    let father = document.getElementById("c" + i);
    let newElement = document.createElement("span");
    let text = document.createTextNode(gerarLetra());
    newElement.appendChild(text);
    father.appendChild(newElement);
  }
}
//popularAleatorio()

function popularPalavras() {
  let palavras = sortearPalavras();
  let linhas = sortearLinhas();
  let col = 0;
  for (let i = 0; i < linhas.length; i++ ) {

    col = sortearColuna(palavras[i]);
    col = linhas[i] * 10 - 10 + col;
    console.log(col)

    for (let j = 0; j < palavras[i].length; j++) {
      let father = document.getElementById("c"+col);
      let newElement = document.createElement("span");
      let text = document.createTextNode(palavras[i][j]);
      newElement.appendChild(text);
      father.appendChild(newElement);
      col ++;
    }
  }
  //console.log(palavras.length)
}