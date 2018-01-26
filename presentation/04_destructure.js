function getAverage() {
  // refactor with object destructuring
  const obj = {x: 3.6, y: 7.8, z: 4.3};
  return Math.floor((obj.x + obj.y + obj.z) / 3.0)
}
// console.log(getAverage())

function getAvgTemp() {
  // refactor with nested destructuring
  const weather = {
    location: 'Toronto',
    unit: 'Celsius',
    today: {max: 2.6, min: -6.3},
    tomorrow: {max: 3.2, min: -5.8},
  }
  const maxToday = weather.today.max
  const minToday = weather.today.min

  const maxTomorrow = weather.tomorrow.max
  const minTomorrow = weather.tomorrow.min

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: weather.unit,
  }
}
// console.log(getAvgTemp())

function getFirstTwo() {
  // refactor with array destructuring
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const firstItem = arr[0]
  const secondItem = arr[1]

  return {
    firstItem: firstItem,
    secondItem: secondItem,
  }
}
// console.log(getFirstTwo())











// SOLUTIONS ARE BELOW THIS LINE!












function getAverageSOLUTION() {
  const obj = {x: 3.6, y: 7.8, z: 4.3}
  const {x, y, z} = obj
  return Math.floor((x + y + z) / 3.0)
}
// console.log(getAverageSOLUTION())

function getAvgTempSOLUTION() {
  const weather = {
    location: 'Toronto',
    unit: 'Celsius',
    today: {max: 2.6, min: -6.3},
    tomorrow: {max: 3.2, min: -5.8},
  }
  const {
    unit,
    today: {max: maxToday, min: minToday},
    tomorrow: {max: maxTomorrow, min: minTomorrow},
  } = weather

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: unit,
  }
}
// console.log(getAvgTempSOLUTION())

function getFirstTwoSOLUTION() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const [first, second] = arr

  return {
    first: first,
    second: second,
  }
}
// console.log(getFirstTwoSOLUTION())
