class Grounda extends Groundo{
    constructor(x,y){
     super(x,y,w/43.88571428571429,h/21.6);
     this.Visibility = 0;
     
    }
    display(){
        if(this.body.speed<15){
            super.display()
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility-5;
            tint(255,this.Visibility);
            pop();
        }
    }

score()
    {
        if(this.Visibility<0 && this.Visibility>- 30){
            score++
        }
    }
}
