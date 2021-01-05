class Bob {
   constructor(x,y,radius){
    var options = {
      isStatic: true,
      density: 1, 
      frictionAir: 0.005
    }
    this.body = Bodies.circle(x,y,90,options);
    this.r = 70;
    World.add(world,this.body);
   }
   display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("black");
    stroke("white");
    ellipseMode(CENTER);
    ellipse(0,0,90,90);
    pop();
   }


}