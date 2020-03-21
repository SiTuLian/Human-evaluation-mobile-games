// components/dialogue/dialogue.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event){
      const text = event.currentTarget.dataset.text;

      wx.showModal({
        title: '您先看到的是H还是T？',
        content: `您的选择是${text}`,
        success(res) {
          if (res.confirm) {
            console.log(`用户选择${text}`)
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
})
