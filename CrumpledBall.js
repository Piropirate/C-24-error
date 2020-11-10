class CrumpledBall{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0,0,this.radius);
        pop();
    }
}