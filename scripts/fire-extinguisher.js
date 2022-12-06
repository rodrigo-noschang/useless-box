// const extinguisherContainer = document.querySelector('.fire-extinguisher-container')
// const stickBase = document.querySelector('.stick-base');

// let intervalID = '';
// let xMousePosition = 0;
// let time

// const getMouseCoordinates = (e) => {
//     xMousePosition = e.clientX <= 900 ? 900 :
//         e.clientX >= 1240 ? 1240 : e.clientX;
// }

// const calculateSmokePosition = mousePosition => {
//     return 13 * (mousePosition - 900) / 17;
// }

// const putOutFire = () => {
//     fire.style.scale = 0;
// }

// const disableFireExtinguisher = () => {
//     stickSurroundings.removeEventListener('mousedown', pressed);
//     stickSurroundings.removeEventListener('mouseup', released);
// }

// const pressed = (evt) => {
//     stickBase.addEventListener('mousemove', getMouseCoordinates);
//     let i = 0;

//     intervalID = setInterval(() => {
//         if (i >= 1500) {
//             released();
//             putOutFire();
//             disableFireExtinguisher();
//         }

//         const smokeLeftValue = calculateSmokePosition(xMousePosition);

//         const newSmoke = document.createElement('div');
//         newSmoke.classList.add('fire-extinguisher');
//         newSmoke.style.left = `${smokeLeftValue}px`;

//         extinguisherContainer.appendChild(newSmoke);

//         i += 100;
//     }, 100)
// }

// const released = () => {
//     clearInterval(intervalID);
//     intervalID = '';  
    
//     stickBase.removeEventListener('mousemove', getMouseCoordinates);

//     setTimeout(() => {
//         extinguisherContainer.innerHTML = '';
//     }, 1000);
// }


// const activateFireExtinguisher = () => {
//     stickSurroundings.addEventListener('mousedown', pressed);
//     stickSurroundings.addEventListener('mouseup', released);
// }