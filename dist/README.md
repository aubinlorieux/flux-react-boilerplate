This is the production version.

To build it, I run this command in the project root:

```
./node_modules/.bin/webpack/ --config ./webpack.config.production.js
```

It uses hash instead of pushstate for compatibility purpose.

To run locally:

```
npm install
npm start
```