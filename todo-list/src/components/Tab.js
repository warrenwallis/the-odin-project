import checkedStar from '../assets/checked-star.png';
import uncheckedStar from '../assets/unchecked-star.png';

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

    const StarDiv = (props) => {
        const { parent } = props;

        const constructor = (() => {
            const img = document.createElement('img');
            parent.append(img);

            img.setAttribute('style', 'width: 20px');

            if (starred) {
                img.src = checkedStar;
            } else {
                img.src = uncheckedStar;
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
            const starDiv = document.createElement('div');
            container.append(starDiv);

            starDiv.setAttribute('style', 'display: flex; align-items: center; object-fit: cover');

            StarDiv({ parent: starDiv });
        }
        parent.append(container);

        container.setAttribute('style', `display: flex; justify-content: space-between; background: var(--pakistan-green); color: var(--cornsilk); padding: 6px 10px; border-radius: 5px; font-weight: var(--medium); ${styles}`);
        informationDiv.setAttribute('style', 'display: flex; flex-direction: column; flex: 1; justify-content: center');

        InformationDiv({ parent : informationDiv });
    })();
}

export default Tab;