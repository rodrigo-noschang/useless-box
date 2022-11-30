const stickDOMelement = document.querySelector('.stick');
const led = document.querySelector('.led');

let TIME = 2;
const joyStick = {
    state: 'off',
    switches: 0
}

const setAnimationTimeAndRobotMood = () => {
    if (joyStick.switches == 2) {
        TIME = 1;
        setTiredEyebrows();
    }

    if (joyStick.switches == 4) {
        TIME = .5;
        setMadEyebrows();
    }

    changeAnthenaAndBodyColors(joyStick.switches);
}

const turnOn = () => {
    // Stops user from turning it off manually
    stickDOMelement.removeEventListener('click', switchGameState);

    // Defines how fast the animation is going to run
    setAnimationTimeAndRobotMood();

    stickDOMelement.classList.remove('stick-off');
    stickDOMelement.classList.add('stick-on');
    joyStick.switches++;
    joyStick.state = 'on';
    
    // turn led on after a few miliseconds
    setTimeout(() => {
        led.classList.add('led-turn-on');
    }, 200)
    
    // Play the robot moving animation after a litte while
    setTimeout(() => {
        moveRobotToStick(TIME);
    }, 500)

}

const turnOff = () => {
    stickDOMelement.classList.add('stick-off');
    stickDOMelement.classList.remove('stick-on');
    joyStick.state = 'off';

    // Turn led off
    led.classList.remove('led-turn-on');

    setTimeout(() => {
        moveRobotAwayFromStick(TIME);

        // Once the animation is done running, user can turn it on again
        setTimeout(() => {
            stickDOMelement.addEventListener('click', switchGameState);
        }, TIME * 1000)
    }, 500);
}

const switchGameState = () => {
    joyStick.state === 'off' ? 
        turnOn()
    :
        turnOff()
}

stickDOMelement.addEventListener('click', switchGameState);