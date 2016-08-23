var newColorButton = document.querySelector('#new-color');

var ELEMENTS_WITH_COLOR_1 = $('.color-1');
var ELEMENTS_WITH_COLOR_2 = $('.color-2');
var ELEMENTS_WITH_BG_COLOR = $('.background');
var ELEMENTS_WITH_SHADOW = $('.shadowed');

var colorsData = null;
var quotesData = null;
var lastSchemeNumber = 999;

function randomNumberWithinRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

newColorButton.addEventListener('click', function() {
  changeColors();
  changeQuote();
});

function loadColorSchemes(data) {
  colorsData = data;
}

function loadQuotes(data) {
  quotesData = data;
}

var JSONDataLoadScript = document.createElement('script');
JSONDataLoadScript.src = 'data.js';
document.body.appendChild(JSONDataLoadScript);

function changeColors() {
  var scheme_number = randomNumberWithinRange(0, colorsData.length-1);

  while (scheme_number === lastSchemeNumber){
     scheme_number = randomNumberWithinRange(0, colorsData.length-1);
  }
  lastSchemeNumber = scheme_number;

  document.body.style.background = colorsData[scheme_number].background;
  document.body.style.transition="all 1s";

  ELEMENTS_WITH_COLOR_1.css('background', colorsData[scheme_number].color1);
  ELEMENTS_WITH_COLOR_1.css('fill', colorsData[scheme_number].color1);
  ELEMENTS_WITH_COLOR_1.css('color', colorsData[scheme_number].background);
  ELEMENTS_WITH_COLOR_1.css('transition', "all 0.5s");

  ELEMENTS_WITH_COLOR_2.css('background', colorsData[scheme_number].color2);
  ELEMENTS_WITH_COLOR_2.css('fill', colorsData[scheme_number].color2);
  ELEMENTS_WITH_COLOR_2.css('color', colorsData[scheme_number].background);
  ELEMENTS_WITH_COLOR_2.css('transition', "all 0.5s");

  ELEMENTS_WITH_SHADOW.css('boxShadow', colorsData[scheme_number].shadow);
  ELEMENTS_WITH_SHADOW.css('transition', "all 0.5s");

  ELEMENTS_WITH_BG_COLOR.css('fill', colorsData[scheme_number].background);
  ELEMENTS_WITH_BG_COLOR.css('transition', "all 0.5s");
}

function changeQuote() {
  var quote_number = randomNumberWithinRange(0, quotesData.length-1);

  $("#quote span").text(quotesData[quote_number].quote);
  $("#author span").text(quotesData[quote_number].author);
}
