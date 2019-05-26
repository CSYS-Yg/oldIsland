import { HTTP } from '../util/http-p'
class KeywordModerl extends HTTP {
    key = 'q'
    maxLength = 10
    getHistory() {
        const words = wx.getStorageSync(this.key)
        if (!words) {
            return []
        }
        return words
    }

    getHot() {
        return this.request({
            url: '/book/hot_keyword'
        })
    }
    addToHistory(keyword) {
        let words = this.getHistory()
        // es6 判断数组中是否已存在该数据
        const has = words.includes(keyword)
        if (!has) {
            const length = words.length
            if (length >= this.maxLength) {
                words.pop()
            }
            words.unshift(keyword)
            wx.setStorageSync(this.key, words)
        }
    }
}

export { KeywordModerl } 