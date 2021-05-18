//노마드코더 - 바닐라JS로 크롬앱 만들기 강의 lecture 5


/*
====================== Making a JS Clock part One ====================
*/

const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
    /*
        시:분:초 출력이 됨.
        하지만 실시간 업데이트는 되지 않음 (새로고침해야 시간이 바뀜)
    */
}


function init(){
    getTime();
}

init();


/*
====================== Making a JS Clock part Two ====================
*/

const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;

    //1,2,3... 가 아닌 01,02,03..으로 출력하기

    //삼항연산자 사용!
    /*
        seconds < 10  (초가 10 보다 작으면)
        ? (if 처럼 동작 // 질문)
        `0${seconds}` (참일 경우 실행)
        seconds (거짓일 경우 실행)
    */
    

}


function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
