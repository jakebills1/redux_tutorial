"use strict";
const todos = (state = [], action) => {
  // state is an array of all the todos
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(td => todo(td, action));
    default:
      return state;
  }
};
const todo = (state, action) => {
  // state is a single todo
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      } else {
        return {
          ...state,
          completed: !state.completed
        };
      }
    default:
      return state;
  }
};
const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux"
  };
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    }
  ];
  Object.freeze(stateBefore);
  Object.freeze(action);
  if (
    JSON.stringify(todos(stateBefore, action)) === JSON.stringify(stateAfter)
  ) {
    console.log("tests passed");
  }
};
const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "take over the world",
      completed: false
    }
  ];
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "take over the world",
      completed: true
    }
  ];
  const action = {
    type: "TOGGLE_TODO",
    id: 1
  };
  deepFreeze(stateBefore);
  Object.freeze(action);
  if (
    JSON.stringify(todos(stateBefore, action)) === JSON.stringify(stateAfter)
  ) {
    console.log("tests passed");
  } else {
    console.log("tests failed");
  }
};

const deepFreeze = arrOfObjs => {
  arrOfObjs.forEach(obj => {
    Object.freeze(obj);
  });
};
testAddTodo();
testToggleTodo();
