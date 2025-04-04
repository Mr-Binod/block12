


class Student {
    // for default put the default orders in behind 
    constructor(_age, _city = "서울", _name = "soon"){
    // constructor(_name , age, city) {
        this.name = _name;
        this.age = _age;
        this._city = _city;
    }
    getInfo() {
        console.log(this);
        return `내 이름은 ${this.name}`
    }
    setInfo() {

    }
}

const student = new Student(20); // class color will be green

console.log(student);
// 함수와 메서드 차이 메서드는 객채에 포함된 함수

// 상위 객체를 바인딩해서

student.getInfo();

// 전역에 this를 찍으면 window
console.log(this);

let getInfo = student.getInfo;

console.log(getInfo);
getInfo();
// 찾지 못한다 주소를 참조해서 할당한 경우

// 사용할때 한번 정의해서 호출하거나 변수에 할다해서 사용할때
// 콜백 함수들을 사용할깨 익명함수는 정의하고 재사용 안할 내용이하던지를 작성해서 사용할때
// 아니면 단순하게 함수의 값 형태를 사용할때
let getInfo2 = function() {
    console.log(this);
}

let getInfo3 = getInfo2;

getInfo2();
getInfo3();

class Character {
    constructor(_hp, _mp, _atk) {
        this.hp = _hp;
        this.mp = _mp;
        this.atk = _atk;
    }
    getState() {
        return `캐릭터의 HP : ${this.hp} MP : ${this.mp} ATK : ${this.atk}`;
    }
    // 정적 메서드
    // 클래스에서 사용할 정적 메서드
    // 일반적으로 클래스의 공용 메서드로 사용하기 위해서 만든다.
    // 객체에 포함되지 않고
    
    static getAtk(n) {
        return n.atk;
    }
}   

let character = new Character(100, 100, 10);

console.log(character);
console.dir(character); // 객체의 형태를 출력해서 확인할때 dir이 봄더 명확하게 표현해준가.

// 정적 메서드 호출
Character.getAtk(character);

// 프로토 타입
// 자바스크립트의 객체는 모두 원형을 가지고 있다
// 원형의 객체를 모든 객체다 상속받는다.
// 프로토 타입 객체지향에 반하는 내용을 가지고 탄생한 언이어기 때문에

let num = "안녕";

String.prototype.myfoo = function() {
    console.log("내가 만든 메서드");
}

// 자비스크립트는 원형의 객체를 상속 박소 있다.
num.myfoo();

// 문자열도 배열과 마찬가지로 인덱스로 인덱스로 접근이 가능하다.
console.log(num.indexOf("녕"));

console.log(num[1]);
// 원시타입은 boxing unboxing 일어난다 //

class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    run() {
        this.speed += this.speed;
        console.log(`${this.name}은 ${this.speed} 로 달리고 있다.(부모의 메서드)`);

    }
    stop() {
        this.speed = 0;
        console.log(`${this.name}이 멈췄다.(부보 메서트)`)
    }

}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    // 오버라이딩 부모의 함수를 받아서 오버 로드, 오버 라이딩
    // 재정의해서 사용할수 있다.
    run(speed) {
        this.speed = speed;
        console.log(`${this.name}은 ${this.speed}로 달리는 중이다 (나는 자식의 오버라이딩 함수)`)
    }
    speak() {
        console.log("야용~~")
    }
}

const cat = new Cat("때꺼록");

cat.run(40);
cat.stop();
cat.speak();

console.log(cat);