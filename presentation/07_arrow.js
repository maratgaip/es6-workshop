
function multiArgument() {
  // refactor to an arrow function
  const divide = function(a, b) {
    return a / b
  }
  return divide(40, 10)
}
// console.log(multiArgument())

function noArgument() {
  // refactor to an arrow function
  const getFive = function() {
    return 5
  }
  return getFive()
}
// console.log(noArgument())

function singleArgument() {
  // refactor to an arrow function
  const identity = function(i) {
    return i
  }
  return identity(350)
}
// console.log(singleArgument())

function spreadWithArrow() {
  // refactor to an arrow function
  const asArray = function(...args) {
    return args
  }
  return asArray(1, 2, 3, 4)
}
// console.log(spreadWithArrow())










// SOLUTIONS ARE BELOW THIS LINE!












function multiArgumentSOLUTION() {
  const divide = (a, b) => a / b
  return divide(40, 10)
}
// console.log(multiArgumentSOLUTION())

function noArgumentSOLUTION() {
  const getFive = () => 5
  return getFive()
}
// console.log(noArgumentSOLUTION())

function singleArgumentSOLUTION() {
  const identity = i => i
  return identity(350)
}
// console.log(singleArgumentSOLUTION())

function spreadWithArrowSOLUTION() {
  // refactor to an arrow function
  const asArray = (...args) => args
  return asArray(1, 2, 3, 4)
}
// console.log(spreadWithArrowSOLUTION())
