/*
 * Clean Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function( grunt ) {

    grunt.config( 'clean', {
        options: {
            force: true
        },
        css: [
            'library/css/**/*',
            'library/css'
        ],
        dev: [
            '<%= buildPath.dev %>'
        ],
        distPre: [
            '<%= buildPath.dist %>'
        ],
        distPost: [
            '<%= buildPath.dist %>grunt',
            '<%= buildPath.dist %>**/less',
            '<%= buildPath.dist %>**/build.txt',
            '<%= buildPath.dist %>**/common/css/config'
        ],
        lessTmp: [
            'library/less/tmp/**/*',
            'library/less/tmp'
        ]
    });

    grunt.loadNpmTasks( 'grunt-contrib-clean' );
};