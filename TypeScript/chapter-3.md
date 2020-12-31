# 3. 타입의 모든 것

> **타입 (Type)**
>
> 값과 이 값으로 할 수 있는 일의 집합

타입검사기를 통해 유효하지 않은 동작이 실행되는 일을 예방한다.



## 3.1 타입을 이야기하다

타입 어노테이션이 없으면 함수의 매개변수에 제한이 없으므로 아무 타입이나 인수로 전달 할 수 있다. 일단 타입을 제한하면 타입스크립트가 함수를 호출할 때 호환이 되는 인수로 호출했는지 판단한다.



## 3.2 타입의 가나다

### 3.2.1 any

- 모든 타입의 상위이며 `any` 로 뭐든지 할 수 있지만 필요한 상황에만 사용하는 것을 추천
- **프로그래머와 타입스크립트 둘 다 타입을 알 수 없는 상황에서만 사용**

```typescript
let a: any = 666;		// any
let b: any = ['danger'];	// any
let c = a + b;		        // any
```



### 3.2.2 unknown

- 타입을 미리 알 수 없을 때 `any` 대신 `unknown` 사용
- `unknown` 의 타입을 검사해 정제하기 전까지는 타입스크립트가 `unknown` 타입의 값을 사용할 수 없게 강제한다
- 비교연산(`==, ===, ||, &&, ?`)과 반전(`!`) 을 지원하고 자바스크립트의 `typeof`, `instanceof`여ㄴ산자로 정제할 수 있다.

- TS가 무언가의 타입을 `unknown`이라고 추론하는 상황은 없다.

- `unknown` 타입이 아닌 값과 `unknown` 타입인 값을 비교할 수 있다.

- `unknown` 값이 특정 값이라고 가정하고 해당 타입에서 지원하는 동작을 수행 할 수 없다.

  단, 해당 값이 특정 타입임을 증명하면 가능 (`typeof`)



### 3.2.3 boolean

- `true`, `false` 두 개의 값을 갖는다.
- 비교연산, 반전 연산을 할 수 있다.

```typescript
let a = true;	// boolean
// 어떤 값이 boolean인지 타입스크립트가 추론하게 한다.

const b = true;	// true
// 어떤 값이 특정 boolean인지 타입스크립트가 추론하게 한다.
```

`const` 를 사용하여 TS가 그 변수의 값이 절대 변하지 않으리라는 사실을 알게 되어 해당 변수가 가질 수 있는 가장 좁은 타입으로 추론한다.

> **타입리터럴**
>
> 오직 하나의 값을 나타내는 타입
>
> 타입 리터럴은 모든 곳에서 일어날 수 있는 실수를 방지해 안전성을 추가로 확보해주는 강력한 언어 기능
>
> `let e: true = true`



### 3.2.4 number

- 모든 숫자(정수, 소수, 양수, 음수, Infinity, NaN 등)의 집합이다. 
- `+, -, %, <` 등 숫자 관련 연산을 수행할 수 있다.
- `number` 타입은 대개 TS가 추론하도록 만든다.



### 3.2.5 bigint

- 새로 추가된 타입 in JS, TS
- 라운딩 관련 에러 없이 큰 정수 해결
- number는 253개까지의 점수를 표현하나 bigint를 사용하면 더 큰수 표현 가능
- `+, -, /, *, <(비교)` 연산 지원



### 3.2.6 string

- 모든 문자열의 집합으로 연결(`+`), 슬라이스(`.slice`)등의 연산을 수행

- 가능하다면 TS가 string 타입을 추론하도록 두는 것이 좋음

  `let a = 'hello'`



### 3.2.7 symbol

- 객체와 맵에서 **문자열 키를 대신하는 용도**로 사용

- symbol 키를 사용하면 사람들에게 잘 알려진 키만 사용하도록 강제

- 고유한 Symbol `'a'` 를 만드는 것이므로 `==`, `===` 로 비교했을 때 같지 않다고 판단

  ```typescript
  let a = Symbol('a');	// symbol
  let b: symbol = Symbol('b')		// symbol
  var c = a === b;		// boolean
  let d = a + 'x'		// 에러 TS2469 : '+'연산을 'symbol'타입에 적용할 수 없음
  ```

- symbol도 symbol 타입으로 추론되거나 아니면 명시적으로 유니크 symbol을 정의할 수 있다.

  새 symbol을 선언하고 `const` 변수에 할당하면 TS가 유니크 symbol 타입으로 추론한다.



