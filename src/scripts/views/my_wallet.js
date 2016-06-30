var tplMy_wallet = require('../templates/my_wallet.string');
//引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('my_wallet', {
  html: tplMy_wallet,
  plugins: ['delegated'],

  bindActions: {
    'back': function(){
      this.hide();
    }
  }
})
