class ReportsFormController {
    constructor($scope) {
        "ngInject";
        this.isFilterApplied = false;
        this.allReports = [
            {
                reportName: "Songs by City Report",
                sharedReport: "Y",
                lastModified: "08/09/2017",
                lastRan: "02/11/2017",
                dataset: "MediaMelt",
                url: "songSalesByCity"
            },
            /*{
                reportName: "Date over date song comparison report",
                sharedReport: "N",
                lastModified: "08/08/2017",
                lastRan: "02/11/2017",
                dataset: "MediaMelt",
                url: "dateOverDateSong"
            },*/
            {
                reportName: "Songs sales by territory / territory group report",
                sharedReport: "Y",
                lastModified: "06/05/2017",
                lastRan: "12/05/2017",
                dataset: "Tableau - Historical",
                url: "songSalesByTerritory"
            },
            {
                reportName: "Songs Comparison Date Over Date Report",
                sharedReport: "Y",
                lastModified: "08/11/2017",
                lastRan: "02/11/2017",
                dataset: "MediaMelt",
                url: "dateOverDateMultiple"
            },
            {
                reportName: "Songs by Date Range comparison report",
                sharedReport: "N",
                lastModified: "08/09/2017",
                lastRan: "02/05/2017",
                dataset: "Tableau - Historical",
                url: "songOverSong"
            }
        ];
        this.displayCollection = [].concat(this.allReports);

        this.myReports = [
            {
                reportName: "Percent of retail source streams",
                sharedReport: "N",
                lastModified: "08/05/2017",
                lastRan: "06/05/2017",
                dataset: "MediaMelt",
                url: "reports"
            },
            {
                reportName: "4 week trend report",
                sharedReport: "N",
                lastModified: "05/05/2017",
                lastRan: "02/05/2017",
                dataset: "MediaMelt",
                url: "reports"
            },
            {
                reportName: "Top songs by source",
                sharedReport: "N",
                lastModified: "04/05/2017",
                lastRan: "07/05/2017",
                dataset: "Tableau - Historical",
                url: "reports"
            },
            {
                reportName: "Playlist position",
                sharedReport: "N",
                lastModified: "02/04/2017",
                lastRan: "09/05/2017",
                dataset: "MediaMelt",
                url: "reports"
            },
            {
                reportName: "Playlist creators",
                sharedReport: "N",
                lastModified: "08/04/2017",
                lastRan: "08/05/2017",
                dataset: "Tableau - Historical",
                url: "reports"
            },{
                reportName: "Songs by City Report",
                sharedReport: "Y",
                lastModified: "08/09/2017",
                lastRan: "02/11/2017",
                dataset: "MediaMelt",
                url: "reports"
            },
            /*{
                reportName: "Date over date song comparison report",
                sharedReport: "N",
                lastModified: "08/08/2017",
                lastRan: "02/11/2017",
                dataset: "MediaMelt",
                url: "dateOverDateSong"
            },*/
            {
                reportName: "Songs sales by territory / territory group report",
                sharedReport: "Y",
                lastModified: "06/05/2017",
                lastRan: "12/05/2017",
                dataset: "Tableau - Historical",
                url: "reports"
            },
            {
                reportName: "Songs Comparison Date Over Date Report",
                sharedReport: "Y",
                lastModified: "08/11/2017",
                lastRan: "02/11/2017",
                dataset: "MediaMelt",
                url: "dateOverDateMultiple"
            },
            {
                reportName: "Songs by Date Range comparison report",
                sharedReport: "N",
                lastModified: "08/09/2017",
                lastRan: "02/05/2017",
                dataset: "Tableau - Historical",
                url: "songOverSong"
            }
        ];
        this.displayCollection2 = [].concat(this.myReports);
        this.toFormat = function(r) {
            this.exportListName = "General reports";
            return r.map(function(i) {
                let list = {
                    "Report Name": i.reportName,
                    "Shared Report (Y/N)": i.sharedReport,
                    "Last Modified": i.lastModified,
                    "Last Ran": i.lastRan,
                    "Dataset": i.dataset
                };
                return list;
            });
        };

        $scope.onFilter = (stCtrl) => {
            var filteredCols = [], i;
            var tableState = stCtrl.tableState();
            if (stCtrl.tableState().search.predicateObject) {
                if (Object.keys(stCtrl.tableState().search.predicateObject).length > 0) {
                    this.isFilterApplied = true;
                    filteredCols = Object.keys(stCtrl.tableState().search.predicateObject);
                    for (i in filteredCols) {
                        this['filtered_' + filteredCols[i]] = true;
                    }
                }
                else {
                    this.isFilterApplied = false;
                }
            }
        }
    }
}

export default ReportsFormController;