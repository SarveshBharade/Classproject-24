class cannonBall{
    constructor(x,y){
        var Options={
            resitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic:true
        }
        this.radius = 40;
        this.body=Bodies.circle(x,y,this.radius,Options)
        this.image = loadImage("./assets/cannonball.png")
        World.add(world,this.body)
    }
    shoot() {
        var velocity = p5.Vector.fromAngle(cannon.angle)
        velocity.mult(20)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x, y:velocity.y})
    }
    display(){
        var angle = this.body.angle
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        image(this.image,0,0,this.radius,this.radius)
        pop();
    }
    
}