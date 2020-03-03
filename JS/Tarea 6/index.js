//Encender y apagar led con js
//Uriel Omar Gonzalez Jimenez 320736
//Daniel Alberto Zapata Jimenez 299474
//Abraham Ibarra Linares 320861

var five = require('johnny-five');
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);
});