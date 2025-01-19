const myLibrary = [];

function Book(title, author, numPages, hasRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.hasRead = hasRead;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.hasRead ? 'has read' : 'not read yet'}`;
    }
}

const container = document.querySelector("#container");

function display() {
    container.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.setAttribute('style', 'width: 150px; height: 200px; color: black; padding: 6px; border: 1px solid brown');
        
        const title = document.createElement('div');
        title.setAttribute('style', 'font-size: 24px');
        title.textContent = myLibrary[i].title;
        div.appendChild(title);
    
        const author = document.createElement('div');
        author.textContent = `by ${myLibrary[i].author}`;
        div.appendChild(author);
    
        const numPages = document.createElement('div');
        numPages.setAttribute('style', 'font-size: 14px; margin-top: 12px');
        numPages.textContent = `${myLibrary[i].numPages} pages`;
        div.appendChild(numPages);
        
        const hasRead = document.createElement('div');
        hasRead.setAttribute('style', 'font-size: 12px');
        hasRead.textContent = `Read: ${myLibrary[i].hasRead}`;
        div.appendChild(hasRead);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.setAttribute('style', 'display: flex; flex-direction: column; justify-content: flex-end; flex: 1');
        div.appendChild(buttonsDiv);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            display();
        });
        buttonsDiv.appendChild(deleteButton);

        const readButton = document.createElement('button');
        readButton.textContent = (myLibrary[i].hasRead) ? 'change to \"not read\"' : 'change to \"read\"';
        readButton.addEventListener('click', () => {
            myLibrary[i].hasRead = !myLibrary[i].hasRead;
            display();
        });
        buttonsDiv.appendChild(readButton);
    
    
        container.appendChild(div);
    }
}

function addBookToLibrary(title, author, numPages, hasRead) {
    let curr = new Book(title, author, numPages, hasRead);

    myLibrary.push(curr);
    display();
}

addBookToLibrary('Eragon', 'Christopher Paolini', 528, true);
addBookToLibrary('Eldest', 'Christopher Paolini', 681, true);
addBookToLibrary('Brisingr', 'Christopher Paolini', 816, true);
addBookToLibrary('Inheritance', 'Christopher Paolini', 896, true);
addBookToLibrary('The 4-Hour Workweek', 'Timothy Ferris', 426, false);

const body = document.body;

const newBookButton = document.createElement('button');
const dialog = document.querySelector('dialog');
newBookButton.setAttribute('style', 'width: 100px; height: 50px');
newBookButton.textContent = 'New Book';
newBookButton.addEventListener('click', () => {
    dialog.showModal();
});
body.appendChild(newBookButton);

const closeModalButton = document.querySelector('#closeModalButton');
closeModalButton.addEventListener('click', () => {
    dialog.close();
});

const addButton = document.querySelector('#addBook');
addButton.addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.getElementsByName('title')[0].value;
    const author = document.getElementsByName('author')[0].value;
    const numPages = document.getElementsByName('numPages')[0].value;
    const hasRead = document.getElementsByName('hasRead')[0].checked;
    const form = document.getElementById('modalForm');

    addBookToLibrary(title, author, numPages, hasRead);
    form.reset();
    dialog.close();

    console.log(myLibrary);
});

