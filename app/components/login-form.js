import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service(),

  actions: {
    authenticateWithFacebook() {
      this.get('session').authenticate('authenticator:torii', 'facebook');
    }
  }
});
