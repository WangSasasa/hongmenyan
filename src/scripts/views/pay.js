var tplPay = require('../templates/pay.string');
//引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('pay', {
  html: tplPay,
  plugins: ['delegated'],

  bindActions: {
    'back': function(){
      this.hide();
    }
  }
})
