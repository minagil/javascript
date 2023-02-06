/* javascript 프로퍼티 복사를 통한 상속 패턴 깊은 복사 얕은 복사 배열 객체 구분 */
// 부모객체의 프로퍼티를 자식의 프로퍼티에 추가하는 방법
const parent = {name: ["알짜배기", "프로그래머"]};
let child = {};
const extend = function(parent, child){
  child = child || {};
  for(let prop in parent){
    child[prop] = parent[prop];
  }
  return child;
}
child = extend(parent, child);
child.name[1] = "웹 개발자";
console.log(parent, child);

/* 결과를 보면 parent와 child 두 객체의 name 값이 모두 변경된 것을 보실 수 있다. javascript는 참조형의 경우 참조주소가 전달이 되기 때문에 값을 변경할 경우 모두 영향을 받는다. 참조형 주소값이 복사되어 서로 영향을 받는 것을 '얕은복사(shallow copy)라고 한다. */

// 깊은 복사(deep copy) - 참조형이더라도 서로 영향을 받지 않고 복사하는 방법
const extend2 = function(parent,child){
  const getObjType = function(obj){
    return Object.prototype.toString.call(obj).slice(8, -1);
  }
  child = child || {};
  for(let prop in parent){
    if(typeof parent[prop] === "object"){
      child[prop] = (getObjType(parent[prop]) === "Array") ? [] : {};
      extend2(parent[prop], child[prop]);
    }else{
      child[prop] = parent[prop];
    }
  }
  return child;
}

const parent2 = {
  name: ["알짜배기","프로그래머"],
  etc: {homepage: "aljjabaegi.tistory.com"}
};
let child2 = {};

child2 = extend2(parent2, child2);
child2.name[1] = "웹 개발자";
child2.etc.homepage = "http://aljjabaegi.tistory.com";
console.log(parent, child2);