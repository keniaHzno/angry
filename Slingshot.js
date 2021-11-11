class Slingshot {

constructor(bodyA, pointB){

  var options = {
      
    bodyA : bodyA, bodyB : pointB,
  stiffness: 3,
  length: 4,

   }
   this.pointB = pointB
   this.Sling = Constraint.create(options);
World.add(world,this.Sling);

}
fly(){
  this.Sling.bodyA = null
}
display(){
  if (this.Sling.bodyA){
    strokeWeight(.2)
    line(this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.Sling.pointB.position.x,this.Sling.pointB.position.y)
  }
  
}
}