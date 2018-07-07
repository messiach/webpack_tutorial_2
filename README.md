-- SCSS Files --
#1 - SCSS files are based on the SASS language which translates down to CSS
#2 - To get the SCSS files to work with webpack, we need a few things:

#A --> sass-loader to load the scss files
#B --> node-sass to translate the scss files to css
#C --> css-loader to load the css files

#3 - Now at this point, we could, in some way, load the CSS generated to the javascript, however it is easier to simply push all of this generated CSS to one CSS file then 'import' that file via the usual method (style-loader).

#4 - To generate one CSS file from all of the translated SCSS files, we use 'extract-text-webpack-plugin'. 

-- ES6 Features --
#1 - Not all browsers support ES6 Javascript features yet. 
#2 - Webpack understand ES6 but does not convert on its own to any other version
#3 - We use 'babel-core' to translate ES6 to ES5 which if more supported.
#4 - We will need to define some rules for 'babel-core' to translate correctly, so we need 'babel-preset-es2015' as well, which is the babel-core ruleset for ES5 javascript.  
#4 - We then also need 'babel-loader' then to load the translated ES5 javascript into the webpack flow so it can be integrated into the application. 

