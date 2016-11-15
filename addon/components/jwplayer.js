import Ember from 'ember';
import layout from '../templates/components/jwplayer';
import config from 'ember-get-config';

const { key } = config.jwplayer;

export default Ember.Component.extend({
  layout: layout,
  key: null,

  file: null,
  image: null,
  title: null,
  description: null,
  mediaid: null,

  mute: false,
  autostart: false,
  repeat: false,
  abouttext: '',
  aboutlink: 'https://www.jwplayer.com/learn-more',

  controls: true,
  width: '800',
  height: '600',
  visualplaylist: true,
  displaytitle: true,
  displaydescription: true,
  stretching: 'uniform', //uniform - exactfit - fill - none

  hlshtml: false,
  primary: 'html5', //html5 - flash
  flashplayer: '/',
  base: '/',

  ga: {},

  _initializeJwplayer: Ember.on('didInsertElement', function() {
    jwplayer.key = key;

    return jwplayer(this.$().get(0)).setup({
      file: this.get('file'),
      image: this.get('image'),
      title: this.get('title'),
      description: this.get('description'),
      mediaid: this.get('mediaid'),

      mute: this.get('mute'),
      autostart: this.get('autostart'),
      repeat: this.get('repeat'),
      abouttext: this.get('abouttext'),
      aboutlink: this.get('aboutlink'),

      controls: this.get('controls'),
      width: this.get('width'),
      height: this.get('height'),
      visualplaylist: this.get('visualplaylist'),
      displaytitle: this.get('displaytitle'),
      displaydescription: this.get('displaydescription'),
      stretching: this.get('stretching'),

      hlshtml: this.get('hlshtml'),
      primary: this.get('primary'),
      flashplayer: this.get('flashplayer'),
      base: this.get('base'),

      ga: this.get('ga'),

    })
    .on('setupError', message => {
      this.sendAction('setupError', message);
    })
    .on('error', message => {
      this.sendAction('error', message);
    })
    .on('play', oldstate => {
      this.sendAction('play', oldstate);
    })
    .on('pause', oldstate => {
      this.sendAction('pause', oldstate);
    })
    .on('complete', () => {
      this.sendAction('complete');
    })
    .on('buffer', buffer => {
      this.sendAction('buffer', buffer);
    })
    .on('bufferChange', buffer => {
      this.sendAction('bufferChange', buffer);
    })
    .on('idle', oldstate => {
      this.sendAction('idle', oldstate);
    })
    on('firstFrame', loadTime => {
      this.sendAction('idle', loadTime);
    })
    .on('time', duration => {
      this.sendAction('time', duration);
    })
    .on('mute', mute => {
      this.sendAction('mute', mute);
    })
    .on('volume', volume => {
      this.sendAction('volume', volume);
    })
    .on('fullscreen', fullscreen => {
      this.sendAction('fullscreen', fullscreen);
    });
  })
});
