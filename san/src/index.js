import {Component} from 'san';

class HelloComponent extends Component {

    constructor(options) {
        super(options);
    }

    static template = `
      <div>
        <form>
          <input type="text" value="{= name =}" placeholder="姓名(string)">
          <input type="number" value="{= age =}" placeholder="年龄(number)">
          <input type="text" value="{= des =}" placeholder="简介(string)">
        </form>
        <div>
          信息: <button>移除信息</button>
        </div>
        <!-- 数据空时显示下划线 -->
        <p>姓名：{{name || '_________'}}</p>
        <p>年龄：{{age || '_________'}}</p>
        <p>简介：{{des || '_________'}}</p>
      </div>
    `;

    initData() {
        return {
          name: '',
          age: '',
          des: ''
        }
    }
}

new HelloComponent().attach(document.body);