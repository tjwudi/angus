'use strict';

module.exports = {

    // A list of bower dependencies this app will use.
    // Each package will be installed using the command 'bower install <package>'
    // Remember that you can also use git repo's, local folders, URL's and specify version and/or tags
    // Please see http://bower.io/docs/api/#install for more info
    packages: [
        'http://code.jquery.com/jquery-2.1.0.min.js',
        'bootstrap-sass-official'
    ],

    // A list of files which this app will actually use from the bower packages above.
    // Angus will look inside bower_components/ for these files.
    libIncludes: {

        js: [
            'jquery-2.1.0.min/index.js'
        ],

        tpl: [],

        scss: [
            // Core variables and mixins
            'bootstrap-sass-official/assets/stylesheets/bootstrap/_variables.scss',
            'bootstrap-sass-official/assets/stylesheets/bootstrap/_mixins.scss',

            // Reset
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_normalize.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_print.scss',

            // Core CSS
            'bootstrap-sass-official/assets/stylesheets/bootstrap/_scaffolding.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_type.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_code.scss',
            'bootstrap-sass-official/assets/stylesheets/bootstrap/_grid.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_tables.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_forms.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_buttons.scss',

            // Components
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_component-animations.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_glyphicons.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_dropdowns.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_button-groups.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_input-groups.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_navs.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_navbar.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_breadcrumbs.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_pagination.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_pager.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_labels.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_badges.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_jumbotron.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_thumbnails.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_alerts.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_progress-bars.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_media.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_list-group.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_panels.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_wells.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_close.scss',

            // Components w/ JavaScript
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_modals.scss'
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_tooltip.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_popovers.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_carousel.scss',

            // Utility classes
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_utilities.scss',
            // 'bootstrap-sass-official/assets/stylesheets/bootstrap/_responsive-utilities.scss',
        ]
    },

    // In addition to the default task list (core/defaultTasks.js), also execute these
    gruntTasksAdd: [
        'karma'
    ],

    // ngconstant will parse this object and allow you to access them in your app
    constants: {}
};
