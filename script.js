var JSONDataLoadScript = document.createElement("script");
JSONDataLoadScript.src = "http://michaelatwork.space/projects/fcc-quote-machine/data.js";
document.body.appendChild(JSONDataLoadScript);

// these two functions are called from data.js file
// and they contain all the JSON data 
function loadColorSchemes(data) {
  colorsData = data;
}

function loadQuotes(data) {
  quotesData = data;
}

var newColorButton = document.querySelector("#new-color");

var colorsData = null;
var quotesData = null;
var lastSchemeNumber = 999;

newColorButton.addEventListener("click", function() {
  change();
});

function change() {

  var elementsWithColor1 = $(".color-1");
  var elementsWithColor2 = $(".color-2");
  var elementsWithBGColor = $(".background");
  var elementsWithShadow = $(".shadowed");

  function randomNumberWithinRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function changeColors() {
    var scheme_number = randomNumberWithinRange(0, colorsData.length-1);

    while (scheme_number === lastSchemeNumber){
       scheme_number = randomNumberWithinRange(0, colorsData.length-1);
    }

    lastSchemeNumber = scheme_number;

    $("body").css("background", colorsData[scheme_number].background);
    $("body").css("transition", "all 1s");

    elementsWithColor1.css("background", colorsData[scheme_number].color1);
    elementsWithColor1.css("fill", colorsData[scheme_number].color1);
    elementsWithColor1.css("color", colorsData[scheme_number].background);
    elementsWithColor1.css("transition", "all 0.5s");

    elementsWithColor2.css("background", colorsData[scheme_number].color2);
    elementsWithColor2.css("fill", colorsData[scheme_number].color2);
    elementsWithColor2.css("color", colorsData[scheme_number].background);
    elementsWithColor2.css("transition", "all 0.5s");

    elementsWithShadow.css("boxShadow", colorsData[scheme_number].shadow);
    elementsWithShadow.css("transition", "all 0.5s");

    elementsWithBGColor.css("fill", colorsData[scheme_number].background);
    elementsWithBGColor.css("transition", "all 0.5s");
  }

  function changeQuote() {
    var quote_number = randomNumberWithinRange(0, quotesData.length-1);

    $("#quote span").text(quotesData[quote_number].quote);
    $("#author span").text(quotesData[quote_number].author);

    function updateTwitterButton() {
      var twitterButton = $(".fa-twitter");
      twitterButton.attr("href", "https://twitter.com/intent/tweet?hashtags=funnyquotes&text=" + "\"" + quotesData[quote_number].quote + "\" " + quotesData[quote_number].author);
      twitterButton.attr("target", "blank");
    }
    
    updateTwitterButton();

  }

  changeColors();
  changeQuote();
}