document.addEventListener("DOMContentLoaded", function() {
  let htmlList = document.getElementById("todo-list");
  let addBtn = document.getElementById("add-btn");
  let input = document.getElementById("new-item");
  // key localStorage
  const storageKey = "TODOS";
  //get localStorage with key is variable storageKey if null assign todo list is empty array ([]);
  let todoList = JSON.parse(localStorage.getItem(storageKey)) || [];
  let context;
  // add todo
  addBtn.addEventListener("click", addItem);
  input.value = sessionStorage.getItem("draft");
  input.addEventListener("change", setSessionStorage);

  function addItem() {
    let newItem = input.value;
    if (newItem) {
      todoList.push(newItem);
    }
    render();
    // set localStorage with key is variable storageKey
    localStorage.setItem(storageKey, JSON.stringify(todoList));
    input.value = "";
  }
  function setSessionStorage(e) {
    sessionStorage.setItem("draft", e.target.value);
  }
  // render HTML
  function render() {
    context = todoList.map(item => `<li>${item}</li>`);
    htmlList.innerHTML = context.join("");
  }

  render();
});
