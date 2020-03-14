document.addEventListener("DOMContentLoaded", function() {
  let htmlList = document.getElementById("todo-list");
  let context;
  const url = "http://localhost:3000/todos";
  axios
    .get(url)
    .then(function(res) {
      // handle success
      render(res.data);
    })
    .catch(function(err) {
      // handle error
      console.log(err);
    });
  // render HTML
  function render(items) {
    context = items.map(item => `<li>${item.content}</li>`);
    htmlList.innerHTML = context.join("");
  }
});
