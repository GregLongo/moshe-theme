# Moshe WordPress theme

Hi! I'm Moshe, an eLearning platform with all the stuff. I'm made from timber and twigs. I'm sassy and bemmy, i'll watch your web and sync your browser anyday. I'm down with the ACF, the Wu, and anything that goes Zoom. 

## Installation and usage

- Set up a WordPress install with the Timber plugin
- Set Up Advanced Custom Fields(https://www.advancedcustomfields.com).
- Change Proxy_Target to local site uri
- `npm run start` to develop locally
- `npm run build` to generate the final theme


The actual, usable WordPress theme is the contents of the `build` folder. Upload it to your live site.

Be careful not to delete or overwrite the `acf-json` folder on the server; this folder should be manually downloaded to the root of your local repo whenever you change ACF configuration, but it should never exist in the `build` folder. The live version of this folder is canonical.


----greg's modifications from https://github.com/75th/timber-webpack-starter-theme -----
- renamed theme-name.js and theme-name.scss
- in webpack.config.js changed  webpack-hot-middleware/client to webpack-hot-middleware/client?reload=true
- in start.js below `${PATHS.base()}/compiled/css/*.css`, added
	`${PATHS.base()}/templates/*.twig`,
    `${PATHS.base()}/*.php`,