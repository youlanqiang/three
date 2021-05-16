const path = require('path')
const HtmlWebpalckPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.ts',
    output:{
        path:path.resolve(__dirname,'public'),
        filename:'bundle.js'
    },
    devtool:'inlin-source-map',
    devServer:{
        contentBase:'./public',
        open:true,
        port:9001
    },
    plugins:[
        new HtmlWebpalckPlugin({
            template:'./src/index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },{
                test:/\.css$/,
                use:[{
                    loader:"style-loader"
                },{
                    loader:"css-loader"
                }]
            }, {
                test: /\.(jpg|jpeg|png|gif)$/, //打包的文件以jpg,png,gif结尾
                use: {
                    loader: 'file-loader',
                    options: { //file-loader配置项
                        //placeholder 占位符
                        name: '[name]_[hash].[ext]',//保持打包后的图片名字和原来一样
                        outputPath: 'images/'
                        //打包后的图片输出到images文件夹中
                    }
                }
            }
        ]
    },
    resolve:{
        extensions:['.tsx','.ts','.js','.jpg']
    },

}
