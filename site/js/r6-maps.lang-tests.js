'use strict';

(function(pagecode) { //eslint-disable-line wrap-iife
  pagecode(window.jQuery, window, document, R6MapsLangTerms, R6MapsLangTermsGerman, R6MapsData);
}(function($, window, document, R6MapsLangTerms, R6MapsLangTermsGerman, R6MapsData, undefined) {

  $(function() { // equivanelt to $(document).ready() - but a bit faster
    var defaultTerms = {},
      translatedTerms = {},
      categoryKeys = [],
      floorKeys = [],
      html = '',
      outputEl = $('#output');

    defaultTerms = R6MapsLangTerms.terms;
    translatedTerms.german = R6MapsLangTermsGerman.terms;
    // add new languages here and to module import above

    categoryKeys = getFirstLevelKeys(defaultTerms, ['mapRooms']);
    floorKeys = getFirstLevelKeys(defaultTerms.mapRooms);

    html += '<h2>General Terms</h2>';
    categoryKeys.forEach(function(key) {
      html += getBlockOutput(key, defaultTerms, translatedTerms);
    });

    html += '<h2>Map Room Terms</h2>';
    floorKeys.forEach(function(key) {
      html += getBlockOutput(key, defaultTerms, translatedTerms, 'mapRooms');
    });

    outputEl.html(html);
  });

  var getFirstLevelKeys = function getFirstLevelKeys(obj, keyExceptions = []) {
    var result = [];

    for (var key in obj){
      if (obj.hasOwnProperty(key)) {
        if (!isInArray(key, keyExceptions)) {
          result.push(key);
        }
      }
    }
    return result;
  };

  var getBlockOutput = function getBlockOutput(sectionKey, defaultTerms, translatedTerms, childKey = null) {
    var translatedLanguages = [],
      defaultTermsForCompare = {},
      translatedTermsForCompare = {},
      html = '';

    for (var language in translatedTerms) {
      translatedLanguages.push(language);
      translatedTermsForCompare[language] = (childKey)
        ? translatedTerms[language][childKey]
        : translatedTerms[language];
    }

    defaultTermsForCompare = (childKey)
      ? defaultTerms[childKey]
      : defaultTerms;

    html += '<h3>' + sectionKey + '</h3>';
    html += '<table>'
    html += getBlockHeaderRowHtml(translatedLanguages);
    for (var key in defaultTermsForCompare[sectionKey]) {
      html += getBlockBodyRowHtml(
        key,
        sectionKey,
        defaultTermsForCompare,
        translatedTermsForCompare
      );
    }
    html += '</table>'
    return html;
  };

  var getBlockHeaderRowHtml = function getBlockHeaderRowHtml(translatedLanguages) {
    var html = '<tr>';
    html += '<th>Lang Term Key</th>';
    html += '<th>Default (english)</th>';
    translatedLanguages.forEach(function(language) {
      html += '<th>' + language + '</th>';
    });
    html += '</tr>';
    return html;
  };

  var getBlockBodyRowHtml = function getBlockBodyRowHtml(key, sectionKey, defaultTerms, translatedTerms) {
    var html = '';
    html += '<tr>';
    html += '<td class="key">' + key + '</td>';
    html += '<td>' + defaultTerms[sectionKey][key] + '</td>';
    for (var language in translatedTerms) {
      if(translatedTerms[language][sectionKey] && translatedTerms[language][sectionKey][key]) {
        var cssClass = (defaultTerms[sectionKey][key] === translatedTerms[language][sectionKey][key])
          ? 'identical-warning'
          : ''
        html += '<td class="' + cssClass + '">' + translatedTerms[language][sectionKey][key] + '</td>';
      } else {
        html += '<td class="not-defined">Not defined</td>';
      }
    }
    html += '</tr>';
    return html;
  };

  var isInArray = function isInArray(value, array) {
    return array.indexOf(value) > -1;
  }

}));
