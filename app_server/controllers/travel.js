const request = require('request');
const apiOptions = {
 server: 'http://localhost:3000'
}

//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* Internal method to render the travel list */
const renderTravellist = (req, res, responseBody) => {
    let message = null;
    const pageTitle = process.env.npm_package_description + ' - Travel';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No trips exist in our database!';
        }
    }

    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message: message
    });
};

/* GET travel list view */
const travellist = (req, res) => {
    const requestOptions = {
        url: `${apiOptions.server}/api/trips`,
        method: 'GET',
        json: {}
    };

    // Log on the console this call over to the API
    console.info(`> travelController.travellist calling -> ${requestOptions.url}`);

    request(requestOptions, (err, { statusCode }, body) => {
        if (err) {
            console.error(err);
        }
        // Call new method to handle rendering the view
        renderTravellist(req, res, body);
    });
};