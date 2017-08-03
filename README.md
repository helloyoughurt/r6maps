# r6maps
[![Build Status](https://travis-ci.org/capajon/r6maps.svg?branch=master)](https://travis-ci.org/capajon/r6maps)

**Hosted at http://www.r6maps.com**

r6maps.com is designed to be a quick reference for Rainbow Six Siege maps.  Please see the about.html page for more details.

## Running locally
- Install npm and install packages (npm i)
- Build scss from dev/scss to site/cs: 'npm run build:scss'
- Build js from dev/js to site/js (uglified): 'npm run build:js'
- File watches are also available (see packages.json)
- Note there are some pre reqs not listed here (to be done) - eg. sass Ruby gem

## Things to work on
Contributions are welcome. :)

### Active
Current development is fairly "steady state" with only a few new features planned:
- [ ] Map stats - based on [data dump from Ubisoft](https://rainbow6.ubisoft.com/siege/en-us/news/152-293696-16/introduction-to-the-data-peek-velvet-shell-statistics).
- [ ] Mark breakable windows - [see original feature suggestion here](https://github.com/capajon/r6maps/issues/89).
- [ ] Translations - [info on how you can help](http://www.r6maps.com/about/translations-help.html).
- [ ] [Open issues](https://github.com/capajon/r6maps/issues)
- [ ] Map accuracy - please log any errors/missing items as an [issue](https://github.com/capajon/r6maps/issues)
- [ ] New maps

### Thinking about (maybe someday)...
- [ ] Tactics drawing (& saving/sharing)
- [ ] Shared sessions (map controls, shared pings, drawing if available)
- [ ] Automated tests (perceptual diff?)
- [ ] Offline mode (progressive web app? Cordova?)
- [ ] Embeded currated hints/strats (from community contributions)
