import Ember from 'ember';

var IssueRoute = Ember.Route.extend({

  model: function(params) {
    return this.store.find('issue', params.issue_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('issues').set('expandedIssueId', model.get('id'));
  },

  deactivate: function() {
    this.controllerFor('issues').set('expandedIssueId', null);
    this.controllerFor('issues').set('issueExists', true);
    this.controllerFor('issues').set('savedIssueTitle', this.controller.content._data.title);
  }

});

export default IssueRoute;