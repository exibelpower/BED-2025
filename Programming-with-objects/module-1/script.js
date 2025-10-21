/* const todoArray = ["Wake up", "Eat Breakfast", "Shower"];

function addTodoItem(item) {
  todoArray.push(item);
}
addTodoItem("To array");
console.log(todoArray); */

const todoObject = {
  todoItems: ["Wake up", "Eat Breakfast", "Shower"],
  add: function (item) {
    this.todoItems.push(item);
  },
  removeByContent: function (value) {
    this.todoItems = this.todoItems.filter((item) => item != value);
  },
  removeByIndex: function (index) {
    this.todoItems.splice(index, 1);
  },

  render: function () {
    const container = document.querySelector("#todo-list");
    container.innerHTML = "";
    this.todoItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerText = item;

      const button = document.createElement("button");
      button.innerText = "delete";
      button.addEventListener("click", () => {
        todoObject.removeByIndex(index);
        todoObject.render();
      });

      li.append(button);
      container.append(li);
    });
  },
};

todoObject.add("to object");
console.log(todoObject.todoItems);
//Call the method to show to content on the webpage
todoObject.removeByContent("Shower");
todoObject.removeByIndex(0);
todoObject.render();

// when the user submits the form, the
// item should be added to the object and to the WP

const form = document.querySelector("#todo-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = document.querySelector("#todo-input").value;
  todoObject.add(value);
  todoObject.render();
});
