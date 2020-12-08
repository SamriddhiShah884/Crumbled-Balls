class Paper{
    constructor(x,y){
        
        var options={
            'isStatic':false,
            'restitution':0.5,
            'friction':0.5,
            'density':1.2       
            
        }

        this.x=x;
        this.y=y;
        this.body=Matter.Bodies.circle(this.x,this.y, 25, options);
        World.add(world, this.body);
        this.r=25;
        
    }

    display(){
       var  ppos=this.body.position;
        push ();
        translate(ppos.x,ppos.y);
        ellipseMode(RADIUS);
        fill("#AB82FF");
        ellipse(50,5,this.r,this.r);
        pop();
     
    }
}