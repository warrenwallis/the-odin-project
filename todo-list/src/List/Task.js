import Tab from "../components/Tab";

const Task = (props) => {
    const { parent, tasks } = props;
    let [ taskList, setTaskList ] = [ [], (l) => taskList = l ];
    const incomplete = document.createElement('div');
    const complete = document.createElement('div');

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
            console.log(index, title, completed);
            Tab({ parent: (() => completed ? complete : incomplete)(), index, check: true, checked: completed, updateCheck: (index, value) => updateCheck(index, value), title, star: true, starred, addDescription: true, description, date, note, styles: 'font-size: 24px; font-weight: var(--medium); height: 75px'});
        }
    }

    const constructor = (() => {
        const container = document.createElement('div');
        container.append(incomplete, complete);
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; gap: 25px; width: 100%');
        incomplete.setAttribute('style', 'display: flex; flex-direction: column; gap: 10px');
        complete.setAttribute('style', 'display: flex; flex-direction: column; gap: 10px; font-size: 20px; font-weight: bold');

        complete.textContent = 'Completed';
    
        render();
    })();
}

export default Task;