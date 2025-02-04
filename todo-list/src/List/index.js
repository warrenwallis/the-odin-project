import Header from "./Header";

const List = (props) => {
    const { parent, title } = props;

    const constructor = (() => {
        const list = document.createElement('div');
        const header = Header({ parent: list, title });
        parent.append(list);

        list.setAttribute('style', 'display: flex; flex-direction: column; width: 100%; height: 100%');
    })();
}

export default List;