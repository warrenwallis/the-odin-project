const Icon = (props) => {
    const { parent, img, link } = props;

    const constructor = (() => {
        const button = document.createElement('button');
        const icon = document.createElement('img');
        button.append(icon);
        parent.append(button);

        button.setAttribute('style', 'border: 0; background: white');
        button.addEventListener('click', () => window.location.href = link);
        icon.setAttribute('style', 'object-fit: fill; width: 18px; height: 18px');

        icon.src = img;
    })();
}

export default Icon;