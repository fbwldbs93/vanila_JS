//노마드코더 - 바닐라JS로 크롬앱 만들기 강의 lecture 7


/*
====================== Making a To Do List part One/Two ====================
*/

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";

function filterFn(toDo){ //toDos.filter(function filterFn...)방식으로 작성가능(forEach 처럼)

    return toDo.id === 1; //toDo.id가 1인 경우만 return 할 것임.
    /*
        filter는 array의 모든 아이템을 통해 함수를 실행하고
        true인 아이템들만 가지고 새로운 array를 만든다

        ***즉, 조건에 따른 필터링 하여 새로운 array를 생성함.
    */

    //li에 없는 id인 toDos를 체크하고 싶음 == 그것이 우리가 지우고 싶은 것
}

//const toDos = []; //하단에 재선언을 해야해서 let으로 변경
let toDos = [];

function deleteToDo(event){
    //console.log(event.target.parentNode);
    //event.target :: 이벤트가 발생한 객체(타겟)을 알려줌
    //something.parentNode :: something의 부모객체를 알려줌
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        //return toDo.id !== li.id; //toDo의 id는 숫자, li.id 는 string == 작동안됨
        return toDo.id !== parseInt(li.id);
        //즉, li.id와 일치하지 않는 toDo의 id의 array만 재생성해! 라는 구문

        /*
            toDo의 id 는 로컬스토리지의 id
            li의 id 는 html 의 id

            delBtn 을 클릭하여 li(id)를 삭제하였지만, 
            로컬스토리지의 id는 삭제되지 않은 상태.

            그러므로 toDo의 id와 li의 id를 비교하여
            일치하지 않으면 toDo의 id도 삭제해야함
        */

    });

    toDos = cleanToDos;

    saveToDos(); //재생성된 toDos(Array)를 재저장

    //console.log(cleanToDos);
}

function saveToDos(){
    //localStorage.setItem(TODOS_LS, toDos);
    // key: toDos,  value : [object Object] 로 출력됨

    /*
        localStorage에는 자바스크립트의 data를 저장할 수 없음
        오직 string 만 저장할 수 있음

        예를 들어서, Key 부분에 hello 를 넣고
        value 에 true 를 넣은 후에

        localStorage.getItem('hello');로 해당 value를 불러오면
        "true" 로 나옴 (따옴표가 붙은 true 출력 == 텍스트), 즉, Boolean 이 아님

        **자바스크립트는 local storage에 있는 모든 데이터를 string 으로 저장하려고 함
        == 그러므로 object 가 string 이 되도록 만들어야함

        JSON.stringify 사용하기!!
        - 자바스크립트 object 를 string 으로 바꿔줌! 
    */

   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    //console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; //증가문 :: 1,2,3...증가함
    delBtn.innerHTML="x";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId; //마찬가지로 id 증가 1,2,3...
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : newId
    };

    toDos.push(toDoObj);
    //push를 써서 array안에 element 하나를 넣어줄 수 있음

    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //console.log(loadedToDos); //텍스트 형식의 object 출력됨
        /*
            JSON 은 "Javascript Object Notation"의 준말
            데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록
            object 로 바꿔주는 기능
            - 자바스크립트의 object 를 string 으로 변환해주기도 하고,
            - string을 object로 변환해줄수도 있음
        */
       const parsedToDos = JSON.parse(loadedToDos);
       //console.log(loadedToDos); // object 로 제대로 출력됨

        parsedToDos.forEach(function(toDo){
            /*
                중요))) 
                - 이 forEach 는 array를 위한 function
                - forEach는 주로 array를 위해 많이 사용됨 (각각에 뭔가를 해줘야해서)

                ** array, string, object 모두 function 이 있음
            */

            paintToDo(toDo.text);

            //console.log(toDo.text); //object 이므로 toDo(object)의 text(key) 호출
            /*
                parsedToDos에 있는 것들 각각에 대해 실행해줄 것이므로,
                그 각각을 toDo라고 칭할 것임.
                
            */

        }); 
        
        /* ------- forEach ----------
            forEach 는 기본적으로 함수를 실행하는데,
            array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜주는 것

        */

    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
