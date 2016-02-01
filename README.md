# Utilities for Meteor [![Build Status](https://travis-ci.org/fourquet/meteor-package-utils.svg?branch=master)](https://travis-ci.org/fourquet/meteor-package-utils)

Simple utilities for Meteor.

### Install
`meteor add fourquet:utils`

### Usage

#### On Client or Server

* Utils.repeat(*string*, *times*)
  * Repeats a *string* (String) the number of *times* (Number).

```js
const longline = Utils.repeat('-', 10);
console.log(longline); // ----------
```
* Utils.validateEmail(*email*)
  * Validates an *email* (String). Returns `true` or `false`.

```js
const isValid = Utils.validateEmail('hello@example.com');
console.log(isValid); // true
```

#### On the Server
  * Utils.Server.isDev();
    * Returns `true` if server running in `development` mode. Otherwise returns `false`.
  * Utils.Server.hostname()
    * Returns the server `hostname`.
  * Utils.Server.addresses()
    * Returns a list of the server IP addresses.
  * Utils.Server.logStart(*applicationName*)
    * Prints useful information to the server console if in `development` mode including *applicationName* (String, Optional).

```js
Meteor.startup(() => {
  const siteName =
    Meteor.settings &&
    Meteor.settings.siteName ?
    Meteor.settings.siteName :
    'No Site Name Given';
  Utils.Server.logStart(siteName);
});
```

#### Server Methods:
  * `fourquet:isDevEnvironment`
    * Returns `true` if server running in `development` mode. Otherwise returns `false`.

```js
const isDev = new ReactiveVar(false);
Meteor.call('isDev', (error, result) => {
  isDev.set(result);
});
```


#### Client Template Helpers:
  * `isDev`
    * Returns `true` if server running in `development` mode. Otherwise returns `false`.

```html
{{#if isDev}}
  You are in the Development environment!
{{/if}}
```

#### Version
0.0.3

#### License
MIT
