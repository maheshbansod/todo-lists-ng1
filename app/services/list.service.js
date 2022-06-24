
(function() {
    angular.module('myApp')
    .service('ListsService', [function () {

        const init_data = () => {
            return {
                lists: [
                    {
                        id: "0",
                        title: "Unlisted",
                        list:[
                            {
                                id: newId(),
                                title: getDefaultTaskTitle(),
                                is_done: false,
                            }
                        ],
                    },
                ]
            }
        };

        const LOCAL_STORAGE_DATA_KEY = 'todolist_data';

        const DEFAULT_TASK_TITLES = [
            "Pet your cat",
            "Worry about your future",
            "Buy groceries",
        ];
    
        const list_data = initListData();

        let service = {
            getLists: () => {
                return new Promise(r => r(list_data.map(list => {
                    return {
                        id: list.id,
                        title: list.title,
                    }
                })))
            },
            /**
             * Return a promise which resolves to the id of the newly created list
             * @param {new list} list 
             * @returns 
             */
            addList: (list) => {
                return new Promise((resolve, _reject) => {
                    let id = newId();
                    list_data.push({
                        id,
                        title: list.title,
                        list: [],
                    });
                    quickSave();
                    resolve(id);
                });
            },
            getList: (listId) => {
                return new Promise((resolve, _reject) => {
                    resolve(list_data.find(list => list.id === listId));
                })
            },
            addNewTask: (list) => {
                return new Promise((resolve, _reject)=> {
                    let id = newId();
                    let newItem = {
                        id,
                        title: getDefaultTaskTitle(),
                        is_done: false,
                    };
                    if(!list) {
                        // add to unlisted if no list assigned - makes me think I should've went with attribs as list of list instead.
                        let unlisted = list_data.find(list => list.id === "0");
                        unlisted.list.push(newItem);
                    } else {
                        list.list.push(newItem);
                    }
                    quickSave();
                    resolve(newItem);
                })
            },
            saveTask: (list_item) => {
                return new Promise(r => {
                    quickSave();
                    r({success: true})
                });
            },
            deleteTask: (list_item, list) => {
                return new Promise((r)=>{
                    list.list = list.list.filter(item => item.id !== list_item.id);
                    quickSave();
                    r(true);
                });
            },
        };

        function newId() {
            return Math.floor(Math.random()*100000).toString();
        }

        function getDefaultTaskTitle() {
            return DEFAULT_TASK_TITLES[Math.floor(Math.random()*DEFAULT_TASK_TITLES.length)];
        }
        async function quickSave() {
            saveAllToLocalStorage();
        }
        function saveAllToLocalStorage() {
            localStorage.setItem(LOCAL_STORAGE_DATA_KEY,JSON.stringify(list_data));
        }
        function loadFromLocalStorage() {
            let data = localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
            if(data)
                return JSON.parse(data);
            return null;
        }
        function initListData() {
            let data = loadFromLocalStorage();
            if(!data) {
                data = [...init_data().lists];
            }
            return data;
        }
        return service;
    }]);
})();