#Basic Grunt Boilerplate

> Grunt boilerplate including Sass, autoprefixer, JSHint, RequireJS, and browser reload tools


## Getting Started
This boilerplate requires at least Grunt `~0.4.0` and Sass `~3.3.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. 

If you haven't used [Sass](http://sass-lang.com/) before, be sure to check out the [Install](http://sass-lang.com/install) guide, as it explains how to get Sass up and running on your machine. 


Once you have a basic understanding of Grunt and Sass you can follow these instructions to get this boilerplate working.

To get started, clone this repository to your computer.

Then run this in terminal to get started:

	cd /path/to/where/you/download/basic-grunt-setup
	npm install

This will get all of Grunt's files on your machine. Now you can start automating some tasks! Be sure to run each task in a seperate terminal window (or tab), as it each watches files and can't run concurrently without showing output in the terminal window.

Run `grunt dev-sass` to get your sass working. It will also autoprefix your CSS so you don't have worry about browswer prefixes. Then it will push your changes to your projects pages without refreshing so you can see your changes live.

Run `grunt dev-js` to see JSHint. It will not concentrate your JavaScript files.

Run `grunt dev-reload` to refresh the page in your browswer anytime there is a change to a JavaScript, HTML, or PHP file. You can run `grunt dev-html` to refresh only on HTML and PHP file changes.


##Reading files for production

This is mainly to concentrate your RequireJS build. To do this run `grunt dev-prod`. In your HTML files delete the scripts to allow Grunt to reload the page and switch what script is commented out for RequireJS. Then you're ready to go live!