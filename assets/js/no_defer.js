$(document).ready(function() {
  $('table').each(function() {
    if (document.documentElement.getAttribute("data-theme") == "dark") {
      $(this).addClass('table-dark');
    } else {
      $(this).removeClass('table-dark');
    }

    if ($(this).parents('code').length == 0) {
      $(this).addClass('table-hover');
    }
  });
});
