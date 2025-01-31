const HeroSection = (props) => {
    const { parent } = props;

    const constructor = (() => {
        const headline = document.createElement('div');
        const subHeadline = document.createElement('div');
        parent.append(headline, subHeadline);

        headline.setAttribute('style', 'white-space: pre-line; font-size: 64px; margin-bottom: 15px');
        subHeadline.setAttribute('style', 'white-space: pre-line; font-size: 20px; margin-bottom: 133px');

        headline.textContent = 'Bold Flavors, \nGlobal Streets';
        subHeadline.textContent = 'Authentic street food from around the world, crafted with spice, \nsoul, and adventure in every bite.';
    })();
}

export default HeroSection;