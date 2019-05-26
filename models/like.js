import { HTTP } from '../util/http.js'
// 可以通过继承来实现实例化类
class LikeModel extends HTTP {
    like(behavior, artID, category) {
        let url = behavior == 'like' ? 'like' : 'like/cancel'
        // 封装后写法
        this.request({
            url: url,
            method: 'POST',
            data: {
                art_id: artID,
                type: category
            }
        })
    }

    getClassicLikeStatus(artId, category, sCallback) {
        this.request({
            url: `classic/${category}/${artId}/favor`,
            success: sCallback
        })
    }
}

export { LikeModel }