// VARIAVEL GLOBAL RESPOSTA
let respondendo = 1;

function resposta(resposta) {
  resultado.innerHTML = ``;

  if (resposta == 1) {
    resultado.innerHTML = `CPU`;
  } else if (resposta == 2) {
    resultado.innerHTML = `ULA`;
  } else if (resposta == 3) {
    resultado.innerHTML = `REGISTRADORES`;
  } else if (resposta == 4) {
    resultado.innerHTML = `ROM`;
  } else if (resposta == 5) {
    resultado.innerHTML = `EPROM`;
  } else if (resposta == 6) {
    resultado.innerHTML = `RAM`;
  } else if (resposta == 7) {
    resultado.innerHTML = `FLASH`;
  } else if (resposta == 8) {
    resultado.innerHTML = `MEMORIA DE MASSA`;
  } else if (resposta == 9) {
    resultado.innerHTML = `DMA`;
  } else if (resposta == 10) {
    resultado.innerHTML = `CS`;
  } else if (resposta == 11) {
    resultado.innerHTML = `ADDRESS BUS`;
  } else if (resposta == 12) {
    resultado.innerHTML = `DATA BUS`;
  } else if (resposta == 13) {
    resultado.innerHTML = `I7`;
  } else if (resposta == 14) {
    resultado.innerHTML = `I5`;
  } else if (resposta == 15) {
    resultado.innerHTML = `QUAD CORE`;
  } else {
    resultado.innerHTML = `DUAL CORE`;
  }
}

