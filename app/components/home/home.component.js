// import template from './home.html';
import HomeController from './home.controller.js'

export const homeComponent =
{
    template: require( './home.html' ),
    controller: HomeController,
    controllerAs: 'home',
};