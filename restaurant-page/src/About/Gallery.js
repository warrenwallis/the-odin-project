import bar from '../assets/bar.png';
import restaurant from '../assets/restaurant.png';
import burger from '../assets/burger.png';
import stand from '../assets/stand.png';

const Gallery = (props) => {
    const { parent } = props;

    const constructor = (() => {
        const container = document.createElement('div');
        const one = document.createElement('img');
        const two = document.createElement('img');
        const three = document.createElement('img');
        const four = document.createElement('img');
        container.append(one, two, three, four);
        parent.append(container);
        
        container.setAttribute('style', 'display: grid; gap: 15px; grid-template-columns: repeat(3, 1fr); grid-auto-rows: minmax(150px, auto)');
        one.setAttribute('style', 'grid-column: 3/3; grid-row: 1/3; width: 100%; height: 100%; object-fit: cover; border-radius: 0 0 10px 0');
        two.setAttribute('style', 'grid-column: 1/3; grid-row: 1; width: 100%; height: 100%; object-fit: cover; border-radius: 10px 0 0 0');
        three.setAttribute('style', 'grid-column: 1/2; grid-row: 2/2; width: 100%; height: 100%; object-fit: cover');
        four.setAttribute('style', 'grid-column: 2/3; grid-row: 2/2; width: 100%; height: 100%; object-fit: cover');

        one.id = 'one';
        two.id = 'two';
        three.id = 'three';
        four.id = 'four';
    
        one.src = restaurant;
        two.src = bar;
        three.src = burger;
        four.src = stand;

    })();
}

export default Gallery;