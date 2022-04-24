/* eslint-disable no-alert */
import React, {useState} from 'react';

import {Slider} from 'components';
import {formatPrice, getFormattedTrack, getRoundedNumber, getPayments} from 'utils';

import PropTypes from 'prop-types';
import {Container, Content, Title, WrapperButtons, DetailButton, GetButton, PartialFee} from './styled';

const Simulator = ({price, limit}) => {
    const [values, setValues] = useState({price, limit});

    const fee = formatPrice(getRoundedNumber(values.price / values.limit), ',');

    const handleChange = ({target: {id, value}}) => setValues({...values, [id]: value});

    const handleClick = () => window.alert(JSON.stringify(values));

    const handlePayments = () => window.alert(JSON.stringify(getPayments(values.limit, values.price)));

    return (
        <Container>
            <Content>
                <Title>Simulá tu crédito</Title>
                <Slider
                    name="price"
                    title="Monto Total"
                    defaultValue={price}
                    selectedValue={values.price}
                    onChange={handleChange}
                    currency="$"
                    marks={{5000: getFormattedTrack('$5.000'), 50000: getFormattedTrack('$50.000')}}
                    max={50000}
                    min={5000}
                    step={500}
                />
                <Slider
                    name="limit"
                    title="Plazo"
                    defaultValue={limit}
                    selectedValue={values.limit}
                    onChange={handleChange}
                    marks={{3: getFormattedTrack('3'), 24: getFormattedTrack('24')}}
                    max={24}
                    min={3}
                    step={1}
                />
                <PartialFee>
                    <p>Cuota fija por mes</p>
                    <span data-testid="fee">{`$ ${fee}`}</span>
                </PartialFee>
                <WrapperButtons>
                    <GetButton onClick={handleClick}>Obtené crédito</GetButton>
                    <DetailButton onClick={handlePayments}>Ver detalle de cuotas</DetailButton>
                </WrapperButtons>
            </Content>
        </Container>
    );
};

Simulator.propTypes = {
    price: PropTypes.number,
    limit: PropTypes.number
};

Simulator.defaultProps = {
    price: 19500,
    limit: 16
};

export default Simulator;
