export const PlayerLegend = (parent, id, name, tag, styles = '') => {
    const playerTag = document.createElement('div');

    const constructor = (() => {
        const container = document.createElement('div');
        container.setAttribute('style', `display: flex; background: var(--primary-color-darkest); color: var(--primary-color-lightest); padding: 15px 40px; border-radius: 15px; gap: 5px; width: 80px; height: 20px; font-size: 16px; ${styles}`);

        const playerHandle = document.createElement('div');
        container.textContent = `${name}`;
        container.appendChild(playerHandle);
        
        playerTag.textContent = `${tag}`;
        container.appendChild(playerTag);
        
        parent.appendChild(container);
    })();

    return { playerTag };
}

export const Score = (parent, id, name, score = 0, styles = '') => {
    const player = PlayerLegend(parent, id, name, score, styles);

    const updateScore = () => {
        player.playerTag.textContent = `${++score}`;
    }

    return { id, updateScore };
}

export const Button = (parent, id, content, action) => {

    const constructor = (() => {
        const button = document.createElement('button');
        button.setAttribute('style', 'display: flex; justify-content: center; background: var(--primary-color-lightest); color: var(--primary-color-darkest); padding: 15px 40px; border-radius: 15px; font-size: 16px;');
        button.id = id;
        button.textContent = content;
        button.addEventListener('click', action);

        parent.appendChild(button);
    })();
}