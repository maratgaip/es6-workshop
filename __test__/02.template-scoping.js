jest.autoMockOff();


describe('interpolation', () => {

  xit('can be used in place of `var`', () => {

    const greeting = 'Hello';
    const noun = 'World';
    const greetingTextES5 = greeting.toUpperCase() + ', ' + noun + '!';
    // refactor this to a single template literal using interpolation
    // template literals use backticks instead of double/single quote
    // interpolation is done with ${variable}

    const greetingText = '';

    expect(greetingText).toBe("Hello, World!");
  });

  xit('multiline', () => {

    const textES5 = 'hey\n' +
    'this is on a new line\n' +
    'another line';

    // refactor to a single template literal with multiple lines
    const text = "";

    expect(text).toBe("hey\nthis is on a new line\nanother line");
  });

});