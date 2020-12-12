class tree extends BaseClass {
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        
      super(x,y,500,500,options);
      
      this.image = loadImage("Images/tree.png");
    }
  
    display() {
      
      super.display();
    }
  }