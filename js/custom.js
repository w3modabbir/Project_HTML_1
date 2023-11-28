let topBar = document.querySelector(".top_scorlBar");
let back_to_top = document.querySelector(".back_to_top");
let span = document.querySelector(".back_to_top span");

function top_Scroll(){
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const poss = document.documentElement.scrollTop;
    
    const callHeight = 
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const documentHeiht = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    )

    let ScrollVaue = Math.round((poss * 100)/ callHeight)
    if(poss>100){
        back_to_top.style.display = "grid"
    }else{
        back_to_top.style.display = "none"
    }

    back_to_top.addEventListener("click", () =>{
        document.documentElement.scrollTop = 0;
    });

   back_to_top.style.background = `conic-gradient(#FF5538 ${ScrollVaue}%, #d7d7d7 ${ScrollVaue}%)`;

//    console.log(back_to_top);

    const scrollParcentage = (scrollY / (documentHeiht - windowHeight)) * 100
    const firstvalue = scrollParcentage.toFixed(2)
    topBar.style.width = `${firstvalue}%`
    roundvalue = Math.floor(firstvalue)
    span.innerHTML = `${roundvalue}%`


}

top_Scroll()
window.addEventListener("scroll", top_Scroll)


  
