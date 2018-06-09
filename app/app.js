//const angular = require( 'angular' );
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './app.config.js';
import { homeComponent } from './components/home';

angular.module('app', [uiRouter]).config(routing);
angular.module('app').component('homeComponent', homeComponent);
