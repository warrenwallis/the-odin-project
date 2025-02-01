import './styles.css'
import Home from './Home';
import Menu from './Menu';
import About from './About';
import NavBarLogic from './NavBar/logic';

const navBarLogic = new NavBarLogic();

const content = document.getElementById('content');
// const home = Home({ parent: content });
const menu = Menu({ parent: content });
// const about = About({ parent: content });

console.log("working");