const request = require('supertest'); 
const server = require('./server');

describe('index route', () => {
   it('should return 200 status', function () {
      return request(server).get('/')
         .then(res => {
            expect(res.status).toBe(200);
         });
   });
})