luckybirdbakery.com
===============

Site is developed and hosted with [Siteleaf](http://www.siteleaf.com/). For more
information also check out the [theme documentation](http://www.siteleaf.com/help/themes/)


## To develop

* Install [siteleaf gem](https://github.com/siteleaf/siteleaf-gem)
* Read [Configure an existing site](https://github.com/siteleaf/siteleaf-gem#testing-sites-locally)
to set up a local `config.ru` file
* Install [duo](http://duojs.org) to build js & css; `npm install duo -g`


Assuming the above are all good, `make` to run the dev server.

Upon changing assets [js or css], you will have to run `make build` to rebuild.
