import Ember from 'ember';
import layout from '../templates/components/jwplayer';

export default Ember.Component.extend({
  layout: layout,
  key: null,
  file: null,

  _initializeJwplayer: Ember.on('didInsertElement', function() {
    jwplayer.key = this.get('key');
    console.log(jwplayer)

    return jwplayer(this.$().get(0)).setup({
      file: this.get('file')
    });
  })
});
