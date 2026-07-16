import { getWeather } from "./weatherAPI.js";



const citySelect =
document.getElementById("city-select");


const weatherBox =
document.getElementById("weather-box");





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




  

    const [latitude, longitude] =
    coordinate.split(",");




  

    weatherBox.innerHTML =
    "🌤 날씨 정보를 가져오는 중... ⏳";




    try{


     

        const weather =
        await getWeather(
            latitude,
            longitude
        );



      

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