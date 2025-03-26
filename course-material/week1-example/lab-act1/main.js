// Task class definition
class Task {
  constructor(title) {
    this.title = title;
    this.isCompleted = false;
  }
}

// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Add event listener for the "Add Task" button
addButton.addEventListener("click", () => {
  const title = taskInput.value.trim();

  // Prevent empty tasks
  if (title === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new Task object
  const newTask = new Task(title);
  console.log("Task created:", newTask); // Logs the Task to the console

  // Create a new <li> element
  const li = document.createElement("li");
  li.textContent = newTask.title;

  // Create a "Remove" button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => {
    li.remove(); // Remove the entire <li>
  });

  // Create a "Complete" button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete-btn");
  completeBtn.addEventListener("click", () => {
    // Toggle the isCompleted property in the Task object
    newTask.isCompleted = !newTask.isCompleted;
    console.log("Task updated:", newTask);

    // Toggle a CSS class to visually show completion
    li.classList.toggle("completed");
  });

  // Append buttons to the <li>
  li.appendChild(removeBtn);
  li.appendChild(completeBtn);

  // Append the <li> to the <ul> (taskList)
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";
  taskInput.focus();
});
