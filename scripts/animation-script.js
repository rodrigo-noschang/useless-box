const robot = document.querySelector('.robot');
const robotArm = document.querySelector('.second-articulation');
const robotHand = document.querySelector('.hand');
const robotTreadmill = document.querySelector('.wheel-treadmill');

const moveRobotToStick = (animationTime) => {
    const animationInMiliseconds = animationTime * 1000;

    if (joyStick.switches <= 8 || joyStick.switches >= 10) {
        robot.style.animation = `moveRobotForwards ${animationTime}s ease-in-out forwards`;
        robotTreadmill.style.animation = `moveTreadmillForwards ${animationTime}s ease-in-out forwards`;
    }
    // Waits for the robot to move to the stick, so it can extend it's arm
    setTimeout(() => {
        extendRobotArm(animationTime);
    }, animationInMiliseconds)
}

const extendRobotArm = (animationTime) => {
    const animationInMiliseconds = animationTime * 1000;

    robotArm.style.animation = `moveArmForwards ${animationTime / 2}s ease-in-out forwards`;
    robotHand.style.animation = `moveArmForwards ${animationTime / 2}s ease-in-out forwards`;

    // Waits for the arm to fully extend, then turns the stick off
    setTimeout(turnOff, animationInMiliseconds / 2 - 100);
}

const moveRobotAwayFromStick = (animationTime) => {
    if (joyStick.switches <= 7 || joyStick.switches >= 11) {
        robot.style.animation = `moveRobotBackwards ${animationTime}s ease-in-out forwards`;
        robotTreadmill.style.animation = `moveTreadmillBackwards ${animationTime}s ease-in-out forwards`;
    }

    retrieveRobotArm(animationTime);
}

const retrieveRobotArm = (animationTime) => {
    robotArm.style.animation = `moveArmBackwards ${animationTime / 2}s ease-in-out forwards`;
    robotHand.style.animation = `moveArmBackwards ${animationTime / 2}s ease-in-out forwards`;
}
