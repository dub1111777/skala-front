
const citySelect = document.getElementById("city-select");


const weatherBox = document.getElementById("weather-box");



citySelect.addEventListener("change", async function(){

    const selectedOption = citySelect.options[citySelect.selectedIndex];


    const cityName = selectedOption.text;

    const coordinate = selectedOption.value;


  
    if(coordinate === "none"){

        weatherBox.innerHTML =
        "도시를 선택하면 날씨 정보가 표시됩니다.";

        return;

    }


   
    const [latitude, longitude] = coordinate.split(",");


    
    weatherBox.innerHTML =
    "🌤 날씨 정보를 가져오는 중... ⏳";



    try{

       
        const response = await fetch(

            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`

        );


       
        const data = await response.json();



        
        const temperature =
        data.current.temperature_2m;


        const humidity =
        data.current.relative_humidity_2m;



        
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