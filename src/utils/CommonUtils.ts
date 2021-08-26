/** Loggers */
export const loggerInfo = (...params: unknown[]): void =>
  // eslint-disable-next-line no-console
  console.log(...params);

export const loggerError = (...params: unknown[]): void =>
  // eslint-disable-next-line no-console
  console.log('error: ', ...params);
