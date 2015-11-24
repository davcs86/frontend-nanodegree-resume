# Welcome
Project #2 for Udacity's front-end web developer nanodegree program by davcs86.

## Usage

```
git clone https://github.com/davcs86/frontend-nanodegree-resume.git
// enter into the directory
cd frontend-nanodegree-resume
// install node packages
npm install
// install bower packages
bower install
// run default task in grunt
grunt default
// in case of error when executing grunt
// "Warning: Running "imagemin:dynamic" (imagemin) task
//   Fatal error: Cannot read property 'contents' of undefined"
// update "grunt-contrib-imagemin" package
npm cache clean && npm install grunt-contrib-imagemin
// then run again
grunt default
```

The generated files are in ./dist, regarding the source code,

**HTML:** /app/index.html

**CSS (SASS):** /app/styles/main.scss

**JS:** /app/scripts/resumeBuilder.js
