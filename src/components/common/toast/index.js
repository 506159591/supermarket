import Toast from './Toast'
const obj = {}

obj.install = function (Vue) {
    //创建组件构造器
    const toastContrustor = Vue.extend(Toast)
    //new的方式，根据组件构造器，创建出一个组件对象
    const toast = new toastContrustor()
    //手动将组件对象挂载到某一个元素上
    toast.$mount(document.createElement('div'))
    //toast.$el就是对应的div  将挂载好的div添加到body上
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast;
}


export default obj