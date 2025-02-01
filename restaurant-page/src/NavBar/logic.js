/*
The reason why I did not create the NavBar as its own component is due to the
instructions given by the assigment. It specifically asked to create the buttons
in HTML, therefore, logic for rendering will be handled here.

I will be practicing classes here, since that is what was taught preceding this
project
*/

import Home from "../Home";
import Menu from "../Menu";
import About from "../About";

class NavBarLogic {
    #navigations = ['homeNav', 'menuNav', 'aboutNav'];
    #content = document.getElementById('content');
    #contents = {
        'homeNav' : Home({ parent: this.#content, orderButton: () => {
            this.setCurrNav('menuNav');
            this.#changeView();
        } }),
        'menuNav' : Menu({ parent: this.#content }),
        'aboutNav' : About({ parent: this.#content })
    }
    currNav = 'homeNav';

    #changeView() {
        for (let navId of this.#navigations) {
            const nav = document.getElementById(navId);

            if (this.currNav != navId) {
                nav.style.textDecoration = 'none';
            }
        }

        const selectedNav = document.getElementById(this.currNav);
        selectedNav.style.textDecoration = 'underline';

        this.#content.innerHTML = '';
        this.#content.append(this.#contents[this.currNav].container);
;    }

    constructor() {
        this.#changeView();

        const logoButton = document.getElementById('logo');
        logoButton.addEventListener('click', () => {
            this.currNav = 'homeNav';
            this.#changeView()
        });

        const homeButton = document.getElementById('homeNav');
        homeButton.addEventListener('click', () => {
            this.currNav = 'homeNav';
            this.#changeView()
        });

        const menuButton = document.getElementById('menuNav');
        menuButton.addEventListener('click', () => {
            this.currNav = 'menuNav';
            this.#changeView()
        });

        const aboutButton = document.getElementById('aboutNav');
        aboutButton.addEventListener('click', () => {
            this.currNav = 'aboutNav';
            this.#changeView()
        });
    }

    setCurrNav(navId) {
        this.currNav = navId;
    }

    get content() {
        return this.content;
    }
}

export default NavBarLogic;