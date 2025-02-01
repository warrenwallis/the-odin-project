import orderNowIcon from '../assets/order-now-icon.png';

const CallToAction = (props) => {
    const { parent, orderButton } = props;

    const constructor = (() => {
        const button = document.createElement('button');
        const text = document.createElement('span');
        const iconSpan = document.createElement('span');
        const icon = document.createElement('img');
        iconSpan.append(icon);
        button.append(text, iconSpan);
        parent.append(button);
        
        button.setAttribute('style', 'display: flex; align-items: center; padding: 29px 62px; border-radius: 10px; border: 0px; background: var(--button-color); color: white; gap: 10px');
        button.addEventListener('click', orderButton);
        text.setAttribute('style', 'font-size: 32px');
        text.textContent = 'Order Now';
        icon.width = 45
        icon.src = orderNowIcon;
    })();
}


export default CallToAction;