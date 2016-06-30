var tplHome = require('../templates/home.string');
//引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('home', {
  html: tplHome,
  plugins: ['delegated',{
    name: 'avalon',
    options: function (vm) {
      vm.homelist = [];
    }
  }],

  init: {
    mySwiper: null,
    vm: null,
    goodsArr:[],
    homeSwiper: null,
    homeHotSwiper: null
  },

  bindActions: {
    'goto.detail': function(e,data){
      SPA.open('detail');
      //console.log(0);
    }
  },

  bindEvents: {
    'beforeShow':function(){
     // console.log(this)
        var that= this;
       //获得vm对象
        that.vm = that.getVM();
        $.ajax({
          url:'/api/getLivelist.php',
          type:'get',
          data:{
            rtype:'origin'
          },
          success:function(rs){
            that.goodsArr=rs.data;
            that.vm.homelist=rs.data;
          }
        })
      },
      'show': function () {
        var that = this;
        that.mySwiper = new Swiper('#home-swiper', {
          loop: false,
          pagination: '.swiper-pagination'
        });
        // 下拉刷新，上拉加载更多
        var scrollSize = 30;
        var myScroll = this.widgets.homeHotScroll;
        myScroll.scrollBy(0, -scrollSize);
        var head = $('.head img'),
          topImgHasClass = head.hasClass('up');
        var foot = $('.foot img'),
            bottomImgHasClass = head.hasClass('down');
        myScroll.on('scroll', function () {
            var y = this.y,
                maxY = this.maxScrollY - y;
            if (y >= 0) {
                !topImgHasClass && head.addClass('up');
                return '';
            }
            if (maxY >= 0) {
                !bottomImgHasClass && foot.addClass('down');
                return '';
            }
        });

        myScroll.on('scrollEnd', function () {
            if (this.y >= -scrollSize && this.y < 0) {
                myScroll.scrollTo(0, -scrollSize);
                head.removeClass('up');
            } else if (this.y >= 0) {
                head.attr('src', '/hongmenyan/images/ajax-loader.gif');
                //ajax下拉刷新数据
                // $.ajax({
                //   url:'/api/getLivelist.php',
                //   data:{
                //     rtype:'refresh'
                //   },
                //   success:function(rs){
                //     var newArray = rs.data.concat(that.goodsArr);
                //     that.vm.homelist = newArray;
                //     that.goodsArr = newArray;
                //   }
                // })

                setTimeout(function () {
                    myScroll.scrollTo(0, -scrollSize);
                    head.removeClass('up');
                    head.attr('src', '/hongmenyan/images/arrow.png');
                }, 1000);
            }

            var maxY = this.maxScrollY - this.y;
            var self = this;
            if (maxY > -scrollSize && maxY < 0) {
                myScroll.scrollTo(0, self.maxScrollY + scrollSize);
                foot.removeClass('down')
            } else if (maxY >= 0) {
                foot.attr('src', '/hongmenyan/images/ajax-loader.gif');
                // ajax上拉加载数据

                $.ajax({
                  url: '/api/getLivelist.php',
                  data: {
                    rtype: 'more'
                  },
                  success: function (rs) {
                    var newArray = that.goodsArr.concat(rs.data);
                    that.vm.homelist = newArray;
                    that.goodsArr = newArray;

                    myScroll.scrollTo(0, self.y + scrollSize);
                    foot.removeClass('down');
                    foot.attr('src', '/hongmenyan/images/arrow.png');
                  }
                });
            }
        });
      }
   }
});
