//노마드코더 - 바닐라JS로 크롬앱 만들기 강의 lecture 2


/*
====================== Your First JS Function ====================
*/

const nicoInfo = {
    name : "Nico",
    age : 33,
    gender : "Male",
    isHandsome : true
};
console.log(nicoInfo.favFood);

/*
    nicoInfo (Object).favFood (key)
*/



/*--------- 함수 1 ----------*/

function sayHello(){
    console.log('Hello');
}


sayHello(); //Hello
sayHello("Nicolas"); // (아무것도 출력되지 않음)

/*
    sayHello() 괄호안의 요소를 인자(argument)라고 함
    즉, sayHello("Nicolas") 의 Nicolas 는 인자(argument) 이다.
*/



/*--------- 함수 2 ----------*/

function sayHello(potato){ //(인자사용)외부에 있는 데이터를 읽는 함수를 만드는 방법
    console.log('Hello', potato);
}

sayHello("Nicolas"); //Hello Nicolas

/*
    1. Nicolas를 >> 2. potato라는 인자에 넣고 >> 3. 변수를 console.log로 출력하는 것

*/


/*--------- 함수 3 ----------*/

function sayHello(potato, chicken){
    console.log('Hello', potato, "you have", chicken);
}

sayHello("Nicolas", 15); //Hello Nicolas you have 15



/*
====================== More Function Fun ====================
*/

function sayHello(name, age){
    console.log(`Hello ${name} you are ${age} years old`);
}

const greetNicolas = sayHello("Nicolas", 15);//Hello Nicolas you are 15 years old

console.log(greetNicolas); //undefined 

/*
    greetNicolas 는 sayHello 함수의 리턴값과 같음.
    다시 말해, greetNicolas 는 sayHello의 실행된 결과 값이다.

    상단의 sayHello 함수에서는 아무것도 반환(return)하지 않음.
*/

function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas", 15);// (아무것도 출력되지 않음, console.log가 없으므로)

console.log(greetNicolas); //Hello Nicolas you are 15 years old


//return :: 내가 돈을 내면 반드시 잔돈을 받아야 하는(return) 그런 개념


const calculator = {
    plus : function(a, b){
        return a + b;
    }, 
    multiple : function(a, b){
        return a*b;
    }, 
    divide : function(a, b){
        return a/b;
    }
}

const p = calculator.plus(5, 5);
const m = calculator.multiple(5, 5);
const d = calculator.divide(5, 5);

console.log(`plus : ${p}, multiple : ${m}, divide : ${d}`); 
//plus : 10, multiple : 25, divide : 1

