function showMyBag(){

    // 소지품 객체를 담은 배열
    var myBag = [

        {
            name: "노트북",
            count: 1
        },

        {
            name: "마우스",
            count: 2
        },

        {
            name: "USB",
            count: 3
        },

        {
            name: "충전기",
            count: 1
        }

    ];


    // 출력할 문자열
    var bagList = "🎒 내 가방 목록\n\n";


    // 반복문으로 객체 출력
    for(var i = 0; i < myBag.length; i++){

        bagList += 
        (i + 1) + ". " +
        myBag[i].name +
        " : " +
        myBag[i].count +
        "개\n";

    }


    // 결과 출력
    alert(bagList);

}