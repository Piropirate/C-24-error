class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction : 0.5, 
            density : 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}