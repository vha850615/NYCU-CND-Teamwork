const { sharonStrategy, defaultStrategy } = require('../strategyUtil');
const strategy = require('config');

describe('Module strategyUtil', () => {
  const fakeThickness = strategy.fakeThickness;
  const fakeMoisture = strategy.fakeMoisture;
  const fakeTFactor = strategy.fakeTFactor;
  const fakeMFactor = strategy.fakeMFactor;

  it('Method sharonStrategy', () => {
    const res = sharonStrategy(fakeThickness, fakeTFactor);

    expect(res).toStrictEqual({
      period: strategy.sharonStrategyPeriod,
      temperature: (fakeThickness * fakeTFactor).toFixed(2),
    });
  });

  it('Method defaultStrategy', () => {
    const res = defaultStrategy(fakeMoisture, fakeMFactor);

    expect(res).toStrictEqual({
      period: (fakeMoisture * fakeMFactor).toFixed(2),
      temperature: strategy.defaultStrategyTemp,
    });
  });

  it('Method filetStrategy', () => {
    const res = filetStrategy(fakeThickness, fakeTFactor);

    expect(res).toStrictEqual({
      period: strategy.filetStrategyPeriod,
      temperature: (fakeThickness * fakeTFactor + 20).toFixed(2),
    });
  });
});
