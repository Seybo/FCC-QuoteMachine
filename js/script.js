var newColorButton = document.querySelector('#new-color');

var elementsWithColor1 = document.getElementsByClassName('color-1');
var elementsWithColor2 = document.getElementsByClassName('color-2');
var elementsWithBackgroundColor = document.getElementsByClassName('background');
var elementsWithShadow = document.getElementsByClassName('shadowed');

var JSONData;
var colorsData;
var quotesData;
var lastSchemeNumber = 999;

function randomNumberWithinRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

newColorButton.addEventListener('click', function() {
      loadJSONs();
    });

function loadJSONs() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/color_schemes.json');
  xhr.timeout = 1000;
  xhr.onload = function(evt) {
    var target = evt.target || evt.srcElement;
    changeColors(JSON.parse(target.response));
  }
  xhr.send();

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/quotes.json');
  xhr.timeout = 1000;
  xhr.onload = function(evt) {
    var target = evt.target || evt.srcElement;
    changeQuote(JSON.parse(target.response));  
  }
  xhr.send();
}

function changeColors(colorsData) {
  var scheme_number = randomNumberWithinRange(0, colorsData.length-1);

  while (scheme_number === lastSchemeNumber){
     scheme_number = randomNumberWithinRange(0, colorsData.length-1);
  }
  lastSchemeNumber = scheme_number;

  document.body.style.background = colorsData[scheme_number].background;
  document.body.style.transition="all 1s";

  for(i=0; i<elementsWithColor1.length; i++) {
    elementsWithColor1[i].style.fill = colorsData[scheme_number].color1;
    elementsWithColor1[i].style.background = colorsData[scheme_number].color1;
    elementsWithColor1[i].style.color = colorsData[scheme_number].background;
    elementsWithColor1[i].style.transition="all 0.5s";
  }

  for(i=0; i<elementsWithColor2.length; i++) {
    elementsWithColor2[i].style.fill = colorsData[scheme_number].color2;
    elementsWithColor2[i].style.background = colorsData[scheme_number].color2;
    elementsWithColor2[i].style.color = colorsData[scheme_number].background;
    elementsWithColor2[i].style.transition="all 0.5s";
  }

  for(i=0; i<elementsWithShadow.length; i++) {
    elementsWithShadow[i].style.boxShadow = colorsData[scheme_number].shadow;
    elementsWithShadow[i].style.transition="all 0.5s";
  }

  for(i=0; i<elementsWithBackgroundColor.length; i++) {
    elementsWithBackgroundColor[i].style.fill = colorsData[scheme_number].background;
    elementsWithBackgroundColor[i].style.transition="all 0.5s";
  }
}

function changeQuote(quotesData) {
 
  var quote_number = randomNumberWithinRange(0, quotesData.length-1);
  var quote = document.getElementById("quote");
  quote.innerHTML = quotesData[quote_number].quote;
  var author = document.getElementById("author");
  author.innerHTML = quotesData[quote_number].author;
  console.log(quote.innerHTML);
  console.log(typeof quote);
}
