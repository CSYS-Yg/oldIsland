// pages/my/my.js
import { ClassicModel } from '../../models/classic'
import { BookModel } from '../../models/book'
const classicModel = new ClassicModel()
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
    authorized: false,
    userInfo: null,
    bookCount: 0,
    classics: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.userAuthorized()
    this.getMyBookCount()
    this.getMyfavor()
  },

  getMyfavor() {
    classicModel.getMyFavor(res => {
      this.setData({
        classics: res
      })
    })
  },
  getMyBookCount() {
    bookModel.getMyBookCount().then(res => {
      this.setData({
        bookCount: res.count
      })
    })
  },
  userAuthorized() {
    wx.getSetting({
      success: data => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                authorized: true,
                userInfo: data.userInfo
              })
            }
          })
        }
      }
    })
  },
  onGetUserInfo(event) {
    const userInfo = event.detail.userInfo
    if (userInfo) {
      this.setData({
        authorized: true,
        userInfo: userInfo
      })
    }
  },
  onJumpToAbout(event) {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  },
  onStudy(event) {
    wx.navigateTo({
      url: '/pages/course/course'
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})

