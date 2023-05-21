var button = document.getElementById("button-math");
//button.addEventListener("click", OpenLink("Math-Practice"));
button.addEventListener("click", function() { OpenLink("math-practice"); } );

function OpenLink(subpage) {
    window.open("https://ch3mbot.github.io/" + subpage, "_self");
}