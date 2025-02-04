import AllLists from "./AllLists";
import Footer from "./Footer";
import QuickLinks from "./QuickLinks";
import SearchBar from "./SearchBar";

const Menu = (props) => {
    const { parent } = props;

    const constructor = (() => {
        const menu = document.createElement('div');
        const appTitle = document.createElement('div');
        menu.append(appTitle);
        const searchBar = SearchBar({ parent: menu });
        const quickLinks = QuickLinks({ parent: menu });
        const allLists = AllLists({ parent: menu });
        const footer = Footer({ parent: menu });
        parent.append(menu);

        menu.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; height: 100%; width: 15%; padding: 0px 29px; gap: 35px; color: var(--pakistan-green); font-weight: var(--medium); font-size: 18px');
        appTitle.setAttribute('style', 'font-size: 36px; font-weight: bold');
        appTitle.textContent = 'Todo List';
    })();
}

export default Menu;