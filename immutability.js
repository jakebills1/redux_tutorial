"use strict";
const add = list => {
  // not pure
  // return list.push(0);

  // pure
  return [...list, 0];
};

const remove = (list, i) => {
  // not pure
  // return list.splice(i, 1);

  // pure
  // return list.slice(0, i).concat(++i);

  // es6 syntax
  return [...list.slice(0, i), ...list.slice(++i)];
};

const inc = (list, index) => {
  return [...list.slice(0, index), list[index] + 1, ...list.slice(++index)];
};

const testAdd = () => {
  const l1 = [];
  const l2 = [0];
  Object.freeze(l1);
  add(l1);
  // if l1 is mutated, script will fail before this line
  console.log("test passed");
};
const testRemove = () => {
  const l1 = [1, 2, 3];
  const l2 = [1, 3];
  Object.freeze(l1);
  if (JSON.stringify(remove(l1, 1)) === JSON.stringify(l2)) {
    console.log("test passed");
  }
};
const testIncCounter = () => {
  const l1 = [1, 2, 3, 4];
  const l2 = [1, 2, 4, 4];
  Object.freeze(l1);
  if (JSON.stringify(inc(l1, 2)) === JSON.stringify(l2)) {
    console.log("test passed");
  }
};
testIncCounter();
