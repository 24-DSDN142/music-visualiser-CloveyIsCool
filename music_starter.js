let img;
let firstRun = true

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(84, 63, 92) // purple
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER, BOTTOM)
  textSize(24);

  let stars = map(drum, 0, 100, 10, 2) // Creates stars that change sizes based on the 'drum' data
  fill(255, 255, 255); // white
  strokeWeight(0);
  ellipse(10, 10, stars, stars); // Star one
  ellipse(15, 30, stars-5, stars-5); // Star two
  ellipse(22, 48, stars+1, stars+1); // Star three
  ellipse(100, 50, stars, stars); // Star four
  ellipse(89, 100, stars-5, stars-5); // Star five
  ellipse(92, 59, stars+1, stars+1); // Star six
  ellipse(700, 10, stars, stars); // Star seven
  ellipse(650, 35, stars-5, stars-5); // Star eight
  ellipse(680, 67, stars+1, stars+1); // Star nine
  ellipse(620, 50, stars, stars); // Star ten


  
  let skyLine = map(bass, 0, 100, 150, 250)
  fill(128, 47, 83); // magenta
  strokeWeight(0);
  rect(360,240,720,skyLine); // changes the size of the sunset/skyline based on the 'bass' data
  

  let moonBeam = map(other, 0, 100, 50, 65)
  fill(245, 190, 103); //light yellow
  strokeWeight(0);
  ellipse(360, 125, moonBeam+60, moonBeam+60); // draws an outer aura for the moon, based on the 'other' data

  let InnerMoonBeam = map(vocal, 0, 100, 85, 110) // draws an inner aura for the moon, based on the 'vocal' data
  fill(252, 225, 174); //Lighter yellow
  strokeWeight(0);
  ellipse(360, 125, InnerMoonBeam, InnerMoonBeam);

  fill(255, 255, 255); // White
  strokeWeight(0);
  ellipse(360, 125, 70, 70); // Draws the moon


  fill(48, 54, 47); // Dark green
  strokeWeight(0);
  rect(360, 390, 720, 200); // Draws the grass

  
  if(firstRun){
img = loadImage('Animation.gif') // my frame by frame animation

  firstRun = false
 }

image(img,0,0)

fill(255, 140, 33)
textFont('Brush Script MT')
textAlign(CENTER, BOTTOM);
textSize(70);
text(words, width/2, height/3)

}
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
// 