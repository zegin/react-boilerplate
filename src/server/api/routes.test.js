const request = require('supertest')
const app = require('../index.mock')

describe('Test /api', () => {
  test('should return 200', async () => {
    const response = await request(app)
      .post('/api')
      .send({ password: '12345' })
    expect(response.status).toBe(200)
  })

  test('should return 403', async () => {
    const response = await request(app).post('/api')
    expect(response.status).toBe(403)
  })
})

describe('Test /api/test', () => {
  test('should return 200 with delay', async () => {
    const response = await request(app)
      .post('/api/test')
      .send({ password: '12345' })
    expect(response.status).toBe(200)
  })

  test('should return 403', async () => {
    const response = await request(app).post('/api/test')
    expect(response.status).toBe(403)
  })
})
