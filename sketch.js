var canvas;
var slider;
let = pen;

function preload() {
   pen = loadImage('c/pen2.png');
 }

function setup() {
   canvas = createCanvas (1460, 2270);
   canvas.position (-20, 25);
   canvas.style('cursor', 'url(c/pen2.png), auto'); 
    slider = createSlider(1, 36, 6);
    slider.position (90,950);

}

function keyPressed (){
   clear();
}

function draw() {

   if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
      
      let sw = slider.value();
        strokeWeight(sw);
        stroke(0, 85, 255); // Color del trazo (azulito)

        }

          // Para pantallas táctiles
  if (touches.length > 1) {
    let t = touches;
    line(t[0].x, t[0].y, t[1].x, t[1].y); // Línea entre dos dedos
  } else if (touches.length === 1) {
    line(pmouseX, pmouseY, touches[0].x, touches[0].y);
  }
}
