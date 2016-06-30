var tplMerchant = require('../templates/merchant.string');
//引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('merchant', {
  html: tplMerchant,
  plugins: ['delegated']
})
