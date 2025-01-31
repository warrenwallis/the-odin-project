const MenuItem = (props) => {
    const { parent, item, images } = props;
    const photoSrc = './' + item.name.toLowerCase().replaceAll(' ', '-') + '.png';

    const constructor = (() => {
        const container = document.createElement('div');
        const photoDiv = document.createElement('div');
        const infoDiv = document.createElement('div');
        const photo = document.createElement('img');
        const namePrice = document.createElement('div');
        const description = document.createElement('div');
        const name = document.createElement('span');
        const price = document.createElement('span');
        photoDiv.append(photo);
        infoDiv.append(namePrice, description);
        namePrice.append(name, price);
        container.append(photoDiv, infoDiv);
        parent.append(container);

        container.setAttribute('style', 'display: flex; justify-content: width: 100%; gap: 25px');
        photoDiv.setAttribute('style', 'border-radius: 10px 0 0 10px; overflow: hidden');
        infoDiv.setAttribute('style', 'flex: 1; padding: 25px 0');
        photo.setAttribute('style', 'height: 100%; object-cover: cover');
        namePrice.setAttribute('style', 'display: flex; justify-content: space-between; font-weight: var(--semi-bold); font-size: 24px; margin-bottom: 25px');
        description.setAttribute('style', 'font-size: 16px');

        photo.src = images[photoSrc];
        description.textContent = item.description;
        name.textContent = item.name;
        price.textContent = item.price;
    })();
}

export default MenuItem;