import {getRoundedNumber} from 'utils';

describe('getRoundedNumber', () => {
    let argument;

    describe('when the provided is not a number', () => {
        beforeEach(() => {
            argument = 'not number';
        });

        it('should return the same array', () => {
            expect(getRoundedNumber(argument)).toEqual(0);
        });
    });

    describe('when the provided is an integer', () => {
        beforeEach(() => {
            argument = 2;
        });

        it('should return the same array', () => {
            expect(getRoundedNumber(argument)).toEqual(2);
        });
    });

    describe('when the provided is a number with two decimals', () => {
        beforeEach(() => {
            argument = 2.23;
        });

        it('should return the same array', () => {
            expect(getRoundedNumber(argument)).toEqual(2.23);
        });
    });

    describe('when the provided is a number with more than two decimals', () => {
        beforeEach(() => {
            argument = 2.2345198518;
        });

        it('should return the same array', () => {
            expect(getRoundedNumber(argument)).toEqual(2.23);
        });
    });
});
