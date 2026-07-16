
const calendar=document.getElementById("calendar");
const monthYear=document.getElementById("monthYear");
const schedule=document.getElementById("schedule");

let today=new Date();
let currentMonth=today.getMonth();
let currentYear=today.getFullYear();

const events={

"2026-7-3":[
"좋아하는 노래 들으면서 놀기",
"구랑 맛있는 초밥 먹으러 가기",
"달달한 간식 먹으면서 하루 마무리하기"
],

"2026-7-8":[
"친구랑 영화 보러 가기! 군체 재미있을 것 같아",
"친구랑 노래방 가기",
"공차 버블티 먹었다가 집으로 귀가"
],

"2026-7-9":[
"야구 직관",
"쇼핑가서 필요한 옷 구매하기"
],

"2026-7-25":[
"제주도 여행 출발일",
"귤과 녹차를 곁들인 맛있는 저녁식사"
],

"2026-7-26":[
"호텔에서 반식욕 즐기고 일정 시작",
"예쁜 카페 가기",
"맛있는 디저트 사서 집으로 귀가"
]

};

const week=["일","월","화","수","목","금","토"];

function drawCalendar(){

calendar.innerHTML="";

week.forEach(d=>{

const div=document.createElement("div");
div.className="day-name";
div.innerHTML=d;

calendar.appendChild(div);

});

monthYear.innerHTML=currentYear+"년 "+(currentMonth+1)+"월";

let firstDay=new Date(currentYear,currentMonth,1).getDay();
let lastDate=new Date(currentYear,currentMonth+1,0).getDate();

for(let i=0;i<firstDay;i++){

const empty=document.createElement("div");
calendar.appendChild(empty);

}

for(let day=1;day<=lastDate;day++){

const div=document.createElement("div");
div.className="day";

const key=currentYear+"-"+(currentMonth+1)+"-"+day;

if(events[key]){
div.classList.add("event");
}

if(day==today.getDate()
&&currentMonth==today.getMonth()
&&currentYear==today.getFullYear()){
div.classList.add("today");
}

div.innerHTML="<strong>"+day+"</strong>";

div.onclick=function(){

showSchedule(key,day);

};

calendar.appendChild(div);

}

}

function showSchedule(key, day){

    if(events[key]){

        let html = "<h2>" + day + "일 </h2><ul>";

        events[key].forEach(item => {
            html += "<li>" + item + "</li>";
        });

        html += "</ul>";

        schedule.innerHTML = html;

    }else{

        schedule.innerHTML = "<h2>" + day + "일</h2><p>등록된 일정이 없습니다.</p>";

    }

}

function prevMonth(){

currentMonth--;

if(currentMonth<0){
currentMonth=11;
currentYear--;
}

drawCalendar();

}

function nextMonth(){

currentMonth++;

if(currentMonth>11){
currentMonth=0;
currentYear++;
}

drawCalendar();

}

drawCalendar();

scheduleMidnightUpdate();

function scheduleMidnightUpdate() {

    const now = new Date();

    const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0, 0
    );

    const timeUntilMidnight = nextMidnight - now;

    setTimeout(function(){

        today = new Date();

        drawCalendar();

        scheduleMidnightUpdate();

    }, timeUntilMidnight);

}