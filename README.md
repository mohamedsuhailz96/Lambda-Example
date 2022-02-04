# Lambda-Example
Lambda function to fetch particular category data.

The response can be fetched via the endpoint:

https://4vpfybrny0.execute-api.ap-south-1.amazonaws.com/default/data/categories/DIGITAL_MULTIMETERS

Notes:
1) I have used in-line editor provided by AWS to write this function. Git repository is just for documentation and storage.
2) I have not mapped the lambda api gateway to any custom domain.
3) I have not implemented caching functionality to show 304 response as it is charged by the hour.

Usage:
1) The URL mentioned above accepts category_name as a request param.
2) If no category name is provided, I am sending a 400 status and a message.
3) If category name does not match any from Fluke API, I am sending an empty array with 200 status.
