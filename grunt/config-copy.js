/*
 * Copy Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function( grunt ) {

    grunt.config( 'copy', {
        dev: {
            src: [
                '**/.*',
                '**',
                '!.git',
                '!**/less/**',
                '!package.json',
                '!Gruntfile.js',
                '!**/README.md',
                '!**/css/config/**',
                '!**/node_modules/**'
            ],
            dest: '<%= buildPath.dev %>'
        },
        dist: {
            src: [
                '**/.*',
                '**',
                '!**/less/**',
                '!package.json',
                '!Gruntfile.js',
                '!**/README.md',
                '!**/css/config/**',
                '!**/node_modules/**',
            ],
            dest: '<%= buildPath.dist %>'
        }
    });

    grunt.config( 'copy:less', {
        dev: {
            src: [
                '**/less/**'
            ],
            dest: '<%= buildPath.dev %>'
        },
        dist: {
            src: [
                '**/less/**'
            ],
            dest: '<%= buildPath.dist %>'
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-copy' );
};