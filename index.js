document.addEventListener("DOMContentLoaded", function() {
  let htmlList = document.getElementById("todo-list");
  let addBtn = document.getElementById("add-btn");

  let todoList = ["have breakfast", "watch a film", "go to bed"];
  let context;
  render();

  addBtn.addEventListener("click", addItem);

  function addItem() {
    let input = document.getElementById("new-item");
    let newItem = input.value;
    if (newItem) {
      todoList.push(newItem);
    }
    render();
    input.value = "";
  }

  function render() {
    context = todoList.map(item => `<li>${item}</li>`);
    htmlList.innerHTML = context.join("");
  }
});
