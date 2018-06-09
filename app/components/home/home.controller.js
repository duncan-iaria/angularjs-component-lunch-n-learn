export default class HomeController {
  constructor() {
    const controller = this;
    controller.name = 'home';
    controller.sayName = sayName;
    controller.sayNameToo = sayNameToo;

    function sayNameToo() {
      console.log('sayNameToo — ', controller.name);
    }

    function sayName() {
      console.log('hello, my name is — ', controller.name);
    }
  }
}
