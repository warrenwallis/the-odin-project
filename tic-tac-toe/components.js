const playerLegend = (parent, id, name, tag) => {
    const playerTag = document.createElement('div');

    const constructor = (() => {
        const container = document.createElement('div');
        container.setAttribute('style', 'display: flex; flex-direction: col; background: var(--primary-color-darkest); color: var(--primary-color-lightest); padding: 15px 40px; border-radius: 15px; gap: 5px');

        const playerHandle = document.createElement('div');
        container.textContent = `${name}:`;
        container.appendChild(playerHandle);
        
        playerTag.textContent = `${tag}`;
        container.appendChild(playerTag);
        
        parent.appendChild(container);
    })();

    return { playerTag };
}

const Score = (parent, id, name, score = 0) => {
    const player = playerLegend(parent, id, name, score);

    const updateScore = () => {
        player.playerTag.textContent = `${++score}`;
    }

    return { id, updateScore };
}