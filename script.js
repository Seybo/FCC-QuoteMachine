var newColorButton = document.querySelector('#new-color');

var elementsWithColor1 = document.getElementsByClassName('color-1');
var elementsWithColor2 = document.getElementsByClassName('color-2');
var elementsWithShadow = document.getElementsByClassName('shadowed');


function randomNumberWithinRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

newColorButton.addEventListener('click', function() {
      changeColors();
      changeQuote();
      var quote = document.getElementsByClassName('quote');
      console.log(quote.innerHTML);
      // quote.innerHTML = "fjdkasfj;alk";
      // console.log(quote.innerHTML);
    });

function changeColors() {
  $.getJSON('color_schemes.json', function(data) {   
      var scheme_number = randomNumberWithinRange(0, data.length-1);
      document.body.style.background = data[scheme_number].background;

      for(i=0; i<elementsWithColor1.length; i++) {
        elementsWithColor1[i].style.fill = data[scheme_number].color1;
        elementsWithColor1[i].style.background = data[scheme_number].color1;
        elementsWithColor1[i].style.color = data[scheme_number].background;
      }

      for(i=0; i<elementsWithColor2.length; i++) {
        elementsWithColor2[i].style.fill = data[scheme_number].color2;
        elementsWithColor2[i].style.background = data[scheme_number].color2;
        elementsWithColor2[i].style.color = data[scheme_number].background;
      }

      for(i=0; i<elementsWithShadow.length; i++) {
        elementsWithShadow[i].style.fill = data[scheme_number].shadow;     
      }
  });
}

function changeQuote() {
  $.getJSON('quotes.json', function(data) {   
      var quote_number = randomNumberWithinRange(0, data.length-1);
      var quote = document.getElementsByClassName('quote');
      quote.innerHTML = data[quote_number].quote;
  });
}
