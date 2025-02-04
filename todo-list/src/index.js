import List from './List';
import Menu from './Menu';
import './styles.css'

console.log('working');

const App = (() => {
    const body = document.body;
    const menu = Menu({ parent: body });
    const list = List({ parent: body, title: 'Personal' });
})();