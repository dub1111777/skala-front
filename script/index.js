// ===============================
// 현재 날짜 표시
// ===============================

const today = document.getElementById("today");

const now = new Date();

const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
];

const greeting = getGreeting(now.getHours());

today.innerHTML =
`${greeting}<br>
${now.getFullYear()}년
${now.getMonth()+1}월
${now.getDate()}일
${week[now.getDay()]}`;





// ===============================
// 현재 시간
// ===============================

function updateClock(){

    const clock = document.getElementById("clock");

    const now = new Date();

    const hour = String(now.getHours()).padStart(2,"0");
    const min = String(now.getMinutes()).padStart(2,"0");
    const sec = String(now.getSeconds()).padStart(2,"0");

    clock.innerHTML =
    `${hour}:${min}:${sec}`;

}

updateClock();

setInterval(updateClock,1000);




// ===============================
// 시간대별 인사말
// ===============================

function getGreeting(hour){

    if(hour<12){

        return "🌞 좋은 아침입니다!";

    }

    else if(hour<18){

        return "☀️ 좋은 오후입니다!";

    }

    else{

        return "🌙 좋은 저녁입니다!";

    }

}




// ===============================
// Portal Card Hover 효과
// ===============================

const cards = document.querySelectorAll(".portal-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".3s";

    });

});




// ===============================
// Footer 년도 자동 변경
// ===============================

const footerSmall = document.querySelector("footer small");

footerSmall.innerHTML =
`© ${new Date().getFullYear()} Kang Byung Ho Portfolio`;