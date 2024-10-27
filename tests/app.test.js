const request = require('supertest');
const app = require('../app');

let server;

beforeAll(() => {
    server = app.listen(3000);
});

afterAll(() => {
    server.close();
});

describe('GET /', () => {
    it('responds with Hello, CI/CD World!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, CI/CD World!');
    });
});

