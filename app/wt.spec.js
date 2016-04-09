import WtController from './wt.controller';
import WtComponent from './wt.component';
import WtTemplate from './wt.jade';

describe('WT', () => {
  let $httpBackend, makeController;

  beforeEach(inject(($injector, $http) => {
    $httpBackend = $injector.get('$httpBackend');

    makeController = () => new WtController($http);
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('Controller', () => {
    it('has a name property', () => {
      $httpBackend.expectGET('/api/langs').respond(['a', 'b']);
      let controller = makeController();
      $httpBackend.flush();

      expect(controller).to.have.property('name', 'wikitranslate');
      expect(controller).to.have.property('languages').that.deep.equals(['a', 'b']);
    });
  });

  describe('Template', () => {
    it('has name in template', () => {
      expect(WtTemplate).to.match(/Translate with Wikipedia/);
    });
  });

  describe('Component', () => {
    let component = WtComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(WtTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(WtController);
    });
  });
});
