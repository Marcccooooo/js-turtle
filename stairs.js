function main(){
    var sideA = getWidth();
    var sideB= getHeight();
    penup();
    left(90);
    forward(sideA/2);
    console.log (turtle.pos)
    right(90);
    forward(sideB/2)
    right(90);
    pendown();

    var NumSteps = prompt ("Number of Steps Please")

    for (var i = 0; i < NumSteps; i++){
        forward (sideA/NumSteps);
        left(90);
        forward(sideB/NumSteps);
        right(90);
    }
}