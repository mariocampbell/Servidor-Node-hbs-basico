# Servidor Node Basico (express-hbs)

Este es un ejemplo de un servidor básico creado con Nodejs, Express y hbs.

---
### Distribución de carpetas y archivos.
* **:open_file_folder: Public/**
    * **:open_file_folder: css/**
    * **:open_file_folder: img/**
    * **:open_file_folder: js/**
        1. *:page_facing_up: scripts.js*
    * *:page_facing_up: favicon.png*
* **:open_file_folder: server**
    * **:open_file_folder: db/**
    * **:open_file_folder: helpers/**
         1. *:page_facing_up: hbs.js*
    * **:open_file_folder: routes/**
        1. *:page_facing_up: index.js*
    * **:open_file_folder: sass/**
         - **:open_file_folder: components/**
         - *:page_facing_up: materialize.scss*
         - *:page_facing_up: style.scss*
    * **:open_file_folder: views/**
         - **:open_file_folder: pages/**
            + *:page_facing_up: home.hbs*
         - **:open_file_folder: partials/**
             + *:page_facing_up: navbar.hbs*
             + **:open_file_folder: components/**
                * *:page_facing_up: button.hbs*
         - *layout.hbs*
- *:page_facing_up: app.js*
- *:page_facing_up: config.js*
- *:page_facing_up: package.json*