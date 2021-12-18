//Kami tienes que renombrar las clases, como aparecen en tu archivo index, ya que estan en español
//y por eso no se visualiza en el navegador.

//Renombralas desde donde aparecen tus archivos y no en la clase.

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
//En la línea de abajo tienes que quitar la palabra "Object" a las variables ya que en la líneas de abajo solo es "bob".
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	
	bob = new bob(400,575,40)
	bob3 = new bob(440,575,40)
	bob4 = new bob(480,575,40)
	//Elimina la línea de abajo, solo son 5 bolitas.
	bob5 = new bob(520,575,40)
	
	
	/*En esta línea es donde unes las cuerdas con cada bolita, por lo tanto modifica 
	las líneas 3, 4 y 5 para que se unan con su respectiva pelotita*/
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope=new rope(bob2.body,roofObject.body,0, 0)
	rope3=new rope(bob2.body,roofObject.body,40, 0)
	rope4=new rope(bob2.body,roofObject.body,80, 0)
	//Elimina esta línea de abajo.
	rope5=new rope(bob2.body,roofObject.body,120, 0)
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  //Elimina la línea de abajo.
  rope.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  //Elimina la línea de abajo.
  bob.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
 
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		//Vuelve a quitar la palabra "Object", para que solo quede bob1.
		Matter.Body.applyForce (bobObject1.body,bobObject1.body.position, {x: -50, y: -45});
	}
}