### 3.2.8 object

- TS의 객체 타입은 객체의 형태를 정의

  > **구조 기반 타입화**
  >
  > 객체의 이름에 상관없이 객체가 어떤 프로퍼티를 갖고 있는지를 따진다. 일부 언어에서는 덕 타이핑이라고 한다.

- 객체를 서술하는 방법

  1. object 선언

     ```typescript
     let a: object = {
       b: 'x'
     }
     
     a.b	// 에러: 'b'프로퍼티는 'object'에 존재하지 않음
     ```

     object는 서술하는 값에 관한 정보를 거의 알려주지 않으며 값 자체가 자바스크립트 객체라고 말해 줄 뿐이다.

  2. 객체 리터럴 문법

     ```typescript
     let a = {
       b: 'x'
     }		// {b: string}
     a.b	// string
     ```

     타입스크립트가 추론하게 하는 방법

     ```typescript
     let a: {b: string}
     a = {}	// 에러: '{}'타입에는 '{b: string}' 타입에 필요한 'b'가 없음
     
     a = {
       b: 1,
       c: 2
     }	
     // 에러: '{ b: number, c: number}'타입을 할당할 수 없음
     // 객체 리터럴은 알려진 프로퍼티만 지정할 수 있음
     ```

     > **객체를 const로 선언할 때의 타입 추론**
     >
     > 기본타입과 달리 객체를 `const` 로 선언해도 TS는 더 좁은 타입으로 추론하지 않음. 객체의 값이 바뀔 가능성이 높기 때문이다.

- 예정에 없던 프로퍼티가 추가될 수 있는 방법

  ```typescript
  let a: {
    b: number,						// 1 a는 number타입 프로퍼티 b를 포함한다.
    c?: string,						// 2 a는 string타입의 프로퍼티 c를 포함 할 수도 있다.
    [key:number]: boolean	// 3 a는 boolean타입의 값을 갖는 number타입 프로퍼티 여러 개를 포함할 수 있다.
  }
  ```

  a에 할당할 수 있는 객체 타입

  ```typescript
  a = {b: 1, c: 'hello', 50: true}	
  a = {10: true}	// 'b'프로퍼티가 없음
  a = {b: 1, 33: 'red'}	// 'string'타입은 'boolean'타입에 할당 할 수 없음
  ```

  > **인덱스 시그니처**
  >
  > `[key: T]: U` 같은 문법을 시그니처라고 부르며 TS에 어떤 객체가 여러키를 가질 수 있음을 알려준다.
  >
  > `이 객체에서 모든 T타입의 키는 U타입의 값을 갖는다`
  >
  > - 명시적으로 정의한 키 외에 다양한 키를 객체에 안전하게 추가 가능
  > - 인덱스 시그니처의 키(T)는 반드시 **number나 string 타입에 할당 할 수 있는 타입**이여야 함

- `readonly` 한정자를 이용해 특정 필드를 읽기 전용으로 정의 할 수 있다.

  (`const` 를 적용한 듯 한 효과)

  ```typescript
  let user: {
    readonly firstName: string
  } = {
    firstName: 'addy'
  }
  
  user.firstName = 'addy with an e' // 에러: 읽기전용 프로퍼티임
  ```

- TS에서 객체 정의하는 4가지 방법

  1. 객체 리터럴 또는 형태라 불리는 표기법

     `{a: string}` 

     객체가 어떤 필드를 포함할 수 있는지 알고 있거나 객체의 모든 값이 같은 타입을 가질때 사용

  2. 빈 객체 리터럴 사용법

     `{}`

     비추

  3. object 타입

     어떤 필드를 가지고 있는지 관심 없고 그저 객체가 필요할 때 사용

  4. Object 타입

     비추



### 3.2.9 타입 별칭, 유니온, 인터섹션

#### 타입 별칭

변수를 선언해서 값 대신 변수로 칭하듯이 타입 별칭으로 타입을 가리킬 수 있다.

하나의 타입으로 두 번 정의할 수 없다.

타입 별칭도 블록 영역에 적용 된다 - 내부에 정의한 타입 별칭이 외부의 정의를 덮어 쓴다.(shadowing)

변수가 어떤 목적으로 사용되었는지 쉽게 이해 할 수 있도록 도움

