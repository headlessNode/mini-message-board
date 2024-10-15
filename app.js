const express = require( 'express' );
const ejs = require( 'ejs' );
const path = require( 'node:path' );
const indexRouter = require('./routes/indexRouter.js');
const newMessageRouter = require( './routes/newMessageRouter.js' );

const app = express();
const assestPath = path.join( __dirname, 'public' );

app.use(express.urlencoded({ extended: true }));
app.use( express.static( assestPath ) );
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/new", newMessageRouter);
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000, () => console.log('Server started on port 3000'));