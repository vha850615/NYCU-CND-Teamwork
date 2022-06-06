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

module.exports = {
  defaultStrategy,
  sharonStrategy,
};
