# crime-analyser

> A simple VueJS web application to analyze crime data (www.cityOfChicago.org),
> Main features include Vue, WebPack, Vue Router, ExpressJS, VueX and loaders. (understand package.json to know more)

>This application is to demonstrate how easily we can build a simple web app in very short interval of time using above 
>features

## Build Setup

``` bash

# Clone the project
git clone https://github.com/pnaika/crime-analyzer.git

# install dependencies
npm install

# Run scripts that are defined in package.json
# serve with hot reload of server at localhost:3000 (Uses nodemon for auto reload of a serve)
npm run server

# Open another terminal
# Serve with hot reload of application at localhost:8080 (This runs the actual application)
npm run start

# This app has two screens, Shows the list of Crimes in Chicago (Data is captured from cityOfChicago.org).
Also has few components for filtersets, api's are defined in server.js to get list of crimes, list of crime per primaryType,
list of primaryTypes and crime details per case_number.

#VueX store is used for state management (refer store.js)

Want to learn more about me?
www.prashanthpnaika.com

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
