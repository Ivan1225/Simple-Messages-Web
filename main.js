function Message(id, content) {
  this.id = id;
  this.content = content;
}

var messages = new Array();

window.onload = init;

const initialMessage = {
  1: 'Initial messages show up here',
  2: 'You need to add some message to start',
  3: 'Clear button can clear input message',
  4: 'Destroy button can clear stored message',
}

function init() {
  var submitButton = document.getElementById("submit");
  submitButton.onclick = getInput;

  document.getElementById("message-list-container").style.display = "none";
  display();
}

function display() {
  if (localStorage) {
    for (let i = 0; i<localStorage.length;i++) {
      let k = localStorage.key(i);
      if(k.substring(0,3) == "mes") {
        var item = localStorage.getItem(k);
        var message = JSON.parse(item);
        messages.push(message);
      }
      displayMessagesOnPage();
    }
  } else {
    console.log("Error: no local storage")
  }
}

function displayMessagesOnPage() {
  var ul = document.getElementById('messagesList');
  var listFragment = document.createDocumentFragment();
  for (let i = 0; i < messages.length; i++) {
    var message = messages[i];
    var li = createMessage(message);
    listFragment.appendChild(li);
}
ul.appendChild(listFragment);
}

function displayMessageOnPage(message) {
  var ul = document.getElementById('messagesList');
  var li = createMessage(message)

  ul.appendChild(li);
  document.forms[0].reset();
}

function createMessage(message) {
  var li = document.createElement("li");
  li.setAttribute('class', 'list-group-item');

  var spanContent = document.createElement("span");
  spanContent.innerHTML = message.content;

  var spanDelete = document.createElement("span");
  spanDelete.setAttribute("class", "delete");
  spanDelete.innerHTML = "&nbsp;&#10007;&nbsp;";

  spanDelete.onclick = deleteItem;
  li.appendChild(spanContent);
  li.appendChild(spanDelete);

  return li;
}

function getInput() {
  let inputValue = document.getElementById("message-input").value;
  if (inputValue == null || inputValue == '') {
    alert("Please enter a message");
  } else {
    var id = messages.length;
    var message = new Message(id, inputValue);
    messages.push(message);
    displayMessageOnPage(message);
    saveMessage(message);
  }
}

function saveMessage(message) {
  if (localStorage) {
      var key = "mes" + message.id;
      var item = JSON.stringify(message);
      localStorage.setItem(key, item);
  }
  else {
      console.log("Error: you don't have localStorage!");
  }
}



const clearHandler = () => {
  document.getElementById("message-input").value = '';
}

function deleteItem(e) {
  var span = e.target;
  var id = span.parentElement.id;
  var key = "mes" + id;
  localStorage.removeItem(key);

  for (var i = 0; i < messages.length; i++) {
      if (messages[i].id == id) {
          messages.splice(i, 1);
          break;
      }
  }

  var li = e.target.parentElement;
  var ul = document.getElementById("messagesList");
  ul.removeChild(li);
}

function showList() {
  document.getElementById("message-list-container").style.display = "block";
}

function hideList() {
  document.getElementById("message-list-container").style.display = "none";
}

function destroyAll() {
  messages = new Array;
  localStorage.clear();
  document.getElementById('messagesList').innerHTML = '';
  display();
}