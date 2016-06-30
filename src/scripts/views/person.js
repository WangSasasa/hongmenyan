var tplPerson = require('../templates/person.string');
//引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('person', {
  html: tplPerson,
  plugins:['delegated'],
  bindActions:{
    'goto.my_wallet':function(e,data){
      SPA.open('my_wallet');
    },
    'goto.my_order':function(e,data){
      SPA.open('my_order');
    }
  }

});
