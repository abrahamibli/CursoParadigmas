//Encender y apagar led
//Uriel Omar Gonzalez Jimenez 320736
//Daniel Alberto Zapata Jimenez 299474
//Abraham Ibarra Linares 320861
const int LED = 13;

void setup() {
  // put your setup code here, to run once:
  pinMode(LED, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(LED, HIGH);
  delay(1000);
  digitalWrite(LED, LOW);
  delay(1000);
}