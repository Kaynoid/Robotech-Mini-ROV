String command;

void setup() {
  Serial.begin(9600);
}

void loop() {
  String reading = "MY HARDCODED MESSAGE";


  Serial.println(reading); 
  if (Serial.available()) {
    command = Serial.readStringUntil('\n');
    command.trim();
    if (command.equals("ok")) {
       Serial.println("success ok"); 
     
    }

    else if (command.equals("blue")) {
      Serial.println("success blue"); 
      
    }
    else if (command.equals("red")) {
      Serial.println("success red"); 
    
    }
    else {
       Serial.println("none");
    
  }}

  delay(1000);
}
