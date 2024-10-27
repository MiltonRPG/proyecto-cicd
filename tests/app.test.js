const request = require('supertest');
const app = require('../app');

let server;

beforeAll(() => {
    server = app.listen(0);
});

afterAll((done) => {
    server.close(done); // Asegura el cierre completo del servidor
});

describe('GET /', () => {
    it('responds with Hello, CI/CD World!', async () => {
        const response = await request(server).get('/'); // Cambia `app` por `server`
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, CI/CD World!');
    });
});


