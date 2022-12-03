const secondHead = document.querySelector('.second-head')

const activateHeadPeeking = () => {
    stickSurroundings.addEventListener('mousemove', calculateCursorDistanceFromStick)
}

const deactivateHeadPeeking = () => {
    stickSurroundings.removeEventListener('mousemove', calculateCursorDistanceFromStick)
}

const moveSecondHead = headDislocation => {
    secondHead.style.transform = `translateX(${headDislocation}px) rotateZ(35deg)`;
    secondHead.style.transition = '.2s';
}

const resetSecondHeadPosition = () => {
    secondHead.style.transform = 'translateX(40px) rotateZ(35deg)';
    secondHead.style.transition = '.2s';
}

const defineRobotDislocationBasedOnCursorDistance = cursorDistance => {
    // 120 >= dislocation <= 200 (y)
    // 200 >= cursorDistance <= 70 (x)
    // Function that creates a relation between the distance of the cursor to the stick
    //  and the movement of the head.
    const calculatedDislocation = -8 * (cursorDistance - 200) / 13 + 120;


    // When the distance is smaller than 150 the head stays hidden (the dislocation remains the original 40px, check .second-head on CSS)
    // When the distance is between 150 and 175, it is going to remain at 150 px dislocation (shows only one eye of the robot)
    // If that distance is grater than 175, the head will dislocate that distance
    // If the distance is grater than 200, it's only going to deslocate 200px.
    const officialDislocation = calculatedDislocation >= 200 ? 200 :
        calculatedDislocation > 175 ? calculatedDislocation :
        calculatedDislocation >= 150 ? 150 : 40;

    moveSecondHead(officialDislocation);
}

const calculateCursorDistanceFromStick = (evt) => {
    const xMax = 1220;
    const xMin = 1100; 
    const xCenter = (xMax + xMin) / 2;

    const yMax = 470;
    const yMin = 380;
    const yCenter = (yMax + yMin) / 2;

    const xDistance = Math.abs(xCenter - evt.clientX);
    const yDistance = Math.abs(yCenter - evt.clientY);

    const distanceModule = Math.sqrt(xDistance ** 2 + yDistance ** 2);
    defineRobotDislocationBasedOnCursorDistance(distanceModule);    
}