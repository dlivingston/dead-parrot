import DS from 'ember-data';

export default DS.Model.extend({
    // title: DS.attr(),
    // content: DS.attr(),
    // attachment: DS.attr()
    posts: DS.hasMany('post')
});
