var getName = function(obj){
  return obj.name;
};

var totalLetters = function(arr){
  return arr.join('').length;
};

var keyValue = function(key, value){
  var obj = {};
  obj[key] = value;
  return obj;
};

var negativeIndex = function(arr, num){
  return arr.slice(num)[0];
};

var removeM = function(str){
  return str.split('').filter(function(val){
    return val != 'm';
  }).join('');
};

var printObject = function(obj){
  var key, str = '';
  for (key in obj) {
    str += '\n' + key + ' is ' + obj[key];
  }
  return str;
};

var Vowels = function(str){
  return str.split('').filter(function (val) {
    return val.match(/[aieou]/);
  });
};

var Twins = function(arr){
  return arr.every(function(val, i, arr){
    return (i%2 === 0) ? (val == arr[i+1]) : true;
  });
};

var or = function(arr){
  return arr.some(function(val){return val;});
};

function includes(arr, val) {
  return arr.some(function (value, i) {
    return value === val;
  });
}

var unique = function(arr){
  var cache = [];
  return arr.filter(function (val, i) {
    // .push returns new array length which evaluates to true
    return !includes(cache, val) ? cache.push(val) : false;
  });
};

// tests

console.log('getName: ', getName({name: 'Luisa', age: 25}));

console.log('totalLetters: ', totalLetters(['javascript', 'is', 'awesome']));
console.log('totalLetters: ', totalLetters(['what', 'happened', 'to', 'my', 'function']));

console.log('keyValue: ', keyValue('city', 'Denver'));

console.log('negativeIndex: ', negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log('negativeIndex: ', negativeIndex(['jerry', 'sarah', 'sally'], -1));

console.log('removeM: ', removeM('family'));
console.log('removeM: ', removeM('memory'));

console.log('printObject: ', printObject({ a: 10, b: 20, c: 30 }));
console.log('printObject: ', printObject({ firstName: 'pork', lastName: 'chops' }));

console.log('Vowels: ', Vowels('alabama'));
console.log('Vowels: ', Vowels('What lets in youth?'));

console.log('Twins: ', Twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log('Twins: ', Twins(['a', 'a', 'b', 'z']));
console.log('Twins: ', Twins(['a', 'a', 'b']));
console.log('Twins: ', Twins(['a', 'a', 'b', undefined]));

console.log('or: ', or([false, false, true, false]));
console.log('or: ', or([false, false, false]));
console.log('or: ', or([]));

console.log('unique: ', unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log('unique: ', unique(['todd', 'avery', 'maria', 'avery']));
