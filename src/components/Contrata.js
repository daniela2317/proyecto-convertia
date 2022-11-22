import { onNavigate } from '../main.js';
import { NavBar } from './NavBar.js';
import { TripleDouble } from './TripleDoublePack.js';
import { Packages } from './Packages.js';
import { PackagesTwo } from './PackagesTwo.js';

export const Contrata = () => {
    const homeDiv = document.createElement('div');

    const mainDiv = document.createElement('div');
    const backImg = document.createElement('img');
        backImg.src = '../assets/drew-graham-PVyhz0wmHdo-unsplash.png';
    const internet = document.createElement('h1');
        internet.textContent = 'Internet INIGUALABLE';
    const subText = document.createElement('h2');
        subText.textContent = 'TV Interactiva + Telefonía Fija';
    const cost = document.createElement('h3');
        cost.textContent = 'Desde $449 al mes';
    const btn = document.createElement('button');
        btn.textContent = ('LO QUIERO');


mainDiv.append(backImg, internet, subText, cost, btn);
packDiv.append(backImgPack, triplePack, doblePack);
homeDiv.append(NavBar, mainDiv);
return homeDiv;
}