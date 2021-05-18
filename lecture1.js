//노마드코더 - 바닐라JS로 크롬앱 만들기 강의


/*
====================== 변수 ====================
*/
/*
    변수의 작동

    1. 변수를 생성 (Create)
    2. 변수를 초기화 (Initialize) **생성과 동시에 초기화를 할수도 있음
    3. 사용하기 (Use)
*/

let a = 221;
let b = a - 5;
a = 4;
console.log(b , a ); //216 , 4

/*
    Javascript는 위에서 아래로 실행하기 때문에 순서에 맞게 계산이 된다.
    그러므로 b는 216이고 a는 4라는 값으로 초기화하였기 때문에 4가 나오게된다.
*/

/*
====================== const 변수 ====================
*/

/*
    코딩을 하다보면 같은 변수이름에 까먹고 다른 값을 넣기도 한다.
    그리고 문제가 생겼을 때 그 문제를 찾아야 하는데 let은 그걸 찾기에 쉽지 않다
    (변수가 바뀌우도 괜찮으면 let 사용해도 좋다)

    그래서 const변수를 사용하는게 좋다.

    const == constant 안정적이라는 뜻

    만일 const 를 사용하여 값을 넣고 다시 다른 값으로 덮어씌우면 에러가 발생한다.

    **var == variable
    var도 값을 바꿀 수 있음
    3년전에는 var만 사용할 수 있었도 그땐 let이나 const가 없었음
    그러므로 지금이 딱 let과 const 를 배우기 좋은 시기

    아무튼 const 사용해!!!
*/


/*
====================== Data Types on JS ====================
*/

//String
const what = "Jiyun"; 
console.log(what); //Jiyun

/*
    텍스트로 저장될 수 있는 거라면 뭐든 가능 (이모티콘도 가능!)
    ""사이에 숫자를 넣으면 이건 숫자가 아니라 텍스트!
*/

//Boolean
const wat = true;

//Number
const wt = 666;

//float
const t = 55.1; 
/*
    float 은 숫자인데 floating number(떠돌이 소숫점)을 가지고 있음
    0.1 을 floating number(떠돌이 소숫점) 이라고 부름
*/


/*
====================== Organizing Data With Arrays ====================
*/

//데이터 타입을 정렬하는 방법은 2가지!

//------ 1. Array  :: 데이터를 저장하는 곳, 리스트같이 저장 ------

const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(Monday, tue, wed, thu, fri); //Mon Tue Wed Thu Fri

/*
    **위 방법은 전혀 효과적이지 않음 >> Array 사용하기!
    Array는 여러 string들을 하나로 묶는 것
*/

const something = "Something";
//**Array는 변수도 넣을 수 있다.

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, something];
console.log(daysOfWeek);//["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, "Something"]
/*
    []안에만 넣으면 Array가 됨.
    String, Number, Boolean, float 등의 데이터타입만 넣을 수 있음 + 변수
*/
console.log(daysOfWeek[2]); //Wed
//컴퓨터는 0부터 세기 시작하므로 0,1,2 즉 3번째 요소인 Wed 출력됨



//------ 2. Object :: 각 value에 이름을 줄 수 있음(Array와의 차이점) ------

const nicoInfo = {
    name : "Nico",
    age : 33,
    gender :"Male",
    isHandsome : true,
    favMoview : ["Along the gods", "LOTR", "Oldboy"],
    favFood : [
        {
            name : "Kimchi",
            fatty : false
        },
        {
            name : "Cheese burger",
            fatty : true
        }
    ]
};

console.log(nicoInfo); //{name : "Nico",age : 33,gender :"Male",isHandsome : true}
console.log(nicoInfo.gender); //Male

nicoInfo.gender = "Female";
console.log(nicoInfo.gender); //Female


console.log(nicoInfo.favFood[0].name); //Kimchi

/*
  Object를 선언하기 위해서는 {} 를 사용해야함
  Object는 실제 객체를 만드는 것 :: label을 내가 저장하고 싶은 data에 줄 수 있음

  ***** Const 짚고넘어가기
  - const nicoInfo안의 Object 값을 바꾸는건 괜찮음 (오류발생X) (예: gender : "Female")
  - 하지만 const incoInfo = true ; 와 같은 형태로 데이터를 바꾸는 것은 오류 발생!!!
*/

/*
    DB에서 가져온 데이터라면 Array 사용
    데이터를 합쳐서 만들어야 한다면 Object 사용
*/



