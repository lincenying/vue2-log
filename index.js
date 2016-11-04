/* eslint-disable */
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        global.Vue2Log = factory()
}(this, function() {
    'use strict'
    var MyPlugin = {}
    MyPlugin.install = function(Vue, options) {
        Vue.prototype.$log = function(options) {
            if (typeof options === 'undefined') {
                console.log(JSON.parse(JSON.stringify(this.$data)))
            } else {
                console.log(JSON.parse(JSON.stringify(this.$data[options])))
            }
        }
    }
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(MyPlugin)
    }
    return MyPlugin
}))
