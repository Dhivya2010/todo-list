// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
      alert('Please enter a task!');
      return;
    }
    
    // Create list item
    var li = document.createElement('li');
    li.textContent = taskInput.value;
    
    // Create checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        li.classList.add('completed');
      } else {
        li.classList.remove('completed');
      }
    });
    
    // Create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });
    
    // Append checkbox and delete button to list item
    li.appendChild(checkbox);
    li.appendChild(deleteBtn);
    
    // Append list item to task list
    taskList.appendChild(li);
    
    // Clear input field
    taskInput.value = '';
  }
  