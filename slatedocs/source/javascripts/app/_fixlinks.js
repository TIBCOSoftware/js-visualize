//= require ../lib/_jquery

// Fix all anchor links:
// - replace url placeholder with proper winow location part for better local development
// - add _blank target to all non-local links

jQuery(document).ready(function () {
  var URL_PART_TO_REPLACE = "CONTENT-URL";

  jQuery('a[href^="https://"]').each(function () {
    var oldUrl = jQuery(this).attr("href");
    var newUrl = oldUrl.replace(URL_PART_TO_REPLACE, window.location.host.split(".")[0]);
    jQuery(this).attr("href", newUrl);
    jQuery(this).attr("target", "_blank");
  });
});
