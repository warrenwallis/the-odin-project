import Star from './Star';

const Tab = (props) => {
    const { parent, check, checked, title, star, starred, description, date, note, styles } = props;

    const InformationDiv = (props) => {
        const { parent } = props;

        const constructor = (() => {
            const titleSpan = document.createElement('span');
            const descriptionSpan = document.createElement('span');
            const extraDiv = document.createElement('div');
            parent.append(titleSpan, descriptionSpan, extraDiv);

            extraDiv.setAttribute('style', 'display: flex');
            titleSpan.setAttribute('style', 'font-size: 12px');

            titleSpan.textContent = title;
            descriptionSpan.textContent = description ?? '';
            if (date) {
                const dateSpan = document.createElement('span');
                extraDiv.append(dateSpan);
                dateSpan.textContent = date;
            }
            if (note) {
                const noteSpan = document.createElement('span');
                extraDiv.append(noteSpan);
                noteSpan.textContent = note;
            }
        })();
    }

    const constructor = (() => {
        const container = document.createElement('div');
        if (check) {
            const checkDiv = document.createElement('div');
            container.append(checkDiv);
        }
        const informationDiv = document.createElement('div');
        container.append(informationDiv);
        if (star) {
            Star({ parent: container, starred });
        }
        parent.append(container);

        container.setAttribute('style', `display: flex; justify-content: space-between; background: var(--pakistan-green); color: var(--cornsilk); padding: 6px 10px; border-radius: 5px; font-weight: var(--medium); ${styles}`);
        informationDiv.setAttribute('style', 'display: flex; flex-direction: column; flex: 1; justify-content: center');

        InformationDiv({ parent : informationDiv });
    })();
}

export default Tab;