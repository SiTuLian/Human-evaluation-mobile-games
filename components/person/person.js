// components/person.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    time: {
      type: Number,
      value: 1
    },
    top: {
      type: Number,
      value: 40
    },
    width: {
      type: Number,
      value: 10
    },
    height: {
      type: Number,
      value: 25
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    srcArr: [
      "http://47.115.121.243/public/img/sub1_p1.png",
      "http://47.115.121.243/public/img/sub1_p2.png",
      "http://47.115.121.243/public/img/sub1_p3.png",
      "http://47.115.121.243/public/img/sub1_p4.png",
    ],
    src: "http://47.115.121.243/public/img/sub1_p1.png",
    left: 2,
    timer: null,
    timer1: null,
    step: 1
    
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    

    move(delay, i, moveStep){
      
      this.data.step++;
      if (this.data.timer){
        clearTimeout(this.data.timer);
        this.data.timer = null;
      }
      //console.log(this.data.step)
      return new Promise((resolve, reject)=>{
        this.data.timer = setTimeout(() => {

          this.setData({
            src: this.data.srcArr[i],
            left: this.data.left + moveStep
          })
          
          resolve(this.data.step);

        }, delay)


      })
      
    },

    move2(){
      this.move(500,1, 4).then(data=>{
        if (data === this.properties.time) {
          
          this.triggerEvent('topage')

          return ;
        }else{
          return this.move(300, 2, 0)
        }
      }).then(data => {
        if (data === this.properties.time) {

          this.triggerEvent('topage')

          return;
        } else {
          return this.move(500, 3, 4)
        }
      }).then(data => {
        if (data === this.properties.time) {

          this.triggerEvent('topage')
          return;
        } else {
          return this.move(300, 0, 0)
        }
        
      }).then(data => {
        if (data >= this.properties.time) {

          this.triggerEvent('topage');

          return ;
        } else {
          return this.move2()
        }
      })
    },

   
    
    transferMove() {
      this.move2();
      
    }
   
  },
  
  lifetimes: {
    ready() {
      this.triggerEvent('start')
    }
  }
})
