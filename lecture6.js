//노마드코더 - 바닐라JS로 크롬앱 만들기 강의 lecture 6


/*
====================== Saving the User Name part One ====================
*/


/*
    querySelector
    - 찾은 첫번째 것을 가져옴

    querySelectorAll
    - 모든 걸 가져옴
    - 클래스명에 따른 엘리먼트들을 가져오고, Array를 줌

    ****니코는 querySelectorAll 사용하지 않음, 
    array 외부의 하나의 엘리먼트를 가져오기 귀찮기 때문
    :: 찾은 것이 유일하게 하나의 클래스명이라고 해도, array 안에 넣어버림 (귀찮음)
*/


const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS, text);
}

//생성5 - 거품이벤트 삭제 및 input 값을 유저환영문자, 로컬스토리지에 save 할 함수에 옮겨줌 
function handleSubmit(event){
    /*
        - event 는 마치 일종의 거품 같은 것임.
        - event 가 form 에서 일어나는데, event 가 발생하면 form 에서부터 거품처럼 올라가면서 다른 모든 것들이 event 에 반응하게 됨.

        - 즉, form을 제출하는 이벤트가 발생하면 event가 계속 위로 올라가, document 까지 감
        
        - 즉,, form만 제출해야하는데 더 큰 객체인 document 자체가 제출되어버림

        ::::그러므로 event의 기본동작(기본값)을 막아야 함
    */

    event.preventDefault();
    const currentValue = input.value; //input.placeholder도 가져올수도 있음!

    //console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

//생성4 - input 창 보임 및 제출 함수
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

//생성3 - 유저 환영 문자
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//생성1 - 로컬스토리지에 유저정보 있는지 체크 후 로드 효과
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //she is not
        askForName();
    }else{
        //she is
        paintGreeting(currentUser);
    }
}

//생성2 - 로컬스토리지 로드 실행 함수
function init(){
    loadName();
}

init();




/*
====================== Saving the User Name part Two ==================== // 위에 병합
*/

