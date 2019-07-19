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
