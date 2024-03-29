const assert = require('assert');
const Percentage = require('./lib/Percentage');

describe('Percentage', function() {
    describe('#evolution', function () {
        it('should give an evolution', () => {
            assert.equal(Percentage.evolution(100, 200), 100);
            assert.equal(Percentage.evolution(100, 150), 50);
            assert.equal(Percentage.evolution(100, 50), -50);
        })
    })
    it('should handle 0 evolution', () => {
        assert.equal(Percentage.evolution(0, 100), Infinity);
    })

    it('should round values', () => {
        assert.equal(Percentage.evolution(30, 100),233.33);
    })
})