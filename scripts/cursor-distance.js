const calculateCursorDistanceFromStick = (evt) => {
    const xMax = 1220;
    const xMin = 1100; 
    const xAvarage = (xMax + xMin) / 2;

    const yMax = 470;
    const yMin = 380;
    const yAvarage = (yMax + yMin) / 2;

    // console.log('Média -> ', xAvarage, yAvarage);
    // console.log('Posicao -> ', evt.clientX, evt.clientY);

    const xDistance = Math.abs(xAvarage - evt.clientX);
    const yDistance = Math.abs(yAvarage - evt.clientY);

    if (xDistance <= 150 && yDistance <= 150) {
        console.log('Tá perto');
    }

}