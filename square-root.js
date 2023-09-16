exports.handler = async (event, context) => {
    const number = parseFloat(event.queryStringParameters.number);

    // For 0 and 1, the square roots are themselves
    if (number < 2) {
        return {
            statusCode: 200,
            body: JSON.stringify({ result: number })
        };
    }

    // Calculate the square root
    let y = number;
    let z = (y + number / y) / 2;

    // As we want to get up to 5 decimal digits, the absolute
    // difference should not exceed 0.00001
    while (Math.abs(y - z) >= 0.00001) {
        y = z;
        z = (y + number / y) / 2;
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ result: parseFloat(z.toFixed(5)) })
    };
};
