const server = {};
const os = Npm.require('os');

server.hostname = () => {
  return os.hostname();
};

server.addresses = () => {
  let _i;
  let _len;
  let _ref;
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const k in interfaces) {
    if (interfaces.hasOwnProperty(k)) {
      _ref = interfaces[k];
      for (_i = 0, _len = _ref.length; _i < _len; _i = _i + 1) {
        address = _ref[_i];
        if (address.family === 'IPv4' && !address.internal) {
          addresses.push(address.address);
        }
      }
    }
  }
  return addresses;
};

server.isDev = () => {
  return process.env.NODE_ENV === 'development';
};

server.logStart = (appName) => {
  if (server.isDev()) {
    const app = appName ? appName : 'Untitled Application';
    const HR = Utils.repeat('_', 45);
    const host = process.env.ROOT_URL;
    console.log('\n' + 'Server Started'.red);
    console.log(HR.blue);
    console.log(' Application : '.grey, app.green);
    console.log(' Host : '.grey, host.green);
    console.log(' Host Name : '.grey, server.hostname().green);
    console.log(' Environment : '.grey, process.env.NODE_ENV.green);
    console.log(' IP Address : '.grey, server.addresses()[0].green);
    return console.log(HR.green);
  }
  return null;
};

Utils.Server = server;
