var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayouts = require('express-ejs-layouts')

//library
var flash   = require('express-flash');
var session = require('express-session');

var app = express();

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ 
  cookie: { 
    maxAge: 60000 
  },
  store: new session.MemoryStore,
  saveUninitialized: true,
  resave: 'true',
  secret: 'secret'
}))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts'); // <-- route posts
var aboutsRouter = require('./routes/abouts'); 
var dashboardsRouter = require('./routes/dashboard'); 
var ordersRouter = require('./routes/orders'); 
var loginRouter = require('./routes/login'); 

app.use(flash())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter); // use route posts di Express
app.use('/abouts', aboutsRouter); // use route dashboard di Express
app.use('/dashboards', dashboardsRouter); // use route dashboard di Express
app.use('/orders', ordersRouter); // use route dashboard di Express
app.use('/login', loginRouter); // use route dashboard di Express

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3001, () => {
  console.log(`Server Started at ${3001}`)
})

module.exports = app;