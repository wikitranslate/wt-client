import 'angular';
import 'angular-component';
import 'angular-mocks';

let context = require.context('../app', true, /\.spec\.js/);

context.keys().forEach(context);
