var tplIndex = require('../templates/index.string');
var util = require('../utils/fn.js');
SPA.defineView('index', {
  html: tplIndex,
  plugins: ['delegated'],
  modules: [{
    name: 'content', // 子视图的名字，用作后边引用的句柄
    views: ['home','shop','person'], // 定义子视图的列表数组
    defaultTag: 'home', // 定义默认视图
    container: '.l-container' // 子视图的容器
  }],
  // 绑定tab 事件
  bindActions: {
    'switch.tabs': function (e,data) {
      //console.log(0)
      // console.log($(e.el));
      // $(e.el).addClass('active').siblings().removeClass('active');
      util.setFocus(e.el);
      this.modules.content.launch(data.tag);
    }

  }


});
