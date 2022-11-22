import { onNavigate } from '../main.js';
import { NavBar } from './NavBar.js';

export const Home = () => {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');

    const firstHome = document.createElement('div');
    const fisrtImg = document.createElement('img');
        fisrtImg.src = '../assets/brooke-cagle-g1Kr4Ozfoac-unsplash.png';
        fisrtImg.classList.add('home-cont-img');
    const legend = document.createElement('h1');
        legend.textContent = 'INIGUALABLE'
    const btnSign = document.createElement('button');
        btnSign.textContent = 'CONTRATA HOY'
    
        btnSign.addEventListener('click', () => {
            onNavigate('/contrata-hoy');
        })

    const secondHome = document.createElement('div');
    const secondImg = document.createElement('img');
        secondImg.src = '../assets/rayul-_M6gy9oHgII-unsplash.png';
    const btnClients = document.createElement('button');
        btnClients.textContent = 'ERES CLIENTE Y NECESITAS AYUDA';

    firstHome.append(fisrtImg, legend, btnSign);
    secondHome.append(secondImg, btnClients);
    homeDiv.append(NavBar, firstHome, secondHome);

    return homeDiv;
};