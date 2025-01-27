const footer = document.getElementById('footer');
footer.setAttribute('style', 'display: flex; justify-content: center; align-items: center; height: 45px');

const info = document.createElement('div');
info.setAttribute('style', 'color: vars(--primary-color-darkest);')
info.textContent = "Designed & Created by Warren Pagsuguiron";

footer.appendChild(info);
