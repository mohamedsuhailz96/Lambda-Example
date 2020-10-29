const https = require('https');
exports.handler = async (event, context, callback) => {
    let responseArray = [];
    if (event.category_name === undefined || event.category_name === null) {
        let response = {
            statusCode:400,
            body: "Invalid Input !"
        }
        callback(JSON.stringify(response));
    }
    const response = await new Promise((resolve, reject) => {
        let dataString = '';
        const req = https.get("https://www.cubyt.io/data/categories", function(res) {
          res.on('data', chunk => {
            dataString += chunk;
          });
          res.on('end', () => {
            resolve(
                JSON.parse(dataString)
            );
          });
        });
        
        req.on('error', (e) => {
          reject({
              statusCode: 500,
              body: 'Something went wrong!'
          });
        });
    });
    if(response.statusCode !== 500){
        var found = await response.find(function (element) { 
        if(element.category_name === event.category_name){
            return element
        }
    });
    }else{
        callback(JSON.stringify(response));
    }
    if(found){
        await responseArray.push(found);
    }
    return responseArray;
};