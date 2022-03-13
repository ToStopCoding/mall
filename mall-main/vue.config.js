module.exports = {
    configureWebpack: {
        resolve: {
            // 设置别名
            alias: {
                // 默认已经配置了  '@':'src'
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    lintOnSave: false

}