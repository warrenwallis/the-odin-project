import SearchBar from "../components/SearchBar";
import Star from "../components/Star";

const Header = (props) => {
    const { parent, title, starred, setSearch } = props;
    const container = document.createElement('div');

    const constructor = (() => {
        const titleSpan = document.createElement('span');
        const interactives = document.createElement('div');
        const search = SearchBar({ parent: interactives, setSearch, styles: 'margin-right: 10px' });
        const star = Star({ parent: interactives, starred, green: true, styles: 'width: 30px'});
        container.append(titleSpan);
        container.append(interactives);
        parent.append(container);

        container.setAttribute('style', 'display: flex; justify-content: space-between; align-items: center; width: 100%');
        interactives.setAttribute('style', 'display: flex; flex: 1')
        titleSpan.setAttribute('style', 'font-size: 48px; font-weight: bold; width: 50%');

        titleSpan.textContent = title;
    })();

    return container;
}

export default Header;