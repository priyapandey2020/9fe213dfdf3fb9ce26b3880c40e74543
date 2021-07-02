class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };