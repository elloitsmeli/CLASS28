class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.7,
            length: 10
        }
        this.sling= Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }

    display(){
    if(this.sling.bodyA){
            
        
        var A = this.sling.bodyA.position;
        var B = this.pointB;
        strokeWeight(4)
        line(A.x, A.y, B.x, B.y);
    }}
    
    fly(){
        this.sling.bodyA=null;
    }
}