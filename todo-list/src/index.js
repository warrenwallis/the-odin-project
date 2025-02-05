import List from './List';
import Menu from './Menu';
import './styles.css'
import information from './assets/information.json'

console.log('working');

const App = (() => {
    const { defaultLists } = information;
    let [ showListIdx, setShowListIdx ] = [ 0, (listIdx) => showListIdx = listIdx ];
    const body = document.body;

    const render = () => {
        body.innerHTML = '';
        const menu = Menu({ parent: body, showListIdx, setShowListIdx, render });
        const list = List({ parent: body, list: defaultLists[showListIdx] });
    }

    const constructor = (() => {
        render();
    })();
})();