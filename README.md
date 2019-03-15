Create a new AWS Neptune cluster.

Create a new lambda function in a security group with access to your Neptune cluster. Node version 8.10.

Update `index.js` with the cluster endpoint.

`npm install` this repo.

Zip the repo and upload to the lambda function.

Run the lambda function with this event:

    {
      "id": "1"
    }

## 3.3.5 results ("gremlin": "3.3.5")

`project().by()` and `valueMap()` do not return a result.

    {
      "newRecord": {
        "value": {
          "id": "1",
          "label": "test"
        },
        "done": false
      },
      "projectBy": {
        "value": {},
        "done": false
      },
      "projectByValue": {
        "value": {},
        "done": false
      },
      "valueMap": {
        "value": {},
        "done": false
      }
    }

## 3.2.10 results ("gremlin": "3.2.10")

`project().by()` and `valueMap()` return as expected

    {
      "newRecord": {
        "value": {
          "id": "1",
          "label": "test"
        },
        "done": false
      },
      "projectBy": {
        "value": {
          "testProp": "hello!"
        },
        "done": false
      },
      "projectByValue": {
        "value": {
          "testProp": "hello!"
        },
        "done": false
      },
      "valueMap": {
        "value": {
          "label": "test",
          "testProp": [
            "hello!"
          ],
          "id": "1"
        },
        "done": false
      }
    }
