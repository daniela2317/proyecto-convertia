    export const PackagesTwo = () => {

    const packagesDiv = document.createElement('div');
        packagesDiv.className = '.flex-column';

    const packOne = document.createElement('div');
        packOne.className = 'd-flex justify-content-around';
        packOne.classList.add('packages');
    const channelsOne = document.createElement('p');
        channelsOne.classList.add('channels');
        channelsOne.textContent = 'Hasta 50 Mbps de velocidad+ Llamadas Ilimitadas';
    const wantBtnOne = document.createElement('button');
        wantBtnOne.className = 'button-want';
        wantBtnOne.textContent = 'LO QUIERO';

    const packTwo = document.createElement('div');
        packTwo.className = 'd-flex justify-content-around';
        packTwo.classList.add('packages');
    const channelsTwo = document.createElement('p');
        channelsTwo.classList.add('channels');
        channelsTwo.textContent = 'Hasta 100 Mbps de velocidad+ Llamadas Ilimitadas';
    const wantBtnTwo = document.createElement('button');
        wantBtnTwo.className = 'button-want';
        wantBtnTwo.textContent = 'LO QUIERO';

    const packThree = document.createElement('div');
        packThree.className = 'd-flex justify-content-around';
        packThree.classList.add('packages');
    const channelsThree = document.createElement('p');
        channelsThree.classList.add('channels');
        channelsThree.textContent = 'Hasta 200 Mbps de velocidad+ Llamadas Ilimitadas';
    const wantBtnThree = document.createElement('button');
        wantBtnThree.className = 'button-want';
        wantBtnThree.textContent = 'LO QUIERO';

    const packFour = document.createElement('div');
        packFour.className = 'd-flex justify-content-around';
        packFour.classList.add('packages');
    const channelsFour = document.createElement('p');
        channelsFour.classList.add('channels');
        channelsFour.textContent = 'Hasta 200 Mbps de velocidad+ Llamadas Ilimitadas';
    const wantBtnFour = document.createElement('button');
        wantBtnFour.className = 'button-want';
        wantBtnFour.textContent = 'LO QUIERO';
        
        packOne.append(channelsOne, wantBtnOne);
        packTwo.append(channelsTwo, wantBtnTwo);
        packThree.append(channelsThree, wantBtnThree);
        packFour.append(channelsFour, wantBtnFour);

        packagesDiv.append(packOne, packTwo, packThree, packFour);
        return packagesDiv;

};