var jogador1=localStorage.getItem("player1");
var jogador2=localStorage.getItem("player2");

var ponto1=0;
var ponto2=0;

document.getElementById("player1Name").innerHTML=jogador1+":";
document.getElementById("player2Name").innerHTML=jogador2+":";

document.getElementById("player1score").innerHTML=ponto1;
document.getElementById("player2score").innerHTML=ponto2;

document.getElementById("turnoDaPergunta").innerHTML="turno da pergunta: "+jogador1;
document.getElementById("turnoDaResposta").innerHTML="turno da resposta: "+jogador2;