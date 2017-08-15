//const angular = require( 'angular' );
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './app.config.js';
import { homeComponent } from './components/home/home.component.js';

console.log( homeComponent );

angular.module( 'app', [ uiRouter ] ).config( routing );