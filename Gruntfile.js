module.exports = function( grunt ) {

    /* Configure */
    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
        buildRoot: '/',
        revision: 0, // updated via gitsvn:info task
        buildName: {
            dev: '<%= pkg.name %>-dev-build',
            dist: '<%= pkg.name %>-dist-build'
        },
        buildPath: {
            dev: '<%= buildRoot %><%= buildName.dev %>/',
            dist: '<%= buildRoot %><%= buildName.dist %>/'
        }
    });

    /* Load tasks */
    grunt.loadTasks( 'grunt' );

    grunt.registerTask( 'lessDev', 'Build to compile Less files during development.', [
        'clean:css',
        'clean:lessTmp',
        'append',
        'less:dev',
        'clean:lessTmp'
    ]);

};
