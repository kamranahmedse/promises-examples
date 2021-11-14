const fetch = require("node-fetch");

////////////////////////////
// Usage via promises
////////////////////////////
function printTodo(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(res.statusText);
    })
    .then((todo) => {
      console.log(todo);
    })
    .catch((err) => console.error(err));
}

printTodo(2);
