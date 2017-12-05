var bubbles = []; 

function setup() { 
  createCanvas(650, 650);
	for (var i = 0; i < 15; i = i +1) { 
	bubbles[i] = new Bubble(random(width), random(height)); 
} 
} 

class Bubble {
	constructor(x, y, m) {
		this.x = x;
		this.y = y;
		this.r = 40;
		this.col = color(255);}
	
	changeColor () {
		strokeWeight();
		this.col = color(0);
	}
	
	intersects(other) { 
	var d = dist(this.x, this.y, other.x, other.y)
	if (d < this.r + other.r) {
		return true; 
	} else { 
		return false; 
	} 
}

	bubble(){
		stroke(255);
		fill(this.col);
		ellipse(this.x, this.y, this.r *2, this.r *2);
	}
	
	display(){ 
		stroke(255); 
		fill(255); 
		ellipse(this.x,this.y, this.r *2, this.r *2); 
	} 
	
	update(){ 
		this.x =this.x + random(-4,4); 
		this.y = this.y + random(-4,4); 
	} 
}
	
function draw() {
	
	if (bubbles[0].y < 40) { 
	bubbles[0].y = 0; 
} 
	
	if (bubbles[0].y > 610) { 
	bubbles[0].y = 610; 
}  
	
	if (bubbles[0].x < 40) { 
	bubbles[0].x = 40; 
} 
	
	if (bubbles[0].x > 610) { 
	bubbles[0].x = 610; 
} 
		
background(0);
		
		for (var i = 0; i < bubbles.length; i = i + 1) { 
			bubbles[i].display(); 

	for (var j = 0; j < bubbles.length; j = j + 1) { 
		if (i !=j && bubbles[i].intersects(bubbles[j])) { 
			bubbles[j].changeColor(); 
				
if (keyCode === UP_ARROW) {
bubbles[0].y = bubbles[0].y - 1;
} else if (keyCode === DOWN_ARROW) {
bubbles[0].y = bubbles[0].y + 1;
}	
if (keyCode === LEFT_ARROW) {
bubbles[0].x = bubbles[0].x - 1;
} else if (keyCode === RIGHT_ARROW) {
bubbles[0].x = bubbles[0].x + 1;
}	




			}
		}
	}
}
