import Menu from './Menu';
import './styles.css'

console.log('working');

const App = (() => {
    const body = document.body;
    const menu = Menu({ parent: body });
})();