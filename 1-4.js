//함수를 대신 실행하는 함수를 리턴하는 함수

{
  function callWidth(val1) {
    return function (val2, func) {
      return func(val1, val2);
    };
  }
  function add(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }

  let callWidth10 = callWidth(10);
  console.log(callWidth10(20, add));
  console.log(callWidth10(20, sub));
  console.log(callWidth(10)(20, add));
}

//////////////////

{
  function add(a, b) {
    return a + b;
  }

  let add10 = add.bind(null, 10);
  console.log(add10(20)); //30
}
