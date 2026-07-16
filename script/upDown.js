function startGame() {

    
    const computerNum = Math.floor(Math.random() * 50) + 1;

    let userNum;
    let count = 0;

    alert("🎮 업다운 게임을 시작합니다!\n1부터 50 사이의 숫자를 맞혀보세요.");

    while (true) {

        userNum = prompt("1~50 사이의 숫자를 입력하세요.");

        
        if (userNum === null) {
            alert("게임이 종료되었습니다.");
            break;
        }

        userNum = Number(userNum);
        count++;

       
        if (isNaN(userNum)) {
            alert("숫자를 입력해주세요!");
            continue;
        }

       
        if (userNum < 1 || userNum > 50) {
            alert("1부터 50 사이의 숫자를 입력해주세요.");
            continue;
        }

       
        if (userNum > computerNum) {
            alert("⬇ Down!");
        }
        else if (userNum < computerNum) {
            alert("⬆ Up!");
        }
        else {
            alert("🎉 축하합니다!\n" + count + "번 만에 맞추셨습니다.");
            break;
        }
    }
}