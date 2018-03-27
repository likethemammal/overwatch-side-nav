[![Build Status](https://travis-ci.org/likethemammal/overwatch-side-nav.svg?branch=master)](https://travis-ci.org/likethemammal/overwatch-side-nav)
[![Coverage Status](https://coveralls.io/repos/github/likethemammal/overwatch-side-nav/badge.svg?branch=master)](https://coveralls.io/github/likethemammal/overwatch-side-nav?branch=master)

overwatch-side-nav
=========

A React component modeling the Overwatch site side navigation

## Installation

Copy it and paste it

## Development

  `npm run dev`

## Tests

  `npm test`

## Publishing

  `npm run build` and then publish

## Contributing

Its an example

    font-family: 'Futura No 2 D DemiBold';

http://www.myfonts.com/fonts/urw/futura-no-2/futura-no2-d-demi-bold/


### Props

| name        | type           | default  | desc 
--- | --- | --- | --- |
| defaultColor | string | #323c50 |  |
| activeColor | string | #ffffff |  |
| textColor | string | #00c3ff |  |
| items | array | null | array of objects, with required keys `id`, `label`, `icon`, `Component` |
| *item*.**id** | string | null |  |
| *item*.**label** | string | null |  |
| *item*.**icon** | string | null |  |
| *item*.**Component** | Component | null |  |
