//노마드코더 - 바닐라JS로 크롬앱 만들기 강의 lecture 3


/*
====================== JS DOM Function ====================
*/

const title = document.getElementById("title");

console.log(title) // <h1 id="title">This works!</h1>

/*
    DOM :: Document Object Module

    - 자바스크립트는 html에 있는 모든 요소를 가지고 올 것임
    - 그리고 그걸 객체로 바꿀 것임

*/


title.innerHTML = "Hi! From JS";
/*
    - title(객체).innerHTML(키)
    - 객체는 많은 키를 가지고 있음
    - innerHTML 도 title의 키
*/



/*
====================== Modifying the DOM with JS ====================
*/


console.dir(title); //title객체로 할 수 있는 모든 것을 보여줌(객체의 키를 보여줌)

title.style.color = "red";

console.dir(document);
document.title ="I own you now" // 윈도우 페이지의 타이틀 변경

const title = document.querySelector("#title");
//querySelector 많이 쓸 예정!



/*
====================== Events and event handlers ====================
*/

window.addEventListener("resize");
//이것이 이벤트를 받기위해 기다리는 것
//그러나 마냥 기다리기만 할 수 없음! :: 뒤에 함수를 적어줘야함

function handleResize(){
    console.log()
    console.log("I have been resized");
}

window.addEventListener("resize", handleResize);
//우리가 이벤트에서 다룰 함수를 적음
//윈도우 사이즈가 변경되었을 때 함수를 호출

/*
    window.addEventListener("resize", handelResize());
    - handelResize() 로 호출하지 않는 이유!
    :: 이벤트가 발생하지 않아도 함수가 자동적으로 호출되기 떄문
    - 괄호 없이 handelResize 로 적어야 이벤트가 발생되었을 때만 함수 실행됨
*/

////////////////////////


function handleResize(event){
    console.log(event); // 실행된 이벤트에 관해 나옴 (변수와 같은 인자역할 X)
    console.log("I have been resized");
}

window.addEventListener("resize", handleResize);
//이벤트가 발생할 때 마다 이벤트(event) 객체 호출됨



///////////////////////////


function handleClick(){
    title.style.color = "red";
}

title.addEventListener("click", handleClick);

