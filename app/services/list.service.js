
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
            }
        };

        function newId() {
            return Math.floor(Math.random()*1000).toString();
        }
        return service;
    }]);
})();