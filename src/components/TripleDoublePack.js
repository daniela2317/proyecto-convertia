export const TripleDouble = () => {

const packDiv = document.createElement('div');
    packDiv.className = 'd-flex p-2';
const backImgPack = document.createElement('img');
    backImgPack.className = 'img-fluid';
    backImgPack.src = '../assets/nordwood-themes-bJjsKbToY34-unsplash.png';
const triplePack = document.createElement('button');
    triplePack.className = 'd-flex justify-content-around';
    triplePack.textContent = 'TRIPLE PACK';
const doblePack = document.createElement('button');
    doblePack.className = 'd-flex justify-content-around';
    doblePack.textContent = 'DOBLE PACK';

    packDiv.append(backImgPack);
    return packDiv;
}