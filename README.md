# Todo-api
Small api for todo app written on Nest JS.

This api can do:

  Get ('http://localhost:3000/api/') return all todos;

  Get ('http://localhost:3000/api/:id') return one item by id;

  Post ('http://localhost:3000/api/') add new item { label: "Some text",
                                                     done: true/false};
  Delete ('http://localhost:3000/api/:id') delete item by id;

  Put ('http://localhost:3000/api/:id') update item by id;
