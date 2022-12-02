const defineRobotDislocationBasedOnCursorDistance = cursorDistance => {
    // 125 >= dislocation <= 220 (y)
    // 200 >= cursorDistance <= 70 (x)

    const robotDislocation = cursorDistance <= 70 ? 250 :
    cursorDistance >= 200 ? 0 :
    -0.95*(cursorDistance - 200) + 125;

    const robotRotation = robotDislocation != 0 ? 45 : 0;

    robot.style.transform = `translate(${robotDislocation}px, -50%) rotate(${robotRotation}deg)`;
    robot.style.transition = '.1s';
}

const hideRobot = () => {
    robot.style.transform = `translate(0, -50%)`;
    robot.style.transition = '.3s';
}

const calculateCursorDistanceFromStick = (evt) => {
    const xMax = 1220;
    const xMin = 1100; 
    const xAvarage = (xMax + xMin) / 2;

    const yMax = 470;
    const yMin = 380;
    const yAvarage = (yMax + yMin) / 2;

    const xDistance = Math.abs(xAvarage - evt.clientX);
    const yDistance = Math.abs(yAvarage - evt.clientY);

    const distanceModule = Math.sqrt(xDistance ** 2 + yDistance ** 2);
    defineRobotDislocationBasedOnCursorDistance(distanceModule);    
}

if (joyStick.switches === 13) {
    stickSurroundings.addEventListener('mousemove', calculateCursorDistanceFromStick);
    stickSurroundings.addEventListener('mouseleave', hideRobot);
}

if (joyStick.switches === 16) {
    stickSurroundings.removeEventListener('mousemove', calculateCursorDistanceFromStick);
    stickSurroundings.removeEventListener('mouseleave', hideRobot);
}