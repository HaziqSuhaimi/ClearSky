
const int mq7APin = A0; // carbon monoxide
const int mq7DPin = 2;
int mq7AValue = 0;
int mq7DValue = 0;

const int mq4APin = A1;  //methane
const int mq4DPin = 3;
int mq4DValue = 0;
int mq4AValue = 0;

const int mq135APin = A2;  //carbon dioxide
const int mq135DPin = 4;
int mq135DValue = 0;
int mq135AValue = 0;

void setup() {
  Serial.begin(9600);
  pinMode(mq7DPin, INPUT);
  pinMode(mq4DPin, INPUT);
  pinMode(mq135DPin, INPUT);

}

void loop() {
    mq7AValue = map(analogRead(mq7APin),0,1023,0,100);
    mq7DValue = digitalRead(mq7DPin);
    
    mq4AValue = map(analogRead(mq4APin),0,1023,0,100);
    mq4DValue = digitalRead(mq7DPin);
    
    mq135AValue = map(analogRead(mq135APin),0,1023,0,100);
    mq135DValue = digitalRead(mq135DPin);

    Serial.print(mq7AValue);
    Serial.print(",");
    Serial.print(mq4AValue);
    Serial.print(",");
    Serial.print(mq135AValue);
    Serial.print(":");
    Serial.print(mq7DValue);
    Serial.print(",");
    Serial.print(mq4DValue);
    Serial.print(",");
    Serial.println(mq135DValue);
        

  delay(1000);

}
