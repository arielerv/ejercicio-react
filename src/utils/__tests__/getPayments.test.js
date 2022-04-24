import {getPayments} from 'utils';

describe('getPayments', () => {
    let firstArgument;
    let secondArgument;

    describe('when some provided arguments is not number', () => {
        beforeEach(() => {
            firstArgument = 'test';
            secondArgument = 'test';
        });

        it('should return undefined', () => {
            expect(getPayments(firstArgument, secondArgument)).toBeUndefined();
        });
    });

    describe('when the provided arguments is numbers', () => {
        beforeEach(() => {
            firstArgument = 3;
            secondArgument = 4;
        });

        it('should return list of fees paid', () => {
            expect(getPayments(firstArgument, secondArgument)).toEqual({1: 1.33, 2: 2.67, 3: 4});
        });
    });
});
