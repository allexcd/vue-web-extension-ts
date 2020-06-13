## fix

#### Installation:

1. `npm install` or `yarn install`
2. `npm run watch:dev` or `yarn watch:dev`. This will init the hot reload server
3. Enable development code in Chrome by:
   - Go to `chrome://extensions` and turn on Development mode
   - Click `Load unpacked` button and link the `/dist` folder of the project
   - Enable the extension

### Routing

- routing is already installed

#### HTTP Requests

- These can be performed using the installed axios library. Usage examples [here](https://github.com/axios/axios)

### Store

- Vuex store is installed and a basic usage example can be seen in the `background.ts`. Usage examples [here](https://vuex.vuejs.org/guide/) or [here](https://itnext.io/vuex-made-simple-getting-started-6bf229d432cf)

### CSS

- Sass can be used inline or as separate files. Examples are provided for both cases in the `pages/Index.vue` and `options/App.vue`

### Components Library:

- ElementsUI is the installed components library. Full list of components is available [here](https://element.eleme.io/?ref=madewithvuejs.com#/en-US/component/installation)

#### Issues

##### Element UI

- theme styles are not loaded using babel. Issue to be followed [here](https://github.com/ElementUI/babel-plugin-component/issues/17).
  Once the issue is solved: - remove `import 'element-ui/lib/theme-chalk/index.css';` from the entry file `popup.ts` - add this line `"styleLibraryName": "element-theme-default"` in `.babelrc` as a new prop, under `libraryName`

##### Polyfills

- fail to assign the imported polyfills to `global.navigator` so the extension might not work on other browsers aside Chrome. Follow the TODO comments related to this when research will be started to tackle this
