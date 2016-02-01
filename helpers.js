if (Package.templating && Package['reactive-var']) {
  const isDev = new Package['reactive-var'].ReactiveVar(false);
  Meteor.call('fourquet:isDevEnvironment', (error, result) => {
    isDev.set(result);
  });
  Package.templating.Template.registerHelper('isDev', () => {
    return isDev.get();
  });
}
