overwatch-side-nav
=========

[![Build Status](https://travis-ci.org/likethemammal/overwatch-side-nav.svg?branch=master)](https://travis-ci.org/likethemammal/overwatch-side-nav)
[![Coverage Status](https://coveralls.io/repos/github/likethemammal/overwatch-side-nav/badge.svg?branch=master)](https://coveralls.io/github/likethemammal/overwatch-side-nav?branch=master)

[![npm Version](https://img.shields.io/npm/v/overwatch-side-nav.svg)](https://www.npmjs.com/package/overwatch-side-nav)
[![npm Downloads](https://img.shields.io/npm/dm/overwatch-side-nav.svg)](https://www.npmjs.com/package/overwatch-side-nav)
[![license](https://img.shields.io/github/license/likethemammal/overwatch-side-nav.svg)](https://github.com/likethemammal/overwatch-side-nav/blob/master/LICENSE)

A React component modeling the Official Overwatch site side-navigation

## Install

	npm install --save overwatch-side-nav

### Fonts

#### Futura No 2 D DemiBold

This font is used by Activision Blizzard for much of Overwatch's design. For this component **to match the Overwatch design, including the font is required**. It can be licensed from [MyFonts](http://www.myfonts.com/fonts/urw/futura-no-2/futura-no2-d-demi-bold/).

When using CSS font-face, the font-family should match whats below:

    font-family: 'Futura No 2 D DemiBold';
    
## Usage

Check out [example/index.js](example/index.js) for working example.

### Props

| name        | required | type           | default  | desc 
--- |--- | --- | --- | --- |
| items | **`X`** | array | null | array of objects, with required keys `id`, `label`, and `icon` |
| &nbsp;*item*.**id** | **`X`** | string | null | HTML id for the navigation item, the item will be shown as active when `id` is same as `window.location.hash` |
| &nbsp;*item*.**label** | **`X`** | string | null | Label for the navigation item, displayed in uppercase |
| &nbsp;*item*.**icon** | **`X`** | `<svg>` | null | Icon for the navigation, positioned to the left of the label. Must be a valid SVG |
| defaultColor | | string | #323C50 | Background color for navigation items that aren't active. Should visually contrast the `textColor`. |
| activeColor | | string | #FFFFFF | Background color for the active navigation item. |
| textColor | | string | #00C3FF | Color for the navigation item `label` and the fill color for the `icon` SVG |
| zIndex | | number | 1000000 | CSS `z-index` value the navigation. Used in conjunction with `position: fixed`, to float SideNav above (or below) the page content |

## Development

    npm run dev
  
#### Running the example

    cd example/; npm run dev
    
Open [http://localhost:8080/](http://localhost:8080/) to view example


## Tests

    npm test

### License

Made with 🍊 by [Chris Dolphin](https://github.com/likethemammal)

[![license](https://img.shields.io/github/license/likethemammal/overwatch-table.svg?style=flat-square)](https://github.com/likethemammal/overwatch-table/blob/master/LICENSE)

#### Fonts

The font **Futura No 2 D DemiBold** should be licensed through [MyFonts.com](http://www.myfonts.com/fonts/urw/futura-no-2/futura-no2-d-demi-bold/)
