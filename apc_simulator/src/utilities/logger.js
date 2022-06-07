const moment = require('moment');
const uuidv4 = require('uuid').v4;
const NodeCache = require('node-cache');
const { createLogger, format, transports } = require('winston');
const { timestamp, printf, combine, splat, label } = format;

const customFormat = printf(({ timestamp, label, message, level, ...metadata }) => {
  return `[${label}] | ${timestamp} | ${level} | ${message} | ${JSON.stringify(metadata)}`;
});

const func = (loggerLabel) => {
  const logger = createLogger({
    level: 'debug',
    format: combine(
      timestamp(),
      label({
        label: loggerLabel,
        message: false,
      }),
      splat(),
      customFormat
    ),
    transports: [new transports.Console({ level: 'debug' })],
  });

  logger.cache = new NodeCache();

  const getDelHandleData = (handle) => {
    const cacheData = logger.cache.get(handle);
    if (cacheData === undefined) {
      return null;
    }
    logger.cache.del(handle);

    return cacheData;
  };

  logger.begin = (metadata) => {
    const handle = uuidv4();
    logger.cache.set(handle, { ts: moment(), metadata });

    return handle;
  };

  localeTimeStamp = new Date().toLocaleString();
  logger.end = (handle, metadata = {}, message = 'time stamp | ' + localeTimeStamp + ' | complete the process') => {
    const cacheData = getDelHandleData(handle);
    if (!cacheData) return;

    const duration = moment().diff(cacheData.ts);

    logger.info(message, { _duration: duration, ...cacheData.metadata, ...metadata });
  };

  localeTimeStamp = new Date().toLocaleString();
  logger.fail = (handle, metadata = {}, message = 'time stamp | ' + localeTimeStamp + ' the process is faulted') => {
    const cacheData = getDelHandleData(handle);
    if (!cacheData) return;

    const duration = moment().diff(cacheData.ts);

    logger.error(message, { _duration: duration, ...cacheData.metadata, ...metaData });
  };

  return logger;
};

module.exports = func;
