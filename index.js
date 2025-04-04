function changeNav(){
    var mybody = document.getElementsByTagName("body");
var header = document.getElementById("header");

mybody.onscroll = function(){

    header.className = "headerjs";

};
}

window.onload = function(){

    changeNav();

}