const request = require('supertest');

const server = require('./server.js');

describe('GET /', () => {
    // should return http 200 ok
    it('should return 200 http status code', () => {
      return request(server)
        .get('/')
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
});