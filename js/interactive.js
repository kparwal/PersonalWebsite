var state = 0;
var NAME_STATE = 0;
var userName;

function maketerminal() {
  $('#mydiv').terminal(function(command, term) {

    term.echo(returncommand(term, command));
  }, {
    prompt: 'What is your name? ',
    name: 'test',
    greetings: 'Hello, my name is Keshav Parwal! (If cursor is not blinking, please click here)\n'
  });
}

function returncommand(term, command) {
  if (state == NAME_STATE) {
    userName = command;
    var firstName = userName.split(' ')[0];
    term.set_prompt(firstName.toLowerCase() + "$ ");
    state = 1;
    return '\nHi, [[;lime;]' + firstName + ']! Enter the command "help" to see your options.\n';
  } else {
    if (command == 'help') {
      return "\nThese are the currently supported commands\n\nabout\nproject\nclear\n";
    }
    if (command == 'about') {
      return '\n[[;lime;]My name is Keshav Parwal and I am a budding developer and software engineer studying at the Georgia Institute of Technology.' +
      ' My interests include Web Development, Android Development, and Information Security and Cryptography.\n\nThere is nothing more enjoyable than making'+
      ' what people considered impossible yesterday into today\'s possibility. As such, I like to live on the cutting edge of science, technology, and' +
      ' mathematics. I am a natural problem solver, but more importantly I am an effective and creative communicator. No one person can solve any worthwhile' +
      ' problem on their own, so it is important to be able to bring in the right talent and place it in the right environment. In other words, using the right' +
      ' tool for the right job.]\n';
    }
    if (command.trim().split(' ')[0] == 'project') {
      var project = command.trim().split(' ')[1];
      if (project) {
        switch (project) {
          case "Shopping":
            return "\n[[;lightblue;]Cloud-based Android and iOS app that streamlines sharing and receiving shopping wishlists and sales between friends. Built with a team of five using Agile/SCRUM development methodologies.]\n"
            break;
          case "Salesforce":
            return "\n[[;lightblue;]Helped to develop an integration toolkit and installer while with Decision First Technologies. Toolkit used a middleman approach to allow Salesforce.com and SAP BusinessObjects to seamlessly interact with one another. I helped to secure the toolkit by adding a license signature and expiration feature as well as creating a server-side installer program and associated Salesforce.com app and Visualforce pages.]\n"
            break;
          case "MathShell":
            return "\n[[;lightblue;]Expression and equation evaluator for Android. It can evaluate complicated expressions, save and reference variables, and has a bevy of in-built functions useful for trigonometry, geometry, and statistics.]\n"
            break;
          case "DPU-Simulator":
            return "\n[[;lightblue;]Web-based simulator for experimenting with register and memory operations. Simple, human-friendly syntax and scripting capabilities, as well as live preview of the microcodes associated with the instructions.]\n"
            break;
          case "KeshavShell":
            return "\n[[;lightblue;]A little web console for the shell enthusiast! Learn about me, my skills, and my portfolio all without leaving the command line!]\n"
            break;
          case "SmartLibrary":
            return "\n[[;lightblue;]Java based desktop application built to help public libraries keep track of items in stock, important patrons, and items that are due. Includes item checkout feature and on-the-fly report generation.]\n"
            break;
        }
      }
      return '\nUSAGE: project [project-name]\nAvailable Projects:\n\tShopping With Friends\n\tSalesforce BusinessObjects Integration\n\tMathShell\n\tDPU-Simulator\n\tKeshavShell (this)\n\tSmartLibrary';
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
