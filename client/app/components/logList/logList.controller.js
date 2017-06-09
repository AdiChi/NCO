class LogListController {
  constructor() {
  	"ngInject";
  	this.displayCollection = [].concat(this.logs);
  	this.itemsByPage = 10;
 //  	this.getters = {
	//     time: function (value) {
	//         return $filter('date')(value, 'medium');
	//     }
	// };
  }
}

export default LogListController;
