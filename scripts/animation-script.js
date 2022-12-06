const robot = document.querySelector('.robot');
const stickContainer = document.querySelector('.stick-container')
const robotArm = document.querySelector('.second-articulation');
const robotHand = document.querySelector('.hand');
const robotTreadmill = document.querySelector('.wheel-treadmill');
const rasengan = document.querySelector('.rasengan');
const fire = document.querySelector('.fire-gif');

const moveRobotToStick = (animationTime) => {
    // Deactivates all the hovering part, so that the second head is not shown (functionality that appears on 13th to 16th time the switch is clicked)
    deactivateHeadPeeking();
    resetSecondHeadPosition();

    let animationInMiliseconds = 0;
    // Robot is going to stay next to the box from switches 7 to eleven. So in this interval, he is not gonna move forwards.
    const isRobotisMoving = joyStick.switches <= 7 || joyStick.switches >= 11;

    if (isRobotisMoving) {
        robot.style.animation = `moveRobotForwards ${animationTime}s ease-in-out forwards`;
        robotTreadmill.style.animation = `moveTreadmillForwards ${animationTime}s ease-in-out forwards`;
        animationInMiliseconds = animationTime * 1000;
    }

    // Waits for the robot to move to the stick, so it can extend it's arm
    setTimeout(() => {
        // If he is stopped by the box, he is gonna move his hand faster
        if (!isRobotisMoving) animationTime = 0.25;

        extendRobotArm(animationTime);
    }, animationInMiliseconds)
}

const extendRobotArm = (animationTime) => {
    const animationInMiliseconds = animationTime * 1000;

    robotArm.style.animation = `moveArmForwards ${animationTime / 2}s ease-in-out forwards`;
    robotHand.style.animation = `moveArmForwards ${animationTime / 2}s ease-in-out forwards`;

    // Waits for the arm to fully extend, then turns the stick off
    setTimeout(turnOff, animationInMiliseconds / 2 - animationInMiliseconds * .1);
}

const moveRobotAwayFromStick = (animationTime) => {
    // Robot is going to be next to the box from switches 7 to 11, so he is not comming back in those intervals
    const isRobotisMoving = joyStick.switches <= 6 || joyStick.switches >= 10
    
    if (isRobotisMoving) {
        robot.style.animation = `moveRobotBackwards ${animationTime}s ease-in-out forwards`;
        robotTreadmill.style.animation = `moveTreadmillBackwards ${animationTime}s ease-in-out forwards`;
    }

    retrieveRobotArm(animationTime);
}

const retrieveRobotArm = (animationTime) => {
    robotArm.style.animation = `moveArmBackwards ${animationTime / 2}s ease-in-out forwards`;
    robotHand.style.animation = `moveArmBackwards ${animationTime / 2}s ease-in-out forwards`;
    
    // Reactivates head peeking in rounds 11th to 14th after the retrieval of the arm animation is done running
    if (joyStick.switches >= 10 && joyStick.switches <= 13) {
        setTimeout(activateHeadPeeking, (animationTime) * 1000);
    }
}

const endAnimation = (animationTime) => {
    animationTime = .5;
    const animationTimeInMiliseconds = (animationTime * 2) * 1000;
    
    robotArm.style.animation = `moveArmForwards ${animationTime * 2}s ease-in-out forwards`;
    robotHand.style.animation = `moveArmForwards ${animationTime * 2}s ease-in-out forwards`;

    setTimeout(() => {
        rasengan.style.animation = `rasengan ${animationTime * 6}s ease-out forwards`

        setTimeout(() => {
            robotArm.style.animation = `moveArmBackwards ${animationTime * 2}s ease-in-out forwards`;
            robotHand.style.animation = `moveArmBackwards ${animationTime * 2}s ease-in-out forwards`;

            stickContainer.style.animation = 'rasenganExplosion .3s';
            robot.style.animation = 'rasenganExplosion .3s';

            fire.style.transformOrigin = 'bottom';
            fire.style.transform = 'scaleY(1)';
            fire.style.transition = '.3s';
        }, animationTimeInMiliseconds * 3);

        setTimeout(() => {
            turnOff();
        }, animationTimeInMiliseconds * 2.9);

    }, animationTimeInMiliseconds);
}
