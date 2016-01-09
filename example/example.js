const longline = Utils.repeat('-', 10);
console.log(longline);

const isValid = Utils.validateEmail('hello@example.com');
console.log(isValid);

if (Meteor.isServer) {
  Meteor.startup(() => {
    const siteName =
      Meteor.settings &&
      Meteor.settings.siteName ?
      Meteor.settings.siteName :
      'No Site Name Given';
    Utils.Server.logStart(siteName);
  });
}
