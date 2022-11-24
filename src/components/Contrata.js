import { onNavigate } from '../main.js';
import { NavBar } from './NavBar.js';
import { TripleDouble } from './TripleDoublePack.js';
import { Packages } from './Packages.js';
import { PackagesTwo } from './PackagesTwo.js';
import { Footer } from './Footer.js';

export const Contrata = () => {
    const contrataDiv = document.createElement('div');
    contrataDiv.classList.add('contrata-div');

    const mainDiv = document.createElement('div');
        mainDiv.className = 'align-baseline';
    const backImg = document.createElement('img');
        backImg.className = 'img-fluid';
        backImg.src = '../assets/drew-graham-PVyhz0wmHdo-unsplash.png';
    const internet = document.createElement('h1');
        internet.classList.add('internet');
        internet.textContent = 'Internet INIGUALABLE';
    const subText = document.createElement('h2');
        subText.classList.add('subtext');
        subText.textContent = 'TV Interactiva + Telefonía Fija';
    const cost = document.createElement('h3');
        cost.classList.add('cost');
        cost.textContent = 'Desde $449 al mes';
    const btn = document.createElement('button');
        btn.className = 'btn btn-primary'; 
        btn.textContent = ('LO QUIERO');

    const divSideBox = document.createElement('div');
        divSideBox.className = 'd-flex align-items-end flex-column';
    const contrataForm = document.createElement('div');
        contrataForm.className = 'd-flex align-items-end flex-column';
    const boxMain = document.createElement('p');
        boxMain.className = 'p-2';
        boxMain.textContent='¡Contrata ahora!'
    const boxTitle = document.createElement('p');
        boxTitle.className = 'p-2';
        boxTitle.textContent='Déjanos tu número y te llamamos en segundos';
    const boxNumber = document.createElement('label');
        boxNumber.className = 'p-2';
        boxNumber.textContent='Si es celular sin el 044 o 045.'
    const boxInput = document.createElement('input');
        boxInput.className = 'p-2';
        boxInput.type = "text"; boxInput.value = "Tu teléfono";
    const boxCheck = document.createElement('input');
        boxCheck.className = 'p-2';
        boxCheck.className = 'form-check-input';
        boxCheck.setAttribute("type", "checkbox");
    const boxAccept = document.createElement('p');
        boxAccept.className = 'p-2';
        boxAccept.textContent='He leído y acepto las políticas de privacidad.';
    const boxButton = document.createElement('button');
        boxButton.className = 'p-2';
        boxButton.textContent = 'LLÁMAME';

mainDiv.append(backImg, internet, subText, cost, btn);
divSideBox.append(contrataForm, boxMain, boxTitle, boxNumber, boxInput, boxCheck, boxAccept, boxButton);

contrataDiv.append(NavBar(), mainDiv, divSideBox, TripleDouble(), Packages(), TripleDouble(), PackagesTwo(), Footer());
return contrataDiv;
}