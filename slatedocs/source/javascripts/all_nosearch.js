// This file is part of the slatedocs/slate project.
// Modified by TIBCO Jaspersoft:
// - Feb 13 2021: added script for Google analytics, added custom `_fixlinks` script

//= require ./lib/_energize
//= require ./app/_copy
//= require ./app/_toc
//= require ./app/_lang

/* Custom scripts */
//= require ./app/_ga
//= require ./app/_fixlinks
/* End of custom scripts */

function adjustLanguageSelectorWidth() {
  const elem = $('.dark-box > .lang-selector');
  elem.width(elem.parent().width());
}

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });

  $(window).resize(function() {
    adjustLanguageSelectorWidth();
  });
  adjustLanguageSelectorWidth();
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
