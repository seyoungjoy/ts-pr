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

// * enum : 비슷한 요소들을 묶어 양방향 맵핑 시키는 배열
enum Os {

}
