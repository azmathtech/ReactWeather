//var names = ['Mike', 'Sarah', 'Brandy'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// // use {} if you need multiple lines
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// // if it is just a single line then the {} are not needed
// names.forEach((name) => console.log(name) );
//
// var returnMe =(name) => name + '!';
// console.log(returnMe('Michael'));

// // the this key word does not work correctly inside anonomous functions
// var person = {
//   name: 'Mike',
//   greet: function () {
//     names.forEach(function (name) {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };

// // the this keyword works corretly in arrow functions.  this refers to the variable set by person
// var person = {
//   name: 'Mike',
//   greet: function () {
//     names.forEach( (name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

//Challenge Area
function add (a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

// addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(1, 3));
// addExpression

var addExpression = (a, b) =>  a + b;
console.log(addExpression(1, 4));
