// Open-Meteo API 데이터 담당 파일


export async function getWeather(latitude, longitude){

    const url = 
    `https://api.open-meteo.com/v1/forecast?
    latitude=${latitude}&
    longitude=${longitude}&
    current=temperature_2m,relative_humidity_2m`
    .replace(/\s+/g,"");


    const response = await fetch(url);


    const data = await response.json();


    return {

        temperature:
        data.current.temperature_2m,


        humidity:
        data.current.relative_humidity_2m

    };

}