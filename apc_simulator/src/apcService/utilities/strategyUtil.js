const strategy = require('config');

const defaultStrategy = (moisture, mFactor) => {
  const period = (moisture * mFactor).toFixed(2);

  return {
    period,
    temperature: strategy.defaultStrategyTemp,
  };
};

const sharonStrategy = (thickness, tFactor) => {
  const temperature = (thickness * tFactor).toFixed(2);

  return {
    period: strategy.sharonStrategyPeriod,
    temperature,
  };
};

const filetStrategy = (thickness, tFactor) => {
  const period = 30;
  const temperature = (thickness * tFactor + 20).toFixed(2);
  
  return {
    period,
    temperature,
  };
};

module.exports = {
  defaultStrategy,
  sharonStrategy,
  filetStrategy,
};
