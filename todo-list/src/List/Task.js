import Tab from "../components/Tab";

const Task = (props) => {
    const { parent, tasks } = props;
    let [ completeList, setCompleteList ] = [ [], (l) => completeList = l ];
    let [ incompleteList, setIncompleteList ] = [ [], (l) => incompleteList = l ];
    const incomplete = document.createElement('div');
    const complete = document.createElement('div');

    const render = () => {
        for (const { title, starred, completed, description, date, note } of incompleteList) {
            Tab({ parent: incomplete, check: true, checked: completed, title, star: true, starred, addDescription: true, description, date, note, styles: 'font-size: 24px; font-weight: var(--medium); height: 75px' });
        }
        for (const { title, starred, completed, description, date, note } of completeList) {
            Tab({ parent: complete, check: true, checked: completed, title, star: true, starred, addDescription: true, description, date, note, styles: 'font-size: 24px; font-weight: var(--medium); height: 75px' });
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
        for (const task of tasks) {
            const { completed } = task;

            if (completed) {
                setCompleteList([...completeList, task]);
            } else {
                setIncompleteList([...incompleteList, task]);
            }
        }

        render();
    })();
}

export default Task;