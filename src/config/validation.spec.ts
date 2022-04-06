import { validate } from './validation';

describe('config validation', () => {
  describe('port number', () => {
    test.each(['', 'str'])('invalid case: %s', (port) => {
      expect(() =>
        validate({
          PORT: port,
          TIMEOUT: '3000',
          DATABASE_URL: 'jdbc:postgresql://example.internal.com/sample_db',
        }),
      ).toThrowError(/PORT/);
    });
    test.each(['3000'])('valid case: %s', (port) => {
      expect(() =>
        validate({
          PORT: port,
          TIMEOUT: '3000',
          DATABASE_URL: 'jdbc:postgresql://example.internal.com/sample_db',
        }),
      ).not.toThrow();
    });
  });
});
