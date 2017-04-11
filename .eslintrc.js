/**
 * Created by yixia on 4/10/17.
 */
module.exports = {
    root: true, // eslint找到这个标识后，不会再去父文件夹中找eslint的配置文件
    parser: 'babel-eslint', // 使用babel-eslint来作为eslint的解析器
    parseOptions: { // 设置解析器选项
        sourceType: 'module' // 表明自己的代码是ECMAScript模块
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard', // 继承eslint-config-standard里面提供的lint规则
    plugins: ['html'], // 使用的插件eslint-plugin-html. 写配置文件的时候，可以省略eslint-plugin-
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // http://eslint.org/docs/rules/comma-dangle
        'comma-dangle': ['error', 'only-multiline'],
        'semi': 0
    },
    globals: { // 声明在代码中自定义的全局变量
        'CONFIG': true
    },
    env: {

    }
}