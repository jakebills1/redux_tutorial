* Redux represents the state of your entire app using a plain javascript object. 
  * the state is immuteable but can be effected by dispatching an action
    * action is a js object with a type property
      * it can also have an index, or anyother relevent information
  * the reducer function: a pure functions that accepts state and action as arguments and returns the next state. 
  * store: Redux exports a function called createStore, which has three different methods
    * getState: returns current state
    * dispatch: sends an action to mutate the state
    * subscribe: accepts a callback function to run every time the store is updated
  * avoiding mutateing arrays and objects
    * arrays: concat, spread operator, slice, 
* pure functions: a function whose return value depends only on its inputs, eg it has no side effects. it does not modify an array passed to it. 
* impure functions: can have side effects. may make database calls, effect dom, or override the values passed in