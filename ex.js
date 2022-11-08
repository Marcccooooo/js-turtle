
function main()
{
  var sideA = getWidth();
  var sideB =  getHeight();
  var sideC = pythagorean(sideA, sideB)


  console.log(turtle.pos); 
  penup();
  left(90);
  forward(sideA)/2;
  right(90);
  forward(sideB)/2;
  pendown();
  right(45);
  forward(sideC);

  penup();
  right(45);
  forward(sideA)/2
  left(90); 
  forward(sideB)/2
  pendown();
  left(45);
  forward (sideC);

}

  function pythagorean(sideA, sideB)
{
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}