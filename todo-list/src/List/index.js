import Header from "./Header";
import Task from "./Task";

const List = (props) => {
    const { parent, list } = props;
    const { title, starred, tasks } = list;

    const constructor = (() => {
        const container = document.createElement('div');
        const header = Header({ parent: container, title });
        const task = Task({ parent: container, tasks });
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; gap: 50px; width: 100%; height: 100%; margin-left: 50px; color: var(--pakistan-green)');
    })();
}

export default List;