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
    let hash = e.target.dataset.id;
    let isEdit = e.target.dataset.isEdit;
    let urlEdit = url + "/" + hash;
    if (e.target.tagName === "BUTTON" && isEdit === "true") {
      window.location.href = `/edit-item.html#${hash}`;
    } else {
      axios
        .delete(urlEdit)
        .then(res => {
          window.location.href = "/";
        })
        .catch(e => {
          console.log(e);
        });
    }
  });
  // render HTML
  function render(items) {
    context = items.map(
      item =>
        `<li>${item.content}</li><button data-id=${item.id} data-is-edit='true'>Edit</button><button data-id=${item.id} data-is-edit='false'>Delete</button>`
    );
    htmlList.innerHTML = context.join("");
  }
});
