export const NavBar = () => {

const navBar = document.createElement('nav');
const phone = document.createElement('img');
    phone.src = '../assets/phone.png';
    phone.alt = 'phone';
const logo = document.createElement('img');
    logo.src = '../assets/megacable.png';
const pin = document.createElement('img');
    pin.src = '../assets/alfiler.png';

    navBar.append(phone, logo, pin);
    return navBar;
}

