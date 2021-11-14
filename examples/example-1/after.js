const fetch = require("node-fetch");

async function printTodo(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const todo = await res.json();

  console.log(todo);
}

printTodo(2);
