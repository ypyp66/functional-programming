//const _ = require("./libs");
import * as _ from "./libs.js";

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

function bmatch1(key, val) {
  //한 개의 object에 대한 비교만 가능
  return function (obj) {
    return obj[key] === val;
  };
}

console.log("bmatch1", _.find(users, bmatch1("id", 1))); //users에서 id가 1인 user를 return

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

function bmatch2(obj2, val) {
  console.log("arguments", arguments);
  if (arguments.length === 2) obj2 = object(obj2, val);
  return function (obj) {
    return match(obj, obj2);
  };
}

console.log(_.findIndex(users, bmatch2({ name: "JM", age: 32 }))); //5
console.log(_.findIndex(users, bmatch2({ name: "JM", age: 31 }))); //-1
//=====================
console.log(
  _.filter2([1, 2, 3, 4], function (val, idx) {
    return idx > 1;
  })
);

// identity란?
let a = 10;
console.log("identity", _.identity(a));

//predicate로 _.identity를 사용한 경우
console.log(_.filter2([true, 0, 10, "a", false, null], _.identity)); //[true, 10, 'a'], truthy 값들만 return됨
console.log(_.some([0, null, 2])); //true
console.log(_.some([0, null, false])); //false
console.log(_.every([0, null, 2])); //false
console.log(_.every([{}, true, 2])); //true
