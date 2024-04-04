/*
 Project 2 - Array of Objects
 Name: Madison Mizon
 Comments: Here is my aquarium! 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var objects = new Array(20); // the argument to Array() defines its size

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
  for(var i = 0; i < objects.length; i++) { //for loop as defined by the assignment instructions
    objects[i] = new MyClass(random(width), random(height)); //creates the object in a random place on the canvas
    }
}

function draw(){
  background(0, 0, 200); //blue background
  for(var i = 0; i < objects.length; i++){
    objects[i].move(); // each time through the loop, move the next object in the array
    if(objects [i].left){ //if my object (the fish) is moving left it will...
      objects[i].displayleft(); //display my left aligned object
    } else { //if the object is not moving left (aka moving to the right) it will... 
      objects[i].displayright(); //display my right aligned object 
    }
    //objects[i].display(); // call the display method for each object (0 - 9)
  }
}

//copy pasted info from assignment begins below 

// the Name of a constructor class should be capitalized
function MyClass (tempX, tempY){ 
  // this constructor expects two arguments
  // all object properties and methods begin with "this."
  this.x = tempX; // assign 1st argument to this.x 
  this.y = tempY; // assign 2nd argument to this.y
  this.w = random (20, 80); //variable I used in creating my displayed object 
  this.xspeed = random(-8, 2); // initialize .speed to a random number between 1 and -1
  this.yspeed = random(-2, 2); // initialize .speed to a random number between 1 and -1
  this.left; //didn't need to initialize. designates "left" which I use below
  if(this.xspeed < 0){ //if my speed is negative (meaning moving to the left) it will 
    this.left = true; //be "left" aligned, according to my code here 
  } else { //if not (aka my spede is positive, meaning it's moving to the right) it will
    this.left = false; //be "right" aligned. I define left and right so I can use my right and left aligned objects 
  }

  // methods are functions that are assigned to property names
  this.move = function() {
  // define how the object will change location on screen each frame
    this.x += this.xspeed; // move by the value of .speed
    if (this.x > width || this.x < 0){
     //if the object reaches the right edge OR left edge
      this.xspeed = this.xspeed * -1; // reverse polarity!
      this.left = !this.left //! means "not" so if it is true, it will now be false. so "not "this.left""
    }
    this.y += this.yspeed; // move by the value of .speed
    if (this.y > height || this.y < 0){
    // if the object reaches the right edge OR left edge
      this.yspeed = this.yspeed * -1; // reverse polarity!
    }
  }

  this.displayleft = function(){ //my fish that will show when moving to the left 
    // define how the object will look
    push();
    translate(this.x, this.y) // center the drawing at the .x and .y properties of the object
    fill(255, 165, 0); // orange
    ellipse(this.w*.2, this.w*-.5, this.w/2, this.w/3) //dorsal fin
    ellipse(this.w*-.1, this.w*.5, this.w/6, this.w/4) //pelvic fin
    triangle(this.w*.4, 0, this.w*.8, this.w*-.5, this.w*.8, this.w*.5) //tail
    ellipse(0, 0, this.w, this.w*.9); //body
    ellipse(this.w*.1, 0, this.w/4, this.w/6) //pectoral fin
    fill(0)
    ellipse(this.w/-4, this.w*-.2, this.w/7) //eye
    pop();
  }
  this.displayright = function(){ //my fish that will show when moving to the right 
    // define how the object will look
    push();
    translate(this.x, this.y) // center the drawing at the .x and .y properties of the object
    fill(255, 165, 0); // orange
    ellipse(-this.w*.2, this.w*-.5, this.w/2, this.w/3) //dorsal fin
    ellipse(-this.w*-.1, this.w*.5, this.w/6, this.w/4) //pelvic fin
    triangle(-this.w*.4, 0, -this.w*.8, this.w*-.5, -this.w*.8, this.w*.5) //tail
    ellipse(0, 0, this.w, this.w*.9); //body
    ellipse(-this.w*.1, 0, this.w/4, this.w/6) //pectoral fin
    fill(0)
    ellipse(-this.w/-4, this.w*-.2, this.w/7) //eye
    pop();
  }
} // end of MyClass() constructor

