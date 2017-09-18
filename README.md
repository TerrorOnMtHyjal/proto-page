# ProtoPage
## A prototype startup page with functionality to randomize through and apply Google fonts and their respective variants.

### Overview
ProtoPage allows you to quickly find font pairings from Google Fonts to liven up your prototypes. Featuring individual controls for headers, subheaders and paragraphs, randomize through the Google Fonts library (*limiting to the top 30% popular fonts as decided by Google, if you'd like*), lock-in the fonts you enjoy and grab the CSS you need to get back to the fun stuff.

Controls for font types (*serif, sans-serif, handwriting, display, monospace*), available variants per font and sizings make finding combinations you like a breeze.

## Installation

```
>   git clone https://github.com/dustwise/proto-page.git
>   cd proto-page
>   npm install
```

### Launching

```
>   npm start
```

Open `localhost:3000` in your browser of choice.

## Design & Functionality

### Frontend

React, Redux and Styled-Components make up the frontend of [ProtoPage](http://protopage.dustwise.com). 

The user is given a look at the default page, shortly thereafter the controls slide out to ensure the user finds the primary functionality of the app. The controls are broken into easy-to-digest sections, first a set of options are provided per element with the applied font type, font face and styles visible at all times. Should the user decide to change an element setting or lock the element completely, all interaction successes are made clear via style and animation changes.

Bottommost the user finds two large, clearly labelled and colored buttons to randomize once more or get the generated CSS from selected fonts and their respective settings. Above that, a toggle providing the option to limit their search to popular fonts only.

Requested fonts are called and provided by the [Web Font Loader](https://github.com/typekit/webfontloader) library, co-developed by Google and Typekit. Upon launch of the application, all available fonts are captured via this library and stored in Redux, for easier randomization. Upon a request for randomization, new fonts are generated from the state fonts library filtered by user settings and requested. The app then captures the requested font and all variants available to it. 


## Stack
- React
- Redux
- Web Font Loader
- Styled-Components

## Future

- Remove FOUT on randomization.
- Utilize all capabilities of Web Font Loader, opening the application to other font libraries.
- Flesh out the prototype page, providing a testbed section with common element layouts.