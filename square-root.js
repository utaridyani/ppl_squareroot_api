// square-root.js

exports.handler = async (event, context) => {
    try {
        const number = parseFloat(event.queryStringParameters.number);

        if (isNaN(number) || number < 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid input' })
            };
        }

        const result = Math.sqrt(number);

        return {
            statusCode: 200,
            body: JSON.stringify({ result })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};
