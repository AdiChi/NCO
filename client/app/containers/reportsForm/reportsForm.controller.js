class ReportsFormController {
    constructor() {
        this.allReports = [
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
            },
            {
                reportName: "Songs by City Report",
                sharedReport: "Y",
                lastModified: "08/09/2017",
                lastRan: "02/11/2017",
                dataset: "MediaMelt",
                url: "reports"
            },
            {
                reportName: "Date over date song comparison report",
                sharedReport: "N",
                lastModified: "08/08/2017",
                lastRan: "02/11/2017",
                dataset: "MediaMelt",
                url: "dateOverDateSong"
            },
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
                url: "reports"
            },
            {
                reportName: "Songs by Date Range comparison report",
                sharedReport: "N",
                lastModified: "08/09/2017",
                lastRan: "02/05/2017",
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