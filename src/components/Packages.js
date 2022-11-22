export const Packages = () => {

    const packagesDiv = document.createElement('div');

    const packOne = document.createElement('div');
    const imgOne = document.createElement('img');
        imgOne.src = '../assets/Imagen 1.png';
    const channelsOne = document.createElement('p');
        channelsOne.textContent = '+ 80 Canales + 50 Canales HD';
    const wantBtnOne = document.createElement('button');
        wantBtn.classList.add('btn-want');
        wantBtn.textContent = 'LO QUIERO';

    const packTwo = document.createElement('div');
    const imgTwo = document.createElement('img');
        imgTwo.src = '../assets/Imagen 2.png';
    const channelsTwo = document.createElement('p');
        channelsTwo.textContent = '+ 120 Canales + 90 Canales HD';
    const wantBtnTwo = document.createElement('button');
        wantBtnTwo.classList.add('btn-want');
        wantBtnTwo.textContent = 'LO QUIERO';

    const packThree = document.createElement('div');
    const imgThree = document.createElement('img');
        imgThree.src = '../assets/Imagen 3.png';
    const channelsThree = document.createElement('p');
        channelsThree.textContent = '+ 120 Canales + 90 Canales HD';
    const wantBtnThree = document.createElement('button');
        wantBtnThree.classList.add('btn-want');
        wantBtnThree.textContent = 'LO QUIERO';

    const packFour = document.createElement('div');
    const imgFour = document.createElement('img');
        imgFour.src = '../assets/Imagen 4.png';
    const channelsFour = document.createElement('p');
        channelsFour.textContent = '+ 120 Canales + 90 Canales HD';
    const wantBtnFour = document.createElement('button');
        wantBtnFour.classList.add('btn-want');
        wantBtnFour.textContent = 'LO QUIERO';

    const packXviewOne = document.createElement('div');
    const xviewOne = document.createElement('p');
        xviewOne.textContent = 'XVIEW TOTAL 200';
    const imgXviewOne = document.createElement('img');
        imgXviewOne.src = '../assets/Imagen 4.png';
    const xviewChanlsOne = document.createElement('p');
        xviewChanlsOne.textContent = '+ 80 Canales + 50 Canales HD';
    const wantBtnFive = document.createElement('button');
        wantBtnFive.classList.add('btn-want');
        wantBtnFive.textContent = 'LO QUIERO';

    const packXviewTwo = document.createElement('div');
    const xviewTwo = document.createElement('p');
        xviewTwo.textContent = 'XVIEW TOTAL 350';
    const imgXviewTwo = document.createElement('img');
        imgXviewTwo.src = '../assets/Imagen 5.png';
    const xviewChanlsTwo = document.createElement('p');
        xviewChanlsTwo.textContent = '+ 80 Canales + 50 Canales HD';
    const wantBtnSix = document.createElement('button');
        wantBtnSix.classList.add('btn-want');
        wantBtnSix.textContent = 'LO QUIERO';

    const packXviewThree = document.createElement('div');
    const xviewThree = document.createElement('p');
        xviewThree.textContent = 'XVIEW TOTAL 500';
    const imgXviewThree = document.createElement('img');
        imgXviewThree.src = '../assets/Imagen 6.png';
    const xviewChanlsThree = document.createElement('p');
        xviewChanlsThree.textContent = '+ 80 Canales + 50 Canales HD';
    const wantBtnSeven = document.createElement('button');
        wantBtnSeven.classList.add('btn-want');
        wantBtnSeven.textContent = 'LO QUIERO';

    const packXviewFour = document.createElement('div');
    const xviewFour = document.createElement('p');
        xviewFour.textContent = 'XVIEW TOTAL 1 GB';
    const imgXviewFour = document.createElement('img');
        imgXviewFour.src = '../assets/Imagen 7.png';
    const xviewChanlsFour = document.createElement('p');
        xviewChanlsFour.textContent = '+ 80 Canales + 50 Canales HD';
    const wantBtnEight = document.createElement('button');
        wantBtnEight.classList.add('btn-want');
        wantBtnEight.textContent = 'LO QUIERO';

        packOne.append(imgOne, channelsOne, wantBtnOne);
        packTwo.append(imgTwo, channelsTwo, wantBtnTwo);
        packThree.append(imgThree, channelsThree, wantBtnThree);
        packFour.append(imgFour, channelsFour, wantBtnFour);
        packXviewOne.append(xviewOne, imgXviewOne, xviewChanlsOne, wantBtnFive);
        packXviewTwo.append(xviewTwo, imgXviewTwo, xviewChanlsTwo, wantBtnSix);
        packXviewThree.append(xviewThree, imgXviewThree, xviewChanlsThree, wantBtnSeven);
        packXviewFour.append(xviewFour, imgXviewFour, xviewChanlsFour, wantBtnEight);

        packagesDiv.append(packOne, packTwo, packThree, packFour, packXviewOne, packXviewTwo, packXviewThree, packXviewFour);
        return packagesDiv;
}