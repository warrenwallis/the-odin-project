import './styles.css'
import Home from './Home';
import Menu from './Menu';
import NavBarLogic from './NavBar/logic';

const navBarLogic = new NavBarLogic();

const content = document.getElementById('content');
// const home = Home({ parent: content });

const about = Menu({ parent: content });

console.log("working");