/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-jwplayer',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included(app) {
    while (app.app) {
      app = app.app;
    }

    this.eachAddonInvoke('included', [app]);
    this._super.included.apply(this, [app]);

    this.app.import('vendor/jwplayer-7.4.4/jwplayer.js');
    this.app.import('vendor/jwplayer-7.4.4/jwplayer.shim.js', {
      type: 'vendor',
      exports: { 'jwplayer': ['default'] }
    });
    this.app.import('vendor/jwplayer-7.4.4/jw-icons.ttf', {
      destDir: '/'
    });
    this.app.import('vendor/jwplayer-7.4.4/jw-icons.woff', {
      destDir: '/'
    });
    this.app.import('vendor/jwplayer-7.4.4/provider.caterpillar.js');

    this.app.import('vendor/jwplayer-7.4.4/provider.youtube.js');
  },
};
