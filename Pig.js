class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

  display(){
    console.log(this.body.speed);

    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }

  }

};



// Blackboard 
// 0 1 --> bits
// one unit of memory - Byte (8 bits)

// visibitly -- 0 -  255


// 00000000 ---- 1 full OFF Byte ==== 0
// 11111111 ---- 1 full ON byte === 255

