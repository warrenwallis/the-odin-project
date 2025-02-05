import Tab from "../components/Tab";

const Task = (props) => {
    const { parent, tasks, searchText } = props;
    let [ taskList, setTaskList ] = [ [], (l) => taskList = l ];
    const incomplete = document.createElement('div');
    const complete = document.createElement('div');
    const container = document.createElement('div');

    for (const task of tasks) {
        setTaskList([...taskList, task]);
    }

    const updateCheck = (index, value) => {
        taskList[index].completed = value;
        render();
    }

    const render = () => {
        // for (const { title, starred, completed, description, date, note } of taskList) {
        //     Tab({ parent: (() => completed ? complete : incomplete)(), check: true, checked: completed, title, star: true, starred, addDescription: true, description, date, note, styles: 'font-size: 24px; font-weight: var(--medium); height: 75px' });
        // }
        incomplete.innerHTML = '';
        complete.innerHTML = '';
        for (const [ index, { title, starred, completed, description, date, note } ] of taskList.entries()) {
            if (searchText === '') {
                Tab({ parent: (() => completed ? complete : incomplete)(), index, check: true, checked: completed, updateCheck: (index, value) => updateCheck(index, value), title, star: true, starred, addDescription: true, description, date, note, styles: 'font-size: 24px; font-weight: var(--medium); height: 75px'});
            }
            else if (title.toLowerCase().includes(searchText) || description.toLowerCase().includes(searchText)) {
                Tab({ parent: (() => completed ? complete : incomplete)(), index, check: true, checked: completed, updateCheck: (index, value) => updateCheck(index, value), title, star: true, starred, addDescription: true, description, date, note, styles: 'font-size: 24px; font-weight: var(--medium); height: 75px'});
            }
        }
    }

    const constructor = (() => {
        const completeTitle = document.createElement('div');
        container.append(incomplete, completeTitle, complete);
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; gap: 25px; width: 100%; overflow: scroll');
        completeTitle.setAttribute('style', 'font-size: 20px; font-weight: bold');
        incomplete.setAttribute('style', 'display: flex; flex-direction: column; gap: 10px');
        complete.setAttribute('style', 'display: flex; flex-direction: column; gap: 10px;');

        completeTitle.textContent = 'Completed';
    
        render();
    })();

    return container;
}

export default Task;