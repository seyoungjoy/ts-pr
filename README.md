# typescript
## 왜 타입스크립트를 사용하는건가?
- 자바스크립트는 동적언어라 런타임에 타입을 결정한다. 그래서 사용자가 그 오류들을 고스란히 볼 수 있음.
- 타입스크립트는 정적언어라 컴파일 타임에 타입이 결정된다. 그래서 초기 코드작성이 오래 걸릴 수 있으나 좀 더 안정적으로 코드 작업이 가능.
- 데이터의 타입을 정확하게 명시해서 자바스크립트에서 나타날 수 있는 오류들을 사전에 미리 방지할 수 있다.

## interface
- 객체에 프로퍼티를 추가해 줄 때는 interface로 프로퍼티 각각의 타입을 지정해줘야 한다.

### ?(프로퍼티 값을 옵션으로 만들어 줌)
프로퍼티 값 뒤에 '?'를 붙이면 해당 프로퍼티를 옵션으로 만듬. 있어도 되고 없어도됨.

### 읽기 모드
프로퍼티 값 앞에 readonly 키워드를 추가.

### [type] : type
```typescript
type Score = 'A' | 'B' | 'C' | 'F';

interface User{
    [grade:number] : Scroe;
}

let user : User = {
    1: 'A',
    2: 'B'
}
```
### 함수 정의
함수의 인자값, 반환값의 타입을 정의해줄 수 있다.
```ts
interface Add {
    (num1:number, num2:number) : number;
}

const add : Add = function(x,y){
     return x + y;
}

add(10,20); //30
```

### implements (클래스 정의)

```ts
interface Car {
    color: string;
    wheels: number;

    start(): void;
}

class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c:string) {
        this.color = c;
    }
    start(){
        console.log('go...');
    }
}

const b = new Bmw('green');
console.log(b);
b.start();

```

### extends




