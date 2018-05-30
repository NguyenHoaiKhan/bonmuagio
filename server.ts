import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import * as passport from 'passport';
import {enableProdMode} from '@angular/core';

import * as express from 'express';
import {join} from "path";

import * as mongoose from "mongoose";


//import Body-Parser
import * as bodyParser from 'body-parser';


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://hoaikhan:123456@ds016298.mlab.com:16298/bonmuagio', () => {
  console.log('sussess!');
});

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

// Set up body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//initial passport
app.use(passport.initialize());
require('./pp');

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';


app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported');
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
app.get('*.*', express.static(join(DIST_FOLDER, 'server')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', {req});
});

// ------------------ Import Router --------------------------------------------------
import {UserRouter} from "./api/Routes/UserRoute"
import {DonateRouter} from "./api/Routes/DonateRoute";
import {ItemRouter} from "./api/Routes/ItemRoute";
import {TagRouter} from "./api/Routes/TagRoute";
import {TaskRouter} from "./api/Routes/TaskRoute";

app.use('/api/user', UserRouter);
app.use('/api/donate', DonateRouter);
app.use('/api/item', ItemRouter);
app.use('/api/tag', TagRouter);
app.use('/api/task', TaskRouter);

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
