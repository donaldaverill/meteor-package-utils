if (Meteor.isServer) {
  Tinytest.add('Utils - defined on server', (test) => {
    test.notEqual(Utils, undefined, 'Expected ' +
      'Utils to be defined on the server.');
  });
}

if (Meteor.isClient) {
  Tinytest.add('Utils - defined on client', (test) => {
    test.notEqual(Utils, undefined, 'Expected ' +
      'Utils to be defined on the client.');
  });
}

Tinytest.add('Validate email', (test) => {
  test.isTrue(Utils.validateEmail('true@example.com'));
  test.isFalse(Utils.validateEmail('example.com'));
  test.isFalse(Utils.validateEmail('nothing@'));
  test.isFalse(Utils.validateEmail(null));
  test.isFalse(Utils.validateEmail(1));
});

Tinytest.add('Repeat string', (test) => {
  test.length(Utils.repeat('-', 10), 10);
});
