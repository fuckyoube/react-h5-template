module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'arrow-body-style': 0,
    'jsx-a11y/label-has-for': 0,
    'max-lines-per-function': [
      2,
      { max: 320, skipComments: true, skipBlankLines: true },
    ],
    'no-confusing-arrow': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['draft'] },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    'react/no-this-in-sfc': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-target-blank': 0,
    'no-async-promise-executor': 0,
    // 强制使用多行CSS属性
    'vue/multi-word-component-names': 0,
    // 强制使用成对大括号
    'accessor-pairs': 2,
    // 强制箭头函数的参数缩进
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // 强制块语句缩进
    'block-spacing': [2, 'always'],
    // 强制使用1个tab缩进
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    // 强制使用驼峰命名法
    camelcase: [
      1,
      {
        properties: 'always',
      },
    ],
    // 强制逗号分隔
    'comma-dangle': [2, 'never'],
    // 强制逗号间距
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    // 强制逗号样式
    'comma-style': [2, 'last'],
    // 强制使用super调用
    'constructor-super': 2,
    // 强制使用成对大括号
    curly: [2, 'multi-line'],
    // 强制属性换行
    'dot-location': [2, 'property'],
    // 强制换行
    'eol-last': 0,
    // ==必须改为===
    // eqeqeq: [2, 'allow-null'],
    eqeqeq: 'off',
    // 强制使用单空格或使用两个空格
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // 强制使用 err 或者 error
    'handle-callback-err': [2, '^(err|error)$'],
    // 缩进
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    // 强制使用单引号
    'jsx-quotes': [2, 'prefer-single'],
    // 强制使用冒号
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    // 强制使用空格
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // 强制使用大写
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'new-parens': 2,
    // 禁止使用数组构造器
    'no-array-constructor': 1,
    // 禁止使用caller
    'no-caller': 2,
    // 禁止使用console
    'no-console': 0,
    // 禁止使用类赋值
    'no-class-assign': 2,
    // 禁止使用条件赋值
    'no-cond-assign': 2,
    // 禁止使用常量赋值
    'no-const-assign': 2,
    // 禁止使用控制字符
    'no-control-regex': 2,
    // 禁止使用delete变量
    'no-delete-var': 2,
    // 禁止使用重复参数
    'no-dupe-args': 2,
    // 禁止使用重复类成员
    'no-dupe-class-members': 2,
    // 禁止使用重复键
    'no-dupe-keys': 2,
    // 禁止使用重复的case
    'no-duplicate-case': 2,
    // 禁止使用空字符类
    'no-empty-character-class': 2,
    // 禁止使用空模式
    'no-empty-pattern': 2,
    // 禁止使用eval
    'no-eval': 2,
    // 禁止使用ex-assign
    'no-ex-assign': 2,
    // 禁止使用扩展原生
    'no-extend-native': 2,
    // 禁止使用extra-bind
    'no-extra-bind': 2,
    // 禁止使用extra-boolean-cast
    'no-extra-boolean-cast': 2,
    // 禁止使用extra-parens
    'no-extra-parens': [2, 'functions'],
    // 禁止使用fallthrough
    'no-fallthrough': 2,
    // 禁止使用浮点数
    'no-floating-decimal': 2,
    // 禁止使用func-assign
    'no-func-assign': 2,
    // 禁止使用implied-eval
    'no-implied-eval': 2,
    // 禁止使用inner-declarations
    'no-inner-declarations': [2, 'functions'],
    // 禁止使用无效的正则表达式
    'no-invalid-regexp': 2,
    // 禁止使用不规则的空格
    'no-irregular-whitespace': 2,
    // 禁止使用iterator
    'no-iterator': 2,
    // 禁止使用label-var
    'no-label-var': 2,
    'no-labels': [
      2,
      {
        // 禁止使用标签
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    // 禁止使用单独的块
    'no-lone-blocks': 2,
    // 禁止混合空格和tab
    'no-mixed-spaces-and-tabs': 2,
    // 禁止使用多个空格
    'no-multi-spaces': 2,
    // 禁止使用多个字符
    'no-multi-str': 2,
    // 禁止使用多个空行
    'no-multiple-empty-lines': [
      2,
      {
        // 最多允许一个空行
        max: 1,
      },
    ],
    // 禁止使用本地重新赋值
    'no-native-reassign': 2,
    // 禁止使用原生赋值
    'no-negated-in-lhs': 2,
    // 禁止使用new对象
    'no-new-object': 2,
    // 禁止使用new require
    'no-new-require': 2,
    // 禁止使用new symbol
    'no-new-symbol': 2,
    // 禁止使用new wrappers
    'no-new-wrappers': 2,
    // 禁止使用对象调用
    'no-obj-calls': 2,
    // 禁止使用八进制
    'no-octal': 2,
    // 禁止使用八进制转义
    'no-octal-escape': 2,
    // 禁止使用路径拼接
    'no-path-concat': 2,
    // 禁止使用proto
    'no-proto': 2,
    // 禁止重新声明
    'no-redeclare': 2,
    // 禁止使用正则表达式空格
    'no-regex-spaces': 2,
    // 禁止在return语句中使用赋值
    'no-return-assign': [2, 'except-parens'],
    // 禁止自身比较
    'no-self-assign': 2,
    // 禁止自身比较
    'no-self-compare': 2,
    // 禁止使用序列
    'no-sequences': 2,
    // 禁止使用被限制的名字
    'no-shadow-restricted-names': 2,
    // 禁止函数前空格
    'no-spaced-func': 2,
    // 禁止使用稀疏数组
    'no-sparse-arrays': 2,
    // 禁止在super调用前使用this
    'no-this-before-super': 2,
    // 禁止抛出字面量
    'no-throw-literal': 2,
    // 禁止行尾空格
    'no-trailing-spaces': 2,
    // 禁止未定义
    'no-undef': 0,
    // 禁止未定义初始化
    'no-undef-init': 2,
    // 禁止未预期的多行
    'no-unexpected-multiline': 2,
    // 禁止未修改的循环条件
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [
      0,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'no-useless-call': 2,
    // 禁止无用调用
    'no-useless-computed-key': 2,
    // 禁止无用计算键
    'no-useless-constructor': 2,
    // 禁止无用构造函数
    'no-useless-escape': 0,
    // 禁止无用转义
    'no-whitespace-before-property': 2,
    // 禁止属性前空格
    'no-with': 2,
    'one-var': [
      2,
      {
        initialized: 'never',
      },
    ],
    // 要求操作符换行
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    // 要求块语句用空行填充
    'padded-blocks': [2, 'never'],
    // 要求单引号
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // 末尾是否分号always带有  never不带有
    semi: [2, 'always'],
    // 分号后面必须有一个空格
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    // 块之前必须有一个空格
    'space-before-blocks': [2, 'always'],
    // 函数括号之前不能有空格
    'space-before-function-paren': [2, 'never'],
    // 括号内部不能有空格
    'space-in-parens': [2, 'never'],
    // 操作符之间必须有一个空格
    'space-infix-ops': 2,
    // 非单词操作符之间必须有一个空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    // 注释必须有一个空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ',',
        ],
      },
    ],
    // 模板字符串中必须有一个空格
    'template-curly-spacing': [2, 'never'],
    // 强制使用isNaN()
    'use-isnan': 2,
    // 强制使用validTypeof
    'valid-typeof': 2,
    // 强制使用wrapIife
    'wrap-iife': [2, 'any'],
    // 强制使用yieldStarSpacing
    'yield-star-spacing': [2, 'both'],
    // 强制使用yoda
    yoda: [2, 'never'],
    // 强制使用const
    'prefer-const': 2,
    // 禁止debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 强制对象属性的括号
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false,
      },
    ],
    // 强制数组的括号
    'array-bracket-spacing': [2, 'never'],
  },
  overrides: [
    {
      files: ['*.html'],
      processor: 'vue/.vue',
    },
  ],
};
