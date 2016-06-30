var tplReview = require('../templates/review.string');
//引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('review', {
  html: tplReview,
  plugins: ['delegated'],

  bindActions: {
    'back': function(){
      this.hide();
    }
  }
})
