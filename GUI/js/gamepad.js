//parse=require("./GamepadDeadZone");
console.log(navigator.getGamepads())
var myGamepad = navigator.getGamepads()[0]
var jConnected = false

window.addEventListener('gamepadconnected', function (e) {
  const myGamepad = navigator.getGamepads()[0]
  console.log(
    'Gamepad connected at index %d: %s. %d buttons, %d axes.',
    myGamepad.index,
    myGamepad.id,
    myGamepad.buttons.length,
    myGamepad.axes.length
  )
  jConnected = True
})
setInterval(() => {
  if (jConnected) {
    const myGamepad = navigator.getGamepads()[0]

    //var joystickX = applyDeadzone(gamepad.axes[0], 0.25); // use the first gamepad
    x = myGamepad.axes[0]
    y = myGamepad.axes[1]
    if (x < 0.25 && x > 0) {
      x = 0
      console.log(x)
    } else if (x > -0.25 && x < 0) {
      x = 0
      console.log(x)
    } else {
      console.log(x)
    }
    if (y < 0.25 && y > 0) {
      y = 0
      console.log(y)
    } else if (y > -0.25 && y < 0) {
      y = 0
      console.log(y)
    } else {
      console.log(y)
    }
    m1 = parseFloat(x.toFixed(0)) * 400 + 1500
    m2 = y * 400 + 1500
    console.log(m1)
    console.log(m2)

    console.log(`Left stick at (${myGamepad.axes[0]}, ${myGamepad.axes[1]})`)
    //console.log(`Right stick at (${myGamepad.axes[2]}, ${myGamepad.axes[3]})` );
  }
}, 100) // print axes 10 times per second
setInterval(() => {
  if (jConnected) {
    const myGamepad = navigator.getGamepads()[0]
    if (myGamepad.buttons[0].pressed) {
      console.log('0 pressed')
    }
    if (myGamepad.buttons[1].pressed) {
      console.log('1 pressed')
    }
    if (myGamepad.buttons[2].pressed) {
      console.log('2 pressed')
    }
    if (myGamepad.buttons[3].pressed) {
      console.log('3 pressed')
    }
    if (myGamepad.buttons[4].pressed) {
      console.log('4 pressed')
    }
    if (myGamepad.buttons[5].pressed) {
      console.log('5 pressed')
    }
    if (myGamepad.buttons[6].pressed) {
      console.log('6 pressed')
    }
    if (myGamepad.buttons[7].pressed) {
      console.log('7 pressed')
    }
    if (myGamepad.buttons[8].pressed) {
      console.log('8 pressed')
    }
    if (myGamepad.buttons[9].pressed) {
      console.log('9 pressed')
    }
    if (myGamepad.buttons[10].pressed) {
      console.log('10 pressed')
    }
    if (myGamepad.buttons[11].pressed) {
      console.log('11 pressed')
    }
  }
}, 100)
// gamepad.onleftstickchanged((values) => {
//   let x = values.x;
//   let y = values.y;
//   x = setDeadZone(x);
//   y = setDeadZone(y);
//   console.log(x);
//   console.log(y);

// document.addEventListener("gamepadButtonDown", (event) => {
//   console.log(`Gamepad Button ${event.detail.buttonIndex} pressed`);
// });
// document.addEventListener("gamepadButtonUp", (event) => {
//   console.log(`Gamepad Button ${event.detail.buttonIndex} released`);
// });

//   function updateGamepad() {
//     requestAnimationFrame(updateGamepad);
//     // We'll only get the first gamepad in our list.
//     const gamepad = navigator.getGamepads()[0];
//     // If our gamepad isn't connected, stop here.
//     if (!gamepad) return;
//     // Update the background color of our page using axes from our gamepad.
//     // You might need to update these index values to work with your gamepad.

//     // Have the value go from 0 to 1 instead of -1 to 1
//     const hue = gamepad.axes[2] / 2;
//     const saturation = (gamepad.axes[0] + 1) / 2;
//     const lightness = (gamepad.axes[1] + 1) / 2;
//     document.body.style.backgroundColor = `hsl(${hue * 360},${
//       saturation * 100
//     }%,${lightness * 100}%)`;
//   }

//   updateGamepad();
//function updateGamepad() {
//   requestAnimationFrame(updateGamepad);
//   let newGamepad = navigator.getGamepads()[0];
//   if (!newGamepad) return;

//   newGamepad.buttons.forEach((button, index) => {
//     const oldButtonPressed = gamepad?.buttons[index].pressed;
//     if (button.pressed !== oldButtonPressed) {
//       if (button.pressed && !oldButtonPressed) {
//         document.dispatchEvent(
//           new CustomEvent("gamepadButtonDown", {
//             detail: { buttonIndex: index },
//           })
//         );
//       }
//       if (!button.pressed && oldButtonPressed) {
//         document.dispatchEvent(
//           new CustomEvent("gamepadButtonUp", { detail: { buttonIndex: index } })
//         );
//       }
//     }
//   });
//}
