class Elastic {
    constructor(bodyA, pointB){
        var elastic_options ={
            pointB:pointB,
            stiffness:0.004,
            length:1
        }
        this.bodyA=bodyA;
        this.elastic = Constraint.create(elastic_options);
        World.add(world, this.elastic);
        this.pointB = pointB;
    }
    fly(){
        this.elastic.bodyA = null;
    }
    attach(body){
        this.elastic.bodyA = body;
    }
    display(){
        if(this.elastic.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
