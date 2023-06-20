var mouseevent = "empty";
var lastPositionX,lastPositionY;

canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
widthLine = 1;

canvas.addEventListener("mousedown",myMouseDown);

function myMouseDown(e)
{
    //start
    color=document.getElementById("color").value;
    widthLine=document.getElementById("widthLine").value;
    //ends
    mouseevent = "mousedown";

}

canvas.addEventListener("mousemove",Mymousemove);

function Mymousemove(e)
{
    PositionMouseX = e.clientX -canvas.offsetLeft;
    PositionMouseY = e.clientY -canvas.offsetTop;
    //if verifica se clicou no mouse, se clicou no mouse define a cor e a largura da linha
    if (mouseevent == "mousedown"){
        ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = widthLine;

        console.log("Last position of x and y coordinates = "); 
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
         ctx.moveTo(lastPositionX, lastPositionY);
         
         console.log("Current position of x and y coordinates = ");
          console.log("x = " + PositionMouseX + "y = " + PositionMouseY); 
          ctx.lineTo(PositionMouseX, PositionMouseY); 
          ctx.stroke();
    }
    lastPositionX = PositionMouseX;
     lastPositionY = PositionMouseY;
}

canvas.addEventListener("mouseup", Mymouseup);

function Mymouseup(e)
{
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave" , Mymouseleave);

function Mymouseleave(e)
{
    mouseevent= "mouseleave";
}
//adittionalactivite

function clearArea() 
{ 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 }