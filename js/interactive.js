var state = 0;
var NAME_STATE = 0;
var userName;

function maketerminal() {
  $('#mydiv').terminal(function(command, term) {

    term.echo(returncommand(term, command));
  }, {
    prompt: 'What is your name? ',
    name: 'test',
    greetings: 'Hello, my name is Keshav Parwal!\n'
  });
}

function returncommand(term, command) {
  if (state == NAME_STATE) {
    userName = command;
    var firstName = userName.split(' ')[0];
    term.set_prompt(firstName.toLowerCase() + "$ ");
    state = 1;
    return '\nHi, [[;lime;]' + firstName + ']! Enter the command "help" to see your options.\n'
  } else {
    if (command == 'help') {
      return "\nThese are the currently supported commands\n\nabout\nclear\n";
    }
    if (command == 'about') {
      return '\n[[;lime;]My name is Keshav Parwal and I am a budding developer and software engineer studying at the Georgia Institute of Technology.' +
      ' My interests include Web Development, Android Development, and Information Security and Cryptography.\n\nThere is nothing more enjoyable than making'+
      ' what people considered impossible yesterday into today\'s possibility. As such, I like to live on the cutting edge of science, technology, and' +
      ' mathematics. I am a natural problem solver, but more importantly I am an effective and creative communicator. No one person can solve any worthwhile' +
      ' problem on their own, so it is important to be able to bring in the right talent and place it in the right environment. In other words, using the right' +
      ' tool for the right job.]\n'
    }

    return "[[;red;]\nSorry, that command wasn't recognized. Enter 'help' to see a list of valid commands]\n";
  }
}

$(function() {
  maketerminal();
});

function displayTerminal() {
  $('#terminal').slideToggle("slow");
}
