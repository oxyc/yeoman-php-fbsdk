// Set the require.js configuration for your application.
require.config({
    // Initialize the application with the main application
    deps: ['main']

  , paths: {
      // JavaScript folders.
      // eg. require(['jquery', 'canvas', 'routes/sub'],
        libs:                   'libs'
      , plugins:                'plugins'
      , templates:              'templates'

      // Libraries.
      , jquery:                 '../components/jquery/jquery'
      , lodash:                 '../components/lodash/lodash'
      , backbone:               '../components/backbone/backbone'
      , modernizr:              '../components/backbone/modernizr'
      , toast:                  '../components/toast/src/toast'

      // jQuery plugins
      , 'jquery-placeholder':   '../components/jquery-placeholder/jquery.placeholder'

      // Bootstrap plugins
      , 'bootstrap-affix':      '../components/bootstrap/js/bootstrap-affix'
      , 'bootstrap-alert':      '../components/bootstrap/js/bootstrap-alert'
      , 'bootstrap-button':     '../components/bootstrap/js/bootstrap-button'
      , 'bootstrap-carousel':   '../components/bootstrap/js/bootstrap-carousel'
      , 'bootstrap-collapse':   '../components/bootstrap/js/bootstrap-collapse'
      , 'bootstrap-dropdown':   '../components/bootstrap/js/bootstrap-dropdown'
      , 'bootstrap-modal':      '../components/bootstrap/js/bootstrap-modal'
      , 'bootstrap-popover':    '../components/bootstrap/js/bootstrap-popover'
      , 'bootstrap-scrollspy':  '../components/bootstrap/js/bootstrap-scrollspy'
      , 'bootstrap-tab':        '../components/bootstrap/js/bootstrap-tab'
      , 'bootstrap-tooltip':    '../components/bootstrap/js/bootstrap-tooltip'
      , 'bootstrap-transition': '../components/bootstrap/js/bootstrap-transition'
      , 'bootstrap-typeahead':  '../components/bootstrap/js/bootstrap-typeahead'
  }
  , shim: {
      lodash: { exports: '_' }
    , jquery: { exports: '$' }
    , backbone: { exports: 'Backbone', deps: ['lodash', 'jquery'] }
    , modernizr: { exports: 'Modernizr' }

    , 'plugins/backbone.analytics': { deps: ['backbone'] }

    , 'jquery-placeholder':   { exports: '$', deps: ['jquery'] }

    , 'bootstrap-affix':      { exports: '$', deps: ['jquery'] }
    , 'bootstrap-alert':      { exports: '$', deps: ['jquery'] }
    , 'bootstrap-button':     { exports: '$', deps: ['jquery'] }
    , 'bootstrap-carousel':   { exports: '$', deps: ['jquery'] }
    , 'bootstrap-collapse':   { exports: '$', deps: ['jquery'] }
    , 'bootstrap-dropdown':   { exports: '$', deps: ['jquery'] }
    , 'bootstrap-modal':      { exports: '$', deps: ['jquery'] }
    , 'bootstrap-popover':    { exports: '$', deps: ['jquery'] }
    , 'bootstrap-scrollspy':  { exports: '$', deps: ['jquery'] }
    , 'bootstrap-tab':        { exports: '$', deps: ['jquery'] }
    , 'bootstrap-tooltip':    { exports: '$', deps: ['jquery'] }
    , 'bootstrap-transition': { exports: '$', deps: ['jquery'] }
    , 'bootstrap-typeahead':  { exports: '$', deps: ['jquery'] }
  }
});
