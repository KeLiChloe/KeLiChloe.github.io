$(document).ready(function() {
  $('a').removeClass('waves-effect waves-light');

  if ($('#toc-sidebar').length) {
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }
});
