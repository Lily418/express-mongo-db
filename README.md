# express-mongo-db [![Build Status](https://travis-ci.org/floatdrop/express-mongo-db.svg?branch=master)](https://travis-ci.org/floatdrop/express-mongo-db)

> Get db connection in request


## Install

```
$ npm install --save express-mongo-db
```


## Usage

```js
var app = require('express')();

var expressMongoDb = require('express-mongo-db');
app.use(expressMongoDb('mongodb://localhost/', 'test'));

app.get('/', function (req, res, next) {
	req.db // => Db object
});
```


## API

### expressMongoDb(uri, databaseName, [options])

#### uri

*Required*  
Type: `string`

[Connection string uri](http://docs.mongodb.org/manual/reference/connection-string/).

#### databaseName

*Required*  
Type: `string`

Name of database to connect to.

#### options

All options from [MongoClient](http://mongodb.github.io/node-mongodb-native/3.0/api/MongoClient.html) are accepted as well.

##### property

Type: `String`  
Default: `db`

Property on `request` object in which db connection will be stored.


## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)
