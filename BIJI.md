module.exports = {
    //publicPath:基本路径，当为./时所有资源都会被链接为相对路径；
    //publicPath:'./'
    //开发过程中架设在根路径，可以用条件式的值进行判断为开发（development）还是生产(production)环境
    //NODE_ENV在package中的脚本库中设置，项目启动时会和启动命令行结合，（https://www.cnblogs.com/usebtf/p/9912413.html）此链接详细讲process.env.NODE_ENV的作用
    publicPath: process.env.NODE_ENV === 'production'?`${'配置的路径'}` : './', //{Type:string,Default:'/'} 
    outputDir: 'dist' , //{Type:string,Default:'dist'} build 时生成的生产环境文件夹名称，此文件夹在每次重新构建之时都会被清除（构建时传入 -- no-clean 可关闭该行为） 

    assetsDir: 'static', //{Type:string,Default:''} 放置生成的静态文件资源（js，css，img，fonts）的目录（相对于outputDir）

    indexPath: 'index.html', //{Type:string,Default:'index.html'} 指定生成的index.html的输出路径（相对于outputDir）,也可以是一个绝对路径

    //{Type:boolean,Default:true} 文件打包是为了更好的控制缓存会给文件名加上hash值，但是必须要是脚手架自动生成的才会有，若不是使用脚手架生成的html文件则要将此值设置为false    
    filenameHashing: true, 

    //用于多页配置，{Type:Object,Default:undefined}(https://www.cnblogs.com/zw-shi/p/6006827.html）此链接详细讲解了多页和单页模式的区别
    page:{//多页模式配置
        index:{
            entry:'',//page的文件入口
            template:'',//模板文件
            filename:'',//在dist中输出文件
            title:'',
            chunks:[]
        },
        //当使用只有入口的字符串格式时的一些默认值
        subpage:''
    },
    //{Type:boolean | 'error',Default:true}
    //是否保存的时候使用’eslint-loader‘进行检查，为error时检查出的错误会处罚编译失败
    lintOnSave:true,

    //{Type:boolean , Default:false} (https://www.cnblogs.com/webing/p/10733999.html) runtimeOnly和runtimeCompiler的区别
    //是否使用带有浏览器内编译器的版本构建
    runtimeCompiler:false,

    //{Type:Array<string | RegExp>,Default:[]}
    //默认情况下babel-loader会忽略所有的node_modules中的文件
    //可以解决兼容问题，例如当自己公司内部封装的组件库使用时可能内含一些IE兼容性（例如es6部分语法ie不兼容）问题，可以添加进去进行编译
    transpileDependencies:['boya'],

    //{Type:boolean , Default:true}
    //如果不需要source map，将其设置为false就不会生成map文件，可以加速生产环境构建
    productionSourceMap:false,

    //{Type:boolean,Default:false}    
    //设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
    crossorigin:false,

    //{Type:boolean,Default:false}    
    //在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI),
    //若构建后的文件时部署在CDN上的，启用此选项可以提供额外的安全,因为cdn有可能被DNS等劫持，使用Integrity可以检查文件是否是原版（例如当静态文件放置到单独的一个网点时）
    //(https://imququ.com/post/subresource-integrity.html)
    Integrity:false,




    //Webpack相关配置
    //{Type:Object | Function}
    //此处配置的参数会合并到最终的配置当中--------后续许扩充
    configureWepack:{},
    //{Type:Function}
    //此函数会接收一个机遇webpack-chain的ChainableConfig实例，方法内可以对里面的设置进行跟家细微的修改------后续许扩充
    chainWebpack:()=>{},




    //css相关配置
    css:{
        //{Type:boolean | Object, Default:生产环境true | 开发环境false}
        //将组建内的css提取到一个单独的css文件中
        extract: false,

        //{Type:boolean, Default:false}
        //构建css文件时是否要生成map文件，设置为true可能会影响构建性能
        sourceMap:false,

        //{Type:Object,Default:{}}
        //为预处理器的loader传递自定义选项，支持的loader有（css-loader,postcss-loader,sass-loader,less-loader,stylus-loader）
        loaderOptions:{
            css:{},//传递给css-loader
            postcss:{},//传递给postcss-loader
        },

        //{Type:boolean,Default:false}
        //为所有的css及其预处理文件开发css moudles，’.vue‘的文件不会受到影响
        modules: false
    },


    //配置webpack-dev-server选项 -------后续扩展
    devServer:{
        proxy:{}
    },


    //可以用来传递任何第三方插件选项
    pluginOptions:{},
}