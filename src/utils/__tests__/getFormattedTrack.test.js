import React from 'react';

import {getFormattedTrack} from 'utils';
import {sliderFontStyle} from 'constant';

describe('getFormattedTrack', () => {
    let argument;

    describe('when not provided argument', () => {
        beforeEach(() => {
            argument = undefined;
        });

        it('should return the same array', () => {
            const track = {style: sliderFontStyle};
            expect(getFormattedTrack(argument)).toEqual(track);
        });
    });

    describe('when provided argument', () => {
        beforeEach(() => {
            argument = 'test';
        });

        it('should return the same array', () => {
            const track = {style: sliderFontStyle, label: <strong>{argument}</strong>};
            expect(getFormattedTrack(argument)).toEqual(track);
        });
    });
});
