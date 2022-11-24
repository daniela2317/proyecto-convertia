export const Footer = () => {
    const footerContainer = document.createElement('footer');
    footerContainer.className= 'd-flex align-content-between flex-wrap';

    const divTerms = document.createElement('div');
        divTerms.className= 'd-flex';
    const logo = document.createElement('img');
        logo.className = 'mr-auto p-2';
        logo.src = '../assets/megacable.png';
    const terms = document.createElement('a');
        terms.className = 'p-2';
        terms.textContent = 'Terminos y Condiciones';
    const privacy = document.createElement('a');
        privacy.className = 'p-2';
        privacy.textContent = 'Aviso de Privacidad';
    const policy = document.createElement('a');
        policy.className = 'p-2';
        policy.textContent = 'Política y Seguridad';

    const lastFooter = document.createElement('div');
        lastFooter.className= 'd-flex align-content-end flex-wrap'
    const contact= document.createElement('p');
        contact.textContent = 'Para contratar déjanos tu número';
    const contactTwo= document.createElement('p');
        contactTwo.textContent = 'y te marcaremos en segundos.';
    const inputContact = document.createElement('input');
        inputContact.type = "text"; inputContact.value = "55 1234 5678";
    const checkFooter = document.createElement('input');
        checkFooter.setAttribute("type", "checkbox");
    const acceptFooter = document.createElement('p');
        acceptFooter.textContent='He leído y acepto las políticas de privacidad.';
    const button = document.createElement('button');
        button.textContent = 'SOLICITAR';

    divTerms.append(logo, terms, privacy, policy);
    lastFooter.append(contact, contactTwo, inputContact, checkFooter, acceptFooter, button);

    footerContainer.append(divTerms, lastFooter);
    return footerContainer; 
}