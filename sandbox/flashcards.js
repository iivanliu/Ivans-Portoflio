var topic = "Computer Science";
var showing = false;
var index = 0;
var words = ["Boolean", "Conditional Statements","Bug", "Index","Parameters", "computing device"];
var definitions = ["A single value of either TRUE or FALSE","Used to control flow of program based on boolean expressions with if-else statements","set of rules, conventions, and data structures that dictate how devices exchange data across networks", "an error in a software program that may cause a program to unexpectedly quit or behave in an unintended manner", "the process of accessing each item in a list one at a time like in Weather forecasting app when we looped over each element in list","A physical device that uses hardware and software to receive, process, and output information, such as computers, mobile phones, and computer chips inside appliances"];

var images= []

updateScreen();
setText("title", topic + " Flashcards")

function updateScreen() {

  if (words.length > 0) {
    setText("word", words[index].toUpperCase());

    if (showing) {
      setText("definition", definitions[index]);
    } else {
      setText("definition", "");
    } 

  } else {
    setText("word", "You learned all the words!");
    setText("definition", "");
  }

  displayMessage("Total words to learn: " + words.length);
}

function toggle() {
  if (showing) {
    showing = false;
    setText("toggleBtn", "Show")
  } else {
    showing = true;
    setText("toggleBtn", "Hide")
  }

  updateScreen();

}

function nextWord() {
if (index < words.length - 1)
  index = index +1
  updateScreen()
  
  console.log("nextWord btn clicked!")
}

function previousWord() {
if (index > 0)
  index = index - 1
  updateScreen()
  console.log("previousWord clicked!");
}

function learnedWord() {
words.splice(index,1);
definitions.splice(index,1);
index = 0;
updateScreen();
  console.log("learned word btn clicked!");
}

function displayMessage(msg) {
  setText("message", msg);
}

function getText(id) {
  return document.getElementById(id).value;
}

function setText(id, value) {
   document.getElementById(id).innerHTML = value;
} 