import {formatPrice} from 'utils';

describe('formatPrice', () => {
    let argument;
    let separator;

    describe('when the provided is one thousand', () => {
        beforeEach(() => {
            argument = 1000;
        });

        it('should return the same array', () => {
            expect(formatPrice(argument)).toEqual('1.000');
        });
    });

    describe('when the provided is one million', () => {
        beforeEach(() => {
            argument = 1000000;
        });

        it('should return the same array', () => {
            expect(formatPrice(argument)).toEqual('1.000.000');
        });
    });

    describe('when the provided is one thousand with separator', () => {
        beforeEach(() => {
            argument = 1000;
            separator = ',';
        });

        it('should return the same array', () => {
            expect(formatPrice(argument, separator)).toEqual('1,000');
        });
    });

    describe('when the provided is one million with decimals with separator', () => {
        beforeEach(() => {
            argument = 1000000.23;
            separator = ',';
        });

        it('should return the same array', () => {
            expect(formatPrice(argument, separator)).toEqual('1,000,000.23');
        });
    });
});
