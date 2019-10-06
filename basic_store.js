const actionTypes = {
  inc: "INCREMENT",
  dec: "DECREMENT"
};
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
// the store must maintain a record of current state, and be able to dispatch actions to the reducer function
const createStore = reducer => {
  let state;
  const getState = () => state;
  const dispatch = action => {
    state = reducer(state, action);
  };
  dispatch({});
  return { getState, dispatch };
};
const store = createStore(counter);
console.log(store.getState());
store.dispatch({ type: actionTypes.inc });
console.log(store.getState());
store.dispatch({ type: actionTypes.dec });
console.log(store.getState());
