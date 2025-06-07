
// import global from 'globals'
// import tselint from 'typescript-eslint'
// import pluginHooks from 'eslint-plugin-react-hooks';
// import typescriptEslint from 'typescript-eslint'
// import react from 'eslint-plugin-react'

// export default [
//   { ignores: ['node_modules'] }, 
//   {
//     files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
//     settings: {
//       react: {
//         version: 'detect',
//       },
//       linterOptions: {
//         reportUnusedInlineConfigs: "error",
//       },
     
//       'import/resolver': {
//         typescript: true,
//         node: true,
//       },
//     },
//     languageOptions: {
//       globals: global.browser,
//     },

//   },

//   ...tselint.configs.recommended,


//   {
//     plugins: {
//       'react-hooks': pluginHooks,
//       'typescript-eslint':typescriptEslint,
//       'react':react.configs.recommended,
//     },
//     rules: {
//       'indent':['error',2]
//     },
//   },
// ]