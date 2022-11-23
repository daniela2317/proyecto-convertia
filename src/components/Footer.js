export const Footer = () => {
    const footerContainer = document.createElement('footer');

    const divTerms = document.createElement('div');
    const logo = document.createElement('img');
        logo.src = '../assets/megacable.png';
    const terms = document.createElement('a');
        terms.textContent = 'Terminos y Condiciones';
    const privacy = document.createElement('a');
        privacy.textContent = 'Aviso de Privacidad';
    const policy = document.createElement('a');
        policy.textContent = 'Política y Seguridad';

    const lastFooter = document.createElement('div');
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