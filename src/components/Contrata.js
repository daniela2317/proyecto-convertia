import { onNavigate } from '../main.js';
import { NavBar } from './NavBar.js';
import { TripleDouble } from './TripleDoublePack.js';
import { Packages } from './Packages.js';
import { PackagesTwo } from './PackagesTwo.js';
import { Footer } from './Footer.js';

export const Contrata = () => {
    const contrataDiv = document.createElement('div');

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

    const divSideBox = document.createElement('div');
    const contrataForm = document.createElement('div');
    const boxMain = document.createElement('h1');
        boxMain.textContent='¡Contrata ahora!'
    const boxTitle = document.createElement('h1');
        boxTitle.textContent='Déjanos tu número y te llamamos en segundos';
    const boxNumber = document.createElement('label');
        boxNumber.textContent='Si es celular sin el 044 o 045.'
    const boxInput = document.createElement('input');
        boxInput.type = "text"; boxInput.value = "Tu teléfono";
    const boxCheck = document.createElement('input');
        boxCheck.setAttribute("type", "checkbox");
    const boxAccept = document.createElement('p');
        boxAccept.textContent='He leído y acepto las políticas de privacidad.';
    const boxButton = document.createElement('button');
        boxButton.textContent = 'LLÁMAME';

mainDiv.append(backImg, internet, subText, cost, btn);
divSideBox.append(contrataForm, boxMain, boxTitle, boxNumber, boxInput, boxCheck, boxAccept, boxButton);

contrataDiv.append(NavBar(), mainDiv, divSideBox, TripleDouble(), Packages(), TripleDouble(), PackagesTwo(), Footer());
return contrataDiv;
}