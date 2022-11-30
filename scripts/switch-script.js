const stickDOMelement = document.querySelector('.stick');
const led = document.querySelector('.led');

const TIME = 2;
const joyStick = {
    state: 'off',
    switches: 0
}

const turnOn = () => {
    // Stops user from turning it off manually
    stickDOMelement.removeEventListener('click', switchGameState);

    stickDOMelement.classList.remove('stick-off');
    stickDOMelement.classList.add('stick-on');
    joyStick.state = 'on';
    joyStick.switches++;

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
    stickDOMelement.addEventListener('click', switchGameState);
    
    stickDOMelement.classList.add('stick-off');
    stickDOMelement.classList.remove('stick-on');
    joyStick.state = 'off';

    // Turn led off
    led.classList.remove('led-turn-on');

    setTimeout(() => {
        moveRobotAwayFromStick(TIME);
    }, 500);
}

const switchGameState = () => {
    joyStick.state === 'off' ? 
        turnOn()
    :
        turnOff()
}

stickDOMelement.addEventListener('click', switchGameState);