var button_math = document.getElementById("button-math");
var button_quant = document.getElementById("button-makecode-quantizer");

button_math.addEventListener("click", function() { OpenLink("math-practice"); } );
button_quant.addEventListener("click", function() { OpenLink("MakeCodeImageQuantizerJS"); } );

function OpenLink(subpage) {
    window.open("https://ch3mbot.github.io/" + subpage, "_self");
}
