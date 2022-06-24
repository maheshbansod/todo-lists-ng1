
(function() {
    angular.module('myApp')
    .service('ListsService', [function () {

        const MOCK_LISTS_DATA = {
            lists: [
                {
                    id: "0",
                    title: "Unlisted",
                    list:[],
                },
            ]
        };

        const DEFAULT_TASK_TITLES = [
            "Pet your cat",
            "Worry about your future",
            "Buy groceries",
        ];
    
        const list_data = [...MOCK_LISTS_DATA.lists];

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
                        state: 'initial',
                    };
                    if(!list) {
                        // add to unlisted if no list assigned - makes me think I should've went with attribs as list of list instead.
                        let unlisted = list_data.find(list => list.id === "0");
                        unlisted.list.push(newItem);
                    } else {
                        list.list.push(newItem);
                    }
                    resolve(newItem);
                })
            },
            saveTask: (list_item) => {
                return new Promise(r => r({success: true}));
            },
            deleteTask: (list_item, list) => {
                return new Promise((r)=>{
                    list.list = list.list.filter(item => item.id !== list_item.id);
                    r(true);
                });
            }
        };

        function newId() {
            return Math.floor(Math.random()*100000).toString();
        }

        function getDefaultTaskTitle() {
            return DEFAULT_TASK_TITLES[Math.floor(Math.random()*DEFAULT_TASK_TITLES.length)];
        }
        return service;
    }]);
})();