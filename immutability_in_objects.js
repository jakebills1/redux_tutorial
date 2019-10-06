"use strict";
const toggleTodo = todo => {
  //  not pure
  // todo.completed = !todo.completed;
  // return todo;

  // pure
  // Object.assign(<target>, <obj-to-copy>, { <properties-to-override>})
  // return Object.assign({}, todo, {
  //   completed: !todo.completed
  // });

  // es6 syntax
  return {
    ...todo,
    completed: !todo.completed
  };
};
const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: "Learn Redux",
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: "Learn Redux",
    completed: true
  };
  Object.freeze(todoBefore);
  if (JSON.stringify(toggleTodo(todoBefore)) === JSON.stringify(todoAfter)) {
    console.log("test passed");
  }
};
testToggleTodo();
