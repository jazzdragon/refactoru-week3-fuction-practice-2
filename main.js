var getName = function(obj){
  return obj.name;
};

console.log('getName: ', getName({name: 'Luisa', age: 25}));

var totalLetters = function(arr){
  return arr.join('').length;
};

console.log('totalLetters: ', totalLetters(['javascript', 'is', 'awesome']));
console.log('totalLetters: ', totalLetters(['what', 'happened', 'to', 'my', 'function']));
