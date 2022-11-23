import { Home } from "./components/Home.js";
import { Contrata } from "./components/Contrata.js";

const rootDiv = document.getElementById('root');

const routes = {
    '/home': Home,
    '/contrata-hoy' : Contrata,
};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {}, 
        pathname, 
        window.location.origin + pathname,
    );
    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[pathname]());
};
window.onpopstate = () => {
    rootDiv.appendChild(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());




