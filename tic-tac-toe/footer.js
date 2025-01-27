import { ImageLink } from "./components.js";

const footer = document.getElementById('footer');
footer.setAttribute('style', 'display: flex; justify-content: center; align-items: center; height: 45px; color: var(--primary-color-darkest)');

const infoDiv = document.createElement('div');
infoDiv.textContent = "Designed & Created by Warren Pagsuguiron";

footer.appendChild(infoDiv);

// for some reason, infoDiv can't set attributes
const spacer = document.createElement('div');
spacer.setAttribute('style', 'margin: 0px 10px');

footer.appendChild(spacer);

const links = document.createElement('div');
infoDiv.setAttribute('style', 'display: flex;');

const instagram = ImageLink({ parent: links, src: './assets/mdi_instagram.png', onClick : () => {
    window.location.href = 'https://www.instagram.com/warren_wallis/'
} });
const github = ImageLink({ parent: links, src: './assets/mdi_github.png', onClick : () => {
    window.location.href = 'https://github.com/warrenwallis'
} });
const linkedin = ImageLink({ parent: links, src: './assets/mdi_linkedin.png', onClick : () => {
    window.location.href = 'https://www.linkedin.com/in/warrenwallis/'
} });
const email = ImageLink({ parent: links, src: './assets/ic_baseline-email.png', onClick : () => {
    window.location.href = 'mailto:wspagsuguiron@gmail.com'
} });

footer.appendChild(links);