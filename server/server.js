
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const businessesRouter = require('./routes/businesses.router');
const favoriteRouter = require('./routes/favorite.router');
const resourcesRouter = require('./routes/resources.router');
const searchRouter = require('./routes/search.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/businesses', businessesRouter);
app.use('/api/userfavorite', favoriteRouter);
app.use('api/resources', resourcesRouter);
app.use('/api/search', searchRouter);
app.use('/api/community', resourcesRouter);
app.use('/api/education', resourcesRouter);
app.use('/api/financial', resourcesRouter);
app.use('/api/healthcare', resourcesRouter);
app.use('/api/housing', resourcesRouter);
app.use('/api/legal', resourcesRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
