function myFunc(theCar) {
  theCar.make = 'Toyota';
}

let mycar = {make: 'Honda', model: 'Accord', year: 1998};
let x, y;

x = mycar.make; 

myFunc(mycar);
y = mycar.make;

console.log(x,y);

//////////////////////

var a = 1;
var b = 2;

function sum (x, y){
    return x + y;
}

console.log(sum(a,b));
console.log(sum(5,6));
console.log(sum(11,7));

////////////////////////////

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Ձեզ թույլատրել են?');
  }
}

var age = prompt('Քանի տարեկան եք?');

if (checkAge(age)) {
  alert( 'մուտքը թույլատրված է' );
} else {
  alert( 'Մուտքը արգելվում է' );
}

////////////////////////////

function pow(x, n) {
  if (n != 1) { 
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

console.log( pow(2, 3) ); 

