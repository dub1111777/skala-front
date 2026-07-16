window.addEventListener("load", function(){

    const cards = document.querySelectorAll(".trip-item");

    cards.forEach((card, index)=>{

      
        setTimeout(function(){

            card.classList.add("show");

        }, index * 250);

       
        card.addEventListener("click", function(){

            card.classList.toggle("visited");

        });

    });

});
