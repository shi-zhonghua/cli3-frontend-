const path = require('path');
const manifestPlugin = require('pwa-manifest-webpack-plugin');
module.exports = {
    // 基本路径
    baseUrl: './',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // compiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // chainWebpack: () => {},

    configureWebpack: {
        //百度地图
        externals: {
            "BMap": "BMap"
        },

    },
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        // loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // pwa: {},
    // webpack-dev-server 相关配置 关键点 配置ip 地址，跟端口号
    devServer: {
        open: process.platform === 'darwin', // 配置自动启动浏览器
        host: '0.0.0.0', // ip地址
        port: 8888, // 端口号
        https: false,
        hotOnly: false, // 热更新
        proxy: null, // 设置代理 配置自动启动浏览器
        before: app => {}
        // overlay: {
        //     warnings: false,
        //     errors: false
        // },
        // lintOnSave: false
    },
    // 第三方插件配置
    pluginOptions: {
        manifestPlugin: [
            new manifestPlugin({
                name: '最野新闻', // 标题 指定了Web App的名称。
                short_name: '最野', // 短标题 short_name其实是该应用的一个简称。一般来说，当没有足够空间展示应用的name时，系统就会使用short_name。
                description: '最野新闻 - 一款最前线新闻的应用', // 这个字段的含义非常简单，就是一段对该应用的描述。
                display: 'standalone', // fullscreen：全屏显示，会尽可能将所有的显示区域都占满；standalone：独立应用模式，这种模式下打开的应用有自己的启动图标，并且不会有浏览器的地址栏。因此看起来更像一个Native App；minimal-ui：与standalone相比，该模式会多出地址栏；browser：一般来说，会和正常使用浏览器打开样式一致。
                start_url: '/', // 这个属性指定了用户打开该Web App时加载的URL。相对URL会相对于manifest。这里我们指定了start_url为/，访问根目录。
                orientation: 'portrait-primary', // 控制Web App的方向。设置某些值会具有类似锁屏的效果（禁止旋转），例如例子中的portrait-primary。具体的值包括：any, natural, landscape, landscape-primary, landscape-secondary, portrait, portrait-primary, portrait-secondary。
                icon: {
                    // icons本身是一个数组，每个元素包含三个属性：
                    //
                    // sizes：图标的大小。通过指定大小，系统会选取最合适的图标展示在相应位置上。
                    // src：图标的文件路径。注意相对路径是相对于manifest。
                    // type：图标的图片类型
                    src: path.resolve('src/assets/logo.png'),
                    sizes: [200]
                },
                background_color: '#2d8cf0', // background_color是在应用的样式资源为加载完毕前的默认背景，因此会展示在开屏界面。background_color加上我们刚才定义的icons就组成了Web App打开时的“开屏图”。
                theme_color: '#2d8cf0' // 定义应用程序的默认主题颜色。 这有时会影响操作系统显示应用程序的方式（例如，在Android的任务切换器上，主题颜色包围应用程序）。此外，还可以在meta标签中设置theme_color：<meta name="theme-color" content="#5eace0"/>
            })

        ]
    }



}