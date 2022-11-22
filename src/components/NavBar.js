import { onNavigate } from '../main.js';

export const NavBar = () => {
const navBar = document.createElement('nav');
const logo = document.createElement('img');
    logo.src = '../assets/megacable.png';
const phone = document.createElement('img');
    phone.src = '../assets/phone.png';



    navBar.append(logo, phone);
    return navBar
}
