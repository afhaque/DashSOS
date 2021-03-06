var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/vitals', function(req, res){
  res.render('vitals', {
    title: 'Vitals'
  });
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var demo  = require('./routes/demo');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'jade');

// // uncomment after placing your favicon in /public
// //app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/demo', demo);

// // // catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //   var err = new Error('Not Found');
// //   err.status = 404;
// //   next(err);
// // });

// // // error handler
// // // no stacktraces leaked to user unless in development environment
// // app.use(function(err, req, res, next) {
// //   res.status(err.status || 500);
// //   res.render('error', {
// //     message: err.message,
// //     error: (app.get('env') === 'development') ? err : {}
// //   });
// // });


// module.exports = app;