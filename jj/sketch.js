function setup() { 
  createCanvas(600, 400);
	background(166, 2, 255);
}
	
	function draw() { 

	noStroke();
	fill(255, 2, 120, 85);
	ellipse(mouseX, mouseY, 25, 25);

	}

function setup() { 
  createCanvas(600, 400);
	background(166, 2, 255);
	frameRate(200)
}
	
	function draw() { 
	}
	
function mouseWheel(){
	background(166, 2, 255);
}

	function mouseDragged(){

	noStroke();
	fill(255, 2, 120, 85);
	ellipse(mouseX, mouseY, 25, 25, 200);
	}
