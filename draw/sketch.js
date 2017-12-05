var b1;
var b2;

function setup() { 
createCanvas(400, 400);
b1 = new Bubble(250,200);
b2 = new Bubble(350,200);
} 

class Bubble{
constructor(x,y) {
this.x = x;
this.y = y;
this.r = 48;
this.col = color(255,200,0);}

changeColor () {
this.col = color(random(255), random(255),random(255));
}

display(){
stroke(255);
fill(this.col);
ellipse(this.x,this.y, this.r *2, this.r *2);
}

update(){
this.x =this.x + random(-4,4);
this.y = this.y + random(-4,4);
}
}

function draw() { 
background(220);

b1.update();
b2.update();
b1.display();
b2.display();

var d= dist(b1.x,b1.y,b2.x,b2.y);

if (d< b1.r + b2.r){
b1.changeColor();
b2.changeColor();}

if (keyCode === UP_ARROW) {
b1.y = b1.y - 10;
} else if (keyCode === DOWN_ARROW) {
b1.y = b1.y + 10;
}	
if (keyCode === LEFT_ARROW) {
b1.x = b1.x - 10;
} else if (keyCode === RIGHT_ARROW) {
b1.x = b1.x + 10;
}	

if (b1.y < 0) {
b1.y = 0;
}
if (b1.y>400){
b1.y= 400;
}
if (b1.x < 0) {
b1.x = 0;
}
if (b1.x>400){
b1.x= 400;
}



}