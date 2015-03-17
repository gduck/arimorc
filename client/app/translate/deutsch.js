'use strict';

angular.module('arimorcApp')
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('de', {
      'TITLE': 'Hallo',
      'FOO': 'Dies ist ein Paragraph',
      'BUTTON_LANG_DE': 'Deutsch',
      'BUTTON_LANG_EN': 'English',
      'BUTTON_LANG_FR': 'Français'
    });
  }]);

