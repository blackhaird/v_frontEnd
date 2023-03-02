const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {

        welcome_page: {
          entry: 'src/welcome_page/src/main.js',
          template: 'public/welcome.html',
          filename: 'welcome.html',
        },

        main_page:{
          entry:'src/main_page/src/main.js',
          template:'public/main.html',
          filename:'main.html',
        },
        function_page:{
            entry:'src/function_page/src/function.js',
            template:'public/function.html',
            filename:'function.html'
        }

    },

})
