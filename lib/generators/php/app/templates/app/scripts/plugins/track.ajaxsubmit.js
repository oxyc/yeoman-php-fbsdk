/*globals _gaq:true define:true */

// Log all jQuery AJAX requests to Google Analytics
// See: http://www.alfajango.com/blog/track-jquery-ajax-requests-in-google-analytics/

define([
    'jquery'
], function($) {
  $(document).ajaxSend(function(event, xhr, settings) {
    event = event; // jshint
    xhr = xhr; // jshint
    _gaq.push(['_trackPageview', settings.url]);
  });
});
