/* eslint-disable prettier/prettier */
import EmberRouter from '@ember/routing/router';
import config from 'brochure/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('menu');
  this.route('about');
  this.route('contact');
  this.route('cart', { path: 'shopping-cart'});
  this.route('item', { path: '/item/:item_id'});
});
