import template   from './userListItem.html';
import controller from './userListItem.controller';
import './userListItem.scss';

const userListItemComponent = {
  restrict: 'E',
  bindings: {
    user: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default userListItemComponent;
