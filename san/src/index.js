import san from 'san';

const MyApp = san.defineComponent({
  template: '<p>Hello {{name}}!</p>',

  initData: function () {
    return {
      name: 'San'
    };
  }
});

const myApp = new MyApp();
myApp.attach(document.body);