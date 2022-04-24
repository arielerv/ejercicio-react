const getRoundedNumber = number => {
    if (typeof number !== 'number') {
        return 0;
    }
    return Math.round((number + Number.EPSILON) * 100) / 100;
};

export default getRoundedNumber;
