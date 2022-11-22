import { onNavigate } from '../main.js';
import { NavBar } from './NavBar.js';

export const Home = () => {
    const homeDiv = document.createElement('div');

    const firstHome = document.createElement('div');
    const fisrtImg = document.createElement('img');
        fisrtImg.src = '../assets/brooke-cagle-g1Kr4Ozfoac-unsplash.png';
    const legend = document.createElement('h1');
        legend.textContent = 'INIGUALABLE'
    const btnSign = document.createElement('button');
        btnSign.textContent = 'CONTRATA HOY'
    
        btnSign.addEventListener('click', () => {
            onNavigate('/contrata-hoy');
        })

    const secondHome = document.createElement('div');
    const secondtImg = document.createElement('img');
        secondtImg.src = '../assets/rayul-_M6gy9oHgII-unsplash.png';
    const btnClients = document.createElement('button');
        btnClients.textContent = 'ERES CLIENTE Y NECESITAS AYUDA';


    firstHome.append(fisrtImg, legend, btnSign);
    return homeDiv;
};