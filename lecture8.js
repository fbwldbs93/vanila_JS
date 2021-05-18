//노마드코더 - 바닐라JS로 크롬앱 만들기 강의 lecture 8


/*
====================== Image Background ====================
*/

const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`
    //+1 을 하는 이유는 Math.random() 함수가 0을 줄 수 있기 때문
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*3);
    return number;

    /*
        javascript 에 Math(수학)이란 모듈이 있음

        1. Math.random()
        - 이 함수를 사용하면 임의적으로 숫자가 생성됨
        ex) 0.023423653645...

        - 1에서 5 사이의 숫자를 원한다고 할때에,  
        Math.random()*5 를 하게되면 이것도 random number(임의 숫자) 가 출력됨
        다만 1.0345346 ~ 4.304534576 까지 0~5사이의 random number(임의 숫자) 가 출력됨
        
        2. Math.floor()
        - take it to the floor(바닥으로 가져간다는 의미)
        - 3.2, 3.1, 3.9 와 같은 숫자의 나머지를 버리고 3만 남김
        - 즉, 내림

        3. Math.ceil()
        - ceiling(천장 이란 의미)
        - 3.2, 3.1, 3.9 와 같은 숫자는 무조건 윗숫자로 끌어올림
        - 즉, 올림
    */

    /*-----------Math.floor( Math.random() * 5 ) 실행하면----------
        0.03453 / 1.34767 / 2.675876 / 3.672307 / 4.570235 를 내림하여,
        0,1,2,3,4 를 랜덤으로 출력함

    */

}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();