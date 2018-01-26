function interpolation() {
  // refactor this to a single template literal using interpolation
  // template literals use backticks instead of double/single quote
  // interpolation is done with ${variable}
  const greeting = 'Hello'
  const noun = 'World'
  return greeting.toUpperCase() + ', ' + noun + '!';
}
 //console.log(interpolation())


function multiline() {
  // refactor to a single template literal with multiple lines
  return ('hey\n' +
'this is on a new line\n' +
'another line')
}
 //console.log(multiline())














function interpolationSOLUTION() {
  // refactor this to a single template literal using interpolation
  // template literals use backticks instead of double/single quote
  // interpolation is done with ${variable}
  const greeting = 'Hello'
  const noun = 'World'
  return `${greeting.toUpperCase()}, ${noun}!`
}
// console.log(interpolationSOLUTION())

function multilineSOLUTION() {
  // refactor to a single template literal with multiple lines
  return (`
    this is on a new line
  `)
}
// console.log(multilineSOLUTION())