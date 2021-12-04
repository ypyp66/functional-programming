exports.filter = function (list, predicate) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) new_list.push(list[i]);
  }
  return new_list;
};

exports.map = function map(list, iteratee) {
  /*
    bvalue(key)가 오므로 iteratee는 bvalue()(list[i])가 된다
  */
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    new_list.push(iteratee(list[i])); //return boolean
  }

  return new_list;
};

exports.findById = function (list, id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i];
  }
};

exports.findByName = function (list, name) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === name) {
      return list[i];
    }
  }
};

exports.findByAge = function (list, age) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].age === age) {
      return list[i];
    }
  }
};

exports.findBy = function (key, list, val) {
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === val) return list[i];
  }
};

exports.find = function (list, predicate) {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return list[i];
  }
};
