class DashboardController {
    constructor($scope, $rootScope, c3ExportService) {
        'ngInject'
        this.name = 'dashboard';
        $('#leftNav').show();
        $('#navigationMenu').show();
        $('#navigationMenuButton').show();
        $('#footer').show();
        this.dashboard = ($rootScope.currentUser) ? $rootScope.currentUser.dashboard : {};

        this.config = {
          removeDefs: true
        };
        this.getpdf = function() {
            // html2canvas($(".content"), {
                // onrendered: function(canvas) {
                    var myImage = c3ExportService.createChartImages($("#chart4"), this.config);
                    window.open(myImage);
                    var docDefinition = {
                        content: [{
                            image: myImage,
                            fit: [500, 500]
                        }]
                    };
                    pdfMake.createPdf(docDefinition).open();
                // }
            // });
        };
    }
}

export default DashboardController;