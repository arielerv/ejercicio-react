import getRoundedNumber from './getRoundedNumber';

const getPayments = (limit, price) => {
    if (typeof limit !== 'number' || typeof price !== 'number') {
        return undefined;
    }
    const array = Array.from(Array(limit).keys());

    return array.reduce((previousValue, currentValue) => {
        const fee = price / limit;
        const rest = (currentValue + 1) * fee;
        const payment = price + fee - rest;

        return {...previousValue, [array.length - currentValue]: getRoundedNumber(payment)};
    }, {});
};

export default getPayments;
