const express = require('express'),
      app = express(),
      hbs = require('hbs'),
      sassMiddleware = require('node-sass-middleware'),
      reload = require('reload'),
      favicon = require('serve-favicon'),
      config = require('./config'),
      path = require('path'),
      helpers = require('./server/helpers/hbs') 

/* ======= sass ======= */
app.use(sassMiddleware(config.sass))

/* ======= express ======= */
app.disable('x-powered-by')
app.use(favicon(path.join(__dirname, 'public/favicon.png')))
app.use(express.static(path.join(__dirname, 'public')))
app.locals.titleApp = 'TimeInc'


/* ======= hbs ======= */
app.set('views', path.join(__dirname, 'server/views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.__express)
/* ======= hbs.partials ======= */
hbs.registerPartials(path.join(__dirname, 'server/views/partials'))
/* ======= hbs.helpers ======= */
hbs.registerHelper('prod', helpers.producto);
hbs.registerHelper('uppercase', helpers.uppercase);

/* ======= routes ======= */
app.use('/', require('./server/routes/index'))

if(!process.env.NODE_ENV) {
    reload(app)
    app.locals.desarrollo = true
}

app.listen(config.port, ()=> console.log('Escuchando en el puerto localhost:', config.port))