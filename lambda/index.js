const request = require('request');

exports.handler = (event, context, callback) => {
    console.log('Received event:', event);

    var color = 'amarillo';
    if(event.clickType === 'LONG') {
      color = 'rojo';
      console.log('Un click');
    }
    else if(event.clickType === 'DOUBLE'){
      color = 'negro';
      console.log('Un click doble');
    }

    var options = {
      uri: 'https://c67cac8a2eae1d04f5928b5b1603a36ae49eafede475c07838e278610d7e0a.resindevice.io/content',
      method: 'POST',
      json: {
      	'content': 'https://beeva-marianmoldovan.github.io/button-team7/?color=' + color,
      	'screen': 'Labs.2',
      	'type': 'web'
      }
    };
    console.log(options);
    request(options, function (error, response, body) {
      context.done(error, response);
    });

};
