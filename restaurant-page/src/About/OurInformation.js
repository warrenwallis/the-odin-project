const InformationBanner = (props) => {
    const { parent, title, description } = props;

    const constructor = (() => {
        const container = document.createElement('div');
        const titleDiv = document.createElement('div');
        const descriptionDiv = description;
        container.append(titleDiv, descriptionDiv);
        parent.append(container);

        titleDiv.setAttribute('style', 'font-weight: var(--medium); font-size: 24px; margin-bottom: 15px');
        descriptionDiv.setAttribute('style', 'font-weight: var(--medium); font-size: 16px; margin-bottom: 30px');

        titleDiv.textContent = title;
    })();
}

export default InformationBanner;