import List from './List';
import Menu from './Menu';
import './styles.css'
import information from './assets/information.json'

console.log('working');

const App = (() => {
    const { defaultLists } = information;

    const body = document.body;
    const menu = Menu({ parent: body });
    const list = List({ parent: body, list: defaultLists[0] });
})();