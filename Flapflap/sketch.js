var bird;
var pipes = [];
var score = 0;
var asteroids = [];
var l;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
    for (var i = 0; i < 5; i++) {
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(51, 204, 255, 75);
new Audio('https://www.bensound.com/royalty-free-music?download=epic').play()

  
  
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
  		fill(random(255), random(255), random(255));
      textSize(50);
      text(score, 200, 55);

    for (var l = 0; l < asteroids.length; l++) {
    if (true) {
    }
    asteroids[l].render();
    asteroids[l].update();
    asteroids[l].edges();
  }
}


function mousePressed() {
  if (mousePressed) {
    bird.up();
    score += 1;
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
    fill(51, 51, 0);
 		rect(this.x, 0, this.w, this.top, 5);
    rect(this.x, height-this.bottom, this.w, this.bottom, 5);   
 if (this.highlight) {
      fill(255, 51, 255);
      rect(this.x, 0, this.w, this.top, 5);
    	rect(this.x, height-this.bottom, this.w, this.bottom, 5);
   background(0)  	
   fill(255, 204, 204);
      textSize(25);
      text("DEAD BIRD :) Refresh = Restart", 20, 300);
   this.speed = 0;
   bird.lift = 0; 
    }
   
       
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

function Asteroid(pos, r) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height))
  }
  if (r) {
    this.r = r * 0.5;
  } else {
    this.r = random(15, 50);
  }

  this.vel = p5.Vector.random2D();
  this.total = floor(random(5, 15));
  this.offset = [];
  for (var i = 0; i < this.total; i++) {
    this.offset[i] = random(-this.r * 0.5, this.r * 0.5);
  }

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function() {
    push();
    stroke(255);
    noFill();
    translate(this.pos.x, this.pos.y);
    //ellipse(0, 0, this.r * 2);
    beginShape();
    for (var i = 0; i < this.total; i++) {
      var angle = map(i, 0, this.total, 0, TWO_PI);
      var r = this.r + this.offset[i];
      var x = r * cos(angle);
      var y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }

  this.breakup = function() {
    var newA = [];
    newA[0] = new Asteroid(this.pos, this.r);
    newA[1] = new Asteroid(this.pos, this.r);
    return newA;
  }

  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

}
