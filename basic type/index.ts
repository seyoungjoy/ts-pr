// string
let car:string = 'bmw';

// car = 1;
//Type 'number' is not assignable to type 'string'.

//number
let age:number = 30;

//boolean
let isAdult:boolean = true;

//array(number)
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

//array(string)
let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];

// 튜플(Tuple)
// 한 객체에서 2개 이상의 타입을 사용하고 싶을 때
let b:[string, number];

b=['z', 1]; //O
// b=[1,'z']; //X

b[0].toUpperCase();
// b[1].toUpperCase();
//  1번째는 숫자타입이기 때문에 string 타입의 프로퍼티인 toUpperCase 메소드를 사용할 수 없다.

// * void : 콘솔만 나타낼 뿐 아무 값도 리턴하지 않을 때
function sayHello():void{
    console.log('hello');
}

// * never : error를 반환하거나 영원히 끝나지 않는 함수의 타입으로 사용할 수 잇다.
function showError():never{
    throw new Error();
}

function infLoop():never{
    while(true){
        //do something..
    }
}

// * enum
// 양방향 맵핑 시켜주는 자료를 만들어줌. string 요소는 단방향 매핑
// 비슷한 특징을 가진 자료들을 enum으로 정의하여 타입으로 지정해주면 해당 변수는 그 enum에 정의된 요소만 선언할 수 있다.

enum Os{
    Window = 3,
    Ios,
    Android = 10
}

console.log(Os['Window']) //3
console.log(Os[3]); //Window

console.log(Os['Android']) //10
console.log(Os[10]); //Android

// string이 요소로 들어가면 단방향 맵핑으로 변함.
enum OsString {
    Window = 'win',
    Ios = 'ios',
    Android = 'and'
}

console.log(OsString['Window'])
// console.log(OsString['win']) //undefined

// enum 타입으로 변수를 선언해주면 해당 enum 안에 있는 요소들만 사용할 수 있다.
let myOs:OsString;

myOs = OsString.Android;

// * null, undefined

let aa:null = null;
let bb:undefined = undefined;
