import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('new');
  this.route('archive');
  this.route('detail', {path: '/:id'});
  this.route('new-space');
});

export default Router;
