const days = ["일","월","화","수","목","금","토"];
const today = new Date().getDay();
const headers = document.querySelectorAll("thead th");

// 오늘 요일 헤더 강조 (평일만)
if(today >= 1 && today <= 5){

    for(let i=1; i<headers.length; i++){

        if(headers[i].textContent === days[today]){
            headers[i].classList.add("today");
        }

    }

}

// 소개 문구 변경
const todayText = document.querySelector("#todayText");

if(today === 0 || today === 6){

    todayText.innerHTML = "오늘은 <mark>쉬는 날</mark>입니다. 😊";

}else{

    todayText.innerHTML = "이번 학기 수강 시간표입니다.";

}