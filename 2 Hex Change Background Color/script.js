const colorBox = document.getElementById('colorBox');

colorBox.addEventListener('click', changeColor);

function changeColor() {
    const hexColor = generateHexColor();
    document.body.style.backgroundColor = hexColor;
    colorBox.style.backgroundColor = hexColor;
}

function generateHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
