module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended' 
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      
      'no-console': 'warn',
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'none',
          tabWidth: 2,
          printWidth: 100,
          bracketSpacing: true
        }
      ]
    }
  };
  