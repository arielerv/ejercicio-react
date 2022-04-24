import React from 'react';
import PropTypes from 'prop-types';
import RCSlider from 'rc-slider';

import {sliderStyles} from 'constant';
import {Input} from 'styled/input';
import {formatPrice, parsePrice} from 'utils';

import {Container, Title, Content, Label} from './styled';

const Slider = ({name, onChange, selectedValue, title, defaultValue, currency, ...props}) => {
    const handleChange = ({target: {id, value}}) => {
        if (!Number.isNaN(parsePrice(value))) {
            onChange({target: {id, value: parsePrice(value)}});
        }
    };

    return (
        <Container data-testid={`slider-${name}`}>
            <Title>
                <Label htmlFor={name}>{title}</Label>
                <Input
                    id={name}
                    value={`${currency}${formatPrice(selectedValue)}`}
                    onChange={handleChange}
                    data-testid={`input-${name}`}
                    $bsStyle={{maxWidth: '150px'}}
                />
            </Title>
            <Content>
                <RCSlider
                    onChange={newValue => onChange({target: {id: name, value: newValue}})}
                    defaultValue={defaultValue}
                    value={selectedValue}
                    {...props}
                    {...sliderStyles}
                />
            </Content>
        </Container>
    );
};

Slider.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    defaultValue: PropTypes.number.isRequired,
    currency: PropTypes.string
};

Slider.defaultProps = {
    currency: ''
};

export default Slider;
