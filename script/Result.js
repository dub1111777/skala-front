
const params = new URLSearchParams(location.search);

document.getElementById("userId").textContent =
params.get("id");

document.getElementById("userEmail").textContent =
params.get("emailId")+"@"+params.get("email");

let seconds = 30;

const countdown = document.getElementById("countdown");

const timer = setInterval(function(){

    seconds--;

    countdown.innerHTML =
        seconds + "초 후 자동으로 메인 페이지로 이동합니다.";

    if(seconds <= 0){

        clearInterval(timer);

        location.href = "index.html";

    }

},1000);