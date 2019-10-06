const { createStore } = Redux;
// a reducer is a pure function that takes state and an action and returns a new state, mutated by the type property of the action
const counter = (state = 0, action) => {
  // state uses to default argument to instantiate state if there is none
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
const store = createStore(counter);
console.log(store.getState());
// tests
if (counter(0, { type: "INCREMENT" }) === 1) {
  console.log("test passed");
} else {
  console.log("test failed");
}
if (counter(1, { type: "DECREMENT" }) === 0) {
  console.log("test passed");
} else {
  console.log("test failed");
}
if (counter(1, { type: undefined }) === 1) {
  console.log("test passed");
} else {
  console.log("test failed");
}
