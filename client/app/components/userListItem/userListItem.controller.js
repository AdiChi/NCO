class UserListItemController {
  constructor(ModalService, UsersService) {
  	"ngInject";

  	this.deleteUser = function(id) {
  		var modalOptions = {
	        closeButtonText: 'No',
	        actionButtonText: 'Yes',
	        headerText: 'Delete?',
	        bodyText: 'Are you sure you want to delete this user?'
	    };
  		ModalService.showModal({}, modalOptions)
	        .then(function (result) {
	            UsersService.deleteUser(id).then(function(res) {
	            	console.log(res);
	            }).catch(function(err) {
	            	console.log(err);
	            });
	        },function (err) {
	            console.log(err);
	        });
  	};
  }
}

export default UserListItemController;
