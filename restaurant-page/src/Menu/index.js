import information from '../assets/information.json';
import MenuItem from './MenuItem';

const Menu = (props) => {
    const { parent } = props;
    const { menu } = information;
    const requireContext = require.context('../assets', false, /\.png$/);
    const images = {};

    requireContext.keys().forEach(element => {
        images[element] = requireContext(element);
    });

    const constructor = (() => {
        const container = document.createElement('div');
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; gap: 25px; width: 100%; margin-top: 25px');

        for (let item of menu.items) {
            MenuItem({ parent: container, item, images });
        }
        
    })();
}

export default Menu;