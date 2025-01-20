function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  let circleX = 100;
  let circleY = 100;
  let circleSize = 50;
  
  function moveCircle() {
    // Use the setInterval function to move the position of the circle every 1000 milliseconds (1 second)
    setInterval(function() {
      circleX += 10;
      if (circleX > width) {
        circleX = 0;
      }
    }, 1000);
  }
  
  function draw() {
    background(220);
    // Draw a circle
    fill(255, 0, 0);
    ellipse(circleX, circleY, circleSize, circleSize);
    
    // Use push and pop to save and restore drawing state
    push();
    translate(100, 100);
    fill(0, 255, 0);
    ellipse(50, 50, 30, 30);
    pop();
  }
  
  //  start timed movement of the circle
  moveCircle();