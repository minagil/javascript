/* javascript Object Extend, Merge, Copy 객체 합치기, 병합하기, 복사하기 assign */

// object선언
var obj = {a: 'a', b: 'b2'};
var obj2 = new Object();
obj2['a'] = 'a';
obj2['b2'] = 'b';
function Func(c, d){
  this.a = c,
  this.b = d
};
var obj3 = new Func('a', 'b2');

// Object Value Override
obj['a'] = 'c';
obj.b = 'd';
console.log(obj);

/* Object Extend, Merge 
Object를 Extend, Merge 할때 jquery에선 extend 함수를 사용하는데 javascript 에선 Object의 assgin함수를 사용합니다.(IE는 지원하지 않음)
*/

var obj = {a: 'a', b: 'b'};
var obj2 = {b: 'c', d: 'd'};
var obj3 = Object.assign(obj, obj2);
console.log(obj);
console.log(obj2);
console.log(obj3);

/* 보시는것과 같이 같은 속성값이 있으면 override됩니다. 그리고 기준이 되는 객체(obj)도 같이 변하게 되죠. obj의 값은 변하지 않으면서 병합하기 위해선 아래와 같이 합니다. */

var obj = {a: 'a', b: 'b'};
var obj2 = {b: 'c', d: 'd'};
var obj3 = Object.assign({}, obj, obj2);
console.log(obj);
console.log(obj2);
console.log(obj3);

/* IE에서는 아래와 같이 사용 */
var obj = {a: 'a', b: 'b'};
var obj2 = {b: 'c', d: 'd'};
var keys = Object.keys(obj2);

for(var i=0; i<keys.length; i++){
  obj[keys[i]] = obj2[keys[i]];
}

console.log(obj);