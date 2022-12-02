import { onNavigate } from '../main.js';

export const Home = () => {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');

    const navBar = document.createElement('nav');
        navBar.className = 'container';
        navBar.classList.add('nav-bar');
    const phone = document.createElement('img');
        phone.className = 'col-sm';
        phone.src = '../assets/phone.png';
    const logo = document.createElement('img');
        logo.className = 'col-sm';
        logo.src = '../assets/megacable.png';

    const bodyDiv = document.createElement('div');
        bodyDiv.className = 'd-flex align-items-stretch';

    const firstHome = document.createElement('div');
        firstHome.classList.add('home-div-left');
    const fisrtImg = document.createElement('img');
        fisrtImg.className = 'img-fluid';
        fisrtImg.src = '../assets/brooke-cagle-g1Kr4Ozfoac-unsplash.png';
    const legend = document.createElement('h1');
        legend.className = 'p-3 mb-2 bg-white text-dark';
        legend.classList.add('legend');
        legend.textContent = 'INIGUALABLE';
    const legendTwo = document.createElement('h1');
        legendTwo.className = 'p-3 mb-2 bg-white text-dark';
        legendTwo.classList.add('legend');
        legendTwo.textContent = 'INCOMPARABLE';
    const legendThree = document.createElement('h1');
        legendThree.className = 'p-3 mb-2 bg-white text-dark';
        legendThree.classList.add('legend');
        legendThree.textContent = 'INCREÍBLE';
    const btnSign = document.createElement('button');
        btnSign.className = 'p-3 mb-2 bg-primary text-white';
        btnSign.textContent = 'CONTRATA HOY';
    
        btnSign.addEventListener('click', () => {
            onNavigate('/contrata-hoy');
        })

    const secondHome = document.createElement('div');
        secondHome.classList.add('home-div-right');
    const secondImg = document.createElement('img');
        secondImg.className = 'img-fluid';
        secondImg.src = '../assets/rayul-_M6gy9oHgII-unsplash.png';
    const btnClients = document.createElement('button');
        btnClients.className = 'text-warning';
        btnClients.textContent = 'ERES CLIENTE Y NECESITAS AYUDA';

    navBar.append(phone, logo);
    firstHome.append(fisrtImg, legend, legendTwo, legendThree, btnSign);
    secondHome.append(secondImg, btnClients);
    bodyDiv.append(firstHome, secondHome);
    homeDiv.append(navBar, bodyDiv);

    return homeDiv;
};