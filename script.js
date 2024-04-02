/*
 Project 2 - Array of Objects
 Name: 
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var obj1, obj2, obj3; 

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
  obj1 = new MyClass(100, 100);
  obj2 = new MyClass(200, 100);
  obj3 = new MyClass(150, 200);

}

function draw(){
  background(200); //light gray background
  obj1.move(); // move object 1 (obj1)
  obj1.display(); // display obj1 on screen
  obj2.move();
  obj2.display();
  obj3.move();
  obj3.display();
}

//copy pasted info from assignment begins below 


// the Name of a constructor class should be capitalized
function MyClass (tempX, tempY){ 
  // this constructor expects two arguments
  // all object properties and methods begin with "this."
  this.x = tempX; // assign 1st argument to this.x 
  this.y = tempY; // assign 2nd argument to this.y
  this.sx = random(-5, 5); //refers to sx. allows ellipse to move random direction along the x axis
  this.sy = random(-5, 5); //refers to sx. allows ellipse to move random direction along the y axis
  this.d = 50; // initialize .d property to 50
  //this.speed = random(-1, 1); // initialize .speed to a random number between 1 and -1

  // methods are functions that are assigned to property names
  //TESTING THIS IS OLD
  //this.move = function() {
  // define how the object will change location on screen each frame
    //this.x += this.speed; // move by the value of .speed
    //if (this.x > width || this.x < 0){
    // if the object reaches the right edge OR left edge
      //this.speed = this.speed * -1; // reverse polarity!
    //}
    //this.y += this.speed; // move by the value of .speed
    //if (this.y > height || this.y < 0){
    // if the object reaches the right edge OR left edge
      //this.speed = this.speed * -1; // reverse polarity!
    //}
  //}
  //NEW STUFF BELOW TESTING
  this.move = function(){
    this.x += this.sx;
    this.y += this.sy;
  }
  if (this.x < 0 || this.x > width){ //sets horizontal boundaries for the dot so it doesn't go off screen 
    this.sx *= -1; //tells it to go the opposite direction if it hits the edge of the horizontal boundaries 
}
  if (this.y < 0 || this.y > height) {
    this.sy = this.sy * -1;
  }
  this.display = function(){ 
    // define how the object will look
    push();
    translate(this.x, this.y) // center the drawing at the .x and .y properties of the object
    fill(255, 0, 0); // red
    ellipse(0, 0, this.d, this.d); // draw a circle at the center of the object image
    pop();
  }
} // end of MyClass() constructor

