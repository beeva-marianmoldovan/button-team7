$( document ).ready(function() {
    console.log( "ready!" );
    console.log(random());

    function setStyle(style) {
      $('#left').addClass(style);
      $('#top').addClass(style);
      $('#bottom').addClass(style);
      $('#right').addClass(style);
      $('#fondito').addClass('fondito' + style);
      $('#textito').addClass('textito' + style);
    }

    function setData(style){
      var person = random();
      $('#textito').html('<span id="fondito">' + person[style] + '</span>');
      $('#fotito').attr('src', person['foto']);
    }

    var color = location.search.split('color=')[1];
    setData(color);
    setStyle(color);


});
