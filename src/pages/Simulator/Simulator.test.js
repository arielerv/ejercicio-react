import {render, getByText, getByTestId, fireEvent} from '@testing-library/react';

import Simulator from './index';

describe('<Simulator>', () => {
    let props;
    const getComponent = () => render(<Simulator {...props}/>);
    beforeEach(() => {
        props = {};
        global.alert = jest.fn();
    });

    it('should display `Simulá tu crédito`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Simulá tu crédito')).toBeInTheDocument();
    });

    it('should display slider of price', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'slider-price')).toBeInTheDocument();
    });

    it('should display slider of limit', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'slider-limit')).toBeInTheDocument();
    });

    it('should display `Cuota fija por mes`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Cuota fija por mes')).toBeInTheDocument();
    });

    it('should display a button `Obtené crédito`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Obtené crédito')).toBeInTheDocument();
    });

    it('should display a button `Ver detalle de cuotas`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Ver detalle de cuotas')).toBeInTheDocument();
    });

    describe('when button `Obtené crédito` is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const button = getByText(container, 'Obtené crédito');
            fireEvent.click(button);
        });

        it('should fire `global.alert`', () => {
            expect(global.alert).toHaveBeenCalledTimes(1);
        });
    });

    describe('when button `Ver detalle de cuotas` is clicked', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const button = getByText(container, 'Ver detalle de cuotas');
            fireEvent.click(button);
        });

        it('should fire `global.alert`', () => {
            expect(global.alert).toHaveBeenCalledTimes(1);
        });
    });

    describe('when `props.price` and `props.limit` is defined', () => {
        beforeEach(() => {
            props.price = 100;
            props.limit = 2;
        });

        it('should display fee to pay', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'fee')).toHaveTextContent('$ 50');
        });
    });
});
