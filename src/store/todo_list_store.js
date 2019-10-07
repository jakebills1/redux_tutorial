import { createStore, combineReducers } from "redux";
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
const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};
// the todos field of the state object will be updated by the todos reducer function and likewise for the visibilityFilter field
const todoApp = combineReducers({
  todos,
  visibilityFilter
});
export const store = createStore(todoApp);
