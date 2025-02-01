import homeContent from '../assets/home-content.png';
import HeroSection from "./HeroSection";
import CallToAction from "./CallToAction";

const Home = (props) => {
    const { parent, orderButton } = props;
    const container = document.createElement('div');

    const constructor = (() => {
        const leftDiv = document.createElement('div');
        const rightDiv = document.createElement('div');
        const photo = document.createElement('img');
        rightDiv.append(photo);
        container.append(leftDiv, rightDiv);
        // parent.append(container);

        container.setAttribute('style', 'display: flex; flex: 1; justify-content: space-between; width: 100%; margin-top: 75px');
        leftDiv.setAttribute('style', 'padding: 77px 0px');
        rightDiv.setAttribute('style', 'border-radius: 10px;');

        photo.src = homeContent;
        const heroSection = HeroSection({ parent: leftDiv });
        const callToAction = CallToAction({ parent: leftDiv, orderButton });
    })();

    return { container };
}

export default Home;