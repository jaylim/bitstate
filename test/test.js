const assert = require('assert');
const { State } = require('..');

describe('State', () => {
    let s = new State();

    it('init: should return 0', () => assert.equal(s.state, 0));

    describe('add(0x1)', () => {
        it('#state should return 1', () => {
            s.add(0x1);
            assert.equal(s.state, 1);
        });

        it('#has(0x1) should return true',  () => assert.equal(s.has(0x1), true));
        it('#has(0x2) should return false', () => assert.equal(s.has(0x2), false));
    });

    describe('add(0x2)', () => {
        it('#state should return 3', () => {
            s.add(0x2);
            assert.equal(s.state, 3);
        });

        it('#has(0x1) should return true', () => assert.equal(s.has(0x1), true));
        it('#has(0x2) should return true', () => assert.equal(s.has(0x2), true));
    });

    describe('add(0x4)', () => {
        it('#state should return 7', () => {
            s.add(0x4);
            assert.equal(s.state, 7);
        });

        it('#has(0x1) should return true', () => assert.equal(s.has(0x1), true));
        it('#has(0x2) should return true', () => assert.equal(s.has(0x2), true));
        it('#has(0x4) should return true', () => assert.equal(s.has(0x4), true));
    });

    describe('remove(0x3)', () => {
        it('#state should return 4', () => {
            s.remove(0x3);
            assert.equal(s.state, 4);
        });

        it('#has(0x1) should return false', () => assert.equal(s.has(0x1), false));
        it('#has(0x2) should return false', () => assert.equal(s.has(0x2), false));
        it('#has(0x4) should return true',  () => assert.equal(s.has(0x4), true));
    });
});
