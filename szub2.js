

var plotno=document.getElementById("plot");
var rysowanie=plotno.getContext("2d");



var haslo="";
var odpowiedz=[];
var secure=false;
var licznik=0;


var losowanie=function(){

    if(secure===true) return;



    secure=true;

    var tablica = ["cat", "dog", "giraffe","lion","monkey","eagle","elephant","turkey","tiger"];

    haslo = tablica[Math.floor(Math.random() * tablica.length)];

    odpowiedz = [];

    for (var i = 0; i < haslo.length; i++) {

        odpowiedz.push("-");

    }

    document.getElementById("answer").innerHTML=odpowiedz.join("");


};

var nowa=function(){

    location.reload();

};

function litera(x){

    if(secure===false) return;

    licznik++;
    rysuj();

    for(var i=0;i<haslo.length;i++)
    {

        if (haslo[i] === x)
        {

            odpowiedz[i] = x;
            document.getElementById("answer").innerHTML = odpowiedz.join("");

        }

    }


    if((odpowiedz.join("")===haslo)&&(secure===true))
    {


        $("h1").text("Victory!!!");
        $("#plot").slideUp(1000);
        $("#kliki").slideUp(1000);
        $("h2").slideUp(1000);
        $("#losuj").slideUp(1000);
    }




}

function rysuj(){

    if(secure===false) return;

    rysowanie.strokeStyle="white";
    rysowanie.lineWidth=4;
    rysowanie.beginPath();


    if(licznik===1)
    {
        rysowanie.moveTo(10,280);
        rysowanie.lineTo(280,280);
        rysowanie.stroke();
    }
    else if(licznik===2)
    {

        rysowanie.moveTo(60,280);
        rysowanie.lineTo(60,100);
        rysowanie.stroke();

    }
    else if(licznik===3)
    {
        rysowanie.moveTo(50,120);
        rysowanie.lineTo(220,80);
        rysowanie.stroke();
    }
    else if(licznik===4)
    {
        rysowanie.moveTo(200,80);
        rysowanie.lineTo(200,150);
        rysowanie.stroke();
    }
    else if(licznik===5)
    {
        rysowanie.arc(200,150,10,0,Math.PI*2,false);
        rysowanie.fillStyle="white";
        rysowanie.fill();

    }
    else if(licznik===6)
    {
        rysowanie.moveTo(200,150);
        rysowanie.lineTo(200,210);
        rysowanie.stroke();
        rysowanie.moveTo(200,210);
        rysowanie.lineTo(205,213);


        rysowanie.stroke();
    }
    else if(licznik===7)
    {
        rysowanie.moveTo(200,170);
        rysowanie.lineTo(195,195);
        rysowanie.stroke();


    }




    else if(licznik===8)
    {
        rysowanie.arc(202,153,3,0,Math.PI*2,false);
        rysowanie.fillStyle="black";
        rysowanie.fill();



    }
    else if(licznik===9)
    {
        rysowanie.arc(198,145,2,0,Math.PI*2,false);
        rysowanie.fillStyle="black";
        rysowanie.fill();



    }
    else if(licznik===10)
    {
        rysowanie.arc(202,145,2,0,Math.PI*2,false);
        rysowanie.fillStyle="black";
        rysowanie.fill();



    }

    else if(licznik===11)
    {
        rysowanie.arc(200,150,10,0,Math.PI*2,false);
        rysowanie.fillStyle="red";
        rysowanie.fill();

        $("h1").text("Game over!!!");
        $("#answer").slideUp(1000);
        $("#kliki").slideUp(1000);
        $("#losuj").slideUp(1000);
        $("h2").slideUp(1000);

    }





};

$("#nowa").click(nowa);
$("#losuj").click(losowanie);