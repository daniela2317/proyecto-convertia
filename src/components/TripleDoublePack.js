export const TripleDouble = () => {

const packDiv = document.createElement('div');
const backImgPack = document.createElement('img');
    backImgPack.src = '../assets/nordwood-themes-bJjsKbToY34-unsplash.png';
const triplePack = document.createElement('button');
    triplePack.textContent = 'TRIPLE PACK';
const doblePack = document.createElement('button');
    doblePack.textContent = 'DOBLE PACK';

    packDiv.append(backImgPack, triplePack, doblePack);
    return packDiv;
}