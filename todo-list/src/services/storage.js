import information from '../assets/information.json';

const ALL_LISTS = 'allLists';
const LIST_IDX = 'listIdx';

export const checkStorage = () => {
    () => {
        try {
            console.log('Trying to use localstorage');
            const storage = window.localStorage;
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            console.log('Can use localstorage');
            return true;
        } catch (e) {
            console.log('Cannot use localstorage', 'Using test data instead');
            return false;
        }
    }
}

export const setLists = (lists) => {
    const storage = window.localStorage;

    storage.setItem(ALL_LISTS, JSON.stringify(lists));
}

export const getAllLists = () => {
    const storage = window.localStorage;

    return JSON.parse(storage.getItem(ALL_LISTS));
}

export const getList = () => {
    const lists = getAllLists();
    const idx = getListIdx();

    return lists[idx];
}

export const getListIdx = () => {
    const storage = window.localStorage;

    return Number(storage.getItem(LIST_IDX));
}

export const setListIdx = (idx) => {
    const storage = window.localStorage;

    storage.setItem(LIST_IDX, idx);
}