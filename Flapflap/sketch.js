
var bird;
var pipes = [];
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	
}
function mousePressed() {
  if (mousePressed) {
    bird.up();
    //console.log("SPACE");
  }
}

function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.4;
  this.lift = -18;
  this.velocity = 0;

  this.show = function() {
		fill(125, 155, 50);

//ears
		ellipse(this.x - 18, this. y - 15, 28, 28);
		ellipse(this.x + 13, this. y - 15, 28, 28);
// head
    ellipse(this.x, this.y, 38, 38);
		
	//eyes
	fill(255);
	ellipse(this.x + 13, this. y - 5, 15);
	ellipse(this.x , this. y - 5, 15);

		
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(151, 255, 135);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top, 5);
    rect(this.x, height-this.bottom, this.w, this.bottom, 5);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}