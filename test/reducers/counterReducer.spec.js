import expect from 'expect';
import counterReducer from '../../src/reducers/counterReducer';

describe('reducers', () => {
    describe('counter', () => {
        it('should provide the initial state', () => {
            expect(counterReducer(undefined, {})).toBe(0)
        });

        it('should handle INCREMENT action', () => {
            expect(counterReducer(1, { type: 'INCREMENT' })).toBe(2)
        });

        it('should handle DECREMENT action', () => {
            expect(counterReducer(1, { type: 'DECREMENT' })).toBe(0)
        });

        it('should ignore unknown actions', () => {
            expect(counterReducer(1, { type: 'unknown' })).toBe(1)
        })
    })
});
