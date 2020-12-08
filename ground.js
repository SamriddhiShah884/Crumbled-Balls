class Ground{
    constructor(x,y,width,height){

        var options={
            'isStatic':true,
            'friction':0.5,
            'density':1.2  
        }
        this.width=width;
        this.height=height;
        
        this.body=Matter.Bodies.rectangle(x,y,width,height,options );
        World.add(world, this.body);

    }
    display(){
        fill ("#ADFF2F");
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
    }
}