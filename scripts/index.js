function changeNav(){
    var mybody = document.getElementsByTagName("body");
var header = document.getElementById("header");

mybody.onscroll = function(){

    header.className = "headerjs";

};
}

const scrollBackToTop = function(){
    let backToTop = document.getElementById("backtotop");
    
    window.onscroll = function(){
        if(document.documentElement.scrollTop > 10){
            backToTop.className = "scrollback";
            backToTop.innerHTML = "Back to top";
            backToTop.onmouseover = () =>{
                backToTop.style = "cursor: pointer";
            }
            backToTop.onclick = () =>{
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }else{
            backToTop.className = "";
        }
    }
}


window.onload = function(){

    scrollBackToTop();

    // changeNav();

}

