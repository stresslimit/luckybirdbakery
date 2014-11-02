luckybirdbakery.com
===============

Site is developed and hosted with [Siteleaf](http://www.siteleaf.com/). For more
information also check out the [theme documentation](http://www.siteleaf.com/help/themes/)


## Manage your website

Log in to [Siteleaf](http://www.siteleaf.com/).

### Main page section

The main content at the top of the page under the banner are represented by the
site's only [Page](https://manage.siteleaf.com/pages/545638665dde22cf34000dc8/edit).

##### To change the main top banner

Under the main page, there is 1 post called Home Banner. The first asset in
the list will be the image of the main banner.


### Page sections

All page sections are subpages of this main page; you can look at them by
opening up the page section, and you'll see the sections listed out.

To Add content sections, just add new subpages. The sections are designed to
have a content column and a large image column. You can include images in the
content block too, they will fill the width of the column. The large image will
always be the *last* [or *only*] image.

Sections will alternate left and right for image / text.



## Development

* Install [siteleaf gem](https://github.com/siteleaf/siteleaf-gem)
* Read [Configure an existing site](https://github.com/siteleaf/siteleaf-gem#testing-sites-locally)
to set up a local `config.ru` file
* Install [duo](http://duojs.org) to build js & css; `npm install duo -g`


Assuming the above are all good, `make` to run the dev server.

Upon changing assets [js or css], you will have to run `make build` to rebuild.
