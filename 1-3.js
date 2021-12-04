const _ = require("./libs");

let users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
];

function bmatch(key, val) {
  return function (obj) {
    return obj[key] === val;
  };
}

console.log(
  _.filter(users, function (user) {
    return user.id === 3;
  })[0]
);

console.log(_.findById(users, 5));
console.log(_.findByName(users, "PJ"));
console.log(_.findByAge(users, 24));
console.log(_.findBy("name", users, "BJ"), _.findBy("age", users, 27));
console.log(
  _.find(users, function (user) {
    return user.age === 25;
  })
);

console.log("123123", _.find(users, bmatch("id", 1)));
console.log(_.filter(users, bmatch("age", 32)));
console.log(_.map(users, bmatch("age", 32)));

function object(key, val) {
  let obj = {};
  obj[key] = val;
  return obj;
}

function match(obj, obj2) {
  for (let key in obj2) {
    if (obj[key] !== obj2[key]) return false;
  }
  return true;
}
