import {parsePrice} from 'utils';

describe('parsePrice', () => {
    let argument;

    describe('when the provided argument is a number', () => {
        beforeEach(() => {
            argument = 1;
        });

        it('should return undefined', () => {
            expect(parsePrice(argument)).toEqual(1);
        });
    });

    describe('when the provided argument is a number', () => {
        beforeEach(() => {
            argument = 'price.$1,000test';
        });

        it('should return list of fees paid', () => {
            expect(parsePrice(argument)).toEqual(1000);
        });
    });

    describe('when the provided argument is undefined', () => {
        beforeEach(() => {
            argument = undefined;
        });

        it('should return list of fees paid', () => {
            expect(parsePrice(argument)).toEqual(0);
        });
    });
});
