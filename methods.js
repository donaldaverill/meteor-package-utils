Meteor.methods({
  'fourquet:isDevEnvironment'() {
    return Utils.Server.isDev();
  },
});
