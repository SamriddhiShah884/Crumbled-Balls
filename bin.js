class Bin{
    constructor(x,y,width,height){

        var options={
            'isStatic':true
        }
        this.width=width;
        this.height=height;
        
        this.body=Matter.Bodies.rectangle(x,y,width,height,options );
        World.add(world, this.body);

    }
    display(){
        fill ("#87CEFF	");
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
    }
}