# vue2-log

打印当前实例的数据，比起一堆 getter/setter 要友好。keypath 可选。

```bash
npm install vue2-log

import Vue from 'vue'
import Vue2Log from 'vue2-log'

Vue.use(Vue2Log)
```

vm.$log([keypath])

```
new Vue({
    el: '#example',
    data: {
        a: [1, 2, 3, 4, 5],
        c: [{
            tag: '111',
            content: '111222'
        }, {
            tag: '222',
            content: '2222222'
        }, {
            tag: '333',
            content: '3333222'
        }, {
            tag: '444',
            content: '44444222'
        }, {
            tag: '555',
            content: '5555222'
        }]
    },
    mounted() {
        this.$log()
        this.$log('c')
    }
})
```
