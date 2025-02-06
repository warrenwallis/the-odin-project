import information from '../assets/information.json';
import Tab from '../components/Tab';

const AllLists = (props) => {
    const { parent, showListIdx, setShowListIdx, render, searchText } = props;
    const { defaultLists } = information;
    const container = document.createElement('div');

    const constructor = (() => {
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; gap: 10px');

        container.textContent = 'All Lists';
        for (const [ idx, { title }] of defaultLists.entries()) {
            if (searchText === '') {
                Tab({ parent: container, title: title, addDescription: false, star: true, starred: true, styles: `height: 60px; ${idx == showListIdx ? 'background: var(--dark-moss-green)' : ''}`, showListIdx, idx, setShowListIdx, render });
            } else if (title.toLowerCase().includes(searchText)) {
                Tab({ parent: container, title: title, addDescription: false, star: true, starred: true, styles: `height: 60px; ${idx == showListIdx ? 'background: var(--dark-moss-green)' : ''}`, showListIdx, idx, setShowListIdx, render });
            }
        }
    })()

    return container;
}

export default AllLists;