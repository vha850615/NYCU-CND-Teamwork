module.exports = {
  cron: {
    measurePeriod: 10000,
    paramsPeriod: 15000,
  },
  nats: {
    connection: '127.0.0.1:4222',
    name: 'testbed',
    stream: 'testbed_stream',
    subject: 'testbed.subject',
    consumer: 'testbed_consumer',
  },
  domainService: {
    apc: {
      endpoint: 'http://127.0.0.1:3031',
      port: 3031,
    },
    params: {
      endpoint: 'http://127.0.0.1:3032',
      port: 3032,
    },
  },
  // measureService/index.js
  measure: {
    types: ['SHARON', 'RIB_EYE', 'FILET'],
  },
  // strategyUtil.js, strategyUtil.test.js
  strategy: {
    defaultStrategyTemp: 100,
    sharonStrategyPeriod: 20,
    filetStrategyPeriod: 30,
    fakeThickness: 2.0,
    fakeMoisture: 0.65,
    fakeTFactor: 0.5,
    fakeMFactor: 0.5,
  },
  // messageUtil.test.js
  message: {
    fakeFactor: 0.5,
  },
  // src/index.js
  globalCache: {
    TFactor: 0.5,
    MFactor: 0.5,
  }
};
