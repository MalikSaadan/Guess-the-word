function play(){
    var p1=document.getElementById("player_1").value;
    var p2=document.getElementById("player_2").value;
    localStorage.setItem("p1",p1);
    localStorage.setItem("p2",p2);
    window.location="game_page.html";
}