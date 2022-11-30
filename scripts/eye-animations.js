const leftEyebrows = document.querySelector('.left-eyebrow');
const rightEyebrows = document.querySelector('.right-eyebrow');

const setTiredEyebrows = () => {
    leftEyebrows.style.display = 'block';
    rightEyebrows.style.display = 'block';
}

const setMadEyes = () => {
    leftEyebrows.style.height = '10px';
    leftEyebrows.style.transform = 'rotateZ(45deg) translate(9px, 2px)';

    rightEyebrows.style.height = '10px';
    rightEyebrows.style.transform = 'rotateZ(-45deg) translate(-10px, -2px)';
}