var tplDetail = require('../templates/detail.string');

SPA.defineView('detail',{
  html: tplDetail,

  plugins:['delegated'],

  bindActions: {
    'back': function(){
      this.hide();
    },
    'goto.merchant':function(e,data){
      SPA.open('merchant');
    },
    'goto.review':function(e,data){
      SPA.open('review');
    },
    'goto.pay':function(e,data){
      SPA.open('pay');
    }
  }
})
