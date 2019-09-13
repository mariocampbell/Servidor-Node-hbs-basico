# Servidor Node Basico (express-hbs)

Este es un ejemplo de un servidor básico creado con Nodejs, [Express](http://expressjs.com/en/4x/api.html) y [hbs](https://github.com/pillarjs/hbs).

---
### Distribución de carpetas y archivos.
* __Public/__
    * __css/__
    * __img/__
    * __js/__
        1. _scripts.js_
    * _favicon.png_
* __server/__
    * __db/__
        1. _data.json_
    * __helpers/__
         1. _hbs.js_
    * __routes/__
        1. _index.js_
    * __sass/__
         - __components/__
         - _materialize.scss_
         - _style.scss_
    * __views/__
         - __pages/__
            1. _home.hbs_
         - __partials/__
             + __components/__
                1. _button.hbs_
             + _navbar.hbs_
         - _layout.hbs_
- _app.js_
- _config.js_
- _package.json_