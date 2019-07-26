# project 
```

    vue-cli3
    webpack2.0
    vue 2.0
    vue-router
    vuex
    echarts
    fetch
    element-ui
    lodash
    vue-i18n

```

## 使用npm install安装所有的依赖 
```
npm install
```

### 本地开发项目运行
```
npm run serve 
```

### 打包压缩
```
npm run build
```


##项目结构说明
```
－－vue.config.js配置文件
－－mock  模拟数据
－－src
	－－assets 静态文件
	－－components 公共组件
	－－views 视图组件
	－－router 路由器
	－－vuex  数据管理
			
```
##git提交流程
```
git status -s 查看当前仓库状态
1.代码格式化:npm run precommit  代码格式化
2.git add .   添加仓库   . 提交全部的修改
3.git commit -m ""   提交本地仓库
4.git pull -r    获取仓库最新代码
5.git push origin master   提交本地代码到git仓库

```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

##百度地图使用
```
1. 百度官网申请秘钥
2. 在index.html 引入js 
   <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=自己的秘钥"></script>
3. 在vue.config.js的配置文件里加上 
    configureWebpack: {
        //百度地图
        externals: {
            "BMap": "BMap"
        }
    },
4. 在要使用地图的组件内
   import BMap from 'BMap'

复制文本功能
1、npm install clipboard --save
2、在main.js 添加 
import clipboard from 'clipboard';
//注册到vue原型上
Vue.prototype.clipboard = clipboard;
3、在使用的地方 添加
import Clipboard from 'clipboard';
4、 方法
 <button ref="copy" class="lr" :data-clipboard-text="item" @click="copy(index)" :id="'copy_text'+index">复制</button>
copy(index) {
            let clipboard = new Clipboard("#copy_text" + index);
            clipboard.on('success', e => {
                this.$message({
                    message: '复制成功！',
                    type: 'success'
                });
                // 释放内存
                clipboard.destroy()
            })
            clipboard.on('error', e => {
                // 不支持复制
                Message({
                    message: '该浏览器不支持自动复制',
                    type: 'warning'
                });
                // 释放内存
                clipboard.destroy()
            })
        }
```
##骨架屏
```

npm install vue-skeleton-component --save-dev

// main.js
import skeleton from 'vue-skeleton-component'
Vue.use(skeleton)
骨架屏样式

初期版本只提供几个简单的样式可以选择，后续会慢慢补充
1. 分割线

以给定的容器大小为基准画一条线 分割线

<skeleton active type='straightLine' :options="{
    height: '20px',
    position: 'center'
}" />

2. 圆

画一个圆, 需要给出圆的直径，否则在一个长方形容器中将表现为椭圆形 圆

<skeleton  type='circlecom' active :options="{
    width: '150px'
}" />


3. 卡片

画一个方块，需要给定宽和高，否则将会默认自动填充容器 卡片

<skeleton type='card' active :options="{
    width: '200px',
    height: '150px'
}" />


4. 列表

创建一个文字行效果，需要给出文字行数和行高 列表

<skeleton type='listcom' active :options="{
    row: 3,
    lineHight: 20
}" />


5. 混合类型

混合类型可以使用以上几种类型的全部api，将其整合到一起，相互拼接 混合类型

混合类型使用了九宫格布局来作为基础布局(grid布局)，将你想插入的组件按照[a ~ i]的顺序进行排列，你可以选择你想让哪些组件出现在哪一个位置，简单配置，就可以达到想要的效果，如下图 九宫格布局

<skeleton type="custom" :options="{ width: '100%', height: '100%' }" :childrenOption="[
    {type: 'circlecom', rules: 'a, d', active: true, options:{width: '150px'} },
    {type: 'listcom', rules: 'b, c, e, f', active: true},
    {type: 'straightLine', active: true, rules: 'g, h, i'},
]" />

参数

API     内容  类型  值
type    显示类型    String  组件类型
active  是否显示动效  Boolean     true/false
options     设置项     Object  null
-rules  出现规则，这里不可以跨行切必须相邻   String  'a, b, ... i'
-childrenOption     设置子组件类型     Array[Object]   []
```
