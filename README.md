# DA219A-Lab2

# Project Title
DA219A - Lab2

## Description
Training in fullstack development using React, AJAX, and Webpack


### Dev-Dependencies
* @babel/core: v7.17.9
* @babel/plugin-transform-runtime: v7.17.0
* @babel/preset-env: v7.16.11
* @babel/preset-react: v7.16.7
* babel-loader: v8.2.4
* css-loader: v6.7.1
* html-webpack-plugin: v5.5.0
* sass: v1.50.0
* sass-loader: v12.6.0
* style-loader: v3.3.1
* webpack: v5.72.0
* webpack-bundle-analyzer: v4.5.0
* webpack-cli: v4.9.2
* webpack-dev-server": v4.8.1


### Dependencies
* concurrently: v7.1.0
* dotenv: v16.0.0
* express: v4.17.3
* mongoose: v6.2.10
* react: v18.0.0
* react-dom: v18.0.0


### Installing
* Clone from github https://github.com/sam-hur/DA219A-Lab2 or download as zip.
* Ensure `npm` is configured on the system
* If required to install dependencies manually:
	> automatically install all dependencies
	```
		npm i
	```
	> manually install dependencies
	```
		npm i -D @babel/core, @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader webpack webpack-bundle-analyzer webpack-cli webpack-dev-server
	```
	```
		npm i -S dotenv express mongoose concurrently react react-dom
	```

### Executing the program (Terminal)
* Step 1: Open a UNIX terminal e.g., GitBash
* Step 2: Make sure npm is installed
* Step 2: Download the appropriate NPM modules according to the package.json file
* Step 3: (Optional) Download nodemon globally using npm.
* Step 4:
			Run in CLI:
			```
				npm run build
			```
			Then run:
			> express server only!
			```
				npm run server
			```
			> webpack server only! (development)
			```
				npm run start
			```
			> run express and webpack concurrently
			```
				npm run concurrent
			```
			
			
* Step 4: The app should now run. Tested on Chrome and Microsoft Edge.
* Step 5: If the app did not open automatically, then navigate manually to the following address:
			```
				http://localhost:3000
			```
* Step 6: Enjoy!

## Authors
Sam Hurenkamp

## Version History
* 1.0.0
    * Initial Release

## License
ISC
