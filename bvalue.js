function bvalue(key) {
  return function (obj) {
    return obj[key];
  };
}

console.log(bvalue("b")({ a: "hi", b: "hello" }));
