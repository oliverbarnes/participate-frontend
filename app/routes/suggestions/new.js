import Ember from 'ember';

var SuggestionsNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('suggestion', params);
  },

  actions: {
    submit: function() {
      var _this = this;
      var suggestion = this.get('controller.model');
      suggestion.save().then(function(model) {
        //_this.transitionTo('initiatives.show'); //transition works but not show typed suggestions
        _this.transitionTo('suggestions.show' , model.get('id'));
        console.log('model:', model);
        console.log('id:', model.get('id'));
      });
    }
  }
});

export default SuggestionsNewRoute;