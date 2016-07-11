require(
    [
        'jquery',
        'modules/pubsub',

        // Angular-specific dependencies
        'vendor/angular-custom'
    ],

    function(

        $,
        pubsub,

        // Angular-specific
        angular

    ) {

        'use strict';

        var home = {

            init: function() {

                $( this.initUI.bind( this ) );
            },

            initUI: function() {

                this.initAngular();

            },

            initAngular: function() {

                // App/Module definition
                angular.module( 'Home',
                    [
                        'ngAnimate'
                    ]
                );

                /*
                 * Bootstrap application dynamically to `document` as there is no access to global header elements inside AEM.
                 */
                angular.bootstrap( document, [ 'Home' ] );
            }

        };

        home.init();
    }
);