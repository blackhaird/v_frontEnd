const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {

        welcome_page: {
          entry: 'src/welcome_page/src/main.js',
          template: 'public/welcome.html',
          filename: 'welcome.html',
        },

        mian_page:{
          entry:'src/main_page/src/main.js',
          template:'public/main.html',
          filename:'main.html',
        }

    },

})