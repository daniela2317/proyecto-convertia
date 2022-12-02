export const NavBar = () => {
const navBar = document.createElement('nav');
    navBar.className = '.d-inline-flex';

const phone = document.createElement('img');
    phone.className = 'p-2';
    phone.src = '../assets/phone.png';
const logo = document.createElement('img');
    logo.className = '.align-items-center';    
    logo.src = '../assets/megacable.png';
const pin = document.createElement('img');
    pin.className = 'p-2'; 
    pin.src = '../assets/alfiler.png';

    navBar.append(phone, logo, pin);
    return navBar;
}

