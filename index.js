console.log('Our code is running');

//create variable to hold to-do list items
//Function to add to-do item to list
const toDo = [];
function addToDoList(input) {
  return toDo.push({ text: input, completed: false });
}

const btnPush = document.querySelector('#addButton');


//function to populate to-do list from toDo
function popList() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';
  toDo.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = item.text;
      if (item.completed) {
          li.style.textDecoration = 'line-through';
      }
      li.addEventListener('click', () => toggleCompleted(index));
      //add delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'deleteButtonClass'
      deleteButton.addEventListener('mousedown', () => removeToDoItem(index));
      li.appendChild(deleteButton);
      todoList.appendChild(li);
  });
}

//on click add to to-Do
const toDoListClick = () => {
  let todoInput = document.querySelector('#todoInput').value;
  if (todoInput !== "") {
    addToDoList(todoInput);
    } else {
      alert('Input Empty')

    };
    document.getElementById('todoInput').value = ""
    popList()
    let audio = new Audio('https://media.merriam-webster.com/audio/prons/en/us/mp3/p/pear0001.mp3')
    audio.play()
  }
  btnPush.addEventListener("click", toDoListClick);

//delete button function
function removeToDoItem(index) {
  toDo.splice(index, 1);
  popList();
  let audio = new Audio('https://media.merriam-webster.com/audio/prons/en/us/mp3/p/yeet1.mp3')
  audio.play()
}


//Make a function that crosses out list items on click
function toggleCompleted(index) {
  toDo[index].completed = !toDo[index].completed;
  popList();
  let audio = new Audio('https://media.merriam-webster.com/audio/prons/en/us/mp3/w/woohoo01.mp3')
  audio.play()
}

//Make a function that deletes list items


