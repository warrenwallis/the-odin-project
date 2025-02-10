import List from './List';
import Menu from './Menu';
import './styles.css'
import information from './assets/information.json'
import * as storageService from './services/storage';

console.log('working');

const App = (() => {
    const { defaultLists } = information;
    let [ showListIdx, setShowListIdx ] = [ 0, (listIdx) => showListIdx = listIdx ];
    const body = document.body;

    const render = () => {
        body.innerHTML = '';
        const menu = Menu({ parent: body, setShowListIdx, render });
        const list = List({ parent: body });
    }

    const constructor = (() => {
        storageService.setLists(defaultLists);
        storageService.setListIdx(0);   

        render();
    })();
})();