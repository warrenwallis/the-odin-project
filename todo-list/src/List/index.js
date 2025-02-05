import Header from "./Header";
import Task from "./Task";

const List = (props) => {
    const { parent, list } = props;
    const { title, starred, tasks } = list;
    let [ searchText, setSearchText ] = [ '', (t) => searchText = t ];
    const container = document.createElement('div');
    let header;
    let task;

    const setSearch = (t) => {
        setSearchText(t);
        task.remove();
        task = Task({ parent: container, tasks, searchText });
    }

    const constructor = (() => {
        header = Header({ parent: container, title, setSearch });
        task = Task({ parent: container, tasks, searchText });
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; gap: 50px; width: 100%; height: 100%; margin-left: 50px; color: var(--pakistan-green)');
    })();
}

export default List;