function verificar(respondendo) {
  if (respondendo == 1) {
    let resposta1 = in_palavra_1[0].value;
    resposta1 += in_palavra_1[1].value;
    resposta1 += in_palavra_1[2].value;

    if (resposta1 == "cpu") {
      in_palavra_1[0].style = "color: green;";
      in_palavra_1[1].style = "color: green;";
      in_palavra_1[2].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(1);
    } else {
      in_palavra_1[0].style = "color: red;";
      in_palavra_1[1].style = "color: red;";
      in_palavra_1[2].style = "color: red;";
      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 2) {
    let resposta2 = in_palavra_2[0].value;
    resposta2 += in_palavra_16[2].value;
    resposta2 += in_palavra_2[1].value;

    if (resposta2 == "ula") {
      in_palavra_2[0].style = "color: green;";
      in_palavra_16[2].style = "color: green;";
      in_palavra_2[1].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(2);
    } else {
      in_palavra_2[0].style = "color: red;";
      in_palavra_16[2].style = "color: red;";
      in_palavra_2[1].style = "color: red;";
      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 3) {
    let resposta3 = in_palavra_3[0].value;
    resposta3 += in_palavra_3[1].value;
    resposta3 += in_palavra_3[2].value;
    resposta3 += in_palavra_3[3].value;
    resposta3 += in_palavra_3[4].value;
    resposta3 += in_palavra_3[5].value;
    resposta3 += in_palavra_3[6].value;
    resposta3 += in_palavra_3[7].value;
    resposta3 += in_palavra_3[8].value;
    resposta3 += in_palavra_3[9].value;
    resposta3 += in_palavra_3[10].value;
    resposta3 += in_palavra_3[11].value;
    resposta3 += in_palavra_3[12].value;

    if (resposta3 == "registradores") {
      in_palavra_3[0].style = "color: green;";
      in_palavra_3[1].style = "color: green;";
      in_palavra_3[2].style = "color: green;";
      in_palavra_3[3].style = "color: green;";
      in_palavra_3[4].style = "color: green;";
      in_palavra_3[5].style = "color: green;";
      in_palavra_3[6].style = "color: green;";
      in_palavra_3[7].style = "color: green;";
      in_palavra_3[8].style = "color: green;";
      in_palavra_3[9].style = "color: green;";
      in_palavra_3[10].style = "color: green;";
      in_palavra_3[11].style = "color: green;";
      in_palavra_3[12].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(3);
    } else {
      in_palavra_3[0].style = "color: red;";
      in_palavra_3[1].style = "color: red;";
      in_palavra_3[2].style = "color: red;";
      in_palavra_3[3].style = "color: red;";
      in_palavra_3[4].style = "color: red;";
      in_palavra_3[5].style = "color: red;";
      in_palavra_3[6].style = "color: red;";
      in_palavra_3[7].style = "color: red;";
      in_palavra_3[8].style = "color: red;";
      in_palavra_3[9].style = "color: red;";
      in_palavra_3[10].style = "color: red;";
      in_palavra_3[11].style = "color: red;";
      in_palavra_3[12].style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 4) {
    let resposta4 = in_palavra_3[0].value;
    resposta4 += in_palavra_4[0].value;
    resposta4 += in_palavra_4[1].value;

    if (resposta4 == "rom") {
      in_palavra_3[0].style = "color: green;";
      in_palavra_4[0].style = "color: green;";
      in_palavra_4[1].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(4);
    } else {
      in_palavra_3[0].style = "color: red;";
      in_palavra_4[0].style = "color: red;";
      in_palavra_4[1].style = "color: red;";
      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 5) {
    let resposta5 = in_palavra_3[11].value;
    resposta5 += in_palavra_5[0].value;
    resposta5 += in_palavra_5[1].value;
    resposta5 += in_palavra_5[2].value;
    resposta5 += in_palavra_5[3].value;

    if (resposta5 == "eprom") {
      in_palavra_3[11].style = "color: green;";
      in_palavra_5[0].style = "color: green;";
      in_palavra_5[1].style = "color: green;";
      in_palavra_5[2].style = "color: green;";
      in_palavra_5[3].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(5);
    } else {
      in_palavra_3[11].style = "color: red;";
      in_palavra_5[0].style = "color: red;";
      in_palavra_5[1].style = "color: red;";
      in_palavra_5[2].style = "color: red;";
      in_palavra_5[3].style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 6) {
    let resposta6 = in_palavra_6[0].value;
    resposta6 += in_palavra_6[1].value;
    resposta6 += in_palavra_6[2].value;

    if (resposta6 == "ram") {
      in_palavra_6[0].style = "color: green;";
      in_palavra_6[1].style = "color: green;";
      in_palavra_6[2].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(6);
    } else {
      in_palavra_6[0].style = "color: red;";
      in_palavra_6[1].style = "color: red;";
      in_palavra_6[2].style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 7) {
    let resposta7 = in_palavra_7[0].value;
    resposta7 += in_palavra_7[1].value;
    resposta7 += in_palavra_7[2].value;
    resposta7 += in_palavra_7[3].value;
    resposta7 += in_palavra_7[4].value;

    if (resposta7 == "flash") {
      in_palavra_7[0].style = "color: green;";
      in_palavra_7[1].style = "color: green;";
      in_palavra_7[2].style = "color: green;";
      in_palavra_7[3].style = "color: green;";
      in_palavra_7[4].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(7);
    } else {
      in_palavra_7[0].style = "color: red;";
      in_palavra_7[1].style = "color: red;";
      in_palavra_7[2].style = "color: red;";
      in_palavra_7[3].style = "color: red;";
      in_palavra_7[4].style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 8) {
    let resposta8 = in_palavra_8[0].value;
    resposta8 += in_palavra_8[1].value;
    resposta8 += in_palavra_8[2].value;
    resposta8 += in_palavra_8[3].value;
    resposta8 += in_palavra_8[4].value;
    resposta8 += in_palavra_8[5].value;
    resposta8 += in_palavra_8[6].value;
    resposta8 += in_palavra_8[7].value;
    resposta8 += in_palavra_8[8].value;
    resposta8 += in_palavra_8[9].value;
    resposta8 += in_palavra_8[10].value;
    resposta8 += in_palavra_8[11].value;
    resposta8 += in_palavra_8[12].value;
    resposta8 += in_palavra_8[13].value;

    if (resposta8 == "memoriademassa") {
      in_palavra_8[0].style = "color: green;";
      in_palavra_8[1].style = "color: green;";
      in_palavra_8[2].style = "color: green;";
      in_palavra_8[3].style = "color: green;";
      in_palavra_8[4].style = "color: green;";
      in_palavra_8[5].style = "color: green;";
      in_palavra_8[6].style = "color: green;";
      in_palavra_8[7].style = "color: green;";
      in_palavra_8[8].style = "color: green;";
      in_palavra_8[9].style = "color: green;";
      in_palavra_8[10].style = "color: green;";
      in_palavra_8[11].style = "color: green;";
      in_palavra_8[12].style = "color: green;";
      in_palavra_8[13].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(8);
    } else {
      in_palavra_8[0].style = "color: red;";
      in_palavra_8[1].style = "color: red;";
      in_palavra_8[2].style = "color: red;";
      in_palavra_8[3].style = "color: red;";
      in_palavra_8[4].style = "color: red;";
      in_palavra_8[5].style = "color: red;";
      in_palavra_8[6].style = "color: red;";
      in_palavra_8[7].style = "color: red;";
      in_palavra_8[8].style = "color: red;";
      in_palavra_8[9].style = "color: red;";
      in_palavra_8[10].style = "color: red;";
      in_palavra_8[11].style = "color: red;";
      in_palavra_8[12].style = "color: red;";
      in_palavra_8[13].style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 9) {
    let resposta9 = in_palavra_15[3].value;
    resposta9 += in_palavra_9.value;
    resposta9 += in_palavra_7[2].value;

    if (resposta9 == "dma") {
      in_palavra_15[3].style = "color: green;";
      in_palavra_9.style = "color: green;";
      in_palavra_7[2].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(9);
    } else {
      in_palavra_15[3].style = "color: red;";
      in_palavra_9.style = "color: red;";
      in_palavra_7[2].style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 10) {
    let resposta9 = in_palavra_1[0].value;
    resposta9 += in_palavra_10.value;

    if (resposta9 == "cs") {
      in_palavra_1[0].style = "color: green;";
      in_palavra_10.style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(10);
    } else {
      in_palavra_1[0].style = "color: red;";
      in_palavra_10.style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 11) {
    let resposta11 = in_palavra_8[13].value;
    resposta11 += in_palavra_11[0].value;
    resposta11 += in_palavra_11[1].value;
    resposta11 += in_palavra_6[0].value;
    resposta11 += in_palavra_11[2].value;
    resposta11 += in_palavra_3[4].value;
    resposta11 += in_palavra_11[3].value;
    resposta11 += in_palavra_11[4].value;
    resposta11 += in_palavra_11[5].value;
    resposta11 += in_palavra_11[6].value;

    if (resposta11 == "addressbus") {
      in_palavra_8[13].style = "color: green;";
      in_palavra_11[0].style = "color: green;";
      in_palavra_11[1].style = "color: green;";
      in_palavra_6[0].style = "color: green;";
      in_palavra_11[2].style = "color: green;";
      in_palavra_3[4].style = "color: green;";
      in_palavra_11[3].style = "color: green;";
      in_palavra_11[4].style = "color: green;";
      in_palavra_11[5].style = "color: green;";
      in_palavra_11[6].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(11);
    } else {
      in_palavra_8[13].style = "color: red;";
      in_palavra_11[0].style = "color: red;";
      in_palavra_11[1].style = "color: red;";
      in_palavra_6[0].style = "color: red;";
      in_palavra_11[2].style = "color: red;";
      in_palavra_3[4].style = "color: red;";
      in_palavra_11[3].style = "color: red;";
      in_palavra_11[4].style = "color: red;";
      in_palavra_11[5].style = "color: red;";
      in_palavra_11[6].style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 12) {
    let resposta12 = in_palavra_3[8].value;
    resposta12 += in_palavra_12[0].value;
    resposta12 += in_palavra_12[1].value;
    resposta12 += in_palavra_12[2].value;
    resposta12 += in_palavra_12[3].value;
    resposta12 += in_palavra_1[2].value;
    resposta12 += in_palavra_12[4].value;

    if (resposta12 == "databus") {
      in_palavra_3[8].style = "color: green;";
      in_palavra_12[0].style = "color: green;";
      in_palavra_12[1].style = "color: green;";
      in_palavra_12[2].style = "color: green;";
      in_palavra_12[3].style = "color: green;";
      in_palavra_1[2].style = "color: green;";
      in_palavra_12[4].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(12);
    } else {
      in_palavra_3[8].style = "color: red;";
      in_palavra_12[0].style = "color: red;";
      in_palavra_12[1].style = "color: red;";
      in_palavra_12[2].style = "color: red;";
      in_palavra_12[3].style = "color: red;";
      in_palavra_1[2].style = "color: red;";
      in_palavra_12[4].style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 13) {
    let resposta9 = in_palavra_8[5].value;
    resposta9 += in_palavra_13.value;

    if (resposta9 == "i7") {
      in_palavra_8[5].style = "color: green;";
      in_palavra_13.style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(13);
    } else {
      in_palavra_8[5].style = "color: red;";
      in_palavra_13.style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 14) {
    let resposta9 = in_palavra_3[3].value;
    resposta9 += in_palavra_14.value;

    if (resposta9 == "i5") {
      in_palavra_3[3].style = "color: green;";
      in_palavra_14.style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(14);
    } else {
      in_palavra_3[3].style = "color: red;";
      in_palavra_14.style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 15) {
    let resposta15 = in_palavra_15[0].value;
    resposta15 += in_palavra_15[1].value;
    resposta15 += in_palavra_15[2].value;
    resposta15 += in_palavra_15[3].value;
    resposta15 += in_palavra_15[4].value;
    resposta15 += in_palavra_15[5].value;
    resposta15 += in_palavra_15[6].value;
    resposta15 += in_palavra_15[7].value;

    if (resposta15 == "quadcore") {
      in_palavra_15[0].style = "color: green;";
      in_palavra_15[1].style = "color: green;";
      in_palavra_15[2].style = "color: green;";
      in_palavra_15[3].style = "color: green;";
      in_palavra_15[4].style = "color: green;";
      in_palavra_15[5].style = "color: green;";
      in_palavra_15[6].style = "color: green;";
      in_palavra_15[7].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(15);
    } else {
      in_palavra_15[0].style = "color: red;";
      in_palavra_15[1].style = "color: red;";
      in_palavra_15[2].style = "color: red;";
      in_palavra_15[3].style = "color: red;";
      in_palavra_15[4].style = "color: red;";
      in_palavra_15[5].style = "color: red;";
      in_palavra_15[6].style = "color: red;";
      in_palavra_15[7].style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  } else if (respondendo == 16) {
    let resposta16 = in_palavra_8[7].value;
    resposta16 += in_palavra_16[0].value;
    resposta16 += in_palavra_16[1].value;
    resposta16 += in_palavra_16[2].value;
    resposta16 += in_palavra_16[3].value;
    resposta16 += in_palavra_16[4].value;
    resposta16 += in_palavra_16[5].value;
    resposta16 += in_palavra_15[7].value;

    if (resposta16 == "dualcore") {
      in_palavra_8[7].style = "color: green;";
      in_palavra_16[0].style = "color: green;";
      in_palavra_16[1].style = "color: green;";
      in_palavra_16[2].style = "color: green;";
      in_palavra_16[3].style = "color: green;";
      in_palavra_16[4].style = "color: green;";
      in_palavra_16[5].style = "color: green;";
      in_palavra_15[7].style = "color: green;";
      div_mascara.classList.add("animacao_acertou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_acertou");
      }, 1000);
      proxima(16);
    } else {
      in_palavra_8[7].style = "color: red;";
      in_palavra_16[0].style = "color: red;";
      in_palavra_16[1].style = "color: red;";
      in_palavra_16[2].style = "color: red;";
      in_palavra_16[3].style = "color: red;";
      in_palavra_16[4].style = "color: red;";
      in_palavra_16[5].style = "color: red;";
      in_palavra_15[7].style = "color: red;";

      div_mascara.classList.add("animacao_errou");
      setTimeout(function () {
        div_mascara.classList.remove("animacao_errou");
      }, 1000);
    }
  }
}

function proxima(numero) {
  var perguntaAnterior = document.getElementById("idQuestionBox" + numero);
  if (numero == 16) {
    var primeiraPergunta = document.getElementById("idQuestionBox1");
    primeiraPergunta.classList.add("apareceu");
  } else {
    var proximoNumero = numero + 1;
    var proximaPergunta = document.getElementById(
      "idQuestionBox" + proximoNumero
    );
    proximaPergunta.classList.add("apareceu");
  }
  perguntaAnterior.classList.remove("apareceu");
}


function inicio(){
  document.getElementById('id01').style.display='none'
  document.getElementById('id02').style.display='none'
}