import information from '../assets/information.json';
import Tab from '../components/Tab';

const AllLists = (props) => {
    const { parent } = props;
    const { defaultLists } = information;

    const constructor = (() => {
        const container = document.createElement('div');
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; gap: 10px');

        container.textContent = 'All Lists';
        for (const { title } of defaultLists) {
            Tab({ parent: container, title: title, star: true, starred: true, styles: 'height: 60px' });
        }

    })()
}

export default AllLists;