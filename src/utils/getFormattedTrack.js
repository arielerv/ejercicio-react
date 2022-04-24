import React from 'react';

import {sliderFontStyle} from 'constant';

const getFormattedTrack = track => ({
    style: sliderFontStyle,
    label: track ? <strong>{track}</strong> : undefined
});

export default getFormattedTrack;
