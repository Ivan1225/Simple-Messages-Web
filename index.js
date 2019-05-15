let messages = [];
const initialMessage = {
  1: 'Initial messages show up here',
  2: 'You need to add some message to start',
  3: 'Clear button can clear input message',
  4: 'Destroy button can clear stored message',
}

document.getElementById("message-list-container").style.display = "none";

const clearHandler = () => {
  document.getElementById("message-input").value = '';
}

function submitHandler() {
  let inputValue = document.getElementById("message-input").value;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));
    li.setAttribute('class', 'list-group-item');

    document.getElementById("messages-list").appendChild(li);
    messages.push(inputValue);
  }
  clearHandler();
}

function showList() {
  if (messages.length === 0) {
    document.getElementById('messages-list').innerHTML = JSON.stringify(initialMessage);
  }

  document.getElementById("message-list-container").style.display = "block";
}

function hideList() {
  document.getElementById("message-list-container").style.display = "none";
}

function destroyHandler() {
  messages = [];
}