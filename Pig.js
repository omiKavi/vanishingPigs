//Pig is child of parent Baseclass
class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

    //added a property 
    this.visibility = 255; // 255 -> transparent -> the pig completely visible
  }


display(){
  //accessing display of BaseClass(parent) -> super.display();
  console.log(this.body);

  if(this.body.speed < 3){
    super.display();
  }else{

    push ();
    //we are removing this.body from world using remove() method of World module
    World.remove(world, this.body);
    // reduce the visibility continuously by 5 
    // when it will be as low as 0 it will become opaque
    this.visibility = this.visibility -5;

    //decrease visibility from 255 to 0
    tint( 255, this.visibility);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop (); // it will restore the settings back otherwise it will get applied to all the body of the world
  }
  

}
};