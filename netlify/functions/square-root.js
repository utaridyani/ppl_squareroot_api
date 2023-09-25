exports.handler = async (event, context) => {
    try {
        const number = parseFloat(event.queryStringParameters.number);

        if (isNaN(number) || number < 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid input' })
            };
        }

        // Calculate the square root manually using the Babylonian method
        let guess = number / 2;
        const tolerance = 0.00001;
        let iteration = 0;

        while (Math.abs(guess * guess - number) > tolerance) {
            guess = 0.5 * (guess + number / guess);
            iteration++;
        }

        const result = guess;

        return {
            statusCode: 200,
            body: JSON.stringify({ result, iterations: iteration })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};
