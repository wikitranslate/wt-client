const apiRoot = 'https://translate.gnab.fr';

class WTController {
  constructor($http) {
    this.name = 'wikitranslate';

    this.$http = $http;

    this.fromLang;
    this.toLang;
    this.input;
    this.languages = [];

    this.translating = false;

    this.getLangs();
  }

  getLangs() {
    this.$http.get(`${apiRoot}/langs`)
    .then((res) => {
      this.languages = res.data.langs;
    });
  }

  translate() {
    this.$http.get(`${apiRoot}/${this.fromLang}/${this.toLang}/${this.input}`)
    .then((res) => {
      let translations = _.reduce(res.data, (result, t) => {
        return result.concat(t);
      }, []);

      this.result = translations.join(', ');
      this.translating = false;
    });

    this.translating = true;
  }
}

WTController.$inject = ['$http'];

export default WTController;
