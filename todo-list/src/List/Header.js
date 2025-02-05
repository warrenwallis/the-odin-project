import SearchBar from "../components/SearchBar";
import Star from "../components/Star";

const Header = (props) => {
    const { parent, title, starred } = props;

    const constructor = (() => {
        const container = document.createElement('div');
        const titleSpan = document.createElement('span');
        container.append(titleSpan);
        const search = SearchBar({ parent: container, styles: 'width: 33%; margin-right: 10px' });
        const star = Star({ parent: container, starred, green: true, styles: 'width: 30px'});
        parent.append(container);

        container.setAttribute('style', 'display: flex; align-items: center; width: 100%');
        titleSpan.setAttribute('style', 'font-size: 48px; font-weight: bold; width: 50%');

        titleSpan.textContent = title;
    })();
}

export default Header;