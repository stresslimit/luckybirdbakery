
dev:
	siteleaf server

deploy:
	siteleaf push theme

build: build-css build-js

build-js:
	duo js/index.js > build/build.js && uglifyjs build/build.js > assets/build.js

build-css:
	duo css/index.css > build/build.css && uglifycss build/build.css > assets/build.css
