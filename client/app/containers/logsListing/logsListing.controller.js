class LogsListingController {
  constructor(LogService) {
  	"ngInject";
  	this.LogService = LogService;
  	this.logsList = [];
  }

  $onInit() {
    var me = this;

    this.LogService.getLogs().then(function(res) {
        me.logsList = res;
    }, function(err) {
        console.log(err);
    });
  }
}

export default LogsListingController;
