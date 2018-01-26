
function basicDefaultParam() {
  return [
    randGen(),
    randGen(4),
    randGen(0),
  ]
  function randGen(n) {
    // refactor with default parameter to handle n = undefined
    n = n || 10

    return Math.floor(n * Math.random())
  }
}
// console.log(basicDefaultParam())


// Multiply first parameter with rest parameters of length.
function restParams() {
  // y is an Array
  return x * y.length
}
// console.log(restParams(2,3,4,5))










// SOLUTIONS ARE BELOW THIS LINE!












function basicDefaultParamSOLUTION() {
  return [
    randGen(),
    randGen(4),
    randGen(0),
  ]
  function randGen(n = 10) {
    return Math.floor(n * Math.random())
  }
}




// console.log(basicDefaultParamSOLUTION())

function restParamSOLUTION(x, ...y) {
  return x * y.length
}
// console.log(restParamSOLUTION(2,3,4,5))