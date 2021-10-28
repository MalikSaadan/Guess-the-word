var player_1name=localStorage.getItem("p1");
var player_2name=localStorage.getItem("p2");
var player1_score=0;
var player2_score=0;
document.getElementById("player1").innerHTML=player_1name+":"+player1_score;
document.getElementById("player2").innerHTML=player_2name+":"+player2_score;
document.getElementById("qt").innerHTML="question turn-"+player_1name;
document.getElementById("at").innerHTML="answer turn-"+player_2name;
function submit(){
    var word=document.getElementById("question").value;
    var new_word=word.toLowerCase();
    new_question=word.toLowerCase();
    var newwl=new_word.length;
    for(var i=0; i<newwl; i+=2){
        wordchange=new_word.charAt(i);
        new_word=new_word.replace(wordchange,"_");
    }
    var puzzle="<h4 id='puzzle'>Q."+new_word+"</h4>";
    var ab="<br>answer: <input type='text' id='ab'>";
    var cb="<button class='btn btn-primary' onclick='check()'>Next</button>";
    document.getElementById("qa").innerHTML=puzzle+ab+cb;
    document.getElementById("question").innerHTML=" ";
    
}
var qt="player1"
var at="player2"
function check(){
    var type_answer=document.getElementById("ab").value;
    var new_answer=type_answer.toLowerCase();
    if(new_answer==new_question){
        if(at=="player1"){
            player1_score=player1_score+1
            document.getElementById("player1").innerHTML=player_1name+":"+player1_score;
        }
        else{
           player2_score=player2_score+1
           document.getElementById("player2").innerHTML=player_2name+":"+player2_score;
        }
    }
    if(qt=="player1"){
        qt="player2"
        at="player1"
        document.getElementById("qt").innerHTML="question turn-"+player_2name;
        document.getElementById("at").innerHTML="answer turn-"+player_1name;
    }
    else{
        qt="player1"
        at="player2"
        document.getElementById("qt").innerHTML="question turn-"+player_1name;
        document.getElementById("at").innerHTML="answer turn-"+player_2name;
    }
    document.getElementById("qa").innerHTML="";
}