//index.js


Page({
  data: {
    isOpacity1: true,
    isOpacity2: false,
    isOpacity3: false,
    isDisplay1: false,
    isDisplay2: false,
    isBorder: false,
    isTransition: false,
    isDiaDisplay: true
   // isOpacitylast: false
    
  },
  //自定义事件
  onToPage1(){
    this.setData({
      isOpacity1: false,
      isOpacity2: true,
      isDisplay1: true
    })
    const id_person = this.selectComponent('#person2');
    id_person.transferMove();

  },
  onToPage2() {
    this.setData({
      isOpacity2: false,
      isOpacity3: true,
      isDisplay2: true
    })
    const id_person = this.selectComponent('#person3');
    id_person.transferMove();

  },
  onToPage3(){
    this.setData({
      isBorder: true
    })
    
  },
  // onStart(){
    
      
  // },

  //点击事件  点击画框
  onTap(){
    this.setData({
      isBorder: false,
      isTransition: true
      
    })

    let timer = null;
    
    if(timer){
      clearTimeout(timer);
      timer = null;
    }
    
    timer = setTimeout(()=>{
      this.setData({
        isDiaDisplay: false      
      })
    }, 2000)


  },

  //画面加载完毕调用函数，移动背景
  onMoveBg(){
    const movebg = this.selectComponent('#specialimg');
    movebg.change__isPosition_left();
    const id_person = this.selectComponent('#person1');
    id_person.transferMove();
  },
  onShow: function () {
    wx.hideLoading()
  },
})
