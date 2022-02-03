const { expect } = require('chai')
const app = require('supertest')(require('./app'))

describe('my app', () => {
    beforeEach(() => syncAndSeed())
    it('true equals true', () => {
        expect(true).equals(true)
    })
    describe('routes', () => {
        describe('GET /api/users', () => {
            const response = await app.get('/api.users')
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(2)
        })
    })
})
