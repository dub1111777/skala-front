import { getWeather } from "./weatherAPI.js";



// HTML 요소 가져오기

const citySelect =
document.getElementById("city-select");


const weatherBox =
document.getElementById("weather-box");




// 도시 변경 이벤트

citySelect.addEventListener(
"change",
async function(){


    const selectedOption =
    citySelect.options[
        citySelect.selectedIndex
    ];



    const cityName =
    selectedOption.text;



    const coordinate =
    selectedOption.value;



    if(coordinate === "none"){


        weatherBox.innerHTML =
        "도시를 선택해주세요.";

        return;

    }




    // 위도, 경도 분리

    const [latitude, longitude] =
    coordinate.split(",");




    // 로딩 표시

    weatherBox.innerHTML =
    "🌤 날씨 정보를 가져오는 중... ⏳";




    try{


        // API 파일 함수 실행

        const weather =
        await getWeather(
            latitude,
            longitude
        );



        // 화면 출력

        weatherBox.innerHTML =

        `
        <h4>${cityName}</h4>

        <p>📍 위도 : ${latitude}</p>

        <p>📍 경도 : ${longitude}</p>

        <hr>

        <p>
        🌡 현재 온도 :
        ${weather.temperature}℃
        </p>

        <p>
        💧 습도 :
        ${weather.humidity}%
        </p>

        `;



    }


    catch(error){


        weatherBox.innerHTML =
        "❌ 날씨 정보를 불러오지 못했습니다.";


        console.error(error);


    }


});