import {request} from 'network/request'
//侧边栏分类导航数据
export function getCategory() {
    return request({
        url: '/category'
    })
}
//二级分类导航数据
export function getSubcategory(maitKey){
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}
//商品数据
export function getCategoryDetail(miniWallkey, type){
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}
