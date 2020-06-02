class Balls{
    constructor(x, y,radius) {
      var options={
        isStatic:false,
        'restitution':0.8,
        'friction':0.5,
        'density':1.0
      }
        this.body=Bodies.circle(x, y,radius,options);
        this.radius=radius;
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
      }
      display(){
        push()
        ellipse(this.body.position.x,this.body.position.y, this.radius);
        pop()
      }
  }