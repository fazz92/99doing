module.exports = function ( grunt ) {

    'use strict';

    grunt.config( 'append', {
        less: {}
    });

    grunt.registerMultiTask( 'append', 'Description', function() {

        var tmpDir = 'library/less/tmp/'
            , files = grunt.option( 'files' )
            , rootSrcPath = 'library/less/'
            , rootFiles = createFileList( rootSrcPath , files )
            ;

        // Cleans then creates `library/less/tmp` directory
        grunt.file.mkdir( tmpDir );
            
        // Duplicate root LESS files (mgmGrand) into tmp directory using property name
        grunt.log.write( 'Duplicating and appending files...');
        createTmpFiles( );

        grunt.log.ok();

        function createTmpFiles( ) {

            rootFiles.forEach( function( file ) {

                grunt.file.copy( rootSrcPath + file, tmpDir + file );
            });
        }

        function createFileList( path , files) {
            var filesArr;

            if ( files ){

                filesArr = files.split(',');
                return grunt.file.expand( { cwd: path },filesArr );
            }

            return grunt.file.expand( { cwd: path }, [
                '**/*.less',
                '**/bootstrap.css'
            ] );
        }
    });
};