const { expect } = require('chai')

describe('my app', () => {
    beforeEach(() => syncAndSeed())
    it('true equals true', () => {
        expect(true).equals(true)
    })
})