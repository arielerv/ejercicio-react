import {render, getByText, getByTestId, fireEvent, getByRole} from '@testing-library/react';

import Slider from './index';

describe('<Slider>', () => {
    let props;
    const getComponent = () => render(<Slider {...props}/>);
    beforeEach(() => {
        props = {
            name: 'test',
            onChange: jest.fn(),
            selectedValue: 1,
            title: 'Test Title',
            defaultValue: 1
        };
        global.alert = jest.fn();
    });

    it('should display slider', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'slider-test')).toBeInTheDocument();
    });

    it('should display a title', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Test Title')).toBeInTheDocument();
    });

    it('should display a input', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'input-test')).toBeInTheDocument();
    });

    it('the slider should display a selected value', () => {
        const {container} = getComponent();
        expect(getByRole(container, 'slider')).toHaveAttribute('aria-valuenow', '1');
    });

    it('input should display the value', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'input-test')).toHaveDisplayValue('1');
    });

    describe('when a user change input', () => {
        beforeEach(() => {
            const {container} = getComponent();
            const input = getByTestId(container, 'input-test');
            fireEvent.change(input, {target: {value: 50}});
        });

        it('should fire `props.onChange`', () => {
            expect(props.onChange).toHaveBeenCalledTimes(1);
            expect(props.onChange).toHaveBeenCalledWith({target: {id: props.name, value: 50}});
        });
    });

    describe('when `props.currency` is defined', () => {
        beforeEach(() => {
            props.currency = '$';
        });

        it('input should display the value', () => {
            const {container} = getComponent();
            expect(getByTestId(container, 'input-test')).toHaveDisplayValue('$1');
        });
    });
});
