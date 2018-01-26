
function immutable() {
  // what is returned?
  const object = {a: 'b'};
  const array = [1, 2, 3, 4];

  object.a = 'q';
  array.splice(1, 1);
  return {object: object, array: array}
}
 //console.log(immutable());

function immutableReference() {
  // what is returned?
  const object = {a: 'b'}
  //object = {a: 'q'}
  return object
}
// console.log(immutableReference())

function ifBlock() {
  // what is returned?
  if (3 > 1) {
    const x = 34
    let y = 43
  }
  return {x: x, y: y}
}
// console.log(ifBlock())

function block() {
  // what is returned?
  { // this is called a "block" ✨
    const x = 42
    let y = 24
  }
  return {x: x, y: y}
}
// console.log(block())

function scoped() {
  // what is returned?
  let x = 33
  {
    const x = 123
  }
  return x
}
// console.log(scoped())