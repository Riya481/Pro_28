class Paper{
    constructor(x,y,r){
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0.7,
            'density':2.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image=loadImage("Paper.png") 
    }

    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(RADIUS);
        image(this.image,0,0,85,85);
        //ellipseMode(RADIUS);
       // ellipse(0,0,this.r,this.r);
        pop();
    }
}