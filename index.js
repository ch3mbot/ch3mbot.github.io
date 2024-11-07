var button_math = document.getElementById("button-math");
var button_quant = document.getElementById("button-makecode-quantizer");
var button_unitystuff = document.getElementById("button-unity-info-pages")

button_math.addEventListener("click", function() { OpenLink("math-practice"); } );
button_quant.addEventListener("click", function() { OpenLink("MakeCodeImageQuantizerJS"); } );
button_unitystuff.addEventListener("click", function() { OpenLink("unity-info-pages"); } );

function OpenLink(subpage) {
    window.open("https://ch3mbot.github.io/" + subpage, "_self");
}
