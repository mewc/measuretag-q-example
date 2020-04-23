# CLOG 
Perhaps its an acronym for: Console logging outbreak gatherer
or perhaps a shortened version of console.log
or perhaps we like dutch culture and named it after the shoe for fun.


## What is this repo?

Browser side tag that manages queueing of console messages `log|error|warn|info` and pushes to an API that handles the rest.

## Getting Started

1. `yarn install` for deps
2. make changes
3. `yarn build` will run webpack for 3 streams - prod, dev and a webpack test. Find files in `./build`
4. paste into browser



## Purpose

Intercept console events and send them to aws services

Built to be embedded on a page as a tag

- take all errors on the page and push them to api
- from the api ingest, save in s3 and organise in a table
- monitor rates of errors

Exposes the `window._clog` object.



## Goals

- Mocha browser testing 
- handle the queue efficiently
- handle api push efficiently
- automate the bundling and build 
- pipeline a version to S3
- Simply let clients add url to site tag from generated file



## Clientside Tag notes


### FRONT END

- q stores log data we want
- dom events are fired when the interval checker finds items in q
- api structures output and sends to API


TODO:
- client key
- validate origin, only allow whitelisted domains


### CLIENT API VALIDATION

- take in data format

```
{
    items: [
        {
            level: <WARN|ERROR|LOG|INFO>,
            data: <Stringified json object>
        },
        ...
    ]
    origin: <href>,
    userAgent: <agent string>
}
```

- headers will validate origins (done downstream, in API gateway)


## TODO

- mocha browser unit / general testing
- take in config values from a json file 
  - scopes to log (Always error. Include/exclude LOG|WARN|INFO)
  - interval ms time (reduce costs)
  - clientkey
- add client keys to process in validation (more aws side)


## Handy links i found useful over time 

https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-dead-letter-queue.html

How to use webpack

ES6 to ES5 -> https://stackoverflow.com/a/59328252/5281187

Seperation of webpack config files -> https://webpack.js.org/guides/production/#minification

webpack + babel module minify https://webpack.js.org/plugins/babel-minify-webpack-plugin/

managing output
https://webpack.js.org/guides/output-management/

## Author
m@mewc.info