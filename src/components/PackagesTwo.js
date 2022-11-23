export const PackagesTwo = () => {

    const packagesDiv = document.createElement('div');

    const packOne = document.createElement('div');
    const channelsOne = document.createElement('p');
        channelsOne.textContent = 'Hasta 50 Mbps de velocidad+ Llamadas Ilimitadas';
    const wantBtnOne = document.createElement('button');
        wantBtnOne.classList.add('btn-want');
        wantBtnOne.textContent = 'LO QUIERO';

    const packTwo = document.createElement('div');
    const channelsTwo = document.createElement('p');
        channelsTwo.textContent = 'Hasta 100 Mbps de velocidad+ Llamadas Ilimitadas';
    const wantBtnTwo = document.createElement('button');
        wantBtnTwo.classList.add('btn-want');
        wantBtnTwo.textContent = 'LO QUIERO';

    const packThree = document.createElement('div');
    const channelsThree = document.createElement('p');
        channelsThree.textContent = 'Hasta 200 Mbps de velocidad+ Llamadas Ilimitadas';
    const wantBtnThree = document.createElement('button');
        wantBtnThree.classList.add('btn-want');
        wantBtnThree.textContent = 'LO QUIERO';

    const packFour = document.createElement('div');
    const channelsFour = document.createElement('p');
        channelsFour.textContent = 'Hasta 200 Mbps de velocidad+ Llamadas Ilimitadas';
    const wantBtnFour = document.createElement('button');
        wantBtnFour.classList.add('btn-want');
        wantBtnFour.textContent = 'LO QUIERO';
        
        packOne.append(channelsOne, wantBtnOne);
        packTwo.append(channelsTwo, wantBtnTwo);
        packThree.append(channelsThree, wantBtnThree);
        packFour.append(channelsFour, wantBtnFour);

        packagesDiv.append(packOne, packTwo, packThree, packFour);
        return packagesDiv;

};