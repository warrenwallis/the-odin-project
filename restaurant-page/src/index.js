import './styles.css'
import Home from './Home';
import Menu from './Menu';
import About from './About';
import NavBarLogic from './NavBar/logic';
// const home = Home({ parent: content });
// const menu = Menu({ parent: content });


const Top = (() => {
    const content = document.getElementById('content');
    const navBarLogic = new NavBarLogic();

    // const about = About({ parent: content });
})();