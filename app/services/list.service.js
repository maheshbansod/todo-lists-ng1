
(function() {
    angular.module('myApp')
    .service('ListsService', [function () {
        let service = {};
        service.getLists = () => {
            return new Promise(r => r(MOCK_LISTS_DATA.lists.map(list => {
                return {
                    id: list.id,
                    title: list.title,
                }
            })))
        };
        return service;
    }])

    const MOCK_LISTS_DATA = {
        lists: [
            {
                id: "0",
                title: "Unlisted",
                list:[],
            },
        ]
    };
})();