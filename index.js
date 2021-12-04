let users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
];

function filter(list, predicate) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) new_list.push(list[i]);
  }
  return new_list;
}

/*
==이전코드
let temp_users = [];

for (let i = 0, len = users.length; i < len; i++) {
  if (users[i].age < 30) temp_users.push(users[i]);
}

console.log(temp_users.length);
*/

//==바뀐코드
let temp_users = filter(users, function (user) {
  return user.age < 30;
});

console.log(temp_users);

/*
let users_over_30 = [];
for (let i = 0, len = users.length; i < len; i++) {
  if (users[i].age >= 30) temp_users.push(users[i]);
}
console.log(temp_users.length);
*/

let users_over_30 = filter(users, function (user) {
  return user.age >= 30;
});

function map(list, iteratee) {
  /*
    bvalue(key)가 오므로 iteratee는 bvalue()(list[i])가 된다
  */
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    new_list.push(iteratee(list[i])); //return boolean
  }

  return new_list;
}

/*
let ages = [];
for (let i = 0, len = temp_users.length; i < len; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);
// [25, 28, 27, 24]
*/

let ages = map(temp_users, function (user) {
  return user.age;
});

/*
let names = [];
for (let i = 0, len = temp_users.length; i < len; i++) {
  names.push(temp_users[i].name);
}
console.log(names);
// ["ID", "BJ", "JM"]
*/

let names = map(users_over_30, function (user) {
  return user.name;
});

function log_length(value) {
  return value;
}

console.log(
  log_length(
    map(
      filter(users, function (user) {
        return user.age < 30;
      }),
      (u) => u.age
    )
  )
);

function bvalue(key) {
  return function (obj) {
    return obj[key];
  };
}

// ==============================

const under_30 = (u) => u.age < 30;
const over_30 = (u) => u.age >= 30;

console.log(
  "under_30",
  log_length(map(filter(users, under_30), bvalue("name"))),
  "name",
  log_length(map(filter(users, under_30), bvalue("age")))
);

console.log(
  "over_30",
  log_length(map(filter(users, over_30), bvalue("name"))),
  log_length(map(filter(users, over_30), bvalue("age")))
);

let ages = (list) => map(list, (v) => v.age);
