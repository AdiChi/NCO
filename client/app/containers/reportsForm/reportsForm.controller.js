class ReportsFormController {
    constructor() {
        this.allReports = [{
                reportName: "Songs by City Report",
                sharedReport: "Y",
                lastModified: "8/21/2017",
                lastRan: "2/5/2017",
                dataset: "MediaMelt",
                url: "reports"
            },
            {
                reportName: "Date over date song comparison report",
                sharedReport: "N",
                lastModified: "8/21/2017",
                lastRan: "2/5/2017",
                dataset: "MediaMelt",
                url: "dateOverDateSong"
            },
            {
                reportName: "Songs sales by territory / territory group report",
                sharedReport: "Y",
                lastModified: "8/21/2017",
                lastRan: "2/5/2017",
                dataset: "Tableau - Historical",
                url: "reports"
            },
            {
                reportName: "Songs Comparison Date Over Date Report",
                sharedReport: "Y",
                lastModified: "8/21/2017",
                lastRan: "2/5/2017",
                dataset: "MediaMelt",
                url: "reports"
            },
            {
                reportName: "Songs by Date Range comparison report",
                sharedReport: "N",
                lastModified: "8/21/2017",
                lastRan: "2/5/2017",
                dataset: "Tableau - Historical",
                url: "reports"
            }
        ];
        this.displayCollection = [].concat(this.allReports);

        this.toFormat = function(r) {
            return r.map(function(i) {
                let list = {
                    "Report Name" : i.reportName,
                    "Shared Report (Y/N)" : i.sharedReport,
                    "Last Modified" : i.lastModified,
                    "Last Ran" : i.lastRan,
                    "Dataset": i.dataset
                };
                return list;
            });
        };
    }
}

export default ReportsFormController;