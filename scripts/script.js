const stickDOMelement = document.querySelector('.stick');
const led = document.querySelector('.led');

const joyStick = {
    state: 'off',
    switches: 0
}



const turnOn = () => {
    stickDOMelement.classList.remove('stick-off');
    stickDOMelement.classList.add('stick-on');
    joyStick.state = 'on';

    // turn led on after a few miliseconds
    setTimeout(() => {
        led.classList.add('led-turn-on');
    }, 200)
}

const turnOff = () => {
    stickDOMelement.classList.add('stick-off');
    stickDOMelement.classList.remove('stick-on');
    joyStick.state = 'off';

    // Turn led off
    setTimeout(() => {
        led.classList.remove('led-turn-on');
    }, 200)
}

const switchGameState = () => {
    joyStick.state === 'off' ? 
        turnOn()
    :
        turnOff()
}

stickDOMelement.addEventListener('click', switchGameState);