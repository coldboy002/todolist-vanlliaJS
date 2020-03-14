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
  htmlList.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
      let hash = e.target.dataset.id;
      console.log("click");
      window.location.href = `/edit-item.html#${hash}`;
    }
  });
  // render HTML
  function render(items) {
    context = items.map(
      item => `<li>${item.content}</li><button data-id=${item.id}>Edit</button>`
    );
    htmlList.innerHTML = context.join("");
  }
});
