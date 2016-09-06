/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-jwplayer',

  included(app) {
        this._super.included(app);
        this.app.import('vendor/jwplayer-7.4.4/jwplayer.js');
        this.app.import('vendor/jwplayer-7.4.4/jwplayer.shim.js', {
            type: 'vendor',
            exports: { 'jwplayer': ['default'] }
        });
    }
};
