let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
const userScore_span = document.querySelector("#userScore");
const compScore_span = document.querySelector("#compScore");
const resultado_p = document.querySelector("#result");
const scores_p = document.querySelector("#scores");
const paperButton_img = document.querySelector("#paperButton");
const rockButton_img = document.querySelector("#rockButton");
const scissorsButton_img = document.querySelector("#scissorsButton");
const result_p = document.querySelector("#result")

// 3 tipos de variáveis!
// let -> pode usar semmpre;
// var -> pode evitar;
// const -> pode usar, quando não for alterar o valor!

//FUNÇÂO JAVASCRIPT
// declarada: function nomeDaFuncao(parametro)
//
// ARROW FUNCTION
// não declarada, sintaxe:
// () => {
// codigo funcao
// }
// () => codigo funcao


function placarColorido() {
  if (pontuacaoUsuario > pontuacaoComputador) {
      scores_p.style.color = "#26ff63";
      scores_p.style.borderColor = "#26ff63";
  } else if (pontuacaoUsuario < pontuacaoComputador) {
      scores_p.style.color = "#fc121b";
      scores_p.style.borderColor = "#fc121b";
  } else {
      scores_p.style.color = "#ffffff"
      scores_p.style.borderColor = "#ffffff";
  }
}

function jogo(cliqueDoUsuario) {
  jogadasPossiveisComputador = ["rock", "paper", "scissors"];
  n = Math.floor(Math.random() * 3);
  cliqueDoComptuador = jogadasPossiveisComputador[n];

  // console.log(cliqueDoUsuario + cliqueDoComptuador)
  switch (cliqueDoUsuario + cliqueDoComptuador) {
    //vitória do usuário
    case "paperButtonrock":
    case "rockButtonscissors":
    case "scissorsButtonpaper":
      pontuacaoUsuario++;
      userScore.innerHTML = pontuacaoUsuario;
      placarColorido();
            document.getElementById(cliqueDoUsuario).classList.add('green-glow');
            setTimeout(function () { document.getElementById(cliqueDoUsuario).classList.remove('green-glow') }, 800);
            result.innerHTML = "Ebaaaaaa, você ganhou. Parabéns! &#128523";
      break;
    //derrota do usuário
    case "paperButtonscissors":
    case "rockButtonpaper":
    case "scissorsButtonrock":
      pontuacaoComputador++;
      compScore.innerHTML = pontuacaoComputador;
      placarColorido();
            document.getElementById(cliqueDoUsuario).classList.add('red-glow');
            setTimeout(function () { document.getElementById(cliqueDoUsuario).classList.remove('red-glow') }, 800);
      result.innerHTML = "Aaaaah que triste, você perdeu! &#128549";
      break;
    //empate
    case "paperButtonpaper":
    case "rockButtonrock":
    case "scissorsButtonscissors":
      result.innerHTML = "Deu empate! &#128530";
      placarColorido();
            document.getElementById(cliqueDoUsuario).classList.add('gray-glow');
            setTimeout(function () { document.getElementById(cliqueDoUsuario).classList.remove('gray-glow') }, 800);
      break;
    //default para algum erro
    default:
      result.innerHTML = "Aconteceu algum erro jogue novamente &#128556";
      break;
  }
}

function principal() {
  paperButton_img.addEventListener("click", () => jogo("paperButton"));
  rockButton_img.addEventListener("click", () => jogo("rockButton"));
  scissorsButton_img.addEventListener("click", () => jogo("scissorsButton"));
}

// Outra Possibilidade!
// function resetar() {
//   resetButton.addEventListener("click", () => {
//     // resetando a variável que guarda o placar
//     pontuacaoUsuario = 0;
//     pontuacaoComputador = 0;
//     // resetando o placar exibido no html
//     userScore.innerHTML = 0;
//     compScore.innerHTML = 0;
//   });
// }

// // BOTÃO RESETAR
resetButton.onclick = () => {
  // resetando a variável que guarda o placar
  pontuacaoUsuario = 0;
  pontuacaoComputador = 0;
  // resetando o placar exibido no html
  userScore.innerHTML = 0;
  compScore.innerHTML = 0;

  // resetando a cor do placar
  scores_p.style.color = "#ffffff"
  scores_p.style.borderColor = "#ffffff";

  // Resetando a mensagem do placar
  result_p.innerHTML = "Faça sua jogada";

};

principal();
// resetar();
