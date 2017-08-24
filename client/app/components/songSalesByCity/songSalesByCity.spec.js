import SongSalesByCityModule from './songSalesByCity'
import SongSalesByCityController from './songSalesByCity.controller';
import SongSalesByCityComponent from './songSalesByCity.component';
import SongSalesByCityTemplate from './songSalesByCity.html';

describe('SongSalesByCity', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SongSalesByCityModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SongSalesByCityController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SongSalesByCityTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SongSalesByCityComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SongSalesByCityTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SongSalesByCityController);
      });
  });
});
