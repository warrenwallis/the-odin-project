import AddTask from "./AddTask";
import Header from "./Header";
import Task from "./Task";

const List = (props) => {
    const { parent, list } = props;
    const { title, starred, tasks } = list;
    let [ searchText, setSearchText ] = [ '', (t) => searchText = t ];
    const container = document.createElement('div');
    const taskDiv = document.createElement('div');

    const setSearch = (t) => {
        setSearchText(t);
        taskDiv.innerHTML = ''
        Task({ parent: taskDiv, tasks, searchText });
    }

    const constructor = (() => {
        const header = Header({ parent: container, title, setSearch });
        container.append(taskDiv);
        Task({ parent: taskDiv, tasks, searchText });
        AddTask({ parent: container });
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; gap: 50px; width: 100%; height: 100%; margin-left: 50px; color: var(--pakistan-green)');
        taskDiv.setAttribute('style', 'overflow: scroll');
    })();
}

export default List;