const request = require("supertest");
let server;


describe("/shippers",() => {
    beforeEach(() => {server = require('../../app');})
    afterEach(() => {server.close();})
    it('Should return all shippers',async () => {
      const res = await request(server).get('/shippers');
      expect(res.status).toBe(200);

    });
})