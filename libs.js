export function filter(list, predicate) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) new_list.push(list[i]);
  }
  return new_list;
}

export function filter2(list, predicate) {
  //list : array, predicate : function (조건)
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) new_list.push(list[i]); //predicate가 true면 new_list에 push
  }
  return new_list;
}

export function map(list, iteratee) {
  /*
    bvalue(key)가 오므로 iteratee는 bvalue()(list[i])가 된다
  */
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    new_list.push(iteratee(list[i])); //return boolean
  }

  return new_list;
}

export function findById(list, id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i];
  }
}

export function findByName(list, name) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === name) {
      return list[i];
    }
  }
}

export function findByAge(list, age) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].age === age) {
      return list[i];
    }
  }
}

export function findBy(key, list, val) {
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === val) return list[i];
  }
}

export function find(list, predicate) {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return list[i]; //predicate()가 true면 해당 요소를 return
  }
}

export function findIndex(list, predicate) {
  //list : array, predicate : function
  //
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      //true면 index를 return
      return i;
    }
  }
  return -1; //없으면 -1을 리턴
}

export function identity(v) {
  return v;
}

//some, every 만들기
export function some(list) {
  //list 값 중 하나라도 true이면 true를 return

  return !!find(list, identity);
  //!!는 확실한 논리결과를 가지고 오기 위한 연산자
  //!!true === true, !!undefined === false
}

export function every(list) {
  //모든 값이 true이면 true를 return
  return filter2(list, identity).length === list.length;
  /*
  - flow
  identity()의 결과가 true인 값들이 배열로 넘어옴
  결과 배열의 길이와 주어진 배열의 길이가 같으면 true, 아니면 false
  */
}

//every의 시간 복잡도 개선
function not(v) {
  return !v;
}
function beq(a) {
  return function (b) {
    return a === b;
  };
}

export function every2(list) {
  return beq(-1)(findIndex(list, not));
  //findIndex의 값은 index|-1
  //beq함수에서 -1과 findIndex의 결과가 같으면 모두 참인 값, 다르면 거짓인 값이 있다는 의미
}

//함수 쪼개기
function positive(list) {
  return find(list, identity);
}
function negative(list) {
  return findIndex(list, not);
}
export function some2(list) {}