```typescript
type Age = number
type Person = {
  name: string
  age: Age
}

let age:Age = 20
let driver:Person = {
  name: 'ellen',
  age: age
}
```

#### 유니온과 인터섹션 타입

- 유니온 = 합집합

  `|`

- 인터섹션 = 교집합

  `&`



### 3.2.10 배열

&#10071; **타입스크립트는 `T[]` 와 `Array<T>` 라는 두 가지 배열 문법을 지원한다. 성능, 의미상 두 표현은 같다.** 

배열이 정의된 영역을 벗어나면 TS는 뱅ㄹ을 더 이상 확장할 수 없도록 최종 타입을 할당한다.

```typescript
function buildArray() {
  let a = []	// any[]
  a.push(1)		// number[]
  a.push('x')	// (string | number)[]
  retrun a
}

let myArray = bulidArray()	// (string | number)[]
myArray.push(true)	// 에러	'(string | number)'타입의 매개변수에 할당 할 수 없음
```



### 3.2.11 튜플

- 튜플은 배열의 서브타입

- 튜플은 길이가 고정되어 있고, 각 인덱스의 타입이 알려진 배열의 일종

- 튜플은 다른 타입과 달리 선언할 때 타입을 명시

  ```typescript
  let a: [number] = [1]
  
  // [이름, 성씨, 생년] 튜플
  let b: [string, string, number] = ['malcolm', 'gladwell', 1993]
  b = ['queen', 'elizabeth', 'ii', 1926]	// 에러: 'string'은 'number'타입에 할당 안됨
  ```

- 선택형 요소도 지원 

  `?` 은 선택형을 뜻함

  ```typescript
  let trainFares: [number, number?][] = [
    [3.74],
    [5.24, 2.43],
    [10.10]
  ]
  // 다음과 같음
  let moreTrainFares: ([number] | [number, number])[] = [
    ...
  ]
  ```

- 튜플이 최소 길이를 갖도록 지정할 때는 나머지 요소(`...`) 를 사용

  ```typescript
  let friend: [string, ...string[]] = ['Sara', 'Tali', 'Chloe']
  
  // 이형 배열
  let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']
  ```

- 튜플은 이형배열을 안전하게 관리하고 배열 타입의 길이도 조절

- 순수배열에 비해 안전성이 높음, 사용권장

#### 읽기 전용 배결과 튜플

- 상황에 따라 불변인 배열이 필요함

- TS는 readonly 배열 타입을 기본으로 지원

- 읽기 전용 배열을 갱신하려면 `.push, .splice` 처럼 내용을 바꾸는 동작대신 `.concat, .slice` 를 사용

  ```typescript
  let as: readonly number[] = [1, 2, 3] 	// readonly number[]
  let bs: readonly number[] = as.concat(4)	// readonly number[]
  let three = bs[2]		// number
  as[4] = 5		// 에러: 'readonly number[]'의 인덱스 시그니처 타입은 읽기만 허용
  as.push(6)	// 에러: 'push' 프로퍼티는 'readonly number[]'타입에 존재하지 않음
  ```

- TS는 Array처럼 읽기 전용 배열과 튜플을 만드는 긴 형태의 선언 방법을 지원



### 3.2.12 null, undefined, void, never

- `null` : 값이 없음

- `undefined` : 값을 아직 정의하지 않음

- `void` : 명시적으로 아무것도 반환하지 않는 함수의 반환 타입

  예) `console.log`

  `return` 문을 포함하지 않는 함수

- `never` : 절대 반환하지 않는 함수 타입

  (예외를 던지거나 영원히 실행되는)



3.2.13 열거형

- 열거형(enum)은 해당 타입으로 사용할 수 있는 값을 열거하는 기법

- 키를 값에 할당하는 순서가 없는 자료구조

- 키가 컴파일 타입에 고정된 객체

  ```typescript
  enum Language {
    English,
    Spanish,
    Russian
  }
  ```

- 열거형의 이름은 단수 명사로 쓰고 첫 분자는 대문자로 사용하는 것이 관례

  ```typescript
  enum Language {
    English = 0,
    Spanish = 1,
    Russian = 2
  }
  ```

- 계산된 값을 사용할 수도 있으므로 모든 값을 정의할 필요 없음

- 열거형에 문자열 값을 사용하거나 문자+숫자 값을 혼합하여 사용 가능







