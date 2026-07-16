const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    const defaultText=card.querySelector(".default-text");
    const hoverText=card.querySelector(".hover-text");

    card.addEventListener("mouseenter",()=>{

        defaultText.style.opacity="0";
        defaultText.style.transform="translateY(-15px)";

        hoverText.style.opacity="1";
        hoverText.style.transform="translateY(0)";
    });

    card.addEventListener("mouseleave",()=>{

        defaultText.style.opacity="1";
        defaultText.style.transform="translateY(0)";

        hoverText.style.opacity="0";
        hoverText.style.transform="translateY(20px)";
    });

});