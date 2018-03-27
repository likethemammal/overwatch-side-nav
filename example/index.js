import React from 'react'
import ReactDOM from 'react-dom'

import SVG_MATERIAL_FAVORITE from 'svg-icon/dist/svg/material/favorite.svg'
import SVG_MATERIAL_REFRESH from 'svg-icon/dist/svg/material/refresh.svg'

import _ from 'underscore'


const items = [
    {
        label: 'Some Label',
        id: 'some',
        icon: SVG_MATERIAL_FAVORITE,
        Component: <div>SOme label</div>,
    },
    {
        label: 'The Fuck',
        id: 'the_fuck',
        icon: SVG_MATERIAL_REFRESH,
        Component: <div>The fuck</div>,
    },
]

const ids = _.pluck(items, 'id')

import OverwatchSideNav from '../lib'


ReactDOM.render(
    <div>
        <OverwatchSideNav
            items={items}
            ids={ids}
        />
    </div>,
    document.getElementById('app')
)