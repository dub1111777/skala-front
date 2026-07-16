// 도시 선택 요소
const citySelect = document.getElementById("city-select");

// 날씨 출력 영역
const weatherBox = document.getElementById("weather-box");


// 도시 변경 이벤트
citySelect.addEventListener("change", async function(){

    const selectedOption = citySelect.options[citySelect.selectedIndex];


    const cityName = selectedOption.text;

    const coordinate = selectedOption.value;


    // 선택 초기화
    if(coordinate === "none"){

        weatherBox.innerHTML =
        "도시를 선택하면 날씨 정보가 표시됩니다.";

        return;

    }


    // 위도, 경도 분리
    const [latitude, longitude] = coordinate.split(",");


    // 로딩 화면 표시
    weatherBox.innerHTML =
    "🌤 날씨 정보를 가져오는 중... ⏳";



    try{

        // Open-Meteo API 요청
        const response = await fetch(

            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`

        );


        // JSON 변환
        const data = await response.json();



        // 현재 날씨 데이터 가져오기
        const temperature =
        data.current.temperature_2m;


        const humidity =
        data.current.relative_humidity_2m;



        // 화면 출력
        weatherBox.innerHTML =

        `
        <h4>${cityName}</h4>

        <p>📍 위도 : ${latitude}</p>

        <p>📍 경도 : ${longitude}</p>

        <hr>

        <p>🌡 현재 온도 : ${temperature}℃</p>

        <p>💧 습도 : ${humidity}%</p>

        `;


    }

    catch(error){

        weatherBox.innerHTML =
        "❌ 날씨 정보를 가져오지 못했습니다.";

        console.log(error);

    }


});