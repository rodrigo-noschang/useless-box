const leftEyebrows = document.querySelector('.left-eyebrow');
const rightEyebrows = document.querySelector('.right-eyebrow');
const root = document.querySelector(':root');

const MOOD_YELLOW = '#c4d61a';
const MOOD_RED = '#ff0000';

const setTiredEyebrows = () => {
    leftEyebrows.style.display = 'block';
    rightEyebrows.style.display = 'block';
}

const setMadEyebrows = () => {
    leftEyebrows.style.height = '10px';
    leftEyebrows.style.transform = 'rotateZ(45deg) translate(9px, 2px)';

    rightEyebrows.style.height = '10px';
    rightEyebrows.style.transform = 'rotateZ(-45deg) translate(-10px, -2px)';
}

// Change the color variable value to yellow and then red.
const changeAnthenaAndBodyColors = (switchCount) => {
    if (switchCount < 2) return;
    // const rootStyle = getComputedStyle(root);

    if (switchCount >= 2) root.style.setProperty('--mood-color', MOOD_YELLOW);

    if (switchCount >= 4) root.style.setProperty('--mood-color', MOOD_RED);
}