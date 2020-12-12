class Mango extends BaseClass {
  constructor(x,y,r){
      var options={
          isStatic:true,
          restitution:0,
          friction:1,
        
      }
    super(x,y,50,50,r,options);
    r = this.radius;
    this.image = loadImage("Images/mango.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}