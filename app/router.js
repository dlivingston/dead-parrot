import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts');
  this.route('post', { path: '/post/:post_id'});
  this.route('home');
  this.route('new-post');
});

export default Router;
