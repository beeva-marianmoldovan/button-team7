$( document ).ready(function() {
    console.log( "ready!" );
    var data = [
      {
        'nombre': 'Marian C. Moldovan',
        'foto': 'https://farm6.staticflickr.com/5607/29838407936_5c1199449d_k_d.jpg',
        'amarillo': '',
        'rojo': '',
        'negro': ''
      }
    ];

    function setStyle(style) {
      $('#left').addClass(style);
      $('#top').addClass(style);
      $('#bottom').addClass(style);
      $('#right').addClass(style);
    }

    var color = location.search.split('color=')[1]
    setStyle(color);


});
