import SongSalesByTerritoryModule from './songSalesByTerritory'
import SongSalesByTerritoryController from './songSalesByTerritory.controller';
import SongSalesByTerritoryComponent from './songSalesByTerritory.component';
import SongSalesByTerritoryTemplate from './songSalesByTerritory.html';

describe('SongSalesByTerritory', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SongSalesByTerritoryModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SongSalesByTerritoryController();
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
      expect(SongSalesByTerritoryTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SongSalesByTerritoryComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SongSalesByTerritoryTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SongSalesByTerritoryController);
      });
  });
});
