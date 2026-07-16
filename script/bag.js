function showMyBag(){

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


  
    var bagList = "🎒 내 가방 목록\n\n";



    for(var i = 0; i < myBag.length; i++){

        bagList += 
        (i + 1) + ". " +
        myBag[i].name +
        " : " +
        myBag[i].count +
        "개\n";

    }


    alert(bagList);

}