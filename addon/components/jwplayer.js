import Ember from 'ember';
import layout from '../templates/components/jwplayer';

export default Ember.Component.extend({
  layout: layout,
  key: null,
  file: null,

  _initializeJwplayer: Ember.on('didInsertElement', function() {
    var _this = this;

    return this.$().jwplayer().setup({
      file: this.get('file')
    });
  })
});
