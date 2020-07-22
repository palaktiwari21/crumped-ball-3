class Paper{

    constructor(x,y,height){
        this.image=loadImage("images/paper.png");
    var options=
    {
        isStatic : false ,
        restitution:0.3,
        friction:0.5,
        density:1.2
        
    
    }
    
    this.body=Bodies.circle(x,y,height,options);
    
    this.height=height;
    World.add(world,this.body);
    
    
    }
    display() {
    var  pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER)
    image(this.image,0, 0, this.width, this.height);
    pop();
    
    }
    }
    