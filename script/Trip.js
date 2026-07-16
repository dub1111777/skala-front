window.addEventListener("load", function(){

    const cards = document.querySelectorAll(".trip-item");

    cards.forEach((card, index)=>{

        // 순차 등장 애니메이션
        setTimeout(function(){

            card.classList.add("show");

        }, index * 250);

        // 카드 클릭 시 VISITED 도장
        card.addEventListener("click", function(){

            card.classList.toggle("visited");

        });

    });

});
