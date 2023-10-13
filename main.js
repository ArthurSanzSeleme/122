x = 0;
y = 0;
drawCircle = "";
drawRect = "";

var SpeechRecognition = window.webkitSpeechRecogniton;

var recogniton = new SpeechRecognition();

function start(){
   document.getElementById("status").innerHTML = "o sistema esta ouvindo, pode falar";
   recogniton.start();
}
recogniton.onresult = function(event) {
   console.log(event);
   
   var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida como:" + content;
        if(content =="círculo")
        {
         x = Math.floor(Math.random () * 900);
         y = Math.floor(Math.random () * 600);  
         document.getElementById("status").innerHTML = "Desenhando um circulo";
         drawCircle = "set";
        }
        if(content == "retangulo")
        {
            x = Math.floor(Math.random () * 900);
            y = Math.floor(Math.random () * 600);  
            document.getElementById("status").innerHTML = "Desenhando um retangulo ";
            drawCircle = "set";
        }
} 

function setup (){
    canvas = createCanvas(900,600);
}

function draw(){
    if(drawCircle == "set")
    {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Um circulo foi desenhado. ";
    drawCircle = "";
    }
  

    if(drawRect== "set");
    {
      rect(x,y,70,50);
     document.getElementById("status").innerHTML = "Um retângulo foi desenhado. ";
     drawRect = "";  
    }
}
