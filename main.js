let xspacing = 16;
let w; 
let theta = 0.0; 
let amplitude = 75.0; 
let period = 500.0; 
let dx; 
let yvalues; 

function setup() {
  createCanvas(710, 400);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}


function calcWave() {
  theta += 0.04;
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}


function renderWave() {
  noStroke();
  fill(255);
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}