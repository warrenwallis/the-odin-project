import './styles.css'
import Home from './Home';
import NavBarLogic from './NavBar/logic';

const navBarLogic = new NavBarLogic();

const content = document.getElementById('content');
const home = Home({ parent: content });

console.log("working");