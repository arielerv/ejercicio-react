import React, {lazy, Suspense} from 'react';
import {ThemeProvider} from 'styled-components';

import {Fonts} from 'containers/Fonts';
import {GlobalStyle} from 'styled';
import {EmptyPage} from 'styled/base';

import 'rc-slider/assets/index.css';

const Simulator = lazy(() => import('pages/Simulator'));

const Root = () => (
    <Suspense fallback={<EmptyPage/>}>
        <ThemeProvider theme={{}}>
            <GlobalStyle/>
            <Fonts/>
            <Simulator/>
        </ThemeProvider>
    </Suspense>
);

export default Root;
