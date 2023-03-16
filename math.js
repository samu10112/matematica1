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
    resposta=parseInt(numero1)*parseInt(numero2);
    var question_number="<h4>"+numero1+"x"+numero2+"</h4>";
    var input_box="<br>resposta:<input type='text'id='input_check_box'>";
    var check_button="<br><br><button class='btn btn_info' onclick='check()'>checar</button>";
    var row=question_number+input_box+check_button;
    document.getElementById("caixa").innerHTML=row;
    document.getElementById("numero1").value=" ";
    document.getElementById("numero2").value=" ";
}
var question_turn="player1";
    var answer_turn="player2";

function check(){
    var get_answer=document.getElementById("input_check_box").value;
    if(get_answer==resposta){
        if(answer_turn=="player1"){
            ponto1=ponto1+1;
            document.getElementById("player1score").innerHTML=ponto1;
        }
        else{
            ponto2=ponto2+1;
            document.getElementById("player2score").innerHTML=ponto2;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("turnoDaPergunta").innerHTML="turno da pergunta -"+jogador2;
    }
    else{
        question_turn="player1";
        document.getElementById("turnoDaPergunta").innerHTML="turno da pergunta -"+jogador1;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("turnoDaResposta").innerHTML="turno da resposta -"+jogador2;
    }
    else{
        answer_turn="player1";
        document.getElementById("turnoDaResposta").innerHTML="turno da resposta -"+jogador1;
    }
}