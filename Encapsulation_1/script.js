/* 캡슐화(encapsulation)는 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작
인 메서드를 하나로 묶는 것을 말한다. 캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를 정보 은닉이라고 한다. */

/* 정보 은닉은 외부에 공개할 필요가 없는 구현의 일부를 외부에 공개되지 않도록 감추어 적절치 못한 접근으로부터 객체의 상태가 변경되는 것을 방지해 정보를 보호하고, 객체 간의 상호 의존성, 즉 결합도를 낮추는 효과가 있다. */

/* 예제1 */
function Person(name, age){
  this.name = name; //public
  let _age = age; //private

  //인스턴스 메서드
  this.sayHi = function(){
    console.log(`Hi! My name is ${this.name}. I am ${_age}`);
  };
}

const me = new Person('Lee', 20);
me.sayHi(); //Hi! My name is Lee, I am 20.
console.log(me.name); //Lee
console.log(me._age); //undefined

const you = new Person('Lee', 30);
you.sayHi();  //Hi! My name is Kim, I am 30.
console.log(you.name);  //kim
console.log(you._age);  //undefined

/* 예제2 */
const Person = (function(){
  let _age = 0; //private

  //생성자함수
  function Person(name, age){
    this.name = name; //public
    _age = age;
  }

  //프로토타입 메서드
  Person.prototype.sayHi = function(){
    console.log(`Hi! My name is ${this.name}. I am ${_age}`);
  };

  //생성자함수를 변환
  return Person;

}());

const me2 = new Person('Lee', 20);
me2.sayHi(); //Hi! My name is Lee, I am 20.
console.log(me2.name); //Lee
console.log(me2._age); //undefined

const you2 = new Person('Lee', 30);
you2.sayHi();  //Hi! My name is Kim, I am 30.
console.log(you2.name);  //kim
console.log(you2._age);  //undefined
//_age변수 값이 변경된다.
me2.sayHi(); //Hi! My name is Kim, I am 30.