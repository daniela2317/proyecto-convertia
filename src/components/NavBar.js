export const NavBar = () => {
const navBar = document.createElement('nav');
    navBar.className = 'd-flex justify-content-between';

const phone = document.createElement('img');
    phone.classList.add('phone-img');
    phone.src = '../assets/phone.png';
const logo = document.createElement('img');
    logo.classList.add('logo-img');
    logo.src = '../assets/megacable.png';
const pin = document.createElement('img');
    pin.classList.add('pin-img');
    pin.src = '../assets/alfiler.png';

    navBar.append(phone, logo, pin);
    return navBar;
}

