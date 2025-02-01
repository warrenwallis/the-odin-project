import information from '../assets/information.json';
import Gallery from './Gallery';
import InformationBanner from './OurInformation';

const About = (props) => {
    const { parent } = props;
    const { about } = information; 
    const container = document.createElement("div");

    const constructor = (() => {
        const ourInformation = document.createElement("div");
        const bottomInformation = document.createElement('div');
        const otherInformation = document.createElement('div');
        const gallery = document.createElement('div');
        bottomInformation.append(otherInformation, gallery);
        container.append(ourInformation, bottomInformation);
        // parent.append(container);

        container.setAttribute('style', 'margin-top: 25px');
        bottomInformation.setAttribute('style', 'display: flex; gap: 25px; width: 100%');
        otherInformation.setAttribute('style', 'width: 40%');
        gallery.setAttribute('style', 'flex: 1;');

        for (let [ title, description ] of Object.entries(about.our)) {
            InformationBanner({ parent: ourInformation,  title: `Our ${title.charAt(0).toUpperCase() + title.slice(1)}`, description: (() => {
                const desc = document.createElement('div');
                desc.textContent = description;

                return desc;
            })()});
        }
        InformationBanner({
            parent: otherInformation,
            title: 'Visit Us',
            description: (() => {
                const desc = document.createElement('div');
                const locationDiv = document.createElement('div');
                const hours = document.createElement('div');
                const locationTitle = document.createElement('span');
                const location = document.createElement('span');
                locationDiv.append(locationTitle, location);
                desc.append(locationDiv, hours);

                locationDiv.setAttribute('style', 'display: flex; justify-content: space-between; margin-bottom: 5px');
                hours.setAttribute('style', 'display: flex; flex-direction: column; gap: 2.5px');

                hours.textContent = 'Hours:';
                for (let [ title, description ] of Object.entries(about.location.hours)) {
                    const container = document.createElement('div');
                    const day = document.createElement('span');
                    const hour = document.createElement('span');
                    container.append(day, hour);
                    hours.append(container);

                    container.setAttribute('style', 'display: flex; justify-content: space-between; padding-left: 55px');

                    day.textContent = title + ':';
                    hour.textContent = description;
                }
                locationTitle.textContent = 'Location:';
                location.textContent = about.location.address;

                return desc;
            })()
        });
        InformationBanner({
            parent: otherInformation,
            title: 'Get in Touch',
            description: (() => {
                const Item = (props) => {
                    const { parent, title, description } = props;

                    const container = document.createElement('div');
                    const titleSpan = document.createElement('span');
                    const descriptionSpan = document.createElement('span');
                    container.append(titleSpan, descriptionSpan);
                    parent.append(container);

                    container.setAttribute('style', 'display: flex; justify-content: space-between');

                    titleSpan.textContent = title;
                    descriptionSpan.textContent = description;
                }

                const desc = document.createElement('div');
                desc.id = 'spacer'; // setAttrbute is not working

                for (const [ title, description ] of Object.entries(about.contact)) {
                    Item({ parent: desc, title: `${title.charAt(0).toUpperCase() + title.slice(1)}:`, description });
                }
                

                return desc;
            })()
        });
        InformationBanner({ parent: otherInformation, title: 'Join the Spice Squad!', description: (() => {
            const desc = document.createElement('div');

            desc.textContent = about.newsletter.description;

            return desc;
        })()});
        Gallery({ parent: gallery });
    })();

    return { container };
}

export default About;