/*
   OBJETIVO - quando clicarmos no botão temos que mostrar a imagem do fundo correspondente
   - passo 1 - dar um jeito de pegar o ultimo elemento HTML dos botões
   - passo 2 - dar um jeito de identificar o clique do usuário no botão
   - passo 3 - desmarcar o botão selecionado anterior 
   - passo 4 - marcar o botão clicado como se estivesse selecionado
   - passo 5 - esconder a imagem anteriormente selecionada
   - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
   - passo 7 - esconder a informação do dragão anteriormente selecionado 
   - passo 8 - mostrar a informação do dragão referente ao botão selecionado 

   */
// - passo 1 - dar um jeito de pegar o ultimo elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
   botao.addEventListener("click", () => {
      //- passo 3 - desmarcar o botão selecionado anterior 
      desativarbotaoselecionado();

      //- passo 4 - marcar o botão clicado como se estivesse selecionado
      botao.classList.add("selecionado");

      //- passo 5 - esconder a imagem anteriormente selecionada
      esconderimagemativa();

      //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
      mostrarimagemdefundo(indice);

            
     //- passo 7 - esconder a informação do dragão anteriormente selecionado 
     esconderinformacoesativas();


     //- passo 8 - mostrar a informação do dragão referente ao botão selecionado 
     mostrarinformacoes(indice);
   });
});
function mostrarinformacoes(indice) {
   informacoes[indice].classList.add("ativa");
}

function esconderinformacoesativas() {
   const informacoesAtiva = document.querySelector(".informacoes.ativa");
   informacoesAtiva.classList.remove("ativa");
}

function mostrarimagemdefundo(indice) {
   imagens[indice].classList.add("ativa");
}

function esconderimagemativa() {
   const imagemAtiva = document.querySelector(".ativa");
   imagemAtiva.classList.remove("ativa");
}

function desativarbotaoselecionado() {
   const botaoSelecionado = document.querySelector(".selecionado");

   botaoSelecionado.classList.remove("selecionado");
}

