class LogListController {
    constructor() {
        "ngInject";
        this.displayCollection = [].concat(this.logs);
        this.itemsByPage = 10;
        this.getters = {
            time: function(row) {
                return new Date(row.time);
            }
        };
        this.exportListName = "System logs";
        this.toFormat = function(r) {
            return r.map(function(item) {
                let log = {
                    "User id": item.userid,
                    "Name": item.userName,
                    "Activity": item.activity,
                    "Time": item.time,
                    "License": item.license
                };
                return log;
            });
        };
    }
}

export default LogListController;
