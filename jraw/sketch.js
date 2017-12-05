// These are varibales that are stand in for our random color.
var r, g, b; 

/* Setup function serves as the background. The r, g, b varibables chose a random number
on the RGB scale and applies it to the background */ 
function setup() 
{
	createCanvas(500, 500)
	r = random(600);
	g = random(600);
	b = random(600);
	background(166, 2, 255);

}

/* mouseDragged allows us to draw. strokeWeight gives our ellipse a thick outline
Stokre and fill use r, g, b inorder to give it a random  color. Ellipse uses mouseX 
and MouseY so that we may draw circles where we click and drag.*/
function mouseDragged()
{
	strokeWeight(4); 
	stroke(r,g,b, 100);
	fill(r, g, b, 100);
	ellipse(mouseX, mouseY, 55, 55);
}

/* mousePressed allows us to change the color on our draw tool with every click
through the use of the r, g, b variables */
function mousePressed()
{
	r = random(600);
	g = random(600);
	b = random(600);
}

/* the mouseWheel function changes the color of our background with the use of the 
r, g, b. */ 
function mouseWheel()
{
	background(g, r, b);
}
