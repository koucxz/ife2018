import {Component} from 'san';

class HelloComponent extends Component {

    constructor(options) {
        super(options);
    }

    static template = `
      <p>Hello {{name}}!</p>
    `;

    initData() {
        return {name: 'San'}
    }
}

new HelloComponent().attach(document.body);