
// TODO: refactor into class syntax
function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

// TODO: fit into class syntax
Person.prototype.getFullName = function() {
  return `${this.name} ${this.lastName}`;
}

// TODO: fit into class syntax (static)
Person.greetingPerson = function(obj) {
  const p = new Person(obj.name, obj.lastName);
  return `Welcome ${p.getFullName()}`;
}





// ----- Quiz Functions ----

console.log(
  test()
);

function test() {
  const person = new PersonSolution('Mark', 'Twain');
  const q = PersonSolution.greetingPerson(person)
  return person.getFullName()
}







// SOLUTION BELOW THIS LINE
// No peeking!
















class PersonSolution {
  constructor(name = 'Mark', lastName = 'Twain') {
    this.name = name
    this.lastName = lastName
  }
  getFullName() {
    return `${this.name} ${this.lastName}`
  }

  static greetingPerson(obj) {
    const p = new PersonSolution(obj.name, obj.lastName)
    return p
  }
}