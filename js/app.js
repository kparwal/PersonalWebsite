function maketerminal() {
  $('#mydiv').terminal(function(command, term) {
    if (command == 'clear') {
      term.clear();
    }
    term.echo(returncommand(command));
  }, {
    prompt: '>> ',
    name: 'test',
    greetings: 'Hello, my name is Keshav Parwal! Enter the command "help" to see a list of commands\n\n\n'
  });
}

$(function() {
  maketerminal();
});

function returncommand(command) {
  if (command == 'help') {
    return "\nThese are the currently supported commands\n\nabout\nnormalsite\nclear\n";
  }
  if (command == 'about') {
    return '\n[[;lime;]Hi, my name is Keshav Parwal and I am a budding developer and software engineer studying at the Georgia Institute of Technology. My interests include Web Development, Android Development, and Information Security and Cryptography.]\n'
  }
  if (command == 'normalsite') {
    var text = 'Opening normal website'
    $('body').empty();
    $('body').load("index.html");

  }
  return "[[;red;]\nSorry, that command wasn't recognized. Enter 'help' to see a list of valid commands]\n";
}
