const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 var bob1; 
 var ground1;
var shot;
var ground2; 
var ground3;
var ground4;
var gamestate = "onSling"; 
var score = 0;
var w;
var h;
var but;
var m=0;
var touches;
function preload(){
  back = loadImage("bg.jpg");
  ninja = loadImage("ninja.png")
}
function setup() {
 w = windowWidth;
 h = windowHeight;
  createCanvas(w,h-h/7.5789);
  console.log(displayWidth,displayHeight)
  engine = Engine.create();
  world = engine.world;
  bob1 = new BobClass(w/7.68,h/3.456,w/21.94285714285714,h/12.34285714285714,90);
ground1 = new Ground(w/2,h/1.728,w-10,h/17.28);
ground2 = new Ground(w/7.68,h/2.468571428571429,w/10.24,h/43.2);
ground3 = new Ground(w/2.194285714285714,h/4.32,w/6.144,h/34.56);
ground4 = new Ground(w/2.194285714285714,h/2.16,w/6.144,h/34.56);
ground5 = new Ground(w/1.464285714285714,h/2.82,w/6.144,h/34.56);

blocka1 = new Grounda(w/1.536,h/2.832786885245902);
blocka2 = new Grounda(w/1.501466275659824,h/2.832786885245902)
blocka3 = new Grounda(w/1.468451242829828,h/2.832786885245902);    
blocka4 = new Grounda(w/1.436856875584659,h/2.832786885245902);
blocka5 = new Grounda(w/1.406593406593407,h/2.832786885245902);

blocka6 = new Grounda(w/1.536,h/4.214634146341463);
blocka7 = new Grounda(w/1.476923076923077,h/4.214634146341463);
blocka8 = new Grounda(w/1.422222222222222,h/4.214634146341463); 

blocka9 = new Grounda(w/1.505882352941176,h/5.574193548387097);
blocka10 = new Grounda(w/1.449056603773585,h/5.574193548387097); 

blocka11 = new Grounda(w/1.476923076923077,h/7.51304347826087); 

block1 = new Grounda(w/2.194285714285714,h/5.76);
block2 = new Grounda(w/2.075675675675676,h/5.76)
block3 = new Grounda(w/1.969230769230769,h/5.76);    
block4 = new Grounda(w/2.327272727272727,h/5.76);
block5 = new Grounda(w/2.47741935483871,h/5.76);

block6 = new Grounda(w/2.194285714285714,h/7.854545454545455);
block7 = new Grounda(w/2.075675675675676,h/7.854545454545455);
block8 = new Grounda(w/2.327272727272727,h/7.854545454545455);

block9 = new Grounda(w/2.14333333333333,h/12.44285714285714);
block10 = new Grounda(w/2.258823529411765,h/12.34285714285714);

block11 = new Grounda(w/2.194285714285714,h/28.8);

block21 = new Grounda(w/2.194285714285714,h/2.468571428571429);
block22 = new Grounda(w/2.075675675675676,h/2.468571428571429);
block23 = new Grounda(w/1.969230769230769,h/2.468571428571429);
block24 = new Grounda(w/2.327272727272727,h/2.468571428571429);
block25 = new Grounda(w/2.47741935483871,h/2.468571428571429);

block26 = new Grounda(w/2.194285714285714,h/2.787096774193548);
block27 = new Grounda(w/2.075675675675676,h/2.787096774193548);
block28 = new Grounda(w/2.327272727272727,h/2.787096774193548);

block29 = new Grounda(w/2.133333333333333,h/3.2);
block210 = new Grounda(w/2.258823529411765,h/3.2);
block211 = new Grounda(w/2.194285714285714,h/3.6);

shot = new Slingshota(bob1.body,{x:w/7.675,y:h/3.456})

but = createButton("Extra")
but.position(w/5.22,h/3.95)
but.size(w/25.72,h/14.28);
but.style('border-radius','250px');
but.style('font-size','20px');
}

function draw() {
  Engine.update(engine);
  touches.length
  background(back);  
  fill("black");
  image(ninja,w/15.36,h/6.545454545454545,w/6.144,h/2.88);
  bob1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();

  block1.display();
  block1.score();
  block3.display();
  block3.score();
  block2.display();
  block2.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();

  block21.display();
  block21.score();
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  block25.display();
  block25.score();
  block26.display();
  block26.score();
  block27.display();
  block27.score();
  block28.display();
  block28.score();
  block29.display();
  block29.score();
  block210.display();
  block210.score();
  block211.display();
  block211.score();
  
  blocka1.display();
  blocka1.score();
  blocka3.display();
  blocka3.score();
  blocka2.display();
  blocka2.score();
  blocka4.display();
  blocka4.score();
  blocka5.display();
  blocka5.score();
  
  blocka6.display();
  blocka6.score();
  blocka7.display();
  blocka7.score();
  blocka8.display();
  blocka8.score();

  blocka9.display();
  blocka9.score();
  blocka10.display();
  blocka10.score();

  blocka11.display();
  blocka11.score();
 
  shot.display();
  textSize(w/43.88571428571429);
  stroke("white")
  if(score<165){
  text("Score : " + score,w/1.742718446601942,h/11.00285714285714);
  text("Turns Left : " + (8-m),w/4.142718446601942,h/11.00285714285714);
  }
  else{
    text("Score : " + score,w/2.56,h/5.76);
  }
if(score>=165){
  textSize(w/19.2);
  fill("violet")
  text("You Win !!!",w/3.072,h/8.64);
}
if(m==8&&score<165){
  textSize(w/38.4)
  text("Sorry Try Again !",w/2.648275862068966,h/5.64);
}
but.mousePressed(()=>{
if(m<8){
  shot.attach(bob1.body);
  Matter.Body.setPosition(bob1.body,{x:w/7.68,y:h/3.456});
  gamestate = "onSling"
  m++;
}
})
  
}

function mouseDragged()
{
  if(gamestate === "onSling"){
    if(mouseX<w/5.485714285714286&&m<=8){
      
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});

    }
    else if(touches.length>0){

    Matter.Body.setPosition(bob1.body,{x:touches[0],y:touches[1]});
    touches = [];
    }
  }
}
function mouseReleased()
{
  if(mouseX<w/5.485714285714286&&m<=8){
    shot.fly();
    gamestate = "launched";
  }
}
