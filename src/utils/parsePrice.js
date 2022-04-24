const parsePrice = input => {
    if (typeof input === 'number') {
        return input;
    }
    const inputValidate = input?.replace(/[^0-9]*/g, '');
    return inputValidate ? parseInt(inputValidate, 10) : 0;
};

export default parsePrice;
