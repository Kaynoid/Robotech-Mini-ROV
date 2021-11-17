const motor_1 = document.getElementById('motor1')
const motor_2 = document.getElementById('motor2')
const motor_3 = document.getElementById('motor3')
const motor_4 = document.getElementById('motor4')

const verticalMotor_1 = document.getElementById('verticalMotor1')
const verticalMotor_2 = document.getElementById('verticalMotor2')

// values to edit are x2 and y2 in "joystickLine" and mapped to 78.5
const joystickLine = document.getElementById('joystickLine')
// values to edit are cv and cy in "joystickCircle" and mapped to 78.5
const joystickCircle = document.getElementById('joystickCircle')

const timer = document.getElementById('timer')
const startTimer = document.getElementById('startTimer')
const pauseTimer = document.getElementById('pauseTimer')
const resetTimer = document.getElementById('resetTimer')

const maxSpeedInput = document.getElementById('maxSpeedInput')
maxSpeedInput.defaultValue = 50
const increaseSpeedSlider = document.getElementById('range')

const pidState = document.getElementById('pidState')
const temprature = document.getElementById('temprature')
const pressure = document.getElementById('pressure')
const velocity = document.getElementById('velocity')

const dcArmState = document.getElementById('dcArmState')
const pneumaticArmState = document.getElementById('pnumaticArmState')

// variable to know if timer is running or not
let runTimer = false
let time = ''

// ====================================Timer Code =============================

var clicked = true;
startTimer.addEventListener('click', function () {
if(clicked){
  clicked=false;
  runTimer=true
  startTimer.textContent="Pause"
  console.log(clicked)
  return;
}
else{
  clicked=true;
  startTimer.textContent="Start"
  runTimer = false

}
console.log(clicked)
})


//pauseTimer.addEventListener('click', function () {
  //runTimer = false
//})

resetTimer.addEventListener('click', function () {
  runTimer = false
  tLeft = 15 * 60
  timer.textContent = `15:00`
})

// time left in seconds
let tLeft = 60 * 15

var downloadTimer = setInterval(function () {
  if (runTimer == true && tLeft != 0) {
    tLeft = tLeft - 1
    time = `${Math.floor(tLeft / 60)}:`
    if (tLeft % 60 < 10) {
      time = time.concat(`0${tLeft % 60}`)
      // this to handle when seconds is below 10 it will be like this 08 or 09 and so on
    } else {
      time = time.concat(`${tLeft % 60}`)
    }
    timer.textContent = time
  }
}, 1000)
// ================Speed Code================================================================

window.addEventListener('click', function () {
  if (maxSpeedInput.value > 100) {
    maxSpeedInput.value = 100
  } else if (maxSpeedInput.value < 0) {
    maxSpeedInput.value = 0
  }

  increaseSpeedSlider.value = maxSpeedInput.value
})

function myFunction(val) {
  maxSpeedInput.value = val
}
