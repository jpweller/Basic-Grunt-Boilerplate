module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/build/style.css': 'assets/css/scss/style.scss'
                }
            } 
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'assets/js/page/*.js',
                'assets/js/config.js'
            ],
            options: {
                jshintrc: 'assets/js/.jshintrc'
            }
        },

        clean: {
            test: [
                'assets/js/build/*',
                'assets/css/build/*'
            ]
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: "assets/js",
                    mainConfigFile: "assets/js/config.js",
                    name: "config",
                    out: "assets/js/build/production.js",
                    include: ['libs/require.js']
                }
            }
        },

        uglify: {
            build: {
                src: 'assets/js/build/production.js',
                dest: 'assets/js/build/production.min.js'
            }
        },

        autoprefixer: {
            dist: {
                files: {
                    'assets/css/build/style.css' : 'assets/css/build/style.css'
                }
            }
        },

        browserSync: {
            files: {
                src : 'assets/css/build/style.css'
            }
        },

        watch: {
            sass: {
                files: ['assets/css/scss/**/*'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                }
            },
            js: {
                files: ['assets/js/**/*'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            html: {
                files: ['**/*.html', '**/*.php'],
                tasks: [],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },

        concurrent: {
            reload: ['watch:html', 'browserSync'],
        },

    });

    // 3. Where we tell Grunt we plan to use this plug-in.

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.

    grunt.registerTask('prod', ['clean', 'sass', 'autoprefixer', 'requirejs', 'uglify']);
    grunt.registerTask('dev-sass', ['watch:sass']); //runs Sass and autoprefixer
    grunt.registerTask('dev-js', ['watch:js']); //runs JSHint on js changes
    grunt.registerTask('dev-html', ['watch:html']); //reloads on any markup changes
    grunt.registerTask('dev-browser-sync', ['browserSync']); //injects new CSS into open page on css change
    grunt.registerTask('dev-reload', ['concurrent: reload']); //combines dev-html and dev-browser-sync
    grunt.registerTask('delete', ['clean']); //deletes all files in build directories
    grunt.registerTask('default', ['sass']);

};
