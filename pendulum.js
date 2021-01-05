class Pendulum {
  constructor(bodyA,pointB){
    var options = {
       bodyA: bodyA,
       pointB: pointB,
       stiffness: 1,
       angularStiffness: 1,
       length: 220

    }
    this.pointB = pointB;
    this.pointX = bodyA.x;
    this.pointY = bodyA.y - 250;
    this.body = Constraint.create(options);
    World.add(world,this.body);

  }
  display(){
    if(this.body.bodyA){
    var pointA = this.body.bodyA.position;
    var pointB = this.pointB;

    push();
    strokeWeight(3);
    stroke("white");
    line(pointB.x,pointB.y,pointA.x,pointA.y);
    pop();
  }

  }


}