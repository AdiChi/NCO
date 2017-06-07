import template from './usersList.html';
import controller from './usersList.controller';

let usersListComponent = {
  restrict: 'E',
  bindings: {
    users: '<'
  },
  template,
  controller,
  controllerAs: 'vm'

};

export default usersListComponent;
