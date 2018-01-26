
function spreadFunctionCall() {
  // TODO: return the maximum value in an array of integers
  // use spread operator and Math.max() in refactoring
  const arr = [5, 6, 8, 4, 9]
  return Math.max.apply(null, arr)
}
// console.log(spreadFunctionCall())


function mergeObjects() {
  // refactor to object spread
  const obj1 = {
    a: 'a from obj1',
    b: 'b from obj1',
    c: 'c from obj1',
    d: {
      e: 'e from obj1',
      f: 'f from obj1',
    },
  }
  const obj2 = {
    b: 'b from obj2',
    c: 'c from obj2',
    d: {
      g: 'g from obj2',
      h: 'g from obj2',
    },
  }
  return Object.assign({}, obj1, obj2)
}
// console.log(mergeObjects())











// SOLUTIONS ARE GIVEN BELOW












function spreadFunctionCallSOLUTION() {
  const arr = [5, 6, 8, 4, 9]
  return Math.max(...arr)
}
// console.log(spreadFunctionCallSOLUTION())

function mergeObjectsSOLUTION() {
  const obj1 = {
    a: 'a from obj1',
    b: 'b from obj1',
    c: 'c from obj1',
    d: {
      e: 'e from obj1',
      f: 'f from obj1',
    },
  }
  const obj2 = {
    b: 'b from obj2',
    c: 'c from obj2',
    d: {
      g: 'g from obj2',
      h: 'g from obj2',
    },
  }
  return {
    ...obj1,
    ...obj2,
  }
}
// console.log(mergeObjectsSOLUTION())
