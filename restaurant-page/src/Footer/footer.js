import information from '../assets/information.json';
import Icon from './Icon';

const Footer = () => {
    const { footer } = information;
    const requireContext = require.context('../assets', false, /\.png$/);
    const images = {}

    requireContext.keys().forEach(element => {
        images[element] = requireContext(element);
    });
    
    const constructor = (() => {
        const footerDiv = document.getElementById('footer');
        const container = document.createElement('div');
        const name = document.createElement('span');
        const links = document.createElement('div');
        container.append(name, links);
        footerDiv.append(container);

        footerDiv.setAttribute('style', 'display: flex; align-items: end; flex: 1; height: 100%');
        container.setAttribute('style', 'display: flex; justify-content: center; align-items: center; width: 100%; margin-top: 50px; margin-bottom: 15px');
        name.setAttribute('style', 'font-size: 10px');

        name.textContent = 'Design and Created by Warren Pagsuguiron';
        for (let [ title, { img, link } ] of Object.entries(footer)) {
            Icon({ parent : links, img : images[img], link });
        }

    })();
}

export default Footer;