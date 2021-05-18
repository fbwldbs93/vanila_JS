//노마드코더 - 바닐라JS로 크롬앱 만들기 강의 lecture 4


/*
====================== If, else, and or ====================
*/

if(true){
    console.log("hi");
}else{
    console.log("ho");
}
//hi

if("10"===10){
    console.log("hi");
}else{
    console.log("ho");
}
//문자열과 숫자는 다르므로 거짓!
//ho

if(20 > 5 && "nicolas" === "nicolas"){
    console.log("yes");
}else{
    console.log("no");
}
//yes


if(20 > 5 || "nicolas" === "nicolas"){
    console.log("yes");
}else{
    console.log("no");
}
//yes



/*------ && :: 참 그리고 참 ------*/
true && true == true;
false && true == false;
true && false == false;
false && false == false;

/*------ || :: 참 이거나 참------*/
true || true == true;
false || true == true;
true || false == true;
false || false == false;



prompt(); //엄청 오래된 자바스크립트라 더이상 사용하지 X!!

const age = prompt("How old are you?");

console.log(age); //prompt에 입력한 값 출력

if(age >= 18 && age <= 21){
    console.log("you can drink but you should not");
}else if(age > 21){
    console.log("go ahead");
}else{
    console.log("too young");
}


/*
====================== if else - Function practice ====================
*/

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    //console.log(currentColor);//rgb(52, 73, 94)

    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){ //최초의 색상을 선언해주기 위한 함수
    title.style.color = BASE_COLOR; 
    title.addEventListener("click", handleCLick);
}

init();



/*
====================== if else - Function practice Two ====================
*/

const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass = title.className;

    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    }else{
        title.className = "";
    }

    /*
        className 은 객체의 모든 class 명을 지우고 자신으로 대체한다
        - 객체에게 두 개의 class 명이 있었다면 모두 사라지고 className 으로 
        지정한 이름으로 대체됨
    */
}

function init(){
    title.addEventListener("click", handleClick);
}

init();

//////////////////////////////////
/*-------------- classList 사용!! ---------------- */


const CLICKED_CLASS = "clicked";

function handleClick(){
    //const currentClass = title.className;
    const hasClass = title.classList.contains(CLICKED_CLASS);

     /*
        className 은 객체의 모든 class 명을 지우고 자신으로 대체한다
        - 객체에게 두 개의 class 명이 있었다면 모두 사라지고 className 으로 
        지정한 이름으로 대체됨

         class명이 여러개가 되었으므로 contains 으로 포함  
        - 객체가 CLICKED_CLASS 클래스 명을 포함하는지 체크
    */

    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }

   
}

function init(){
    title.addEventListener("click", handleClick);
}

init();


////////////////////////////

function handleClick(){
    title.classList.toggle(CLIKED_CLASS);
    //toggle 은 위의 함수를 요약해줌
}

function init(){
    title.addEventListener("click", handleClick);
}

init();

