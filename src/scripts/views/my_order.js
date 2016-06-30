var tplMy_order = require('../templates/my_order.string');
//引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('my_order', {
  html: tplMy_order,
  plugins: ['delegated'],

  bindActions: {
    'back': function(){
      this.hide();
    }
  }
})
