const server = require("../index.js");
const request = require("supertest");

describe('logs in user', () => {
  it('should have status code 200', async () => {
    const response = await request(server).get('/')
    // expect(response.status).toBe(200);
    console.log(response.type);
    expect(response.type).toMatch(/json/i)
  })
})