//노마드코더 - 바닐라JS로 크롬앱 만들기 강의 lecture 9


/*
====================== Getting the Weather part One/Two Geolocation ====================
*/

/*
    API (Application Programming Interface)
    : 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단
    - 
*/

const weather = document.querySelector(".js-weather");

const API_KEY = "834545d91cebf72264290e441e7809ff";
//API 출처 :: https://home.openweathermap.org
const COORDS = 'coords';


function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            //console.log(response);
            return response.json();
        }).then(function(json){
            //console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`
        });

        /*
            **then() 은 유투브 풀스택 코스에서 더 상세하게 다룰예정
            - 실제로 Javascript가 어떻게 동작하는지, JS의 network가 어떻게 동작하는지 그런것들..

            then()
            - 데이터가 우리한테 넘어왔을 때 사용(데이터가 들어오는데 시간이 좀 걸리는 경우도 있음)
            - then()의 역할은 데이터가 완전히 들어온 다음 함수를 호출

            ****fetch를 기다리지 않고 다음작업을 지시하면, 다음작업은 fetch가 완료되길 기다리지 않을거고, fetch는 정상적으로 완료되지 않을 수 있음
            그러므로, 서버로부터 데이터가 들어올때까지 기다려야하므로 then() 사용..
        */

        //섭씨로 표현하고 싶으면 &units=metric 추가하기
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


//좌표를 가져오는데 성공했을때 함수
function handleGeoSuccess(position){
    //console.log(position); //좌표가져오기 성공 시, 위도, 경도 등이 콘솔에 표시됨
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    /*---- 자바스크립트 mini tip! -----

    const coordsObjs = {
        latitude : latitude,
        longitude : longitude
    }

    위와 같이 객체에 변수의 이름과 객체의 key의 이름을 같게 저장하는 경우
    하단과 같이 요약하여 작성할 수 있다

    */

    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    //navigator API
    //geolocation 은 object 임

}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //getWeather
        const parseCoords = JSON.parse(loadedCoords); //string 이기 때문에 JSON.parse 해주기
        //console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();
