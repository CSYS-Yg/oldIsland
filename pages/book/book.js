// pages/book/book.js
import { BookModel } from '../../models/book.js'
import { random } from '../../util/common'
const bookModel = new BookModel()
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    books: [],
    searching: false,
    more: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (optins) {
    bookModel.getHotList()
      .then(
        res => {
          this.setData({
            books: res
          })
        }
      )
  },

  onSearching: function (event) {
    this.setData({
      searching: true
    })
  },

  onCancel: function (event) {
    this.setData({
      searching: false
    })
  },
  onReachBottom() {
    this.setData({
      more: random(10)
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
