import homeContent from '../assets/home-content.png';
import HeroSection from "./HeroSection";
import CallToAction from "./CallToAction";

const Home = (props) => {
    const { parent } = props;

    const constructor = (() => {
        const container = document.createElement('div');
        const leftDiv = document.createElement('div');
        const rightDiv = document.createElement('div');
        const photo = document.createElement('img');
        rightDiv.append(photo);
        container.append(leftDiv, rightDiv);
        parent.append(container);

        container.setAttribute('style', 'display: flex; justify-content: space-between; width: 100%');
        leftDiv.setAttribute('style', 'padding: 77px 0px');
        rightDiv.setAttribute('style', 'border-radius: 10px;');
        photo.src = homeContent;

        const heroSection = HeroSection({ parent: leftDiv });
        const callToAction = CallToAction({ parent: leftDiv });
    })();
}

export default Home;