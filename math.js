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
var resposta;
function enviar_calculo(){
    var numero1=document.getElementById("numero1").value;
    var numero2=document.getElementById("numero2").value;
    var actual_answer=parseInt(numero1)*parseInt(numero2);
    var question_number="<h4>"+numero1+"x"+numero2+"</h4>";
    var input_box="<br>resposta:<input type='text'id='input_check_box'>";
    var check_button="<br><br><button class='btn btn_info' onclick='check()'>checar</button>";
    var row=question_number+input_box+check_button;
    document.getElementById("number1").value=" ";
    document.getElementById("number2").value=" ";
}
