export const TripleDouble = () => {

const packDiv = document.createElement('div');
    packDiv.className = '.justify-content-around';
const backImgPack = document.createElement('img');
    backImgPack.className = 'img-fluid';
    backImgPack.classList.add('triple-double-img');
    backImgPack.src = '../assets/nordwood-themes-bJjsKbToY34-unsplash.png';
const triplePack = document.createElement('button');
    triplePack.className = '';
    triplePack.textContent = 'TRIPLE PACK';
const doblePack = document.createElement('button');
    doblePack.className = '.align-items-center';
    doblePack.textContent = 'DOBLE PACK';

    packDiv.append(backImgPack, triplePack, doblePack);
    return packDiv;
}